# lotuschart
Lotus Charts generated using Python on a local client machine.

The Lotus Chart is a new type of experimental UI that combines parametric geometry with hyperlinks to render thousands of clickable Uniform Resource Identifiers (URIs) visible on a single computer screen at the same time, with visual cues providing metadata, context, and navigational hints. The result is an interactive 3D data map, accessible from any web browser. Lines on a Lotus Chart typically show trading symbols, media content, a web link, or rows within a database. This type of visualization requires no external software and is compatible with most REST API’s.

<a href ="https://web.lotus.fm/examples/">See examples here.</a>

Any type of search filter may be applied but the Lotus Chart structure is well suited for revealing machine learning insights and identifying growth trends across a data ecosystem. Applications include financial analysis, scientific literacy, epidemiology, real estate, e-commerce, marketing analytics, legal e-discovery, entertainment, and information security.

The Lotus Chart is compatible with the following data formats:

 - CSV
 - Excel spreadsheet
 - JSON REST API
 - Python SDK

It was created using the <a href="https://threejs.org/">three.js</a> library, but could be 'ported for other 3D rendering environments (Unity, Web Assembly) or adapted for mobile devices, should the need or interest arise. The original source code (now deprecated) permitted about 500 links on-screen at one time; the optimizations completed in the summer of 2021 permit up to 2,000 chart lines (URIs) each representing a row with associated columns and/or metadata. The main advantage is being able to scan quickly through a large dataset using visual filters -- without having to submit a separate query and refresh your screen each time. It's also helpful when evaluating growth trends in the context of another quantitative index, since the significant of a percentage of growth varies greatly depending on the absolute numbers. (See our <a href="https://dev.lotus.fm/red/">global pandemic snapshot</a> for a real-world example.)

To view working examples of the chart on your local machine, click any of the index.html files and index file variants found in the lotus3D/working_views and lotus3D/financial_source folders. (ex. data_view/index.html or 2k_symbols/data_view/index_all_links.html)

To generate a new Lotus Chart rendering from a CSV file, run the main.py file found at source/python. (Results may vary.)

See also https://github.com/tessgadwa/lotuscode for a static, stripped-down version of the interactive <a href="https://dev.lotus.fm/retail/2k_view/index.html">Inventory Control and Management Demo</a>, built from CSV data rather than SQL. 

If you have questions about how to implement this type of visualization for your specific project, or if you're just curious to learn more, please don't hesitate to contact me.
