# Express Backend Template

## Overview

The **Express Backend Template** is a boilerplate designed to streamline backend development using the Express.js framework. This template provides a clean, organized structure for middleware, database connections, models, controllers, and routes, making it ideal for developers looking to build robust and scalable server-side applications.

## Features

- **Modular Structure**: Separation of concerns with clear directories for middleware, controllers, models, routes, and utilities.
- **Database Integration**: Pre-configured database connection setup for quick and easy integration.
- **Custom Middleware**: Includes middleware examples to handle common tasks like authentication and request validation.
- **RESTful API Ready**: A structured approach to creating and managing RESTful APIs.
- **Git Version Control**: `.gitignore` and Git configuration included to facilitate version control.
- **Node.js Dependency Management**: `package.json` for managing dependencies and scripts.

## File Structure

```
expressBackendTemplate/
├── index.js                 # Main entry point of the application
├── package.json             # Project metadata and dependencies
├── package-lock.json        # Dependency lock file
├── .gitignore               # Files and directories ignored by Git
├── src/                     # Application logic
│   ├── middleware/          # Custom middleware
│   ├── database/            # Database-related code
│   ├── utils/               # Utility functions
│   ├── models/              # Database models
│   ├── controllers/         # Request handling logic
│   └── routes/              # API routes
└── node_modules/            # Installed Node.js modules
```

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- **Node.js** (v14.x or higher)
- **npm** (Node Package Manager) or **yarn**

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/PradeepSahhu/expressBackendTemplate-NPM.git
   ```
2. Navigate to the project directory:
   ```bash
   cd expressBackendTemplate
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

To start the server in development mode:

```bash
npm run dev
```

By default, the server runs on `http://localhost:3000`. You can configure the port in the `index.js` file.

## Project Structure Explained

### 1. **index.js**

The main entry point initializes the Express app, sets up middleware, and starts the server.

### 2. **src/**

This directory contains the core logic of the application:

- **middleware/**: Custom middleware functions, such as request validation or authentication logic.
- **database/**: Handles database connectivity and queries. For instance, `user.database.js` manages user-related database operations.
- **utils/**: Utility functions like `DatabaseConnection.js` that manage reusable logic.
- **models/**: Schema definitions and models for database entities (e.g., `user.models.js`).
- **controllers/**: Functions to handle incoming requests and business logic (e.g., `user.controllers.js`).
- **routes/**: Defines the endpoints of the application, linking routes to controllers (e.g., `user.routes.js`).

### 3. **package.json**

This file includes:

- Project metadata (name, version, description, author).
- Dependencies required for the project.
- Scripts for running the application.

### 4. **.gitignore**

Specifies files and directories that should not be tracked by Git, such as `node_modules/` and `.env`.

## Example Workflow

### Adding a New Feature

To add a new feature (e.g., managing products):

1. **Define Routes**:
   Create a new file in `src/routes/` (e.g., `product.routes.js`):

   ```javascript
   import express from "express";
   import {
     getAllProducts,
     createProduct,
   } from "../controllers/product.controllers.js";

   const router = express.Router();

   router.get("/products", getAllProducts);
   router.post("/products", createProduct);

   export default router;
   ```

2. **Implement Controllers**:
   Create a new file in `src/controllers/` (e.g., `product.controllers.js`):

   ```javascript
   export const getAllProducts = (req, res) => {
     // Logic to fetch products
     res.status(200).json({ message: "Products fetched successfully" });
   };

   export const createProduct = (req, res) => {
     // Logic to create a new product
     res.status(201).json({ message: "Product created successfully" });
   };
   ```

3. **Set Up Database Model**:
   Add a model in `src/models/` (e.g., `product.models.js`):

   ```javascript
   // Example: Define a Product schema using Mongoose
   import mongoose from "mongoose";

   const ProductSchema = new mongoose.Schema({
     name: { type: String, required: true },
     price: { type: Number, required: true },
   });

   export default mongoose.model("Product", ProductSchema);
   ```

4. **Update Middleware (Optional)**:
   Add validation or authentication logic in `src/middleware/`.

5. **Register Routes**:
   Update `index.js` to include the new routes:

   ```javascript
   import productRoutes from "./src/routes/product.routes.js";

   app.use("/api", productRoutes);
   ```

## Contributing

Contributions are welcome! Follow these steps to contribute:

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push the changes to your forked repository:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Create a pull request.

## License

This project is licensed under the ISC License. See the `LICENSE` file for more details.

## Author

Developed by **Pradeep Sahu**, a 21-year-old full-stack web developer passionate about building scalable and maintainable applications.

## Acknowledgments

Special thanks to the open-source community for tools and frameworks that made this template possible.

---

This README file serves as comprehensive documentation for getting started, understanding the structure, and contributing to the Express Backend Template.
