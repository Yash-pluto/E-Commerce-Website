# 🛒 HELLSTORE – MERN E-Commerce App

Welcome to **Hellstore**, a full-stack e-commerce web app built using the MERN stack (MongoDB, Express.js, React.js, Node.js) with 🔐 authentication, 🛍️ dynamic store, 🧾 cart system, and 🧠 role-based access for Admins & Customers.

> This ain't your typical shopping site — this is code forged in hell 🔥

---

## 🚀 Features

| Type | Description |
|------|-------------|
| 🖥️ Frontend | React (Vite) + TailwindCSS |
| 🧠 Backend | Node.js + Express.js |
| ☁️ Database | MongoDB with Mongoose |
| 🔐 Auth | JWT-based Auth, Role Handling (Admin/Customer) |
| 📲 Mobile-First | Fully Responsive Design |

---

## 🧰 Tech Stack

- **Frontend:** React (Vite) + TailwindCSS  
- **Backend:** Express + Node.js  
- **Database:** MongoDB  
- **Auth:** JSON Web Tokens (JWT)  
- **Deployment:** Coming Soon (Render / Vercel / Netlify / MongoDB Atlas)

---

## 📸 Preview

> 💡 _Coming soon: Screenshots / Demo GIF_

---

## 👥 User Roles

### 👤 Customer:
- Login/Register to access the store
- Browse all products
- Add items to cart
- View purchase history
- Checkout system (in progress)

### 👑 Admin:
- Login with special credentials
- Access admin dashboard
- Add new products
- Edit product name, price, quantity

---

## 🧪 API Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register new user |
| POST | `/api/auth/login` | Login and receive token |
| GET | `/api/products` | Get all products |
| POST | `/api/products` | Add a product (Admin only) |
| PUT | `/api/products/:id` | Edit a product (Admin only) |
| ... | ... | More coming soon |

---

## 🏗️ Folder Structure

