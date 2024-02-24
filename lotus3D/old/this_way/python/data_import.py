# importing pandas package
import pandas as pandasForSortingCSV

# assign dataset
csvData = pandasForSortingCSV.read_csv('../data/data.csv')

# creating a list of column names by calling the .columns
list_of_column_names = list(csvData.columns)
column_count = len(list_of_column_names)


for item in list_of_column_names:
    print(item)

# displaying unsorted data frame
# print("\nBefore sorting:")
# print(csvData)


# sort data frame

def sortframe(sortcol):
    csvData.sort_values(sortcol,
                    axis=0,
                    ascending=[False],
                    inplace=True)

    print("\nAfter sorting:")
    print(csvData)

#sortcol = "Expenditure"
#sortframe(sortcol)

sortedData = csvData.to_csv(index=False)

# write sorted data to new quotes file, sorted by column name defined above
sortedQuotes = open("sorteddata.csv", "w")
sortedQuotes.write(sortedData)
sortedQuotes.close()

csvData = pandasForSortingCSV.read_csv("sorteddata.csv")

length = csvData.shape[0]
print("\nNumber of Rows:")
print(length)

# open copy of lotus renderer source code to insert array values
lrg = open("lotus_renderer_gen.js", "w")
f1 = open("intro.js", "r")
lrg.write(f1.read())
f1.close()
lrg.close()

lrg = open("lotus_renderer_gen.js", "a")
f2 = open("columnvalues.js", "w")

#generate datestamp, must be customized to reflect specific content and data schema of csv

def datetime():
    date = str(csvData["Date"][1])
    time = str(csvData["Time"][1])

    lrg.write("var time = '")
    lrg.write(time)
    lrg.write("'\n")

    lrg.write("var date = '")
    lrg.write(date)
    lrg.write("'\n")

def readcolumn(col_name):
    for x in range(length):
        f2.write("'")
        value = str(csvData[col_name][x])
        f2.write(value)
        f2.write("',")

    f2.write("]\n")

for item in list_of_column_names:
    f2.write("var " + item + " = [")
    readcolumn(item)

f2.close()

f2 = open("columnvalues.js", "r")
lrg.write(f2.read())
f2.close()

f3 = open("percentfunction.js", "r")
lrg.write(f3.read())
f3.close()

f4 = open("flower.js", "r")
lrg.write(f4.read())
f4.close()

f5 = open("filters.js", "r")
lrg.write(f5.read())
f5.close()

f6 = open("details.js", "r")
lrg.write(f6.read())
f6.close()

lrg.close()

