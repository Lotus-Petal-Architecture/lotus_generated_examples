# importing pandas package
import pandas as pandasForSortingCSV

# import regular expressions for text search
import re

#find filename
file_path = '../data/data.csv'
pattern = '[\w-]+?(?=\.)'

# searching the pattern
a = re.search(pattern, file_path)

# printing the match
print(a.group())

#generate newfilename
new_CSV = a.group()
print(new_CSV)

# assign dataset
csvData = pandasForSortingCSV.read_csv('../data/data.csv')

# creating a list of column names by
# calling the .columns
list_of_column_names = list(csvData.columns)

# displaying the list of column names
print('List of column names : ',
      list_of_column_names)

# displaying unsorted data frame
print("\nBefore sorting:")
print(csvData)

# sort data frame
csvData.sort_values(["Previous Year: Jan.2023-Jan.2024"],
                    axis=0,
                    ascending=[False],
                    inplace=True)

# displaying sorted data frame
print("\nAfter sorting:")
print(csvData)
