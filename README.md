# ✦ ShopLux — Mini E-Commerce App

Full-stack e-commerce application built with **Node.js + Express + MongoDB** (backend) and **vanilla HTML/CSS/JS** (frontend).

---

## 📁 Folder Structure

```
ShopLux/
├── backend/
│   ├── config/
│   │   └── db.js               # MongoDB connection
│   ├── controllers/
│   │   ├── authController.js   # Login / Signup
│   │   ├── productController.js
│   │   ├── cartController.js
│   │   └── orderController.js
│   ├── middleware/
│   │   └── auth.js             # JWT protect + adminOnly
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
│   ├── server.js               # Express app entry point
│   ├── seed.js                 # Optional demo data seeder
│   ├── render.yaml             # Render deployment config
│   ├── .env.example
│   ├── .gitignore
│   └── package.json
│
└── frontend/
    ├── js/
    │   └── api.js              # Shared fetch wrapper + helpers
    ├── index.html              # Product listing
    ├── login.html
    ├── signup.html
    ├── cart.html
    ├── orders.html
    ├── admin.html
    ├── style.css
    └── vercel.json
```

---

## 🚀 Running Locally

### Prerequisites
- Node.js v18+
- MongoDB Atlas account (free tier) OR local MongoDB

### 1. Clone / Download the project

### 2. Set up the Backend
```bash
cd backend
npm install

# Copy and fill in your env values
cp .env.example .env
```

Edit `.env`:
```env
PORT=5000
MONGO_URI=mongodb+srv://<user>:<pass>@cluster.mongodb.net/ecommerce
JWT_SECRET=any_long_random_string_here
```

### 3. (Optional) Seed demo data
```bash
node seed.js
```
This creates:
- **Admin**: admin@shop.com / admin123
- **User**: user@shop.com / user1234
- 6 sample products

### 4. Start the backend
```bash
npm run dev    # with nodemon (auto-restart)
# or
npm start      # production mode
```
Server runs at: `http://localhost:5000`

### 5. Run the Frontend
The frontend is **pure HTML/CSS/JS** — no build step needed.

Open `frontend/index.html` directly in your browser, or use a simple static server:
```bash
cd frontend
npx serve .          # serves at http://localhost:3000
# or just double-click index.html
```

---

## 🌐 API Endpoints

### Auth
| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| POST | /api/auth/signup | Public | Register |
| POST | /api/auth/login | Public | Login |
| GET | /api/auth/me | Private | Get current user |

### Products
| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| GET | /api/products | Public | Get all products |
| GET | /api/products/:id | Public | Get one product |
| POST | /api/products | Admin | Create product |
| PUT | /api/products/:id | Admin | Update product |
| DELETE | /api/products/:id | Admin | Delete product |

### Cart
| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| GET | /api/cart | Private | Get my cart |
| POST | /api/cart/add | Private | Add item |
| PUT | /api/cart/update | Private | Update quantity |
| DELETE | /api/cart/remove/:id | Private | Remove item |
| DELETE | /api/cart/clear | Private | Clear cart |

### Orders
| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| POST | /api/orders | Private | Place order |
| GET | /api/orders/my | Private | My orders |
| GET | /api/orders/:id | Private | Order details |
| GET | /api/orders/admin/all | Admin | All orders |
| PUT | /api/orders/:id/status | Admin | Update status |

---

## ☁️ Deployment

### Backend → Render

1. Push `backend/` to a GitHub repo
2. Go to [render.com](https://render.com) → **New Web Service**
3. Connect your GitHub repo
4. Set these:
   - **Build Command**: `npm install`
   - **Start Command**: `node server.js`
5. Add Environment Variables:
   - `MONGO_URI` → your MongoDB Atlas URI
   - `JWT_SECRET` → any random 32+ char string
   - `NODE_ENV` → `production`
6. Deploy → copy your Render URL (e.g. `https://shoplux-api.onrender.com`)

### Frontend → Vercel

1. **Update the API_BASE** in `frontend/js/api.js`:
   ```js
   const API_BASE = 'https://shoplux-api.onrender.com/api';
   ```
2. Push `frontend/` to a GitHub repo
3. Go to [vercel.com](https://vercel.com) → **New Project**
4. Import repo → Framework: **Other** → Deploy
5. Your frontend is live!

---

## 🔐 Authentication Flow

1. User signs up/logs in → backend returns **JWT token**
2. Token stored in **localStorage**
3. Every protected request sends `Authorization: Bearer <token>` header
4. Backend middleware verifies token → attaches `req.user`
5. Admin routes additionally check `req.user.role === 'admin'`

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | HTML5, CSS3, Vanilla JS |
| Backend | Node.js, Express.js |
| Database | MongoDB with Mongoose ODM |
| Auth | JWT (jsonwebtoken) + bcryptjs |
| Deployment | Render (backend), Vercel (frontend) |
