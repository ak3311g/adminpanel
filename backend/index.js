import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/connectDB.js';
import usersRoute from './routes/usersRoute.js';

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.use('/api/users', usersRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));