# GEMINI.md - "Make a Scoop" E-commerce Project

## Project Overview
"Make a Scoop" is an e-commerce platform designed for an ice cream shop, allowing customers to order online, view ingredient details, and customize their own ice cream scoops. This project is a comprehensive learning exercise (part of JSD12 Week 02) covering the full development lifecycle from business analysis to database design and initial JavaScript implementation.

### Main Technologies
- **JavaScript**: Core business logic implementation using arrays of objects and functions for terminal-based execution.
- **PostgreSQL**: Relational database design with scripts for table creation and data querying.
- **Excalidraw**: Used for visual modeling (Business Model Canvas, Use Case Diagram, ER Diagram).
- **Markdown**: Project documentation and product backlog.

### Architecture
The project follows a structured approach:
1.  **Requirement Analysis**: Problem statement and solutions documented in `01_my-ecommerce.md`.
2.  **Visual Modeling**: Business and system diagrams in `.excalidraw` files.
3.  **Database Design**: A normalized PostgreSQL schema in the `postgresql/` directory, managing suppliers, staff, ingredients, menu items, and orders.
4.  **Logic Prototype**: A JavaScript implementation (`06_bring-it-to-javascript.js`) that simulates the database and business operations (order tracking, custom scoops, customer lookups).

---

## Building and Running

### Running the JavaScript Logic
To execute the core business logic and see the terminal-based output:
```powershell
node 06_bring-it-to-javascript.js
```

### Database Setup
To initialize the database, execute the SQL scripts in the `postgresql/` directory in the following order:
1.  `create-tables.sql`: Defines the schema.
2.  `01_suppliers.sql` through `07_order_items.sql`: Populates the database with initial data.
3.  `query.sql` or `query-exercise.sql`: Runs analytical queries.

---

## Development Conventions

### Coding Style
- **JavaScript**: Uses functional patterns with `for` loops and template literals for output formatting. Data is managed in in-memory arrays of objects.
- **SQL**: Standard PostgreSQL syntax. Tables use `SERIAL PRIMARY KEY` for auto-incrementing IDs and include foreign key relationships for data integrity.

### Key Files
- `01_my-ecommerce.md`: The "Source of Truth" for project goals and solutions.
- `05_product-backlog.md`: Contains user stories and customer requirements.
- `06_bring-it-to-javascript.js`: The primary logic file for the current development phase.
- `postgresql/create-tables.sql`: The definitive data model for the "Make a Scoop" system.

### Testing
- Manual verification via terminal output in the JavaScript prototype.
- SQL query verification via `query-exercise.sql`.
