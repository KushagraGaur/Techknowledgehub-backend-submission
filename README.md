🔐 Node.js Auth System (Backend)

A secure authentication system built with **Node.js, Express, MongoDB, and JWT**. Includes Sign-Up, Sign-In, and password validation.

## 🚀 Features
- **Sign-Up** with email, password, and profile fields.
- **Sign-In** with JWT token generation.
- **Password validation** (8+ chars, 1 uppercase, 1 number, 1 special char).
- **Protected routes** using JWT.
- **CORS-enabled** for frontend integration.

---

## ⚙️ Setup

### 1. Clone the Repository
```bash
git clone https://github.com/KushagraGaur/Techknowledgehub-backend-submission.git
cd auth-system
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Create a `.env` file:
```env
MONGODB_URI=mongodb://localhost:27017/auth-system
JWT_SECRET=your_jwt_secret_here (generate this using "node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"")
PORT=3000
```

### 4. Start the Server
```bash
node app.js
```
Server runs at `http://localhost:3000`.

---

## 📜 API Documentation

### **1. Sign-Up**
- **Endpoint**: `POST /api/auth/signup`
- **Request Body**:
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "mobile_number": "1234567890",
    "gender": "Male",
    "password": "Pass@1234",
    "confirm_password": "Pass@1234"
  }
  ```
- **Success Response**:
  ```json
  { "message": "User registered successfully" }
  ```

### **2. Sign-In**
- **Endpoint**: `POST /api/auth/signin`
- **Request Body**:
  ```json
  {
    "email": "john@example.com",
    "password": "Pass@1234"
  }
  ```
- **Success Response**:
  ```json
  { "token": "eyJhbGciOi...", "redirect": "/dashboard.html" }
  ```

---

## 🧪 Testing

### **1. Using Postman**
1. Test endpoints:
   - `POST /api/auth/signup`
   - `POST /api/auth/signin`

### **2. Frontend (Dashboard)**
1. Open `http://localhost:3000/dashboard.html`.
2. Check browser **Console (F12)** and **Network tab** for errors.

---

## 🛠️ Troubleshooting
| Issue | Fix |
|-------|-----|
| `403 Forbidden` | Enable CORS in `app.js` and add `credentials: 'include'` to fetch. |
| `MongoDB Error` | Run `mongod` to start MongoDB. |
| `JWT Issues` | Verify `.env` has `JWT_SECRET`. |

---

## 📂 Project Structure
```
auth-system/
├── config/          # DB connection
├── controllers/     # Auth logic
├── models/          # MongoDB schemas
├── public/          # Frontend (HTML)
├── routes/          # API endpoints
├── validations/     # Joi schemas
├── app.js           # Main server
└── README.md
```

