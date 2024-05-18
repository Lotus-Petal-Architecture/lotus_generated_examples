import data_import

new=data_import

# assembles Lotus Renderer js

# open copy of lotus renderer source code to insert array values
lrg = open("../data_view/lotus_renderer_gen.js", "w")
f1 = open("source_modules/chunk1.js", "r")
lrg.write(f1.read())
f1.close()
lrg.close()

lrg = open("../data_view/lotus_renderer_gen.js", "a")

f2 = open("source_modules/chunk2.js", "r")
lrg.write(f2.read())
f2.close()

f3 = open("source_modules/chunk3.js", "r")
lrg.write(f3.read())
f3.close()

lrg.close()
