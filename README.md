# 🛒 HELLSTORE – MERN E-Commerce App

Welcome to **Hellstore**, a full-stack e-commerce web app built using the MERN stack (MongoDB, Express.js, React.js, Node.js) with 🔐 authentication, 🛍️ dynamic store, 🧾 cart system, and 🧠 role-based access for Admins & Customers.

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

## 🧠 Developer

- 🔥 **Yash Vardhan** – Engineering Student | Full-Stack Dev in Progress  
- 🎯 MERN Stack Enthusiast | Strategic Thinker | The Future of Code

---

## 🛠️ Upcoming Features

- 🛒 Full Cart System with MongoDB sync
- 📦 Order Confirmation & Purchase History
- 🔐 Protected Routes (JWT token validation)
- 📈 Admin Dashboard w/ Graphs & Insights
- 💳 Payment Gateway Integration
- 📨 Email Notification on Order

---

## 📌 How to Run Locally

1. **Clone the repo**
git clone https://github.com/your-username/ecommerce-website.git

2. **Install Dependecies**
cd frontend && npm install
cd ../backend && npm install

3. **Setup .env in backend**
MONGO_URI=your_mongodb_uri
JWT_SECRET=some_secret_value

4. **Run frontend & backend**
# Terminal 1 (frontend)
cd frontend
npm run dev

# Terminal 2 (backend)
cd backend
npx nodemon server.js

⭐ Show Some Love
If you like the project:

+ ⭐ Star it on GitHub
+ 🔁 Fork it
+ 🛠️ Build your own version

💬 Connect With Me
You can hit me up anytime for collabs, mentoring, or questions:
🧠 [LinkedIn](https://www.linkedin.com/in/vardhan-yash3105/)
🐙 [GitHub](https://github.com/yashvardhan3105)
📧 Email: vardhan.yash3105@gmail.com
