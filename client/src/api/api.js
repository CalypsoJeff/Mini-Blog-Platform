// src/api/api.js
import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:5000/api',
});

// Auth APIs
export const loginUser = (data) => API.post('/login', data);
export const registerUser = (data) => API.post('/register', data);

// Post APIs
export const fetchMyPosts = (token) =>
    API.get('/posts', {
        headers: { Authorization: `Bearer ${token}` },
    });

export const createPost = (data, token) =>
    API.post('/posts', data, {
        headers: { Authorization: `Bearer ${token}` },
    });

export const deletePost = (id, token) =>
    API.delete(`/posts/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
    });

export const updatePost = (id, data, token) =>
    API.patch(`/posts/${id}`, data, {
        headers: { Authorization: `Bearer ${token}` },
    });
export const fetchPostById = async (id, token) => {
    const res = await fetchMyPosts(token);
    return res.data.find((p) => p._id === id);
};
