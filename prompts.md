# Prompt Log

## Project
**ShopZone – React E-Commerce Application**

This document records the prompts used during the AI-assisted development of the ShopZone project. AI was used as a development assistant to accelerate implementation, generate boilerplate code, suggest improvements, and help debug issues. All generated code was reviewed, integrated, tested, and modified before being included in the final project.

---

# Prompt 1 – Project Setup

**Objective**

Create a production-ready React e-commerce project using Vite with a clean and scalable folder structure.

**Prompt**

> Create a React application using Vite for an e-commerce project called ShopZone. Organize the project into reusable folders including components, pages, routes, context, services, and styles. Configure React Router and keep the architecture modular and production-ready.

---

# Prompt 2 – Application Routing

**Objective**

Implement client-side routing.

**Prompt**

> Configure React Router DOM with routes for Home, Shop, Product Details, Cart, Contact, Login, Checkout, and a custom 404 page. Use a shared Layout component containing the navigation bar.

---

# Prompt 3 – Product Listing

**Objective**

Create the Shop page.

**Prompt**

> Build a reusable ProductCard component that displays product image, title, price, and a button to view product details. Render products dynamically from a service file.

---

# Prompt 4 – Product Details

**Objective**

Display complete product information.

**Prompt**

> Create a Product Details page that loads product information using the route parameter. Display image, title, description, category, rating, price, and an Add to Cart button.

---

# Prompt 5 – Global Cart State

**Objective**

Manage shopping cart globally.

**Prompt**

> Implement global cart state using React Context API with useReducer. Create CartContext and CartReducer supporting Add Item, Remove Item, Increase Quantity, Decrease Quantity, and Clear Cart actions. Do not implement localStorage yet.

---

# Prompt 6 – Shopping Cart

**Objective**

Complete cart functionality.

**Prompt**

> Integrate the cart context throughout the application. Display cart items, quantities, total price, remove functionality, and a dynamic cart badge in the navigation bar.

---

# Prompt 7 – Cart Persistence

**Objective**

Persist cart data.

**Prompt**

> Save the shopping cart in browser localStorage and automatically restore it when the application loads. Keep the reducer unchanged and implement persistence using useEffect.

---

# Prompt 8 – Authentication

**Objective**

Implement guest authentication.

**Prompt**

> Create an AuthContext with simple guest login functionality. Protect the Checkout page using a ProtectedRoute component and redirect unauthenticated users to the Login page.

---

# Prompt 9 – UI Improvements

**Objective**

Improve user experience.

**Prompt**

> Improve responsiveness, loading indicators, error handling, empty cart design, accessibility, and overall UI consistency without changing existing business logic.

---

# Prompt 10 – Final Review

**Objective**

Prepare the application for deployment.

**Prompt**

> Review the entire project for production readiness. Verify routing, imports, folder organization, responsiveness, code quality, and build compatibility. Fix any issues without changing application behavior.

---

# Debugging Assistance

AI was additionally used to help resolve several development issues, including:

- Import and export mismatches
- Incorrect CSS import paths
- React Router configuration
- Context API integration
- Component organization
- Build errors
- Local Storage persistence
- Git configuration
- GitHub repository setup

All suggested fixes were manually reviewed before being applied.

---

# Development Workflow

The project was developed incrementally using Git. Features were implemented in small stages with meaningful commits, tested after each milestone, and integrated into the final application.

---

# AI Usage Statement

AI was used as a software development assistant to:

- Generate boilerplate code
- Suggest React component structures
- Explain implementation approaches
- Assist with debugging
- Recommend UI improvements
- Improve project organization

All code was reviewed, tested, modified where necessary, and validated by the developer before submission.
