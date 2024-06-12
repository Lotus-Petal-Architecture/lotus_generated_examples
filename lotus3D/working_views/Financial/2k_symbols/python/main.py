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

#print("\nLength of Dataset:")
#length = len(csvData)
#print(length)
#print("\n")
length = 2000

# open copy of lotus renderer source code to insert array values
lrg = open("lotus_renderer_gen.js", "w")
f1 = open("chunk1.js", "r")
lrg.write(f1.read())
f1.close()
lrg.close()

lrg = open("lotus_renderer_gen.js", "a")
#f2 = open("chunk2.js", "r")
f3 = open("chunk3.js", "r")

date = str(csvData["Date"][1000])
time = str(csvData["Time"][1000])

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
    for x in range(2000):
        lrg.write("'")
        value = str(csvData[col_name][x])
        lrg.write(value)
        lrg.write("',")

    lrg.write("]\n")

#def writevalues:

lrg.write("var symbols = [")
readcolumn("Symbol")

lrg.write("var price = [")
readcolumn("Current Price")

lrg.write("var change = [")
readcolumn("Change")

lrg.write("var unit_prices = [")
readcolumn("Open")

lrg.write("var total_sales = [")
readcolumn("High")

lrg.write("var sales_change_30d = [")
readcolumn("Low")

lrg.write("var curr_price = [")
readcolumn("Current Price")

lrg.write("var store_id = [")
readcolumn("Volume")

#lrg.write(f2.read())
#f2.close()

# write remaining static js code to lotus_renderer_gen
lrg.write(f3.read())
f3.close()
lrg.close()