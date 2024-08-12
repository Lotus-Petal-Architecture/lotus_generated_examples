import data_import

new = data_import

# assembles Lotus Renderer js

# open copy of lotus renderer source code to insert array values
# assembles Lotus Renderer js

# open copy of lotus renderer source code to insert array values
with open("../data_view/lotus_renderer_gen.js", "w") as lrg_file:
    with open("source_modules/chunk1.js", "r") as f1:
        lrg_file.write(f1.read())

with open("../data_view/lotus_renderer_gen.js", "a") as lrg_file:
    with open("source_modules/chunk2.js", "r") as f2:
        lrg_file.write(f2.read())

    with open("source_modules/chunk3.js", "r") as f3:
        lrg_file.write(f3.read())
