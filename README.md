![MIT](https://img.shields.io/badge/License-MIT-blue)
# Employee Footprint

## Description

Welcome to the Employee Footprint project!

An application that manages a company's employee database.

You may visit the deployed [website](https://shielded-shelf-02439.herokuapp.com/) to try it out for yourself!

## Table of Contents

- [Employee Footprint](#employee-footprint)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [User Story](#user-story)
  - [Acceptance Criteria](#acceptance-criteria)
  - [Mock-up](#mock-up)
  - [Technologies](#technologies)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  - [License](#license)
  - [BONUS](#bonus)

## User Story

~~~
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
~~~

## Acceptance Criteria

~~~
GIVEN a functional Express.js API
~~~

- [x] WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
~~~
THEN I am able to connect to a database using Sequelize
~~~

- [x] WHEN I enter schema and seed commands
~~~
THEN a development database is created and is seeded with test data
~~~

- [ ] WHEN I enter the command to invoke the application
~~~
THEN my server is started and the Sequelize models are synced to the MySQL database
~~~

- [ ] WHEN I open API GET routes in Insomnia for categories, products, or tags
~~~
THEN the data for each of these routes is displayed in a formatted JSON
~~~

- [ ] WHEN I test API POST, PUT, and DELETE routes in Insomnia
~~~
THEN I am prompted to enter the name of the department and that department is added to the database
~~~

- [ ] WHEN I choose to add a role
~~~
THEN I am able to successfully create, update, and delete data in my database
~~~

## Mock-up

The first animation shows GET routes to return all categories, all products, and all tags being tested in Insomnia:
![mockup](./public/assets/images/get-routes.gif)

The second animation shows GET routes to return a single category, a single product, and a single tag being tested in Insomnia:
![mockup](./public/assets/images/get-id-routes.gif)

The final animation shows the POST, PUT, and DELETE routes for categories being tested in Insomnia:
![mockup](./public/assets/images/post-put-delete-routes.gif)

Your walkthrough video should also show the POST, PUT, and DELETE routes for products and tags being tested in Insomnia.

## Technologies
| ID # | Technologies |
| --- | --- |
| 1 | Markdown |
| 2 | JavaScript |
| 3 | Node.js |
| 4 | express package |
| 6 | mysql2 package |
| 7 | sequelize package |
| 8 | dotenv package |
| 9 | nodemon package |

## Installation

VSCode

## Usage

Usage

## Contributing

Contribute

## Tests

Test

## Questions

If you have any questions, you may direct them to VMLujanJr using the following links:

| | Description |
| --- | --- |
| Name | Victor |
| Occupation | Developer |
| E-mail | <vmlujanjr@outlook.com> |
| GitHub | <https://github.com/VMLujanJr/> |

## License

MIT License

Copyright (c) 2022 VMLujanJr

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## BONUS
~~~
You’ll need to use the MySQL2 (Links to an external site.) and Sequelize (Links to an external site.) packages to connect your Express.js API to a MySQL database and the dotenv package (Links to an external site.) to use environment variables to store sensitive data, like your MySQL username, password, and database name.
~~~

DATA BASE MODELS
Your database should contain the following four models, including the requirements listed for each model:
~~~
Category
~~~
~~~
id
~~~

Integer

Doesn't allow null values

Set as primary key

Uses auto increment

- category_name

String

Doesn't allow null values

- Product

- id

Integer

Doesn't allow null values

Set as primary key

Uses auto increment

- product_name

String

Doesn't allow null values

- price

Decimal

Doesn't allow null values

Validates that the value is a decimal

- stock

Integer

Doesn't allow null values

Set a default value of 10

Validates that the value is numeric

- category_id

Integer

References the category model's id

- Tag

- id

Integer

Doesn't allow null values

Set as primary key

Uses auto increment

- tag_name

String

- ProductTag

- id

Integer

Doesn't allow null values

Set as primary key

Uses auto increment

- product_id

Integer

References the product model's id

- tag_id

Integer

References the tag model's id
~~~

~~~
Associations

You'll need to execute association methods on your Sequelize models to create the following relationships between them:

Product belongs to Category, as a category can have multiple products but a product can only belong to one category.

Category has many Product models.

Product belongs to many Tag models. Using the ProductTag through model, allow products to have multiple tags and tags to have many products.

Tag belongs to many Product models.

- Make sure you set up foreign key relationships that match the column we created in the respective models.
~~~