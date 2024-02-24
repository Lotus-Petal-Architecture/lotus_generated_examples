# importing pandas package
import pandas as pandasForSortingCSV

# open copy of lotus renderer source code to insert array values
lrg = open("lotus_renderer_gen.js", "w")
f1 = open("intro.js", "r")
lrg.write(f1.read())
f1.close()
lrg.close()

#write gemerated code to replace chunk2

#f2 = open("chunk2.js", "w")
#f2.write("replacement txt")
#f2.close()

lrg = open("lotus_renderer_gen.js", "a")
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
