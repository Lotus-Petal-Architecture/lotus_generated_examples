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
f1 = open("chunk1.js", "r")
lrg.write(f1.read())
f1.close()
lrg.close()

lrg = open("lotus_renderer_gen.js", "a")
#f2 = open("chunk2.js", "r")
f3 = open("chunk3.js", "r")

date = str(csvData["Date"][1])
time = str(csvData["Time"][1])

change=[]
open=[]
high=[]
low=[]
volume=[]

lrg.write("var time = '")
lrg.write(time)
lrg.write("'\n")

lrg.write("var date = '")
lrg.write(date)
lrg.write("'\n")

def readcolumn(col_name):
    for x in range(length):
        lrg.write("'")
        value = str(csvData[col_name][x])
        lrg.write(value)
        lrg.write("',")

    lrg.write("]\n")

lrg.write("var symbols = [")
readcolumn("Symbol")

lrg.write("var price = [")
readcolumn("Current Price")

lrg.write("var change = [")
readcolumn("Change")

lrg.write("var open = [")
readcolumn("Open")

lrg.write("var high = [")
readcolumn("High")

lrg.write("var low = [")
readcolumn("Low")

lrg.write("var vol = [")
readcolumn("Volume")

#lrg.write(f2.read())
#f2.close()

# write remaining static js code to lotus_renderer_gen
lrg.write(f3.read())
f3.close()
lrg.close()
