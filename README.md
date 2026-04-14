# ✦ ShopLux — Mini E-Commerce Application

![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=flat-square&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-4.18-000000?style=flat-square&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-47A248?style=flat-square&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/Auth-JWT-000000?style=flat-square&logo=jsonwebtokens&logoColor=white)
![Vercel](https://img.shields.io/badge/Frontend-Vercel-000000?style=flat-square&logo=vercel&logoColor=white)
![Render](https://img.shields.io/badge/Backend-Render-46E3B7?style=flat-square&logo=render&logoColor=white)

A fully functional full-stack mini e-commerce web app with product management, cart system, order placement, and an admin dashboard — all secured with JWT authentication.

🌐 **Live Frontend:** [shoplux-krushnataur.vercel.app](https://shoplux-krushnataur.vercel.app/)
⚙️ **Live API:** [shoplux-hpvc.onrender.com](https://shoplux-hpvc.onrender.com/)

---

## ✨ Features

- 🔐 **JWT Authentication** — Signup, Login, protected routes
- 🔑 **Role-based Access** — `user` and `admin` roles
- 🛍️ **Product Catalogue** — Browse, search, and sort products
- 🛒 **Cart System** — Add, update quantity, remove items
- 📦 **Order System** — Place orders, view history with status tracking
- 🛠️ **Admin Dashboard** — Add/Edit/Delete products, view all orders, update order status
- 📱 **Responsive UI** — Clean dark-themed design, works on all screen sizes
- 🔔 **Toast Notifications** — Real-time feedback for every user action

---

## 🧰 Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | HTML5, CSS3, Vanilla JavaScript |
| Backend | Node.js, Express.js |
| Database | MongoDB + Mongoose ODM |
| Authentication | JSON Web Tokens (JWT) + bcryptjs |
| Frontend Hosting | Vercel |
| Backend Hosting | Render |

---

## 📁 Folder Structure

```
ecommerce/
├── backend/
│   ├── config/
│   │   └── db.js                   # MongoDB connection setup
│   ├── controllers/
│   │   ├── authController.js       # signup, login, getMe
│   │   ├── productController.js    # CRUD operations
│   │   ├── cartController.js       # add/update/remove/clear
│   │   └── orderController.js      # place/view/admin orders
│   ├── middleware/
│   │   └── auth.js                 # protect + adminOnly middleware
│   ├── models/
│   │   ├── User.js
│   │   ├── Product.js
│   │   ├── Cart.js
│   │   └── Order.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── productRoutes.js
│   │   ├── cartRoutes.js
│   │   └── orderRoutes.js
│   ├── seed.js                     # Demo data seeder
│   ├── server.js                   # Express entry point
│   ├── render.yaml                 # Render deployment config
│   ├── .env.example
│   └── package.json
│
└── frontend/
    ├── js/
    │   └── api.js                  # Shared fetch wrapper + auth helpers
    ├── index.html                  # Product listing page
    ├── login.html
    ├── signup.html
    ├── cart.html
    ├── orders.html
    ├── admin.html
    ├── style.css
    └── vercel.json
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- MongoDB Atlas account (free) or local MongoDB instance

### 1. Clone the Repository

```bash
git clone https://github.com/KrushnaTaur/shoplux.git
cd shoplux
```

### 2. Backend Setup

```bash
cd backend
npm install
cp .env.example .env
```

Fill in your `.env` file:

```env
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/ecommerce
JWT_SECRET=your_super_secret_key_here
NODE_ENV=development
```

### 3. Seed Demo Data *(Optional)*

```bash
node seed.js
```

This creates 2 demo users and 6 sample products.

### 4. Start the Backend

```bash
npm run dev     # Development (nodemon auto-restart)
npm start       # Production
```

> API runs at `http://localhost:5000`

### 5. Run the Frontend

The frontend is pure HTML/CSS/JS — **no build step needed**.

```bash
cd frontend
npx serve .     # Serves at http://localhost:3000
```

Or simply open `index.html` directly in your browser.

---

## 🔑 Environment Variables

| Variable | Example | Required | Description |
|----------|---------|----------|-------------|
| `PORT` | `5000` | No | Server port (default: 5000) |
| `MONGO_URI` | `mongodb+srv://...` | ✅ Yes | MongoDB connection string |
| `JWT_SECRET` | `random_32_char_string` | ✅ Yes | Secret key for signing JWTs |
| `NODE_ENV` | `production` | No | Set to `production` on Render |

---

## 📡 API Reference

Base URL: `http://localhost:5000/api`

### 🔐 Auth

| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| `POST` | `/auth/signup` | Public | Register a new user |
| `POST` | `/auth/login` | Public | Login, returns JWT token |
| `GET` | `/auth/me` | Private | Get current user info |

### 📦 Products

| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| `GET` | `/products` | Public | Get all products |
| `GET` | `/products/:id` | Public | Get product by ID |
| `POST` | `/products` | Admin | Create new product |
| `PUT` | `/products/:id` | Admin | Update product |
| `DELETE` | `/products/:id` | Admin | Delete product |

### 🛒 Cart

| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| `GET` | `/cart` | Private | Get user's cart |
| `POST` | `/cart/add` | Private | Add item to cart |
| `PUT` | `/cart/update` | Private | Update item quantity |
| `DELETE` | `/cart/remove/:productId` | Private | Remove item from cart |
| `DELETE` | `/cart/clear` | Private | Clear entire cart |

### 🧾 Orders

| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| `POST` | `/orders` | Private | Place order from cart |
| `GET` | `/orders/my` | Private | Get my orders |
| `GET` | `/orders/:id` | Private | Get order by ID |
| `GET` | `/orders/admin/all` | Admin | Get all orders |
| `PUT` | `/orders/:id/status` | Admin | Update order status |

---

## 🖥️ Frontend Pages

| Page | File | Access | Description |
|------|------|--------|-------------|
| Home / Shop | `index.html` | Public | Product grid with search and sort |
| Login | `login.html` | Public | JWT login form |
| Sign Up | `signup.html` | Public | Registration with role selector |
| Cart | `cart.html` | Private | Cart items, quantity controls, checkout |
| My Orders | `orders.html` | Private | Order history with status badges |
| Admin | `admin.html` | Admin | Stats, product CRUD, all orders management |

### Shared JS Utilities (`js/api.js`)

| Function | Purpose |
|----------|---------|
| `apiFetch(endpoint, options)` | Fetch wrapper — auto-injects Bearer token |
| `saveAuth(token, user)` | Save token + user to localStorage |
| `clearAuth()` | Remove auth data (logout) |
| `requireLogin()` | Redirect to login if not authenticated |
| `requireAdmin()` | Redirect if not admin |
| `showToast(msg, type)` | Slide-in toast notification |
| `formatPrice(amount)` | Indian Rupee formatter |
| `updateNavbar()` | Toggle nav items based on auth state |

---

## 🗄️ Data Models

### User

```js
{
  name:     String,   // required
  email:    String,   // required, unique, lowercase
  password: String,   // hashed with bcrypt (pre-save hook)
  role:     String    // enum: ['user', 'admin'] — default: 'user'
}
```

### Product

```js
{
  name:        String,   // required
  price:       Number,   // required, min: 0
  description: String,   // required
  image:       String,   // URL, default placeholder
  category:    String,   // default: 'General'
  stock:       Number,   // default: 100
  createdBy:   ObjectId  // ref: User (admin who created)
}
```

### Cart

```js
{
  user:  ObjectId,  // ref: User — unique (one cart per user)
  items: [
    {
      product:  ObjectId,  // ref: Product
      quantity: Number     // min: 1
    }
  ]
}
```

### Order

```js
{
  user:        ObjectId,  // ref: User
  items: [
    {
      product:  ObjectId,
      name:     String,   // snapshot at time of order
      price:    Number,   // snapshot at time of order
      quantity: Number
    }
  ],
  totalAmount:     Number,
  status:          String,  // pending | processing | shipped | delivered | cancelled
  shippingAddress: {
    street, city, state, zipCode, country
  }
}
```

---

## 🔐 Authentication Flow

```
1. User submits login form
        ↓
2. Backend verifies email (Mongoose) + password (bcrypt.compare)
        ↓
3. JWT token generated → jwt.sign({ id }, JWT_SECRET, { expiresIn: '7d' })
        ↓
4. Token saved to localStorage on frontend
        ↓
5. Every API request sends:  Authorization: Bearer <token>
        ↓
6. protect middleware → jwt.verify() → attaches req.user
        ↓
7. adminOnly middleware → checks req.user.role === 'admin'
        ↓
8. Frontend guards → requireLogin() / requireAdmin() redirect if unauthorised
```

---

## ☁️ Deployment

### Backend → Render

1. Push `backend/` to a GitHub repository
2. Go to [render.com](https://render.com) → **New Web Service** → Connect repo
3. Configure:
   - **Build Command:** `npm install`
   - **Start Command:** `node server.js`
4. Add environment variables in the Render dashboard:
   - `MONGO_URI`
   - `JWT_SECRET`
   - `NODE_ENV=production`
5. Deploy ✅

### Frontend → Vercel

1. Update `API_BASE` in `frontend/js/api.js`:
   ```js
   const API_BASE = 'https://your-render-app.onrender.com/api';
   ```
2. Push `frontend/` to a GitHub repository
3. Go to [vercel.com](https://vercel.com) → **New Project** → Import repo
4. Framework Preset: **Other** → Deploy ✅

### Live URLs

| Service | URL |
|---------|-----|
| 🌐 Frontend | https://shoplux-krushnataur.vercel.app/ |
| ⚙️ Backend API | https://shoplux-hpvc.onrender.com/ |

---

## 🧪 Demo Credentials

After running `node seed.js`:

| Role | Email | Password |
|------|-------|----------|
| Admin | admin@shop.com | admin123 |
| User | user@shop.com | user1234 |

---

## 🛡️ Security

| Concern | Mitigation |
|---------|-----------|
| Password storage | bcryptjs with salt rounds: 10 |
| Token security | JWT with 7-day expiry |
| Route protection | `protect` middleware on all private routes |
| Admin access | `adminOnly` middleware on all admin routes |
| Password exposure | `.select('-password')` on all user queries |
| Input validation | Mongoose schema validators (required, min, max, enum) |

---

## 🔮 Possible Improvements

- [ ] Image upload via Cloudinary or AWS S3
- [ ] Razorpay / Stripe payment gateway integration
- [ ] Email confirmation on signup and order placement
- [ ] Product reviews and ratings
- [ ] Pagination for products and orders
- [ ] Password reset via email OTP
- [ ] Rate limiting + `helmet.js` security headers
- [ ] Docker + CI/CD pipeline

---

<div align="center">
  Built with ❤️ by <strong>Krushna Taur</strong>
</div>
