import numpy as np
import csv
import os

data_dir = "../heatmap_data/"
data_dir_save = "../heatmap_data_filtered/"
# Starting timestamp: 2018-03-15 00:00:00 unix timestamp: 1521072000
unix_start = 1521072000
# Ending timestamp: 2018-03-19 15:58:12 unix timestamp: 1521475092
unix_end = 1521475092

def get_data(filename):
    return np.loadtxt(open(filename, "rb"), delimiter=",", skiprows=0)

for filename in os.listdir(data_dir):
    print(filename)
    data_exchange = get_data(data_dir + filename)
    filtered_start_index = np.searchsorted(data_exchange[:,0], unix_start)
    np.savetxt(data_dir_save + filename, data_exchange[filtered_start_index:],delimiter=",")