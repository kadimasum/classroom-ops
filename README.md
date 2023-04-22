# Classroom Ops
## Collaborative project to enhance classroom operations

## Backend Setup
To set up the backend for this project, you will need to install the following packages using either npm or yarn:

1. multer: for file uploads
2. express: a backend framework for node that provides a simple and easy-to-use API for handling HTTP requests and responses.
3. mysql: for the database
4. nodemon: for server management
5. dotenv: to reference configurations in the .env file
6. jsonwebtoken: for authorization
7. md5 or bcrypt: for password encryption
8. Sequelize : for ORM processes. 

## Creating the Project
To create the project, you will need to take the following steps:

1. Create a .env file for your application configurations
2. Create a .gitignore file
3. Create a configurations folder for your database setup and connection

## Starting the Project
To start the project, you can use either nodemon server.js or node server.js.

## Link ERD 
https://dbdiagram.io/d/64187981296d97641d8954e2  :   ERD diagrams 

## db configs 
Check backend folder configs in moringaops 

## routes 
located in the routes folder 
 ### sample routes 
 #### school 
 http://localhost:3000/api/schools  : GET 
 http://localhost:3000/api/schools  : POST as JSON 

     {
	"name": "School A",
	"email" : "schoola@gmail.com",
	"phone" : "0798501657",
	"password" : "123456",
	"location" : "Mombasa"
     }

Update using a PUT request to same link with the record id appended. 
Delete by appending id to same link. 


## Advantages of Sequelize ORM 

1.Sequelize supports multiple SQL databases such as MySQL, PostgreSQL, and SQLite.
2.Sequelize provides an easy-to-use API that can reduce the amount of boilerplate code required to work with databases.
3.Sequelize supports both promise-based and callback-based APIs.
4.Sequelize provides a powerful query language for creating complex SQL queries.
5.Sequelize provides built-in support for migrations, which makes it easy to manage database schema changes.
6.Sequelize provides an object-oriented model system, which can help improve code organization and maintainability.
7.Sequelize integrates well with Express.js and other popular Node.js web frameworks.

