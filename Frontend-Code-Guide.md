# React Frontend Code Guide

## Overview

This frontend is built with React and Vite in the `client/` folder. It uses React Router for page navigation, Zustand for authentication state, and Tailwind CSS classes for styling.

## Entry point

- `client/src/main.jsx`
  - Bootstraps the app with `createRoot`
  - Wraps the app with `AuthContextComp`
  - Uses `BrowserRouter` and `Routes`
  - Defines main routes:
    - `/login` → `Pages/Login.jsx`
    - `/register` → `Pages/Register.jsx`
    - `/` → `Pages/Home.jsx`
    - `/dashboard` → `Components/Protector.jsx` → `Pages/Dashboard.jsx`

## Routing and protection

- Routes are declared in `client/src/main.jsx`.
- `Protector` component wraps the dashboard route to protect it from unauthorized access.
- Public pages are `Home`, `Login`, and `Register`.

## Page structure

### Pages

- `client/src/Pages/Home.jsx`
  - Renders the landing page
  - Contains local dish data and order modal logic
  - Uses `NavbarComp`
- `client/src/Pages/Login.jsx`
  - Combines `NavbarComp` and `Components/Login`
- `client/src/Pages/Register.jsx`
  - Combines `NavbarComp` and `Components/Register`
- `client/src/Pages/Dashboard.jsx`
  - Placeholder dashboard page
- `client/src/Pages/Wall.jsx`
  - Simple presentational component with a `Button`
- `client/src/Pages/Button.jsx`
  - Uses `AuthContext`

### Components

- `client/src/Components/Navbar.jsx`
  - Navigation bar with desktop links and mobile hamburger menu
  - Uses `NavLink` from `react-router`
- `client/src/Components/Login.jsx`
  - Login form UI
  - Uses local `useState` for email/password
  - Calls `Login()` from `authStore`
- `client/src/Components/Register.jsx`
  - Registration form UI
  - Uses local `useState` for name/email/password
  - Calls `Register()` from `authStore`
- `client/src/Components/Protector.jsx`
  - Route guard component for protected pages

## State management

### Zustand store

- `client/src/store/authStore.js`
- Stores authentication state:
  - `isAuth`
  - `authToken`
- Provides async actions:
  - `checkAuth()` → GET `/auth/check`
  - `Login({ email, password })` → POST `/auth/login`
  - `Register({ email, name, password })` → POST `/auth`
- The `Login` and `Register` actions update `isAuth` on success.

### React Context

- `client/src/store/AuthContext.jsx`
- Creates `AuthContext`
- Provides `user` and `setuser`
- Currently set to a dummy value (`1`) and not fully integrated with auth state.

## API integration

- `client/src/utils/axios.js`
  - Configures an Axios instance:
    - `baseURL`: `http://localhost:3000`
    - `withCredentials`: `true`
    - `Content-Type`: `application/json`
- `Components/Login.jsx` uses `authStore.Login()` to send credentials via Axios.
- `Components/Register.jsx` uses `fetch()` directly to register a user.

## Styling

- Tailwind CSS is used through class names in JSX.
- Styles live in `client/src/index.css` and are used globally.
- `Navbar`, `Login`, and `Register` components use responsive classes and utility styles.

## Current frontend architecture patterns

- Page wrapper pattern: pages import a component and wrap with `Navbar`
- Form component pattern: login/register forms are separated into reusable components under `Components/`
- Global auth state is handled by Zustand, but some state is also in React Context
- Static homepage data uses local component state and event handlers

## Current gaps and recommended improvements

- `AuthContext` is present but not fully aligned with `authStore`.
- Registration uses native `fetch()` instead of the shared Axios instance.
- There is no centralized error handling for API calls.
- `Dashboard.jsx` is a placeholder and does not yet render admin/user data.
- The `Home` page uses direct DOM access (`document.querySelectorAll`) alongside React state, which is not idiomatic.
- The project should consolidate authentication state and route protection logic.

## How the frontend is created

1. `npm install` in `client/`
2. Vite builds the React app
3. `src/main.jsx` starts the app and defines routes
4. Pages are loaded via route entry points
5. Component-level state manages form input and UI interactions
6. Zustand handles auth state and backend API calls
7. Tailwind classes style the UI

## Recommended development workflow

- Use `src/main.jsx` as the app bootstrap and route registry
- Keep `Navbar` and shared components in `client/src/Components`
- Keep page-level screen content in `client/src/Pages`
- Use `client/src/utils/axios.js` for all authenticated requests
- Move all auth logic into `authStore` and remove duplicate context state
- Add data fetching hooks or utils for backend calls
- Replace direct DOM access with React state and effects for UI behavior
