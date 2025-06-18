import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const dbConnect = () => {
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    const db = mongoose.connection;

    db.on('connected', () => {
        console.log('Connected to MongoDB');
    });

    db.on('error', (err) => {
        console.error('MongoDB connection error:', err);
    });
};
