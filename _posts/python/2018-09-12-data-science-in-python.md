---
title: Data Science with Python
image: "/assets/img/ds"
categories: [python]
---

min 58 onward

## Pandas

Is perfect to work with:

- Tabular data
- Ordered and unordered time series data
- arbitrary matrix data with row and column labels


{% highlight python %}
import pandas as pd

pd.set_option("max.count", 6)
pd.read_csv('/my/csv_file.csv')

url = ('https://your-domain..com/json_file.json')
pd.read_json(url, orient='expected_value')
{% endhighlight %}
