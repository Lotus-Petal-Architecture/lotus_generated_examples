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

# write sorted data to new quotes file, sorted by volume
sortedQuotes = open("sortedquotes.csv", "w")
sortedQuotes.write(sortedData)
sortedQuotes.close()

csvData = pandasForSortingCSV.read_csv("sortedquotes.csv")

#print(csvData["Symbol"][150])

print("\nLength of Dataset:")
length = len(csvData)
print(length)

length = 2000

# create array for each column, to be spliced into js
symbols=[]
current_price=[]
change=[]
open=[]
high=[]
low=[]
volume=[]

for x in range(length):
 symbols.append(csvData["Symbol"][x])
 current_price.append(csvData["Current Price"][x])
 change.append(csvData["Change"][x])
 open.append(csvData["Open"][x])
 high.append(csvData["High"][x])
 low.append(csvData["Low"][x])
 volume.append(csvData["Volume"][x])

print(symbols)
print(current_price)
print(change)
print(open)
print(high)
print(low)
print(volume)
