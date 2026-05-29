# 🍽️ Integrated Food Delivery & Dine-Out Platform (Backend)

A production-style backend system built using Node.js, Express.js, MongoDB, JWT Authentication, and Socket.io.

This platform combines food delivery, restaurant discovery, table reservations, order management, delivery tracking, merchant operations, and gamified customer reviews into a single hospitality ecosystem.

---

## 🚀 Project Overview

The Integrated Food Delivery & Dine-Out Platform is designed to solve the fragmentation problem in the food and hospitality industry by providing a unified platform for:

- Restaurant Discovery
- Food Ordering
- Table Reservations
- Delivery Management
- Merchant Dashboard
- Customer Reviews & Ratings
- Real-Time Order Tracking

The backend follows a scalable MVC architecture and provides RESTful APIs for all business operations.

---

# 🏗️ System Architecture

```text
Client (React Frontend)
        │
        ▼
Express REST APIs
        │
        ▼
Controllers
        │
        ▼
Mongoose Models
        │
        ▼
MongoDB Atlas

Realtime Communication
        │
        ▼
Socket.io Server
```

---

# 🛠️ Tech Stack

## Backend

- Node.js
- Express.js

## Database

- MongoDB Atlas
- Mongoose ODM

## Authentication & Security

- JWT Authentication
- bcryptjs Password Hashing
- Role Based Access Control (RBAC)

## Real-Time Communication

- Socket.io

## Validation

- Joi

## Logging

- Morgan

## Version Control

- Git
- GitHub

---

# 📂 Project Structure

```text
backend
│
├── config
│   └── db.js
│
├── controllers
│   ├── authController.js
│   ├── restaurantController.js
│   ├── menuController.js
│   ├── cartController.js
│   ├── orderController.js
│   ├── reviewController.js
│   └── reservationController.js
│
├── middleware
│   ├── authMiddleware.js
│   └── errorMiddleware.js
│
├── models
│   ├── User.js
│   ├── Restaurant.js
│   ├── MenuItem.js
│   ├── Cart.js
│   ├── Order.js
│   ├── Review.js
│   └── Reservation.js
│
├── routes
│   ├── authRoutes.js
│   ├── restaurantRoutes.js
│   ├── menuRoutes.js
│   ├── cartRoutes.js
│   ├── orderRoutes.js
│   ├── reviewRoutes.js
│   └── reservationRoutes.js
│
├── server.js
├── .env
└── package.json
```

---

# 🎯 Key Features

## 👤 Authentication System

- User Registration
- User Login
- JWT Authentication
- Password Hashing
- Protected Routes
- Role-Based Authorization

### Supported Roles

- Customer
- Restaurant Partner
- Delivery Partner
- Admin

---

## 🍴 Restaurant Management

### Features

- Create Restaurant
- Update Restaurant
- Delete Restaurant
- Get Restaurant Details
- Geospatial Search
- Rating & Cuisine Filtering

---

## 🗺️ Geospatial Restaurant Discovery

MongoDB GeoJSON + 2dsphere indexes are used for location-based search.

### Search Filters

- Distance
- Rating
- Cuisine
- Nearby Restaurants

Example:

```http
GET /api/restaurants/nearby?lat=28.61&lng=77.23
```

---

## 📋 Menu Management

Restaurant owners can:

- Add Menu Items
- Update Menu Items
- Delete Menu Items
- Toggle Availability
- View Restaurant Menu

---

## 🛒 Cart Management

Customers can:

- Add Items
- Remove Items
- Update Quantity
- View Cart

---

## 📦 Order Management

Order lifecycle is managed using a state machine.

### Order States

```text
PENDING
ACCEPTED
PREPARING
COURIER_ASSIGNED
OUT_FOR_DELIVERY
DELIVERED
```

---

## 🚚 Delivery Management

Delivery partners can:

- View Assigned Orders
- Accept Deliveries
- Update Delivery Status
- Complete Deliveries

---

## ⭐ Review & Rating System

Features:

- Restaurant Reviews
- Ratings
- Gamified Points System
- Review Scoring Logic

### Reward Logic

```text
Review > 100 characters = +10 points

Contains positive keywords:
good = +5
excellent = +10
```

---

## 🍽️ Table Reservation System

Customers can:

- Book Tables
- View Reservations
- Cancel Reservations

Restaurants can:

- Manage Reservations
- View Customer Details

---

## 📊 Merchant Dashboard APIs

Restaurant owners can:

- View Orders
- Manage Menus
- Track Revenue
- Monitor Operations

Revenue Calculation uses MongoDB Aggregation Pipeline.

---

## ⚡ Real-Time Order Tracking

Socket.io provides:

- Live Order Updates
- Delivery Tracking
- Restaurant Notifications

Example Events:

```text
ORDER_ACCEPTED
ORDER_PREPARING
COURIER_ASSIGNED
OUT_FOR_DELIVERY
ORDER_DELIVERED
```

---

# 🔐 Security Features

- JWT Authentication
- Password Hashing
- Route Protection
- Role-Based Access Control
- Environment Variables
- Request Validation
- Centralized Error Handling

---

# 📚 API Endpoints

## Authentication

```http
POST /api/auth/register
POST /api/auth/login
```

---

## Restaurants

```http
GET    /api/restaurants
GET    /api/restaurants/nearby
POST   /api/restaurants
PUT    /api/restaurants/:id
DELETE /api/restaurants/:id
```

---

## Menu

```http
POST   /api/menu
GET    /api/menu/:restaurantId
PUT    /api/menu/:id
DELETE /api/menu/:id
```

---

## Cart

```http
POST   /api/cart/add
GET    /api/cart
DELETE /api/cart/:id
```

---

## Orders

```http
POST   /api/orders
GET    /api/orders
PUT    /api/orders/status
```

---

## Reviews

```http
POST   /api/reviews
GET    /api/reviews/:restaurantId
DELETE /api/reviews/:id
```

---

## Reservations

```http
POST   /api/reservations
GET    /api/reservations
DELETE /api/reservations/:id
```

---

# 🧪 Testing

The backend APIs were tested using:

- Postman
- MongoDB Atlas
- Manual API Validation

---

# ⚙️ Environment Variables

Create a `.env` file:

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

---

# ▶️ Installation

### Clone Repository

```bash
git clone <repository-url>
```

### Navigate to Backend

```bash
cd backend
```

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

### Production

```bash
npm start
```

---

# 📈 Future Enhancements

- Payment Gateway Integration
- Redis Caching
- AI Recommendation Engine
- Push Notifications
- Email Notifications
- Restaurant Analytics Dashboard
- Loyalty Program
- Coupon Management
- Event Booking Module

---

# 👨‍💻 Author

**Vishal Kumar**

Software Engineer | MERN Stack Developer

GitHub:
https://github.com/vishalku03

---

# 📄 License

This project is developed for educational, internship, and portfolio purposes.
