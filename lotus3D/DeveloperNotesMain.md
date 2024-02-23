
TO DO:

- Text search.

- index.html should be dynamically generated.

- Add automatic formatting of currency values and percentages to use commas, round to two decimal places.

- Get filename from file path [right now the CSV to be converted must be renamed to data.csv]. 

- Validate file format is CSV.

- Save sorted CSV with new filename.

- Pull thumbnail images when files contain URL data.

- Generate multiple pages of Lotus Charts (when spreadsheets contain >2000 rows).

- Import from JSON.

- Choice to generate original chart format for records sets <500 rows (lower performance, but more flexibility with filters).


DATA NOTES:

Original data views were designed to display financial quotes: a 150-symbol watch list, S&P 500, and the top 2000 US stocks by 2022 market capitalization (Russell 1K plus the the top half of the Russell 2K). 

Symbols change from time to time, so these lists may not exactly match the current indexes.

In order to simplify creating a chart from a "generic" CSV, functionality & formatting specific to the original quotes schema has been commented out in source/python/main.py


STYLE NOTES:

Color Palette, Lotus Trader:

Light Salmon: #fa8072
Dark Salmon: #bd4840

Light Green: #00A86B
Dark Green: #014421

Lotus Blue: #00769d

Background Blues: #AED6F1, #A9CCE3


FURTHER NOTES:

Thoughts on all_links chart -- a cool visualization but with limited utility:

	This chart uses different color conventions than all of the other charts and isn't really all that useful as a metric; it should be redone to have four color categories, rather than switching from red to green when the market changes -- the current convention. Also, this chart will be a lot more meaningful with securities ranked by market cap rather than volume (as in the crypto charts). Why? In that schema, symbol positions stay put over a trading day. With the chart ranking mapped to volume, symbols can shift quite a bit in a single day.

	For now it should be considered deprecated.

working_views contain legacy column names. They are there to show the Lotus Chart in action with various amounts of data on the chart.