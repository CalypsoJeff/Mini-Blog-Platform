import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import RegisterPage from "../pages/RegisterPage";
import CreatePostPage from "../pages/CreatePostPage";
import MyPostsPage from "../pages/MyPostsPage";
import EditPostPage from "../pages/EditPostPage";
import { useAuth } from "../context/AuthContext";
import LoginPage from "../Pages/LoginPage";

function AppRoutes() {
  const { token, logout } = useAuth();

  return (
    <Router>
      <nav className="bg-white shadow px-6 py-4 flex justify-between items-center">
        <h1 className="text-lg font-bold text-blue-600">Mini Blog</h1>
        <div className="flex gap-4">
          {!token ? (
            <>
              <Link to="/" className="text-blue-600 hover:underline">
                Login
              </Link>
              <Link to="/register" className="text-blue-600 hover:underline">
                Register
              </Link>
            </>
          ) : (
            <>
              <Link to="/create" className="text-blue-600 hover:underline">
                Create Post
              </Link>
              <Link to="/posts" className="text-blue-600 hover:underline">
                My Posts
              </Link>
              <button onClick={logout} className="text-red-500 hover:underline">
                Logout
              </button>
            </>
          )}
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/create" element={<CreatePostPage />} />
        <Route path="/posts" element={<MyPostsPage />} />
        <Route path="/edit/:id" element={<EditPostPage />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
