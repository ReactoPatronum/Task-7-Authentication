# Authentication and Role-based Permissions Example

## Project Overview

This project demonstrates the implementation of user authentication and role-based permissions using React, Redux, and a backend API. The application allows users to sign up, log in, and access different parts of the system based on their assigned roles (admin or user). Protected routes ensure that only authorized users can access certain pages.

## Technologies Used

- **Frontend:**
  - React: A JavaScript library for building user interfaces.
  - Redux: A state management library for managing application data.
  - react-hook-form: A library for managing form state and validation.
  - react-hot-toast: A customizable toast notification library.
  - Next.js: A React framework for server-rendered applications.

## Project Description

This project focuses on building a user authentication system with role-based permissions. Key features include:

- User Registration: Users can sign up by providing a username, email, password, and selecting their role (admin or user).
- User Login: Registered users can log in using their email and password.
- Role-based Permissions: Users are assigned roles (admin or user) with different levels of access.
- Protected Routes: Certain routes are protected and can only be accessed by authorized users based on their roles.


## Usage

### User Registration

1. Access the registration page.
2. Fill out the registration form with your desired username, email, password, and role selection (admin or user).
3. Click the "Register" button to create a new account.

### User Login

1. Access the login page.
2. Enter your email and password.
3. Click the "Sign in" button to log in.

### Protected Routes

- Users with the "admin" role have access to admin-specific routes (e.g., "/admin").
- Users with the "user" role have access to user-specific routes (e.g., "/home", "/about").

