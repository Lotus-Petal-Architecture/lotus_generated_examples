# importing pandas package
import pandas as pd

# assign dataset
csv_data = pd.read_csv('../data/data.csv')

# creating a list of column names by calling the .columns
list_of_column_names = list(csv_data.columns)
column_count = len(list_of_column_names)

#for item in list_of_column_names:
    #print(item)

# displaying unsorted data frame
print("\nBefore sorting:")
print(csv_data)

# sort data frame

def sortframe(sortcol):
    csv_data.sort_values(sortcol,
                    axis=0,
                    ascending=[False],
                    inplace=True)

    print("\nAfter sorting:")
    print(csv_data)

#sortcol = (list_of_column_names[0])
#print (sortcol)
#sortframe(sortcol)

sortedData = csv_data.to_csv(index=False)

# write sorted data to new quotes file, sorted by column name defined above
with open("sorteddata.csv", "w") as sortedQuotes:
    sortedQuotes.write(sortedData)


csv_data = pd.read_csv("sorteddata.csv")

rowcount = csv_data.shape[0]
print("\nNumber of Rows:")
print(rowcount)

# open copy of lotus renderer source code to insert array values
lrg = open("../data_view/lotus_renderer_gen.js", "w")
f1 = open("source_modules/chunk1.js", "r")
lrg.write(f1.read())
f1.close()
lrg.close()

lrg = open("../data_view/lotus_renderer_gen.js", "a")
f2 = open("source_modules/chunk2.js", "w")

# generate datestamp, must be customized to reflect specific content and data schema of csv
# we need some if/then logic here, but it's fussy
def datetime():
    date = str(csv_data["Date"][1])
    time = str(csv_data["Time"][1])

    f2.write("var time = '")
    f2.write(time)
    f2.write("'\n")

    f2.write("var date = '")
    f2.write(date)
    f2.write("'\n")

#datetime()

f2.write("var time = ' '")
f2.write("\n")

f2.write("var date = ' '")
f2.write("\n")
f2.write("\n")

def readcolumn(col_name):
    for x in range(rowcount):
        f2.write('"')
        value = str(csv_data[col_name][x])
        f2.write(value)
        f2.write('",')

    f2.write("]\n")

def assignColumns(col_list):
    for item in col_list:
        position = col_list.index(item)
        letter = bytes("A", 'utf-8')
        letter = letter[0] + position
        col_id = 'col_' + chr(letter)
        f2.write('var ' + col_id + ' = [')
        readcolumn(item)
        f2.write("\n")
        label_id = "label_" + chr(letter)
        f2.write('var ' + label_id + ' = "' + item + '"')
        f2.write("\n")
        f2.write("\n")

assignColumns(list_of_column_names)

rows = str(rowcount)
f2.write('var rowcount = ' + rows)
f2.write("\n")

f2.write("\n")
f2.write('var filter1 = col_D')  #this will eventually be replaced by variable selected by user
f2.write("\n")

f2.write("\n")
f2.write('var filter2 = col_E')  #this will eventually be replaced by variable selected by user
f2.write("\n")
f2.write("\n")

f2.close()

# write remaining static js code to lotus_renderer_gen
f2 = open("source_modules/chunk2.js", "r")
lrg.write(f2.read())
f2.close()

f3 = open("source_modules/chunk3.js", "r")
lrg.write(f3.read())
f3.close()
lrg.close()
