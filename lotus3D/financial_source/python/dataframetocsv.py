# importing pandas package
import pandas as pandasForSortingCSV

# assign dataset
csvData = pandasForSortingCSV.read_csv("../data/quotes.csv")

# sort data frame
csvData.sort_values(["Volume"],
                    axis=0,
                    ascending=[False],
                    inplace=True)

# displaying sorted data frame
print("\nAfter sorting:")
print(csvData)

sortedData = csvData.to_csv(index=False)
print(sortedData)