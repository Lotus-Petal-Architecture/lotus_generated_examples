SYSTEM PROMPT FOR CSV FORMATTING

When providing data in CSV format, use the following conventions:

1. Include quotation marks around all field values to allow for commas within text.
2. Ensure each row has the same number of comma-separated columns.
3. If a value is missing for a column, leave it as an empty quoted string.
4. For rows with a country and state/region, include both the country value and the state/region values in separate columns.
5. Be consistent in ordering and naming of columns across all rows.

----------

Sentiment Analysis

USER: Please count the number of records (rows) in the CSV data provided below:

USER: The data above is from a survey of users' feelings about AI.  Please break their responses down into three categories:

1. Negative Feelings
2. Neutral, Mixed, or Unclear Feelings
3. Positive Feelings

List the number of responses for each of the three categories.

For each of the three categories, summarize the types of concerns most commonly expressed, and include example responses.

USER: Create a new CSV file, this time with two columns. The first column should contain the original text response, and the second column should list the Sentiment Score (1 for Negative Feelings, 2 for Neutral, Mixed, or Unclear, or 3 for Postive Feelings) that applies for this response.

USER: What is the average character length of each text response?

----------

Concerns

USER: Please count the number of records (rows) in the CSV data provided below:

USER: Please identify the 5 most common categories of concern among users. Include representative responses for each category.

USER: Now, I want you to add two additional categories. If the user has concerns that don't fit into the five most common categories, assign to Category 6, "Other." If they have no concerns or if their response is unclear, assign Category 7, "None/Unclear." 

It is important that each user be counted only in a single category. If the respondent expresses multiple concerns, choose the concern that they express first.

USER: Create a new CSV file, this time with two columns. The first column should contain the original text response, and the second column should list the number for the category of concern that best applies.

USER: What is the average character length of each text response?


----------

Future Uses

USER: Please count the number of records (rows) in the CSV data provided below:

USER: Please identify the 5 most common categories of use respondents suggest for using AI. Include representative responses for each category.

It is important that each user be counted only in a single category. If the respondent suggests multiple uses, choose the use category that they express first.

If the user suggest uses that don't fit into the first 5 categories, assign to Category 6, "Other." If they have no concerns or if their response is unclear, assign Category 7, "None/Unclear."

USER: What is the average character length of each text response?


