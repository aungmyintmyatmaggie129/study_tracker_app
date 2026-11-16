
# Technical Decision Records

## Decision 1: Choosing MongoDB over MySQL

### Decision
I decided to use MongoDB as the primary database
for the Study Tracker application.

### Alternatives Considered
- MySQL
- PostgreSQL
- MongoDB

### Why I Chose It
I already had experience with MongoDB and Mongoose.
Its document-based structure allowed me to develop
the application and manage study records efficiently.

### Cost and Trade-offs
MongoDB does not enforce relational constraints
in the same way as a relational database.
Managing relationships between users and study
records requires additional application logic.

---

## Decision 2: Using React Context API for Authentication State

### Decision
I chose React Context API to manage authentication
state across the frontend application.

### Alternatives Considered
- React Context API
- Redux Toolkit
- Zustand

### Why I Chose It
The application did not require a complicated
global state management system. Context API was
sufficient for sharing authentication information
between components.

### Cost and Trade-offs
As the application grows, managing more global
state through multiple contexts can become difficult.
It may also cause unnecessary component re-renders
if state updates are not structured carefully.

---

## Decision 3: Using Client-Side Routing with Vercel

### Decision
I decided to use client-side routing for navigation
between pages in the React application and deploy
the frontend using Vercel.

### Alternatives Considered
- React Router with client-side routing
- Traditional server-side page navigation
- Next.js routing

### Why I Chose It
React Router allowed me to create a smooth
single-page application experience without
reloading the entire page during navigation.
Vercel also provided a convenient deployment workflow.

### Cost and Trade-offs
One issue I encountered was that refreshing a
nested route could return a 404 error because
the hosting platform did not automatically
resolve the route to the frontend application.

I needed additional deployment routing
configuration to handle direct requests to
nested routes correctly.

This decision made deployment easier initially,
but required extra configuration later.
