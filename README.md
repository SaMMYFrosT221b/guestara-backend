# Guestara Backend Project

## Database Chosen: MongoDB

### Why MongoDB?
For this project, I have chosen **MongoDB** as the database due to its flexibility, scalability, and ease of use. MongoDB is a NoSQL database, which stores data in JSON-like documents. This structure allows for more dynamic data handling, making it easier to model and store data without having to strictly define schemas upfront.

## 3 Things I Learned from This Assignment

1. **Database Integration with Node.js**:  
   I learned how to integrate MongoDB with a Node.js backend using Mongoose, a powerful ODM (Object Data Modeling) library. This allowed me to easily define schemas, interact with the database, and perform CRUD operations.

2. **Building RESTful APIs**:  
   I learned how to build RESTful APIs in Node.js using Express. I gained experience in structuring routes, creating controllers, handling requests, and managing responses in a clean and organized manner.

3. **Data Validation**:  
   I learned how to implement **data validation** for API requests using libraries like Joi or express-validator.

## What I Would Have Done Differently Given More Time

If I had more time, I would have focused on the following improvements:

1. **Advanced Error Handling**:  
   I would have implemented more robust error handling using `async/await` and `try/catch` blocks for better error propagation. Centralizing error handling across the application would make debugging easier and improve the overall user experience when interacting with the APIs.

2. **Automated Testing**:  
   Given more time, I would have written unit and integration tests using tools like Jest or Mocha. This would help ensure the reliability and stability of the backend services and APIs.

3. **Optimizing Performance**:  
   I would have focused on optimizing performance, especially for handling large amounts of data. Implementing pagination, indexing for frequently queried fields, and caching strategies like Redis for fetching data from the `GET` routes could have significantly improved the app's efficiency.

## Description

This is a Node.js backend project built with Express and MongoDB. The application provides an API to handle various operations such as creating, reading, updating, and deleting resources. It also implements JWT-based authentication, user roles, and data validation.

## Technologies Used

- **Node.js**: JavaScript runtime for server-side applications.
- **Express**: Web framework for building APIs.
- **MongoDB**: NoSQL database for storing application data.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB.
- **Joi**: Data validation library.
- **dotenv**: Environment variable management.

## Prerequisites

Before running the application locally, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/) (or MongoDB Atlas for cloud database)

## Setup and Installation

### 1. Clone the repository

Clone the repository to your local machine:

```bash
git clone https://github.com/SaMMYFrosT221b/guestara-backend
cd guestara-backend
npm install

```

# Set up environment variables
- Create a .env file in the root directory and add the following environment variables:

- PORT=3002
- MONGODB_URI=mongodb://localhost:27017/guestara-backend

```bash
npm start
```