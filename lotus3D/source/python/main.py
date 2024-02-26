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

length = csvData.shape[0]
print("\nNumber of Rows:")
print(length)

# open copy of lotus renderer source code to insert array values
lrg = open("lotus_renderer_gen.js", "w")
f1 = open("reference_js_modules/chunk1.js", "r")
lrg.write(f1.read())
f1.close()
lrg.close()

lrg = open("lotus_renderer_gen.js", "a")

f2 = open("reference_js_modules/chunk2.js", "r")
lrg.write(f2.read())
f2.close()

f3 = open("reference_js_modules/chunk3.js", "r")
lrg.write(f3.read())
f3.close()

lrg.close()
