# Technical Decision Records (TDR)

This document records the major technical decisions made during the development of the Study Tracker application. Each decision explains the problem, alternatives considered, reasons for selecting a particular approach, and the resulting technical trade-offs.

The purpose of these records is to document the reasoning behind the application's architecture and make future maintenance, improvements, and technical changes easier to understand.

---

## Decision 1: Choosing MongoDB as the Primary Database

**Status:** Accepted

### Context

The Study Tracker application needs a database to store and manage user accounts, study sessions, learning activities, and related application data.

The database solution should support efficient data access, flexible data structures, and straightforward integration with the Node.js backend.

### Decision

MongoDB was selected as the primary database, with Mongoose used as the Object Data Modeling (ODM) library.

### Alternatives Considered

- **MongoDB:** A document-oriented NoSQL database with flexible document structures.
- **MySQL:** A relational database that provides structured schemas and relational constraints.
- **PostgreSQL:** A relational database offering advanced SQL capabilities and strong data integrity features.

### Rationale

MongoDB was selected for the following reasons:

1. **Existing Experience:** I already had practical experience working with MongoDB and Mongoose, allowing me to implement database functionality more efficiently.
2. **Flexible Data Modeling:** Its document-based structure makes it convenient to represent study sessions and learning-related information.
3. **Node.js Integration:** Mongoose provides schema definitions, validation, and convenient database operations within the Node.js environment.
4. **Development Efficiency:** MongoDB allowed me to focus on implementing application features without introducing additional complexity during the initial development stage.

### Consequences and Trade-offs

**Advantages:**
- Flexible document structures support evolving application requirements.
- Mongoose provides schema validation and structured data access.
- Integration with the Node.js backend is straightforward.

**Limitations:**
- MongoDB does not provide traditional relational constraints such as foreign keys.
- Relationships between users and study records require application-level validation and appropriate referencing.
- Maintaining data consistency across related documents requires additional consideration.

**Future Consideration:**

If the application develops more complex relational requirements, PostgreSQL could be evaluated as an alternative.

---

## Decision 2: Using React Context API for Authentication State Management

**Status:** Accepted

### Context

The frontend application needs a centralized way to manage authentication information and make the current user's authentication state accessible across multiple components.

The solution should remain simple, maintainable, and suitable for the application's current requirements.

### Decision

React Context API was selected to manage and share authentication state across