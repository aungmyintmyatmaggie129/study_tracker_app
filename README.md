# Study Tracker

Study Tracker is a responsive web app for organizing study subjects, planning learning sessions, and building a more consistent study routine. It combines a dashboard, subject catalog, progress views, and a focus timer in one place.

## What it helps with

- **Scattered study plans:** A dashboard brings the day’s planned sessions, current lesson, and upcoming study information together.
- **Unclear next steps:** Subject cards and lesson lists show what to continue or complete next.
- **Difficulty staying focused:** The focus timer offers 25-, 50-, and 90-minute sessions, with start, pause, and reset controls.
- **Hard-to-see progress:** Streak, weekly activity, lesson completion, and goal components make progress visible at a glance.
- **Mobile and desktop use:** Responsive layouts adapt the main study tools to smaller screens as well as desktop.


## Features

- **Account Registration and Login:** User registration and login screens for account management.
- **Cookie-Based Authentication:** Secure authentication handled through the Express API using cookies.
- **Protected Routes:** Access-controlled pages for the home page, dashboard, subjects, focus timer, and progress.
- **Subject Catalog:** Searchable and filterable subject catalog for easily finding and organizing subjects.
- **Interactive Dashboard:** Overview cards displaying study plans, learning streaks, weekly activity, goals, and upcoming tasks.
- **Focus Timer:** Customizable focus sessions with selectable durations and a live progress indicator.
- **Lesson Tracking:** Track learning activities during study sessions, mark lessons as completed, and add new lessons.

> **Current data status:** Several dashboard statistics, study plans, and the daily focus goal are sample UI data. Focus timer settings and lesson changes are held in frontend state and are not saved across reloads. The progress page is currently a placeholder. The backend has user authentication and subject API routes, but subject create, detail, update, and delete handlers are placeholders.


## Tech Stack

### Frontend
- **React** – Building reusable UI components.
- **Vite** – Fast development server and build tool.
- **React Router** – Client-side routing and navigation.
- **Tailwind CSS** – Utility-first styling and responsive design.
- **Axios** – HTTP requests to the backend API.

### Backend
- **Node.js** – JavaScript runtime environment.
- **Express.js** – REST API development and server-side routing.
- **MongoDB** – NoSQL database for storing application data.
- **Mongoose** – MongoDB object modeling and schema validation.

### Authentication & Security
- **JWT (JSON Web Token)** – Token-based user authentication.
- **HTTP-only Cookies** – Secure cookie storage for authentication tokens.
- **bcrypt** – Password hashing to protect user credentials.


## Project structure

```text
study_tracker_app/
├── backend/
│   ├── controllers/       # User and subject request handlers
│   ├── middleware/        # Authentication middleware
│   ├── models/            # MongoDB user and subject models
│   ├── routes/            # Express API routes
│   ├── token/             # JWT creation and secret handling
│   ├── validation/        # Request validation middleware
│   └── server.js           # Express app and MongoDB connection
└── frontend/
    ├── src/
    │   ├── Pages/         # Login, registration, home, dashboard, etc.
    │   ├── components/    # Shared navigation and dashboard/subject UI
    │   ├── contexts/      # Authentication and home-page state
    │   ├── const/          # Navigation and sample study data
    │   ├── assets/         # Images and icons
    │   ├── App.jsx         # Routes and page access guards
    │   └── main.jsx        # React entry point and providers
    └── vite.config.js      # Vite setup and local API proxy
```

## Run locally

You need Node.js/npm and a MongoDB database.

### 1. Configure the backend

Create `backend/.env` (do not commit this file) and set:

```dotenv
MONGO_DB_URI=<your-mongodb-connection-string>
JWT_SECRET=<a-long-random-secret>
PORT=4000
FRONTEND_ORIGIN=http://localhost:5173
```

`PORT` and `FRONTEND_ORIGIN` are optional; the values above are the server defaults.

Install dependencies and start the API:

```powershell
cd backend
npm install
npm run dev
```

The backend connects to MongoDB before it starts listening.

### 2. Configure and run the frontend

In another terminal:

```powershell
cd frontend
npm install
npm run dev
```

Open the local URL printed by Vite (by default, `http://localhost:5173`). In development, requests to `/api` are proxied to `http://localhost:4000`.

To use a different API base URL, create `frontend/.env` and set:

```dotenv
VITE_API_URL=http://localhost:4000/api
```

The frontend defaults `VITE_API_URL` to `/api`.

## Available scripts

Run frontend commands from `frontend/`:

```powershell
npm run dev       # Start the Vite development server
npm run build     # Build the production frontend
npm run preview   # Preview the production build
npm run lint      # Run ESLint
```

Run backend commands from `backend/`:

```powershell
npm run dev       # Start the API with nodemon
npm start         # Start the API with Node.js
```

## API overview

The backend mounts its routes under `/api`:

- `POST /api/users/register` — create an account
- `POST /api/users/login` — log in and receive an HTTP-only session cookie
- `GET /api/users/me` — get the authenticated user
- `/api/subjects` — subject list and subject route handlers

The user session uses a JWT signed with `JWT_SECRET`. Keep the secret and database connection string private, and use secure production configuration when deploying.
