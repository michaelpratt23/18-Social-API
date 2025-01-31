# Social Network API

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Demo Video](#demo-video)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Overview

The Social Network API is a back-end application designed for handling user interactions in a social network. It allows users to create accounts, share thoughts, react to posts, and manage their friend lists. The API is built using a NoSQL database for scalability and flexibility.

## Features

- User account creation, retrieval, updating, and deletion
- Thought (post) creation, retrieval, updating, and deletion
- Ability to add and remove reactions to thoughts
- Friend request system for connecting users
- MongoDB integration for efficient data storage

## Demo Video

Watch a demo of the application in action here:

[Demo Video](INSERT_YOUR_VIDEO_LINK_HERE)

## Installation

To set up and run the Social Network API locally, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install all necessary dependencies.
4. Ensure MongoDB is installed and running locally or set up a MongoDB Atlas database.
5. (Optional) Seed the database with initial data.

## Usage

1. Start the server and connect to the database.
2. Use a tool such as Postman or Insomnia to interact with the API endpoints.
3. Create users and post thoughts.
4. Add reactions to thoughts and manage friends.

## API Endpoints

The API provides the following endpoints:

- User Routes:

  - Create a new user
  - Get all users or a single user by ID
  - Update or delete a user
  - Add or remove a friend

- Thought Routes:
  - Create a new thought
  - Get all thoughts or a specific thought by ID
  - Update or delete a thought
  - Add or remove a reaction

## Technologies Used

- **Node.js** for the back-end server
- **Express.js** for routing and middleware
- **MongoDB** as the database
- **Mongoose** for object data modeling
- **Insomnia/Postman** for API testing

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch for your changes.
3. Submit a pull request with a clear description of your changes.

## License

This project is licensed under the MIT License.
