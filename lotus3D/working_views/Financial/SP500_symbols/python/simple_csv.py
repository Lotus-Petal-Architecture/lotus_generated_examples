import csv

with open('../data/quotes.csv', 'r') as csv_file:
    reader = csv.reader(csv_file)

    for row in reader:
        print(row)

# importing pandas package
import pandas as pandasForSortingCSV

df = pandasForSortingCSV.DataFrame({'col1': [1, 2],
                   'col2': [0.5, 0.75]},
                  index=['row1', 'row2'])
print(df)

df.to_dict()

print(df["col2"]["row2"])
