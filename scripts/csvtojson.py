import pandas as pd
import json

df = pd.read_csv('data/bitcoin_price.csv', header=0)
df['Time']= pd.to_datetime(df['Time'])
df.index = df['Time']
df.to_json("data/bitcoin_price.json", orient='index')