---
title: Take a tour with Pandas
image: /assets/img/pandas
categories:
  - python
---

pandas is a fast, powerful, flexible and easy to use open source data analysis
and manipulation tool, built on top of the Python programming language.

## The Basics

Pandas is build to analyze data. It uses Series, DataFrames and other data
manipulation objects to help us understand data better. Every Pandas notebook
starts with the basic import statement.

```python
import pandas as pd
```

Data is very important which is why Pandas can import various files such as
csv, pdf, hmtl, json, excel, sql as spss.

```python
# returns a DataFrame
car_brands = pd.read_csv("_data/car_brands.csv")
```

Pandas offers different objects to mirror data:

1. Series represents 1 dimensional data
2. DataFrame represents 2 dimensional data

```python
car_series = pd.Series(["BMW", "Honda", "Toyota"])
car_color = pd.Series(["Red", "Black", "Blue"])

car_data = pd.DataFrame({"Car Maker": car_series, "Car Color": car_color})
```

Finally, after manipulating our data, to cleanup it up for example, we can
export our changes to a new file as well.

```python
car_data.to_csv("_data/new_car_data.csv", index=False)
```

## Viewing and Selecting Data

A DataFrame and Series can hold a lot of information. If we want to navigate
around, we can use **loc** and **iloc** to access a specific row.

- loc returns the row at index
- iloc return the row at the position (index  independent)

We can use a dictionary like syntax to access the colums of a DataFrame:

```python
car_data["color"]
car_data.color

# query column
# only show red colored cars
car_data[card_data["color"] == "red"]
```

## Manipulating Data

Now we have looked at how to import, display and query our data but Pandas
allows us to also change data. This is useful to sanatize our data for further
analysis.

```python
# lowercase the color column values
# maybe the person who inputed the color wrote it sometimes all caps
# sometimes capitalized or something else
car_data["color"] = car_data["color"].str.lower()

# query for missing rows where the color is missing
car_data_missing_color = car_data[car_data["color"].isnull() == True]

# fill the empty spots with the mean of the column
car_data["color"].fillna(car_data["color"].mean(), inplace=True)

# drop rows with the missing property
car_data.dropna()

# we can shuffle our data to break up patterns in ordered lists
car_data.sample(frac=1)

# finally if we need more control to alter a value in a row
# we can use lambdas
car_data["doors"].apply(lambda doors: doors + 1)
```

And that is it. There is more to Pandas of course but this covers the basic
CRUD operations one would like to perform with Pandas.
