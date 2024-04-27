# Tikus News Backend

Tikus News Backend is the backend server for the Tikus News mobile app, built using JavaScript with Node.js and Express.js. It utilizes MongoDB as the database for storing news data. The backend follows the MVC architecture pattern, with separate folders for models, controllers, and routes to organize the codebase effectively.

## Technologies Used

- **Node.js**: Node.js is a JavaScript runtime that allows for building scalable and efficient server-side applications.

- **Express.js**: Express.js is a web application framework for Node.js, providing a robust set of features for building APIs and web applications.

- **MongoDB**: MongoDB is a NoSQL database used for storing and managing data in a flexible and scalable manner.

## Features

- **RESTful API**: The backend provides a RESTful API for managing news data, including endpoints for creating, reading, updating, and deleting news articles.

- **MVC Architecture**: The project follows the Model-View-Controller (MVC) architecture pattern, separating concerns into models, controllers, and routes for better organization and maintainability.

- **Authentication**: The backend supports user authentication using JWT (JSON Web Tokens) to secure endpoints and authenticate users.

- **CRUD Operations**: Users can perform CRUD (Create, Read, Update, Delete) operations on news articles through the provided API endpoints.

## Folder Structure

The project follows a folder structure that separates concerns and promotes code organization:

- **models**: Contains the data models representing news articles and other entities in the database.
  
- **controllers**: Houses the controller functions responsible for handling business logic and interacting with the database.
  
- **routes**: Defines the API routes and maps them to the corresponding controller functions.

## Getting Started

To get started with the backend project, follow these steps:

1. **Clone the Repository**: Clone this repository to your local machine using `git clone`.

2. **Install Dependencies**: Navigate to the project directory and install the dependencies using `npm install`.

3. **Set Up Environment Variables**: Create a `.env` file in the root directory and configure environment variables such as database connection URI and JWT secret.

4. **Start the Server**: Run the server using `npm start`. By default, the server will start on port 3000.

5. **Explore the API**: Use API testing tools like Postman or Insomnia to interact with the provided endpoints and manage news articles.
