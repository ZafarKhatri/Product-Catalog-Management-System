# 🛒 Product Catalog Management System

A full-stack web application for managing products using **Angular**, **Node.js**, **Express.js**, and **MongoDB**.

The application provides a simple interface to view products, add new products, and delete existing products. The Angular frontend communicates with a RESTful API built with Express.js, while MongoDB is used to store product information.

---

## 🚀 Features

- 📋 View all products
- ➕ Add new products
- 🗑️ Delete products
- 🏷️ Product categories
- 💰 Product pricing in Indian Rupees (₹)
- 🖼️ Optional product image URL
- 🔄 Product list refresh after adding/deleting
- ⚠️ Basic form validation
- ⏳ Loading state while fetching products
- 💬 Success and error messages
- 🌐 REST API for product management
- 💾 MongoDB database integration

---

## 🛠️ Technologies Used

### Frontend

- Angular 16
- TypeScript
- HTML
- CSS
- RxJS
- Angular Forms
- Angular HttpClient

### Backend

- Node.js
- Express.js
- Mongoose
- CORS
- Nodemon

### Database

- MongoDB

### Version Control

- Git
- GitHub

---

## 📂 Project Structure

```text
product-catalog/
│
├── backend/
│   ├── models/
│   │   └── product.model.js
│   ├── routes/
│   │   └── product.routes.js
│   ├── package.json
│   ├── package-lock.json
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   │   ├── products/
│   │   │   │   ├── products.component.ts
│   │   │   │   ├── products.component.html
│   │   │   │   └── products.component.css
│   │   │   ├── services/
│   │   │   │   └── product.service.ts
│   │   │   ├── app.component.ts
│   │   │   └── app.module.ts
│   │   ├── index.html
│   │   └── main.ts
│   ├── angular.json
│   ├── package.json
│   ├── package-lock.json
│   └── tsconfig.json
│
├── .gitignore
└── README.md
```

---

## ⚙️ Prerequisites

Make sure the following are installed:

- Node.js
- npm
- Angular CLI
- MongoDB
- Git

---

# 🔧 Installation & Setup

## 1. Clone the Repository

```bash
git clone https://github.com/ZafarKhatri/Product-Catalog-Management-System.git
cd Product-Catalog-Management-System
```

## 2. Setup MongoDB

Make sure MongoDB is installed and running locally.

The backend uses the local MongoDB database:

```text
mongodb://localhost:27017/productcatalog
```

Database name:

```text
productcatalog
```

---

# 🖥️ Backend Setup

Open a terminal inside the backend directory:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Start the backend:

```bash
npm start
```

For development mode:

```bash
npm run dev
```

The backend server runs on:

```text
http://localhost:3000
```

---

# 🌐 Frontend Setup

Open another terminal:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the Angular application:

```bash
npm start
```

The frontend is normally available at:

```text
http://localhost:4200
```

---

# 🔗 API Endpoints

Base URL:

```text
http://localhost:3000/api/products
```

## Get All Products

```http
GET /api/products
```

Returns all products stored in MongoDB.

## Add a Product

```http
POST /api/products
```

Example request:

```json
{
  "name": "Laptop",
  "price": 55000,
  "category": "Electronics",
  "imageUrl": "https://example.com/laptop.jpg"
}
```

## Delete a Product

```http
DELETE /api/products/:id
```

Example:

```http
DELETE /api/products/64abc123...
```

---

# 📦 Product Model

| Field | Type | Required | Description |
|---|---|---|---|
| `_id` | ObjectId | Auto | MongoDB document ID |
| `name` | String | Yes | Product name |
| `price` | Number | Yes | Product price |
| `category` | String | No | Product category |
| `imageUrl` | String | No | Optional product image |
| `createdAt` | Date | Auto | Creation timestamp |
| `updatedAt` | Date | Auto | Last update timestamp |

---

# 🔄 Application Flow

```text
                 ┌─────────────────────┐
                 │      Angular UI     │
                 │    localhost:4200   │
                 └──────────┬──────────┘
                            │
                            │ HTTP Requests
                            ▼
                 ┌─────────────────────┐
                 │   Express / Node.js │
                 │    localhost:3000   │
                 └──────────┬──────────┘
                            │
                            │ Mongoose
                            ▼
                 ┌─────────────────────┐
                 │       MongoDB       │
                 │    productcatalog   │
                 └─────────────────────┘
```

---

# 🧩 How It Works

### Loading Products

When the Angular application starts, the product component requests the products from the backend API.

```text
Angular
   ↓
GET /api/products
   ↓
Express
   ↓
MongoDB
   ↓
Products returned to Angular
```

### Adding a Product

```text
User
 ↓
Angular Form
 ↓
POST /api/products
 ↓
Express
 ↓
MongoDB
 ↓
Product Saved
 ↓
Product List Refreshed
```

### Deleting a Product

```text
User
 ↓
Delete Button
 ↓
DELETE /api/products/:id
 ↓
Express
 ↓
MongoDB
 ↓
Product Deleted
 ↓
Product List Refreshed
```

---

# 🔐 Validation

The application performs basic frontend validation.

Product name and price are required before a product can be added.

---

# 📌 Future Improvements

- ✏️ Edit/update products
- 🔍 Search products
- 🏷️ Filter by category
- 📊 Product sorting
- 📄 Pagination
- 🔐 User authentication
- 👤 Admin dashboard
- 🛡️ Backend validation
- 🔒 Environment variables for configuration
- ☁️ Cloud MongoDB integration
- 🚀 Deployment
- 🧪 Unit and integration testing

---

# 👨‍💻 Author

**Zafar Khatri**

- GitHub: https://github.com/ZafarKhatri
- LeetCode: https://leetcode.com/u/Zafar_Khatri/

---

## ⭐ Project

If you find this project useful, consider giving the repository a ⭐ on GitHub.

---

## 📄 License

This project is created for learning and portfolio purposes.
