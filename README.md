# 🛒 ShopZone

A modern, responsive e-commerce web application built with **React** and **Vite**. ShopZone allows users to browse products, view detailed product information, manage a shopping cart, and access protected checkout functionality through a clean and intuitive interface.

This project demonstrates the implementation of core React concepts such as component-based architecture, client-side routing, global state management using Context API, and persistent data storage with Local Storage.

---

## 🚀 Features

- 🏠 Responsive Home Page
- 🛍️ Product Listing (Shop Page)
- 🔍 Product Details Page
- 🛒 Add to Cart functionality
- ➕ Increase/Decrease item quantity
- ❌ Remove items from cart
- 💾 Cart persistence using Local Storage
- 👤 Guest Login System
- 🔒 Protected Checkout Route
- 📞 Contact Page
- ⚠️ Custom 404 Not Found Page
- ⏳ Loading and Error States
- 📱 Responsive Design
- ♿ Basic Accessibility Improvements

---

## 🛠️ Tech Stack

### Frontend

- React 19
- Vite
- React Router DOM
- JavaScript (ES6+)
- CSS3

### State Management

- React Context API
- useReducer
- useContext

### Data Persistence

- Browser Local Storage

---

## 📁 Project Structure

```text
src/
│
├── components/
│   ├── Layout.jsx
│   ├── Loader.jsx
│   ├── Navbar.jsx
│   ├── ProductCard.jsx
│   └── ProtectedRoute.jsx
│
├── context/
│   ├── AuthContext.jsx
│   ├── CartContext.jsx
│   └── CartReducer.js
│
├── pages/
│   ├── HomePage.jsx
│   ├── ShopPage.jsx
│   ├── ProductDetailsPage.jsx
│   ├── CartPage.jsx
│   ├── CheckoutPage.jsx
│   ├── ContactPage.jsx
│   ├── LoginPage.jsx
│   └── NotFoundPage.jsx
│
├── routes/
│   └── AppRoutes.jsx
│
├── services/
│   └── productService.js
│
├── styles/
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/raushan-40/shopzone.git
```

Navigate to the project

```bash
cd shopzone
```

Install dependencies

```bash
npm install
```

Start the development server

```bash
npm run dev
```

---

## 📦 Build for Production

```bash
npm run build
```

Preview the production build

```bash
npm run preview
```

---

## 📚 React Concepts Used

- Functional Components
- React Hooks
  - useState
  - useEffect
  - useReducer
  - useContext
- React Router DOM
- Context API
- Protected Routes
- Component Reusability
- Conditional Rendering
- Local Storage
- Responsive UI Design

---

## 🎯 Learning Outcomes

During this project, I gained practical experience with:

- Building a scalable React application
- Implementing client-side routing
- Managing global application state
- Persisting application data
- Creating reusable UI components
- Protecting application routes
- Organizing a production-ready project structure
- Working with Git and GitHub using incremental commits

---

## 🔮 Future Improvements

- User Registration
- Backend Integration
- Real Authentication (JWT)
- Payment Gateway Integration
- Product Search
- Product Categories
- Wishlist
- Order History
- Admin Dashboard
- Product Reviews

---

## 📸 Screenshots

### Home Page

<img width="1919" height="930" alt="image" src="https://github.com/user-attachments/assets/8615f733-9003-4333-9f6a-9d57cd6f2cfa" />

### Shop Page

<img width="1919" height="926" alt="image" src="https://github.com/user-attachments/assets/3bff25d3-251a-42aa-97c2-e87414e29f9d" />


### Product Details

<img width="1919" height="924" alt="image" src="https://github.com/user-attachments/assets/0eec9e57-1e80-4380-bb27-710322850709" />


### Shopping Cart

<img width="1917" height="930" alt="image" src="https://github.com/user-attachments/assets/a88e76e9-9008-4b23-a3fd-2fd43e6eed3b" />


### Checkout

<img width="1919" height="922" alt="image" src="https://github.com/user-attachments/assets/4aa21670-0765-49de-8639-620291bd847f" />


---

## 👨‍💻 Author

**Raushan Kumar**

- GitHub: https://github.com/raushan-40

---

## 📄 License

This project is created for learning purposes and internship submission.
