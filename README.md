# Node.js, Express and MongoDB Project Structure 
This is a basic project structure to help you to start building your own RESTful web APIs (for Android, IOS, or JavaScript framworks) using Express framework and MongoDB with a good structure practices based on clean MVC Architecture.


# Features
- Fundamental of Express: routing, middleware, sending response and more
- Fundamental of Mongoose: Data models, data validation and middleware
- RESTful API including pagination and sorting
- CRUD operations with MongoDB
- Security: encyption, sanitization and more
- Authentication with JWT : login and signup
- Authorization (User roles and permissions)
- Error handling
- Enviroment Varaibles
- handling error outside Express
- Catching Uncaught Exception

# Project Structure
- index.js : Responsible for connecting the MongoDB and starting the server.
- .env: for Enviroment Varaiables
- routes -> userRoutes.js: The goal of the route is to guide the request to the correct handler function which will be in one of the controllers
- controllers -> userController.js: Handle the application request, interact with models and send back the response to the client 
- models -> userModel.js: (Business logic) related to business rules, how the business works and business needs ( Creating new user in the database, checking if the user password is correct, validating user input data)


# Dummy Crud API endpoints

The `api` uri preceed all API endpoints and the following endpoints are currently available

* GET `/api/contacts`
* POST `/api/contacts`
* GET `/api/contacts/:id`
* PUT `/api/contacts/:id`
* PATCH `/api/contacts/:id`
* DELETE `/api/contacts/:id`




# Get in Touch

[![N|Solid](http://tutorialwala.com/wp-content/uploads/2019/05/cropped-logo-1.png)](http://tutorialwala.com/)
