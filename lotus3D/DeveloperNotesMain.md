
TO DO:

- Text search.

- index.html should be dynamically generated.

- Add automatic formatting of currency values and percentages to use commas, round to two decimal places.

- Get filename from file path [right now the CSV to be converted must be renamed to data.csv]. 

- Validate file format is CSV.

- Save sorted CSV with new filename.

- Remove spaces in CSV column names.

- Pull thumbnail images when files contain URL data.

- Generate multiple pages of Lotus Charts (when spreadsheets contain >2000 rows).

- Import from JSON.

- Option to use original chart format for records sets <500 rows (this has lower performance, but more flexibility with filters).


DATA NOTES:

Original data views were designed to display financial quotes: a 150-symbol watch list, S&P 500, and the top 2000 US stocks by 2022 market capitalization (Russell 1K plus the the top half of the Russell 2K). 

Symbols change from time to time, so these lists may not exactly match the current indexes.

The working_schemas folders contains an example with the correct column names for daily stock quotes, and an example of generic generated code that substitutes alphabetic column labels into the generated Lotus Renderer code. These are included for reference only. In theory, you could manually cut and paste values from any CSV spreadsheet into generic_spreadsheet/python/lotus_renderer_gen.js, but you probably would not want to!


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