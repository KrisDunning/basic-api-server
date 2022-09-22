
# LAB - Class 03

## Project: Basic API Server

## Author: Kris Dunning

## Problem Domain

Build a REST API using Express, by creating a proper series of endpoints that perform CRUD operations on a database, using the REST standard

SQL Models
Create 2 SQL data models using the Sequelize libary, make sure you export those model instances.
Make sure your Models are configured with your SQL dialect and can properly connect to your database.
Your models should have appropriate field names declared with specific sequelize DataTypes.
For the data models, you are free to choose your own data types and describe their fields … For Example: person, animal, car, instrument, game

Routes
In your express server, create a route module for each data model that you’ve created. Within the router module, create REST route handlers for each of the REST Methods that properly calls the correct CRUD method from the matching data model.

For these examples, we’ll use ‘food`

Add a Record

CRUD Operation: Create
REST Method: POST
Path: /food
Input: JSON Object in the Request Body
Returns: The record that was added to the database.
You must generate an ID and attach it to the object.
You should verify that only the fields you define   get saved as a record.

Get All Records

CRUD Operation: Read
REST Method: GET
Path: /food
Returns: An array of objects, each object being one entry from your database.

Get One Record

CRUD Operation: Read
REST Method: GET
Path: /food/1
Returns: The object from the database, which has the id matching that which is in the path.

Update a Record

CRUD Operation: Update
REST Method: PUT
Path: /food/1
Input: JSON Object in the Request Body
Returns: The object from the database, which has the id matching that which is in the path, with the updated/changed data.
You should verify that only the fields you define get saved as a record.

Delete a Record

CRUD Operation: Destroy
REST Method: DELETE
Path: /food/1
Returns: The record from the database as it exists after you delete it (i.e. null).

## Links and Resources

Github Repo Link:

Github Pull Request:

Heroku Deployment:

## Tests

## UML
