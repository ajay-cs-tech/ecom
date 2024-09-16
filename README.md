# E-Commerce Web App

This is a full-stack e-commerce web application built using **Node.js**, **Express**, **MongoDB**, and **React**. The app features user authentication (signup, login), product management, and JWT-based secure sessions.

## Live Demo

Check out the live demo of the application: [https://ecom-8ix0.onrender.com](https://ecom-8ix0.onrender.com)

## Features

- User authentication using **JWT** (JSON Web Token)
- Secure password storage with **bcrypt**
- Product listing and management
- REST API for managing users and products
- Token-based sessions without storing tokens on the frontend (for better security in production)
- Frontend built with **React** and **Chakra UI** for styling

## Tech Stack

- **Frontend**: React, Chakra UI
- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT, bcrypt
- **Hosting**: Render

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/ecom.git
   cd ecom
   ```

2. Install backend dependencies:
   ```bash
   npm install
   ```

3. Navigate to the frontend directory and install dependencies:
   ```bash
   cd frontend
   npm install
   cd ..
   ```

4. Create a `.env` file in the root directory and add the following:
   ```
   NODE_ENV=development
   PORT=5000
   MONGO_URI=your_mongo_uri
   JWT_SECRET=your_jwt_secret
   ```

## Running the Application

### Development Mode

To run the app in development mode with hot reloading for the backend:

```bash
npm run dev
```

The app will be available at `http://localhost:5000`.

### Production Mode

To build the frontend and start the backend in production mode:

```bash
npm run build
npm start
```

## API Endpoints

### Authentication

- **POST** `/api/auth/signup` - Register a new user
- **POST** `/api/auth/login` - Log in as a user (returns JWT token)

### Products

- **GET** `/api/products` - Get all products
- **POST** `/api/products` - Create a new product (protected)

## Deployment

The app is deployed on **Render**. The live version can be accessed at [https://ecom-8ix0.onrender.com](https://ecom-8ix0.onrender.com). Make sure to configure your environment variables (`MONGO_URI`, `JWT_SECRET`) in the Render dashboard.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
