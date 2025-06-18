import Post from '../models/Post.js';

export const getPosts = async (req, res) => {
    const posts = await Post.find({ author: req.userId }).sort({ createdAt: -1 });
    res.json(posts);
};

export const createPost = async (req, res) => {
    const { title, content } = req.body;
    const post = new Post({ title, content, author: req.userId });
    await post.save();
    res.status(201).json(post);
};

export const deletePost = async (req, res) => {
    const deleted = await Post.findOneAndDelete({ _id: req.params.id, author: req.userId });
    if (!deleted) return res.status(404).json({ error: 'Post not found or unauthorized' });
    res.json({ message: 'Post deleted' });
};

export const updatePost = async (req, res) => {
    const { title, content } = req.body;
    try {
        const post = await Post.findOneAndUpdate(
            { _id: req.params.id, author: req.userId },
            { title, content },
            { new: true, runValidators: true }
        );
        if (!post) return res.status(404).json({ error: 'Post not found or unauthorized' });
        res.json(post);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
