# importing pandas package
import pandas as pandasForSortingCSV

# assign dataset
csvData = pandasForSortingCSV.read_csv('../data/data.csv')

# creating a list of column names by calling the .columns
list_of_column_names = list(csvData.columns)
column_count = len(list_of_column_names)

# displaying the list and number of column names
print('Number of columns :', column_count)
print('List of column names : ',
      list_of_column_names)

# displaying unsorted data frame
print("\nBefore sorting:")
print(csvData)

# sort data frame

def sortframe(colname):
    csvData.sort_values(colname,
                    axis=0,
                    ascending=[False],
                    inplace=True)

    print("\nAfter sorting:")
    print(csvData)

colname = "Expenditure"

sortframe(colname)
