# importing pandas package
import pandas as pandasForSortingCSV

# assign dataset
csvData = pandasForSortingCSV.read_csv("../data/quotes.csv")

# displaying unsorted data frame
print("\nBefore sorting:")
print(csvData)


# sort data frame
csvData.sort_values(["Volume"],
                    axis=0,
                    ascending=[False],
                    inplace=True)

# displaying sorted data frame
print("\nAfter sorting:")
print(csvData)

csvData.to_dict()

print("\nDictionary format:")
print(csvData["Symbol"][0])

sortedData = csvData.to_csv(index=False)

print(sortedData)

sortedQuotes = open("sortedquotes.csv", "w")
sortedQuotes.write(sortedData)
sortedQuotes.close()

csvData = pandasForSortingCSV.read_csv("sortedquotes.csv")

csvData.to_dict()

print("\nDictionary format:")
print(csvData["Symbol"][0])