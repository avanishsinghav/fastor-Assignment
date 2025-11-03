# 🚀 Fastor CRM Backend (Node.js + Express + MongoDB)

A powerful backend service for a Customer Relationship Management (CRM) system built for employees/counselors to manage public enquiries, claim leads, and track assigned clients.

This backend ensures security, scalability, and clean modular architecture — ideal for real-world CRM workflows.

## 🚀 Tech Stack

Node.js + Express.js – Backend framework
MongoDB (Mongoose) – Database
JWT – Authentication
Bcrypt.js – Password hashing
Express-rate-limit – Prevent API abuse
CORS – Secure cross-origin access

## ⚙️ Features

✅ Employee Registration & Login (JWT Auth)

✅ Public Enquiry Form (no authentication required)

✅ View all Unclaimed Enquiries

✅ Claim Enquiry (make it private)

✅ View Claimed Enquiries of logged-in employee

✅ Modular folder structure

## 📁 Project Structure

```
fastor-crm-backend/
│
├── config/
│   └── db.js
├── controllers/
│   ├── authController.js
│   └── enquiryController.js
├── middlewares/
│   ├── authMiddleware.js
│   └── rateLimiter.js
├── models/
│   ├── EmployeeModel.js
│   └── EnquiryModel.js
├── routes/
│   ├── authRoutes.js
│   └── enquiryRoutes.js
├── utils/
│   └── generateToken.js
├── server.js
├── package.json
└── .env
```

## 🔐 Environment Variables

Create .env file:

```
PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET_KEY=your_secret_key
```

## 🔑 Auth APIs

✅ Register Employee
POST /api/auth/register
Body

````{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "123456"
}```

## ✅ Login Employee

POST /api/auth/login
Body
````

{
"email": "john@example.com",
"password": "123456"
}```

### 📞 Enquiry APIs

## ✅ Create Public Enquiry (No Login)

POST /api/enquiry/public/enquiries

````{
  "name": "Alice",
  "email": "alice@gmail.com",
  "phone": "9876543210",
  "message": "Interested in AI course",
  "courseInterest": "AI/ML"
}```

## ✅ Get All Unclaimed Enquiries

GET /api/enquiry/unclaimed
🔒 Requires Bearer Token
Header

```Authorization: Bearer <token>```

## ✅ Claim an Enquiry

PATCH /api/enquiry/:id/claim
🔒 Requires Bearer Token

## ✅ Get My Claimed Enquiries

GET /api/enquiry/claimed
🔒 Requires Bearer Token


## 🧪 How to Test APIs
Step
1️⃣	Register employee
2️⃣	Login → copy token
3️⃣	Submit enquiry (public)
4️⃣	Get unclaimed enquiries (add token)
5️⃣	Claim enquiry
6️⃣	View my claimed enquiries

## 🚀 Run Locally

```npm install
npm start```

````
