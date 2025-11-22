# ABC General Store - E-Commerce Website

A fully functional e-commerce website built with React, Node.js, Express, MongoDB, and Stripe payment integration.

## Features

- **Responsive Design**: Works perfectly on mobile and desktop devices
- **Product Catalog**: Browse 20 different products with images, descriptions, and prices
- **Shopping Cart**: Add multiple items, update quantities, and remove items
- **Dynamic Pricing**: Automatic total calculation based on cart items
- **Payment Integration**: Stripe checkout in test mode (no real payments)
- **Modern UI**: Built with React and Tailwind CSS
- **RESTful API**: Well-structured backend with Express.js

## Tech Stack

### Frontend
- React.js
- Tailwind CSS
- Axios
- Vite

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- Stripe API
- CORS & dotenv

## Project Structure

```
├── client/                 # Frontend React application
│   ├── public/
│   ├── src/
│   │   ├── components/    # React components
│   │   │   ├── Header.jsx
│   │   │   ├── HeroSlider.jsx
│   │   │   ├── Products.jsx
│   │   │   ├── Cart.jsx
│   │   │   └── Footer.jsx
│   │   ├── pages/         # Page components
│   │   │   ├── Success.jsx
│   │   │   └── Cancel.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── package.json
│   └── vite.config.js
│
└── server/                # Backend Express application
    ├── config/
    │   └── database.js    # MongoDB connection
    ├── models/            # Mongoose schemas
    │   ├── Product.js
    │   ├── Cart.js
    │   └── Order.js
    ├── routes/            # API routes
    │   ├── products.js
    │   ├── cart.js
    │   ├── checkout.js
    │   └── order.js
    ├── scripts/
    │   └── seedProducts.js
    ├── server.js
    └── package.json
```

## Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- MongoDB Atlas account
- Stripe account (for test mode)

### 1. Clone the Repository
```bash
git clone <repository-url>
cd abc-general-store
```

### 2. Backend Setup

```bash
cd server
npm install
```

Create a `.env` file in the server directory:
```env
MONGODB_URI=mongodb+srv://priyadharshan023_db_user:<db_password>@cluster0.em0f43b.mongodb.net/?appName=Cluster0
PORT=3000
STRIPE_SECRET_KEY=your_stripe_test_secret_key
CLIENT_URL=http://localhost:5000
```

**Important**: Replace `<db_password>` with your actual MongoDB password and add your Stripe test secret key.

### 3. Seed the Database

```bash
cd server
node scripts/seedProducts.js
```

This will populate your MongoDB database with 20 sample products.

### 4. Frontend Setup

```bash
cd client
npm install
```

### 5. Run the Application

Open two terminal windows:

**Terminal 1 - Backend:**
```bash
cd server
npm start
```
Server will run on http://localhost:3000

**Terminal 2 - Frontend:**
```bash
cd client
npm run dev
```
Frontend will run on http://localhost:5000

## API Documentation

### Base URL
```
http://localhost:3000/api
```

### Endpoints

#### 1. Get All Products
```
GET /api/products
```
**Response:**
```json
[
  {
    "_id": "product_id",
    "name": "Product Name",
    "description": "Product description",
    "price": 29.99,
    "image": "image_url",
    "category": "Category",
    "stock": 100
  }
]
```

#### 2. Get Single Product
```
GET /api/products/:id
```
**Response:**
```json
{
  "_id": "product_id",
  "name": "Product Name",
  "description": "Product description",
  "price": 29.99,
  "image": "image_url",
  "category": "Category",
  "stock": 100
}
```

#### 3. Create/Update Cart
```
POST /api/cart
```
**Request Body:**
```json
{
  "sessionId": "unique_session_id",
  "items": [
    {
      "productId": "product_id",
      "quantity": 2,
      "price": 29.99
    }
  ]
}
```

#### 4. Get Cart
```
GET /api/cart/:sessionId
```

#### 5. Create Checkout Session
```
POST /api/checkout
```
**Request Body:**
```json
{
  "items": [
    {
      "productId": "product_id",
      "quantity": 2,
      "price": 29.99
    }
  ],
  "totalAmount": 59.98
}
```
**Response:**
```json
{
  "sessionId": "stripe_session_id",
  "url": "stripe_checkout_url"
}
```

#### 6. Get All Orders
```
GET /api/order
```

#### 7. Get Single Order
```
GET /api/order/:orderNumber
```

#### 8. Update Order Status
```
PATCH /api/order/:orderNumber/status
```
**Request Body:**
```json
{
  "paymentStatus": "completed"
}
```

## MongoDB Schemas

### Product Schema
```javascript
{
  name: String (required),
  description: String (required),
  price: Number (required, min: 0),
  image: String (required),
  category: String (default: 'General'),
  stock: Number (default: 100),
  timestamps: true
}
```

### Cart Schema
```javascript
{
  sessionId: String (required, unique),
  items: [{
    productId: ObjectId (ref: 'Product'),
    quantity: Number (min: 1),
    price: Number
  }],
  totalAmount: Number,
  timestamps: true
}
```

### Order Schema
```javascript
{
  orderNumber: String (required, unique),
  items: [{
    productId: ObjectId (ref: 'Product'),
    name: String,
    quantity: Number,
    price: Number
  }],
  totalAmount: Number (required),
  paymentStatus: String (enum: ['pending', 'completed', 'failed']),
  stripeSessionId: String,
  timestamps: true
}
```

## Payment Testing

This project uses Stripe in **test mode**. No real payments will be processed.

### Test Card Details
Use these Stripe test card numbers:

- **Success**: 4242 4242 4242 4242
- **Decline**: 4000 0000 0000 0002

- **Expiry**: Any future date
- **CVC**: Any 3 digits
- **ZIP**: Any 5 digits

**Important Notice**: This is a test environment. Do not use real payment information. For issues, contact support@geniusesfactory.com

## Deployment Guide

### Frontend Deployment (Netlify/Vercel)

#### Netlify:
1. Build the frontend:
   ```bash
   cd client
   npm run build
   ```
2. Deploy the `dist` folder to Netlify
3. Update environment variables in Netlify dashboard

#### Vercel:
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Add environment variables

### Backend Deployment (Render)

1. Create a new Web Service on Render
2. Connect your GitHub repository
3. Set build command: `cd server && npm install`
4. Set start command: `cd server && npm start`
5. Add environment variables:
   - `MONGODB_URI`
   - `STRIPE_SECRET_KEY`
   - `CLIENT_URL` (your deployed frontend URL)
   - `PORT=3000`

### MongoDB Deployment (Atlas)

Your MongoDB is already hosted on Atlas. Make sure to:
1. Whitelist your deployment server IP
2. Update the connection string in environment variables
3. Replace `<db_password>` with your actual password

## Screenshots

[Placeholder for homepage screenshot]
[Placeholder for products page screenshot]
[Placeholder for cart screenshot]
[Placeholder for checkout screenshot]

## Contact

For support or inquiries:
- Email: support@geniusesfactory.com
- Phone: +1 (555) 123-4567

## License

This project is built for internship purposes at ABC General Store.

---

**Note**: This is a demo e-commerce website built for educational purposes. All payment transactions are in test mode only.
