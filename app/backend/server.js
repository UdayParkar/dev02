import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import Order from './models/Order.js';

dotenv.config();

const app = express();

// CORS configuration
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true
};

app.use(cors(corsOptions));
app.use(express.json());

// Root route for health check
app.get('/', (req, res) => {
  res.json({ message: 'AuraBeauty API is running' });
});

// MongoDB connection with retry
const connectWithRetry = () => {
  mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('MongoDB connected'))
  .catch(err => {
    console.error('MongoDB connection error, retrying in 5s...', err);
    setTimeout(connectWithRetry, 5000);
  });
};
connectWithRetry();

// Orders API routes
app.post('/api/orders', async (req, res) => {
  try {
    const order = new Order(req.body);
    const saved = await order.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.get('/api/orders', async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something broke!' });
});

// Listen on all interfaces, ACA-friendly
const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => console.log(`Server running on port ${PORT}`));
