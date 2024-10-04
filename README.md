
# Blogger

## Project Overview

This Blogger is a simple web application built using EJS, Express.js, MongoDB, and Node.js. The app allows users to create, read, update, and delete blog posts.

## Features

- **EJS Templating**: Frontend rendered using EJS templates for dynamic content display.
- **Express.js**: Backend framework to handle routing and server logic.
- **MongoDB**: NoSQL database for storing blog posts and user data.
- **Node.js**: The runtime environment for backend processing.
- **Basic CRUD Operations**: Users can create, view, edit, and delete blog posts.
- **User Authentication**: User login and registration system (optional).
  
## Project Structure

- `views/`: Contains all EJS template files.
- `routes/`: Defines all the routes for handling requests (home, blog posts, etc.).
- `models/`: Mongoose models for MongoDB collections (e.g., Blog, User).
- `public/`: Static assets like CSS, JS, and images.
  
## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/blog-app.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables in a `.env` file:

   ```env
   PORT=3000
   MONGODB_URI=<your-mongodb-connection-string>
   JWT_SECRET=<your-jwt-secret>
   ```

4. Start the server:

   ```bash
   npm start
   ```

## Usage

1. Access the app by navigating to `http://localhost:3000/`.
2. View all blog posts, create a new post, edit or delete existing posts.
3. Authentication is required to create, edit, or delete posts (if implemented).

## Dependencies

- **Express.js**: Fast, unopinionated, minimalist web framework for Node.js.
- **MongoDB**: NoSQL database for storing blog and user data.
- **Mongoose**: MongoDB object modeling tool designed to work in an asynchronous environment.
- **EJS**: Embedded JavaScript templating for rendering HTML pages.
- **dotenv**: Loads environment variables from a `.env` file into `process.env`.

## License

This project is licensed under the MIT License.
