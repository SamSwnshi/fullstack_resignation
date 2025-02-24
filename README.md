# Samswnshi Full-Stack Resignation System

## Overview
Full-Stack Resignation System is a web-based platform that facilitates employee resignation management. The system enables users to submit resignations, answer exit questionnaires, track their resignation status, and receive notifications. Admins can review resignations, respond to exit questionnaires, and manage resignation approvals.

## Features
### User Features:
- Submit a resignation request
- Answer exit interview questions
- View resignation status
- Receive notifications

### Admin Features:
- Review and manage resignation requests
- Respond to exit questionnaires
- Conclude resignation processes

## Tech Stack
### Frontend:
- **Framework:** React (Vite)
- **Styling:** Vanilla CSS
- **State Management:** Context API

### Backend:
- **Runtime:** Node.js (Express.js)
- **Database:** MongoDB
- **Authentication:** JWT & Cookies

## Directory Structure
```
└── samswnshi-fullstack_resignation/
    ├── client/                # Frontend React app
    │   ├── public/            # Static assets
    │   ├── src/               # Source code
    │   │   ├── component/     # UI Components
    │   │   ├── config/        # API configuration
    │   │   ├── assets/        # Images and assets
    ├── server/                # Backend Node.js app
    │   ├── controllers/       # Business logic
    │   ├── db/                # Database configuration
    │   ├── middleware/        # Authentication middleware
    │   ├── models/            # Mongoose schema models
    │   ├── routes/            # API endpoints
    │   ├── utils/             # Utility functions
```

## Installation
### Prerequisites:
- Node.js (v16+)
- MongoDB (local or cloud instance)
- Vite (for frontend development)

### Steps:
1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-repo/samswnshi-fullstack_resignation.git
   cd samswnshi-fullstack_resignation
   ```

2. **Setup Client:**
   ```sh
   cd client
   npm install
   npm run dev
   ```

3. **Setup Server:**
   ```sh
   cd ../server
   npm install
   npm start
   ```

## Environment Variables
Create a `.env` file in both `client/` and `server/` directories.
### For the Client:
```
VITE_API_URL=http://localhost:5000
```

### For the Server:
```
PORT=8080
MONGO_URI=mongodb://localhost:27017/resignationDB
JWT_SECRET=your_jwt_secret
```

## API Endpoints
### Authentication:
- `POST /api/auth/signup` - Register a new user
- `POST /api/auth/login` - Login and receive a token

### User:
- `POST /api/user/resign` - Submit a resignation
- `GET /api/user/status` - Check resignation status

### Admin:
- `GET /api/admin/resignations` - View all resignation requests
- `POST /api/admin/conclude` - Conclude a resignation process

## Contributing
Feel free to fork the repository, make improvements, and submit pull requests.

## License
This project is licensed under the MIT License.

