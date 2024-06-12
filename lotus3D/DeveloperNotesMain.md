Cleaned this up and added some more different types of spreadsheet data in the sample_data and working_views folder. However, this is more a gallery of examples than an entirely automated way to import data from a local CSV file into a new Lotus Chart.

To see examples, navigate to lotus3D/working_views. To see the "full lotus," download a data_view folder and open index.html.

See also the demo at https://lotus80.net 

I am leaving the February 2024 CPI data as sample data in the Source file. The <a href="https://github.com/tessgadwa/lotus3D/blob/main/lotus3D/screenshots/CPI_example.png">resulting 3D visualization</a> is saved in the folder at lotus3D/source/data_view/index.html. Screenshot: lotus3D/screenshots/CPI_example.png

I would estimate the time to massage and prep a new spreadsheet file to work with the current Python generator script at 1-2 hours. If you try it out with a new CSV, you would need to modify the filter logic [getActiveLinks] in the js modules in order to get the chart to render correctly. Links are disabled on charts, unless there are custom URLs available for the dataset.

The Lotus Chart also works great with dynamic APIs. You can see two such implementations (YouTube, CoinMarketCap) at https://web.lotus.fm/examples.  

If you have an idea for how to use this functionality (whether static or dynamic) in the real world, or would just like help trying it out, please message me! 


TO DO:

- Text search.

- Automatic generation of thumbnail images.

- index.html should be dynamically generated.

- User input prompt allowing users to confirm labels and data types for specific columns.

- Restore automatic formatting of currency values and percentages to use commas, round to two decimal places.

- Get filename from file path [right now the CSV to be converted must be renamed to data.csv]. 

- Validate file format is CSV.

- Save sorted CSV with new filename.

- Remove spaces in CSV column names.

- Generate multiple pages of Lotus Charts.

- Import from JSON.

- Option to use original chart format for records sets < 500 rows (this has lower performance, but visually it is a little more slick and provides greater flexibility with filters).

- Filter by set.

- Need better logic to establish filter criteria.


DATA NOTES:

Data suffixes and prefixes (ex. $ and %) currently need to be updated manually. Same with sort column, and filter values and labels. These will eventually be specified via user prompt.

The Lotus Renderer now includes separate variables for column labels and for the columns themselves. Columns will always use letters of the alphabet (col_A, col_B, and so forth). Column labels are string values pulled from the CSV itself, whose function is analogous to the header row in a spreadsheet.

Original data views were designed to display financial quotes: a 150-symbol watch list, S&P 500, and the top 2000 US stocks by 2022 market capitalization (Russell 1K plus the the top half of the Russell 2K). 

Symbols change from time to time, so these lists may not exactly match the current indexes.

Older examples found in the legacy_schema folder do not use the alphabetic column names.


STYLE NOTES:

Color Palette, Lotus Trader:

Light Salmon: #fa8072
Dark Salmon: #bd4840

Light Green: #00A86B
Dark Green: #014421

Lotus Blue: #00769d

Variant Blues: #0289b6, #0099cc

Background Blues: #AED6F1, #A9CCE3

Inactive: #b5cce3


FURTHER NOTES:

Thoughts on all_links chart -- a cool visualization but with limited utility:

	This chart uses different color conventions than all of the other charts and isn't really all that useful as a metric; it should be redone to have four color categories, rather than switching from red to green when the market changes -- the current convention. Also, this chart will be a lot more meaningful with securities ranked by market cap rather than volume (as in the crypto charts). Why? In that schema, symbol positions stay put over a trading day. With the chart ranking mapped to volume, symbols can shift quite a bit in a single day.

	For now it should be considered deprecated.
