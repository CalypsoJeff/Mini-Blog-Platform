import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { fetchPostById, updatePost } from "../api/api";

function EditPostPage() {
  const { token } = useAuth();
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
  if (!token) {
    navigate("/");
  }
}, [token, navigate]);

  useEffect(() => {
    const getPost = async () => {
      try {
        const post = await fetchPostById(id, token);
        if (!post) setError("Post not found");
        else {
          setTitle(post.title);
          setContent(post.content);
        }
      } catch (err) {
        setError("Failed to load post");
      } finally {
        setLoading(false);
      }
    };

    getPost();
  }, [id, token]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError("");
    try {
      await updatePost(id, { title, content }, token);
      navigate("/posts");
    } catch (err) {
      setError(err.response?.data?.error || "Failed to update post");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleUpdate}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">Edit Post</h2>

        {loading ? (
          <div className="text-center text-gray-500">Loading post...</div>
        ) : (
          <>
            {error && <div className="mb-4 text-red-600">{error}</div>}

            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              className="w-full mb-4 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Content"
              rows="6"
              className="w-full mb-6 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
              disabled={saving}
            >
              {saving ? "Updating..." : "Update Post"}
            </button>
          </>
        )}
      </form>
    </div>
  );
}

export default EditPostPage;
