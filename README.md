# Samswnshi Fullstack Resignation System

## Introduction
The **Samswnshi Fullstack Resignation System** is a web-based application that facilitates employee resignation processes. It provides a user-friendly interface for employees to submit resignation requests and allows administrators to review, manage, and conclude resignation cases efficiently.

This full-stack application is built using modern JavaScript frameworks and technologies, leveraging **React (Vite)** for the frontend and **Node.js with Express** for the backend. 

---

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Directory Structure](#directory-structure)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Troubleshooting](#troubleshooting)
- [Contributors](#contributors)
- [License](#license)

---

## Features

### **User Features**
- Employee registration and login.
- Submit resignation requests.
- Answer exit questionnaires.
- View resignation status updates.
- Receive notifications.

### **Admin Features**
- Admin authentication.
- View pending resignation requests.
- Approve or reject resignations.
- Manage exit questionnaires and notifications.
- Conclude employee resignation process.

---

## Technologies Used

### **Frontend (Client)**
- **React (Vite)** – Frontend framework
- **CSS** – Styling
- **Axios** – API communication
- **React Router** – Navigation

### **Backend (Server)**
- **Node.js & Express.js** – Backend framework
- **MongoDB** – Database
- **JWT (JSON Web Token)** – Authentication
- **Mongoose** – ORM for MongoDB

---

## Directory Structure

```plaintext
samswnshi-fullstack_resignation/
├── client/ (Frontend)
│   ├── public/ (Static assets)
│   ├── src/ (Source code)
│   │   ├── component/ (Reusable UI components)
│   │   │   ├── Admin/ (Admin views)
│   │   │   ├── User/ (User views)
│   │   │   ├── Login/ (Login component)
│   │   │   ├── SignUp/ (Signup component)
│   │   ├── config/api.js (API configuration)
│   ├── package.json (Dependencies)
│   ├── vite.config.js (Vite configuration)
│   ├── .env (Environment variables)
│
├── server/ (Backend)
│   ├── controllers/ (Business logic)
│   ├── models/ (Database models)
│   ├── routes/ (API routes)
│   ├── middleware/ (Auth middleware)
│   ├── db/config.js (Database configuration)
│   ├── utils/calendarific.js (Utility functions)
│   ├── server.js (Main server file)
│   ├── package.json (Dependencies)
│   ├── .env (Environment variables)
Installation
Prerequisites
Node.js
MongoDB
Git
Steps to Run Locally
Clone the repository

sh
Copy
Edit
git clone https://github.com/your-username/samswnshi-fullstack_resignation.git
cd samswnshi-fullstack_resignation
Install Dependencies

For Backend

sh
Copy
Edit
cd server
npm install
For Frontend

sh
Copy
Edit
cd client
npm install
Setup Environment Variables

Create a .env file in both the client/ and server/ directories.
Add necessary API keys and configurations.
Run the Backend

sh
Copy
Edit
cd server
npm start
The backend will start at http://localhost:5000

Run the Frontend

sh
Copy
Edit
cd client
npm run dev
The frontend will start at http://localhost:5173

Configuration
Backend Environment Variables (server/.env)
plaintext
Copy
Edit
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
Frontend Environment Variables (client/.env)
plaintext
Copy
Edit
VITE_API_BASE_URL=http://localhost:5000
Usage
For Users
Register and log in.
Submit a resignation request.
Answer the exit questionnaire.
View the status of resignation requests.
For Admins
Log in as an admin.
Review employee resignations.
Approve, reject, or conclude resignation cases.
Send notifications to users.
API Endpoints
Endpoint	Method	Description
/api/auth/login	POST	User/Admin login
/api/auth/signup	POST	User signup
/api/user/resign	POST	Submit resignation request
/api/user/status	GET	Get resignation status
/api/admin/resignations	GET	View all resignations
/api/admin/approve/:id	PUT	Approve a resignation
/api/admin/reject/:id	PUT	Reject a resignation
Troubleshooting
Common Issues & Solutions
MongoDB Connection Error

Ensure MongoDB is running locally or using a cloud database.
Check if MONGO_URI in .env is correct.
Frontend Not Connecting to Backend

Make sure the backend is running.
Verify VITE_API_BASE_URL in client/.env.
Authentication Issues

Ensure JWT_SECRET in backend .env is correct.
If using Postman, add Authorization headers properly.
Contributors
Your Name - GitHub Profile
Other Contributors - Feel free to add your name if you contribute!
License
This project is licensed under the MIT License - see the LICENSE file for details.

