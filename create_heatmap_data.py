import csv
import glob
import os
import numpy as np
import json

data_dir = "../heatmap_data_filtered/"
# Starting timestamp: 2018-03-15 00:00:00 unix timestamp: 1521072000
unix_start = 1521072000
# Ending timestamp: 2018-03-19 15:58:12 unix timestamp: 1521475092
unix_end = 1521475092
unix_interval = 10 # Every 10 seconds is checked if a data point can be made
time_difference_threshold = 60 # All trade times have to be within one minute of each other to be valid as a data point

def get_data(filename):
    return np.loadtxt(open(filename, "rb"), delimiter=",", skiprows=0)

exchanges_data = []

# Exchanges are sorted alphanumerically
for filename in sorted(os.listdir(data_dir)):
    print(filename)
    exchange_data = get_data(data_dir + filename)
    exchanges_data.append(exchange_data)

heatmap_data_visualization = {}

for i in range(unix_start, unix_end, unix_interval):
    unix_index = []
    arbitrages = []

    for j in range(len(exchanges_data)):
        exchange_index = np.searchsorted(exchanges_data[j][:, 0], i) - 1
        exchange_unix_time = exchanges_data[j][exchange_index, 0]
        unix_index.append(exchange_unix_time)
        arbitrages.append(exchanges_data[j][exchange_index, 1])

    time_difference = max(unix_index) - min(unix_index)
    if(time_difference <= time_difference_threshold):
        heatmap_data_visualization[i] = arbitrages

js = json.dumps(heatmap_data_visualization)
fp = open('heatmap_data_visualization.json', 'w')
fp.write(js)
fp.close()