# importing pandas package
import pandas as pandasForSortingCSV

# assign dataset
csvData = pandasForSortingCSV.read_csv("../data/data.csv")

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
csvData.sort_values(["Expenditure Category"],
                    axis=0,
                    ascending=[False],
                    inplace=True)

# displaying sorted data frame
print("\nAfter sorting:")
print(csvData)


csvData.to_dict()

print("\nDictionary format:")
print(csvData["Expenditure Category"][0])

sortedData = csvData.to_csv(index=False)

#print(sortedData)

sortedQuotes = open("sorteddata.csv", "w")
sortedQuotes.write(sortedData)
sortedQuotes.close()

csvData = pandasForSortingCSV.read_csv("sorteddata.csv")

csvData.to_dict()

print("\nDictionary format:")
print(csvData["Expenditure Category"][0])
