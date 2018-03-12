import argparse
import pandas as pd
import logging

def csv_to_json(input, output):
    input = input
    output = output
    logging.log("info", f"Converting {input} into {output}...")
    df = pd.read_csv(input, header=0)
    df.to_json(output, orient='index')
    logging.log("info", "Converting is finished.")

if __name__ == '__main__':
    parser = argparse.ArgumentParser(
        description='Convert csv data into json format.')
    parser.add_argument("--input-file", help="input csv file, first line must be header name", type=str, required=True)
    parser.add_argument("--output-file", help="output file with absolute path", type=str, required=True)
    args = parser.parse_args()

    input_file = args['input-file']
    output_file = args['output-file']

    csv_to_json(input_file, output_file)

