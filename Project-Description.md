# Project Description

This project is a MERN-style restaurant management application with a React/Vite frontend and an Express/MongoDB backend. The backend currently includes user authentication, food menu creation, and file uploads for food item images.

## Backend Implementation

### APIs built

- `POST /auth` — register a new user with name, email, and password
- `POST /auth/login` — authenticate a user and issue a JWT cookie
- `GET /auth/check` — verify the JWT cookie and confirm authentication status
- `GET /food` — placeholder food API health route
- `POST /food` — create a new food item with image upload support

### Models created

- `User` model
  - `name`: String, required
  - `email`: String, required, lowercase, trimmed
  - `password`: String, required (stored hashed)
  - `role`: String, default `user`

- `Food` model
  - `title`: String, required
  - `description`: String, required
  - `price`: Number, required
  - `images`: [String], required
  - `category`: String, required
  - `status`: String, required, enum [`ACTIVE`, `DEACTIVE`], default `ACTIVE`

### Backend utilities

- Password hashing and comparison with `bcryptjs`
- JWT generation and verification with `jsonwebtoken`
- Cloudinary upload support for storing food images
- Multer middleware for handling multipart form image uploads

## What is left to implement

### Authentication / authorization

- Add middleware to protect routes using JWT verification
- Implement role-based authorization for admin vs user access
- Add logout and user profile endpoints
- Improve login error handling for missing users and invalid credentials

### Food and menu management

- Add `GET /food` list and detail endpoints for menu browsing
- Implement update and delete food endpoints
- Add enable/disable menu functionality via food status or admin actions
- Support food category filtering, search, and pagination

### Order and user workflows

- Create an `Order` model and APIs for ordering, cancelling, and tracking orders
- Implement order status flows such as `waiting`, `preparing`, `in-delivery`, and `delivered`
- Add user-side order history and admin order management pages

### General improvements

- Add proper API error handling and validation for all routes
- Add protected admin routes for menu management
- Ensure frontend and backend route integration for full user/admin workflows
- Add missing documentation and consistent response structure for the API

## Current project stack

- Frontend
  - React with Vite
  - Tailwind CSS
  - Zustand for state management
  - Axios for API requests
  - React Router

- Backend
  - Express.js
  - MongoDB with Mongoose
  - JWT tokens for authentication
  - Bcrypt password hashing
  - Multer + Cloudinary for image upload management
