
import data_import

# Assemble Lotus Renderer JavaScript
lotus_renderer_path = "../data_view/lotus_renderer_gen.js"
source_modules = [
    "source_modules/chunk1.js",
    "source_modules/chunk2.js",
    "source_modules/chunk3.js"
]

# Open the Lotus Renderer source code file for writing
with open(lotus_renderer_path, "w") as lrg:
    # Write the contents of each source module to the Lotus Renderer file
    for module_path in source_modules:
        with open(module_path, "r") as module_file:
            lrg.write(module_file.read())

