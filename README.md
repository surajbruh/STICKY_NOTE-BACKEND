# 🗒️ Sticky Notes - Backend

The **Sticky Notes Backend** is built using **Express.js**, **MongoDB**, and **Redis** to handle note management efficiently.  
It provides RESTful APIs for creating, editing, deleting, and fetching user notes.

---

## 🚀 Features

- 📦 CRUD operations for notes (Create, Read, Update, Delete).  
- ⚡ Fast data retrieval using **Redis caching**.  
- 🧩 Structured and modular architecture.  
- 🔒 Environment variables support with **dotenv**.  
- 🌐 **CORS** enabled for secure frontend-backend communication.  
- 🗃️ Database connection via **Mongoose**.

---

## 🏗️ Project Structure

```
BACK/
├── node_modules/
├── src/
│   ├── config/           # Database and Redis configuration
│   ├── controllers/      # Business logic for notes
│   ├── middleware/       # Middleware (e.g., Redis cache, validation)
│   ├── models/           # MongoDB schemas
│   ├── routes/           # API routes
│   ├── utils/            # Utility functions
│   └── index.js          # Server entry point
├── .env                  # Environment variables
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

---

## 🧰 Technologies Used

| Category | Technologies |
|-----------|---------------|
| **Backend Framework** | Express.js |
| **Database** | MongoDB |
| **Caching** | Redis |
| **ORM** | Mongoose |
| **Config & Security** | dotenv, cors |

---

## ⚙️ Setup Instructions

1. Clone the repository  
   ```bash
   git clone https://github.com/surajbruh/STICKY_NOTE-BACKEND.git
   ```

2. Navigate to the project folder  
   ```bash
   cd STICKY_NOTE-BACKEND
   ```

3. Install dependencies  
   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory  
   ```bash
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   REDIS_URL=your_redis_connection_string
   ```

5. Start the backend server  
   ```bash
   npm start
   ```

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|-----------|-------------|
| **POST** | `/api/notes/upload` | Create a new note |
| **GET** | `/api/note/notes` | Get all notes |
| **PUT** | `/api/note/delete/:id` | Update a note |
| **DELETE** | `/api/note/update/:id` | Delete a note |

---

## 🔗 Frontend Repository

👉 [Sticky Notes Backend](https://github.com/surajbruh/STICKY_NOTE-FRONTEND)

---

## 🤝 Contributing

Feel free to fork the repository, open issues, or submit pull requests.

---

## 🧑‍💻 Author

**Suraj Yadav**  
🔗 [GitHub](https://github.com/surajbruh)