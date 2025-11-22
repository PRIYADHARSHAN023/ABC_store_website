import express from 'express';
import cors from 'cors';
import connectDB from './config/database.js';

// Routes
import productsRouter from './routes/products.js';
import cartRouter from './routes/cart.js';
import checkoutRouter from './routes/checkout.js';
import orderRouter from './routes/order.js';

// 🟢 STRIPE ROUTES
import stripeRoutes from './routes/stripe.js';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Connect DB
connectDB().catch(err => {
  console.log('⚠️ MongoDB connection failed:', err.message);
  console.log('📦 Server running with mock data only');
});

// Default route
app.get('/', (req, res) => {
  res.json({ message: 'ABC General Store API Running' });
});

// Route mapping
app.use('/api/products', productsRouter);
app.use('/api/cart', cartRouter);
app.use('/api/checkout', checkoutRouter);
app.use('/api/order', orderRouter);

// 🟢 Stripe Payment
app.use('/api/stripe', stripeRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
