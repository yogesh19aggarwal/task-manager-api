# Task Management API

This is a task management application API that allows users to create, read, update, and delete tasks. It also supports filtering, sorting, and pagination.

## Features

- **User Authentication**: Users can register and log in to the application.
- **Task Management**: Users can:
  - Create, update, view, and delete tasks.
  - Filter tasks by priority, status, and due date.
  - Sort tasks by due date or priority.
- **Pagination & Sorting**: Get paginated responses with sorting options.
- **Secure Authentication**: JWT-based authentication for user sessions.
- **Role-Based Access Control (RBAC)**: Protect certain routes based on user roles.

## Tech Stack

- **Node.js**: JavaScript runtime for building the API.
- **Express.js**: Web framework for building the RESTful API.
- **Sequelize**: ORM for interacting with the database (MySQL, PostgreSQL).
- **JWT**: JSON Web Tokens for user authentication.
- **Bcrypt.js**: For hashing passwords securely.
- **dotenv**: Environment variable management.

## Environment Variables

Create a `.env` file in the project root and configure the following variables:

``` text
DB_USER=your_database_user 
DB_PASSWORD=your_database_password 
DB_NAME=your_database_name 
DB_HOST=your_database_host DB_PORT=your_database_port
PORT=your_server_port
DB_DIALECT=your database dialect
DB_PORT=your database port
NODE_ENV=environement

JWT_SECRET=your_jwt_secret
```
