import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { dbConnect } from './config/dbConnect.js';
import authRoutes from './routes/auth.js';
import postRoutes from './routes/posts.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', authRoutes);
app.use('/api/posts', postRoutes);

dbConnect();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
