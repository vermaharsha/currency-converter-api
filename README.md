
# 💱 Currency Converter API

The **Currency Converter API** is a Node.js-based backend project that allows users to register, authenticate, and convert currencies in real time using live exchange rate data. This project is built with Express, MongoDB, and integrates a third-party currency conversion API. It also supports token-based authentication using JWT.

---

## 📌 Project Overview

This project simulates a real-world API for a currency converter app. It enables:
- User account creation and login
- Secure authentication using JWT
- Currency conversion from one currency to another using live exchange rates
- Modular, scalable folder structure following best practices

Ideal for anyone looking to understand:
- RESTful API development
- MongoDB with Mongoose
- Third-party API integration
- JWT authentication

---

## ✨ Features

- User signup and login
- Protected routes with JWT
- Real-time currency conversion via external API
- Clean folder structure using MVC pattern
- Fully testable with Thunder Client/Postman
- MongoDB persistence for user data

---

## 🛠️ Technologies Used

- **Node.js** – JavaScript runtime
- **Express.js** – API framework
- **MongoDB** – NoSQL database
- **Mongoose** – ODM for MongoDB
- **JWT** – Token-based authentication
- **Axios** – For calling external currency API
- **dotenv** – Environment variable management
- **Nodemon** – Development tool
- **Thunder Client** – API testing (VS Code extension)

---

## 🚀 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/vermaharsha/currency-converter-api.git
cd currency-converter-api
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Create a `.env` File

Create a `.env` file in the root directory and add the following:

```env
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<dbname>
JWT_SECRET=your_jwt_secret
CURRENCY_API_URL=https://v6.exchangerate-api.com/v6
CURRENCY_API_KEY=your_currency_api_key
```

> Replace `<username>`, `<password>`, `<cluster>`, `<dbname>`, and API key with actual values.

### 4. Start the Server

```bash
npm run dev
```

> Server will run at `http://localhost:5000`

---

## 📫 API Endpoints

All routes starting with `/api` are available for public or authenticated access.

---

### 1️⃣ **Signup a New User**

* **Method**: `POST`
* **URL**: `/api/auth/signup`
* **Body (JSON)**:

```json
{
  "username": "harsha",
  "email": "harsha@example.com",
  "password": "securepass123"
}
```

* ✅ **Response**:

```json
{
  "message": "User registered successfully"
}
```

---

### 2️⃣ **Login to Get JWT Token**

* **Method**: `POST`
* **URL**: `/api/auth/login`
* **Body (JSON)**:

```json
{
  "email": "harsha@example.com",
  "password": "securepass123"
}
```

* ✅ **Response**:

```json
{
  "token": "JWT_TOKEN",
  "user": {
    "id": "user_id",
    "username": "harsha",
    "email": "harsha@example.com"
  }
}
```

---

### 3️⃣ **Convert Currency (Protected)**

* **Method**: `GET`
* **URL**: `/api/currency/convert?from=USD&to=INR&amount=100`
* **Headers**:

```http
Authorization: Bearer <JWT_TOKEN>
```

* ✅ **Response**:

```json
{
  "from": "USD",
  "to": "INR",
  "amount": "100",
  "rate": 83.01,
  "convertedAmount": 8301
}
```

---

## 🖼️ Visuals (API Testing Screenshots)

### 🧾 1. Signup a New User

![User Registration](https://github.com/user-attachments/assets/2f709db3-3873-4a95-845e-ed0977f151af)

---

### 🔑 2. Login to Get JWT Token

![User Login](https://github.com/user-attachments/assets/49725fc7-06b4-44fc-a718-7bf1e0735f8c)

---

### 💱 3. Test Currency Conversion Endpoint

![Test Currency Conversion Endpoint](https://github.com/user-attachments/assets/1b3ee05c-93b7-4255-9854-1434109d1f4d)

---

### 🗂️ 4. MongoDB (User Collection View)

![MongoDB Database](https://github.com/user-attachments/assets/4e984cf6-f55c-4d1a-a734-d168dade2d0b)

---

## 🙋‍♀️ Author

Made with ❤️ by [Harsha Verma](https://github.com/vermaharsha)

