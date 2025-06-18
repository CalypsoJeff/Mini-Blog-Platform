# 📝 Mini Blog Platform

A full-stack blogging application built with the MERN stack. Authenticated users can create, view, edit, and delete their own blog posts. Features a clean, responsive UI with TailwindCSS and secure backend APIs using JWT authentication.

---

## ✨ Features

- 🔐 **User Authentication**: Register and log in with secure JWT-based authentication.
- 🖋️ **Create Posts**: Add a blog post with a title and content.
- 📚 **My Posts View**: View, edit, or delete your own posts.
- 💾 **MongoDB Persistence**: All posts are stored securely in a MongoDB database.
- ⚠️ **Validation & Error Handling**: Frontend and backend both validate input and provide clear feedback.
- 📱 **Responsive UI**: TailwindCSS ensures a mobile-friendly interface.
- 🔄 **Token-based Navigation**: Conditional rendering based on login state.

---

## 🧱 Tech Stack

### 🔹 Frontend
- **React** (with Vite or CRA)
- **TailwindCSS** – utility-first CSS framework
- **Axios** – for API communication
- **React Router DOM** – for routing

### 🔹 Backend
- **Node.js** + **Express**
- **MongoDB** + **Mongoose**
- **JWT** – JSON Web Token for authentication
- **bcryptjs** – for password hashing
- **CORS**, **dotenv**

---

## 📁 Folder Structure

```
mini-blog-platform/
├── client/         # React + Tailwind frontend
├── server/         # Node + Express backend
```

---

## ⚙️ Prerequisites

- Node.js and npm
- MongoDB (local or Atlas)
- Git

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/CalypsoJeff/mini-blog-platform.git
cd mini-blog-platform
```

---

### 2. Backend Setup

```bash
cd server
npm install
```

Create a `.env` file in the `server/` directory:

```
PORT=5000
MONGO_URI=mongodb://localhost:27017/mini-blog-db
JWT_SECRET=your_jwt_secret
```

Run the server:

```bash
npm run dev
```

---

### 3. Frontend Setup

```bash
cd ../client
npm install
npm run dev
```

Make sure your backend is running on port `5000` or update proxy/baseURL accordingly.

---

## 🔐 Auth Summary

- JWT token is stored in `localStorage`
- Protected routes redirect if token is missing
- Login/Register links disappear after login

---

## 📌 Future Improvements

- 🗂️ Categories/Tags for posts
- 👥 User Profile Pages
- 🔍 Full-text search for blog content
- 🌐 Deploy to Vercel + Render or Railway

---

## 🤝 Credits

This project used **AI assistance** for:
- UI layout suggestions with Tailwind
- Auth flow structure and routing
- Best practices in API design

---

## 📜 License

MIT License — feel free to use, modify, and share.
