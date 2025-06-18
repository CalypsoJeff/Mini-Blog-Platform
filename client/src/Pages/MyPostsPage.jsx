import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { fetchMyPosts, deletePost } from "../api/api";

function MyPostsPage() {
  const { token } = useAuth();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [token, navigate]);

  const getPosts = async () => {
    try {
      const res = await fetchMyPosts(token);
      setPosts(res.data);
    } catch (err) {
      setError(err.response?.data?.error || "Failed to load posts");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deletePost(id, token);
      setPosts(posts.filter((post) => post._id !== id));
    } catch (err) {
      alert("Failed to delete post");
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-2xl font-semibold mb-6 text-center">My Posts</h2>

      {loading ? (
        <div className="text-center text-gray-600">Loading posts...</div>
      ) : error ? (
        <div className="text-red-600 text-center">{error}</div>
      ) : posts.length === 0 ? (
        <div className="text-center text-gray-500">No posts found.</div>
      ) : (
        <ul className="space-y-4 max-w-2xl mx-auto">
          {posts.map((post) => (
            <li
              key={post._id}
              className="bg-white p-4 rounded-lg shadow flex flex-col gap-2"
            >
              <h3 className="text-lg font-bold">{post.title}</h3>
              <p>{post.content}</p>
              <div className="flex gap-2 justify-end">
                <button
                  onClick={() => navigate(`/edit/${post._id}`)}
                  className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(post._id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MyPostsPage;
