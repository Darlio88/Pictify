# MERN Photo Sharing Application

This is a full-stack MERN (MongoDB, Express, React, Node.js) application that allows users to sign in, sign up, upload their photos, and interact with other users by liking their photos. Additionally, users have the ability to delete their own photos.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Routes](#api-routes)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Features

- User authentication: Users can sign up and sign in to the application using their email and password.
- Photo uploading: Users can upload their photos to share with others.
- Like functionality: Users can like photos uploaded by other users.
- Photo deletion: Users have the ability to delete their own uploaded photos.
- Secure authentication: Passwords are hashed and stored securely using modern encryption techniques.
- Responsive design: The application is designed to work seamlessly across different devices and screen sizes.

## Technologies Used

The following technologies were used to develop this application:

- **MongoDB**: A NoSQL database used to store user and photo data.
- **Express.js**: A back-end framework for building RESTful APIs.
- **React**: A JavaScript library used for building the user interface.
- **Node.js**: A JavaScript runtime used to run the server-side code.
- **Mongoose**: An Object Data Modeling (ODM) library for MongoDB and Node.js.
- **Passport**: An authentication middleware for Node.js.
- **Multer**: A middleware for handling file uploads in Node.js.
- **React Router**: A library for handling client-side routing in React applications.
- **Axios**: A JavaScript library used for making HTTP requests from the client-side.
- **Bootstrap**: A popular CSS framework for building responsive web pages.

## Prerequisites

Before running this application, make sure you have the following prerequisites installed:

- Node.js: [Download and install Node.js](https://nodejs.org) for your operating system.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/your-repository.git`
2. Navigate to the project directory: `cd your-repository`
3. Install the dependencies: `npm install`

## Installation

After cloning the repository and installing the dependencies, you need to configure the application to run locally.

## Configuration

1. Create a `.env` file in the root directory of the project.
2. Add the following environment variables to the `.env` file:

```
MONGODB_URI=<your_mongodb_uri>
SESSION_SECRET=<your_session_secret>
```

- `MONGODB_URI` should be the connection string to your MongoDB database.
- `SESSION_SECRET` should be a random string used for session encryption.

## Usage

To run the application locally, use the following command:

```
npm start
```

This will start the server and make the application accessible at `http://localhost:3000`.

## API Routes

The following API routes are available:

- `POST /api/auth/signup`: Create a new user account.
- `POST /api/auth/login`: Log in to an existing user account.
- `POST /api/auth/logout`: Log out the currently authenticated user.
- `GET /api/photos`: Get a list of all photos.
- `POST /api/photos`: Upload a new photo.
- `GET /api/photos/:photoId
