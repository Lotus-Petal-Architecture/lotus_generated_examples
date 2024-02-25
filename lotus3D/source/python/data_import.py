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
f1 = open("js_modules/chunk1.js", "r")
lrg.write(f1.read())
f1.close()
lrg.close()

lrg = open("lotus_renderer_gen.js", "a")
f2 = open("js_modules/chunk2.js", "r")

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
        lrg.write("'")
        value = str(csvData[col_name][x])
        lrg.write(value)
        lrg.write("',")

    lrg.write("]\n")

for item in list_of_column_names:
    lrg.write("var " + item + " = [")
    readcolumn(item)

# write remaining static js code to lotus_renderer_gen
lrg.write(f2.read())
f2.close()
lrg.close()

