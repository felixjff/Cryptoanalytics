import csv
import glob
import os
import numpy as np

data_dir = "../heatmap_data/"

def get_data(filename):
    return np.loadtxt(open(filename, "rb"), delimiter=",", skiprows=0)

def get_arbitrage_rates(exchange1, exchange2):
    """
    Check first and last value of both matrices, if nothing overlaps, just quit with empty matrix
    If There is an overlap, check where to start
    Then try to match closest unix times
    Returns dict with unix times as keys and the arbitrage values of exchange1 and exchange2
    """

    exchange1_start_time = exchange1[0,0]
    exchange1_end_time = exchange1[-1,0]
    exchange2_start_time = exchange2[0,0]
    exchange2_end_time = exchange2[-1,0]
    if(exchange1_start_time > exchange2_end_time or exchange1_end_time < exchange2_start_time):
        return {}

    exchange1_start_first = exchange1_start_time < exchange2_start_time
    exchange1_end_first = exchange1_end_time < exchange2_end_time

    print()

    if(not exchange1_start_first and not exchange1_end_first):
        print("1")
        start_point = exchange1_start_time
        end_point = exchange2_end_time
    if(exchange1_start_first and exchange1_end_first):
        print("2")
        start_point = exchange2_start_time
        end_point = exchange1_end_time
    if(not exchange1_start_first and exchange1_end_first):
        print("3")
        start_point = exchange1_start_time
        end_point = exchange1_end_time
    if(exchange1_start_first and not exchange1_end_first):
        print("4")
        start_point = exchange2_start_time
        end_point = exchange2_end_time

    start_index_exchange1 = np.searchsorted(exchange1[:,0], start_point)
    end_index_exchange1 = np.searchsorted(exchange1[:,0], end_point)
    start_index_exchange2 = np.searchsorted(exchange2[:,0], start_point)
    end_index_exchange2 = np.searchsorted(exchange2[:,0], end_point)

    print(exchange1.shape)
    print(exchange2.shape)

    print(start_point)
    print(end_point)

    print(start_index_exchange1)
    print(end_index_exchange1)
    print(start_index_exchange2)
    print(end_index_exchange2)


    relevant_exchange1 = exchange1[start_index_exchange1:end_index_exchange1]
    relevant_exchange2 = exchange2[start_index_exchange2:end_index_exchange2]
    print(relevant_exchange1.shape)
    print(relevant_exchange2.shape)

    # loop over smallest matrix to find matching dates
    # dict with lists maybe better
    # will lose some accuracy when two unix stamps are far away
    arbitrage_dict = {}
    smaller_exchange_entry_size = min(relevant_exchange1.shape[0], relevant_exchange2.shape[0])
    for i in range(smaller_exchange_entry_size):
        if(relevant_exchange1.shape[0] == smaller_exchange_entry_size):
            [exchange1_unix_time, exchange1_price, _] = relevant_exchange1[i]
            relevant_exchange2_entry = np.searchsorted(relevant_exchange2[:, 0], exchange1_unix_time)
            [exchange2_unix_time, exchange2_price, _] = relevant_exchange2[relevant_exchange2_entry]
            dict_time = exchange1_unix_time
        else:
            [exchange2_unix_time, exchange2_price, _] = relevant_exchange2[i]
            relevant_exchange1_entry = np.searchsorted(relevant_exchange1[:, 0], exchange2_unix_time)
            [exchange1_unix_time, exchange1_price, _] = relevant_exchange1[relevant_exchange1_entry]
            dict_time = exchange2_unix_time

        arbitrage_1_buys_2 = exchange2_price - exchange1_price
        # Potentionally only add if condition unix time difference is smaller than some threshold.
        #if(abs(exchange1_unix_time, exchange2_unix_time) < threshold):
        arbitrage_dict[dict_time] = arbitrage_1_buys_2
    
data_exchanges = []

for filename in os.listdir(data_dir):
    print(filename)
    data_exchange = get_data(data_dir + '/' + filename)
    data_exchanges.append(data_exchange)

#only loop once over combinations
for i in range(len(data_exchanges)):
    for j in range(len(data_exchanges)):
        if(i != j):
            exchange1 = data_exchanges[i]
            exchange2 = data_exchanges[j]
            get_arbitrage_rates(exchange1, exchange2)
