# Minimal Library Management System

A clean and responsive library management system built using **React**, **Redux Toolkit Query**, **TypeScript**, **Node.js**, **Express**, and **MongoDB**. This project is designed to provide a simple yet effective way to manage a library's book inventory and borrowing system, with all features accessible publicly—no login required.

## 🔗 Live Demo
- **Client**: [https://b5-assignment-4.vercel.app](https://b5-assignment-4.vercel.app)
- **Server**: [https://b5-assignment-3.vercel.app](https://b5-assignment-3.vercel.app)

## 🚀 Features
- **🔍 View All Books**: Browse the entire collection of books.
- **➕ Add Book**: Add new books to the library inventory.
- **📝 Edit Book**: Update existing book details.
- **❌ Delete Book**: Remove books from the inventory.
- **📥 Borrow Book**: Borrow books with real-time tracking.
- **📊 Borrow Summary View**: View a summary of borrowed books.
- **✅ Real-time Updates**: Powered by Redux Toolkit Query for seamless data fetching and caching.
- **🌐 Backend**: Built with Express and MongoDB for robust data management.
- **💡 Toast Notifications**: User-friendly feedback with Sonner.
- **🎨 Responsive UI**: Styled with TailwindCSS for a modern and mobile-friendly interface.

## 🧩 Tech Stack
| Layer         | Technology                     |
|---------------|--------------------------------|
| **Frontend**  | React + TypeScript             |
| **API**       | Redux Toolkit Query            |
| **Styling**   | Tailwind CSS                   |
| **Backend**   | Node.js + Express.js           |
| **Database**  | MongoDB (Mongoose)             |
| **Toast UI**  | Sonner                         |

## 🔧 Installation

### Prerequisites
- **Node.js** (v16 or higher)
- **MongoDB** (local or cloud instance, e.g., MongoDB Atlas)
- **Git**

### Steps
1. **Clone the Repository**
   ```bash
   git clone https://github.com/git-zahidul-islam/B5-Assignment-4
   cd B5-Assignment-4
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**
   Create a `.env` file in the root of the frontend project and add the following:
   ```env
   VITE_BASE_URL=https://b5-assignment-3.vercel.app
   ```
4. Open your browser and navigate to `http://localhost:5173` to view the application.

## 📡 Backend API Endpoints
The backend provides the following API endpoints for managing books and borrowing:

| Method | Endpoint                   | Description                     |
|--------|----------------------------|---------------------------------|
| GET    | `/api/books`              | Get all books                   |
| GET    | `/api/books/:id`          | Get a single book by ID         |
| POST   | `/api/books`              | Add a new book                  |
| PATCH  | `/api/books/:id`          | Update a book by ID             |
| DELETE | `/api/books/:id`          | Delete a book by ID             |
| POST   | `/api/borrow`             | Borrow a book                   |
| GET    | `/api/borrow/summary`     | Get borrow summary report       |

## 📚 Usage
- **View Books**: Navigate to the homepage to see all available books.
- **Add a Book**: Use the "Add Book" form to include a new book in the library.
- **Edit/Delete Books**: Click on a book to edit or delete it from the inventory.
- **Borrow Books**: Select a book and borrow it; the system tracks borrowing in real-time.
- **Borrow Summary**: View a summary of all borrowed books.

## 🛠️ Development
- **Frontend**: The frontend is built with React and TypeScript, using Redux Toolkit Query for API management and TailwindCSS for styling.
- **Backend**: The backend is powered by Node.js and Express, with MongoDB as the database and Mongoose for schema management.
- **Real-time Updates**: RTK Query handles caching and real-time updates, ensuring a smooth user experience.
- **Notifications**: Sonner provides toast notifications for user actions like adding, editing, or borrowing books.

## 📝 Notes
- Ensure the backend server is running before starting the frontend.
- The application is fully responsive and works on mobile, tablet, and desktop devices.
- No authentication is required, making all features publicly accessible.