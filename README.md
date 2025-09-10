# Codefolio - Online Coding Platform

A fullstack web application for coding practice and problem solving, built with React.js frontend and Node.js backend.

## Features

-  User Authentication (Login/Signup)
-  Coding Problems with Multiple Languages Support (C++, Java, JavaScript)
-  Real-time Code Execution via Judge0 API
-  AI-powered Doubt Resolution using Google Gemini
-  Submission History and Analytics
-  Video Tutorials for Problems
-  Admin Panel for Problem Management
-  Redis Caching for Performance

## Tech Stack

### Frontend
- React.js
- Redux Toolkit for State Management
- React Hook Form with Zod Validation
- TailwindCSS + DaisyUI for Styling
- Monaco Editor for Code Writing
- Vite for Build Tool

### Backend
- Node.js with Express.js
- MongoDB with Mongoose ODM
- Redis for Caching
- JWT for Authentication
- Cloudinary for Media Storage
- Judge0 API for Code Execution
- Google Gemini API for AI Chat

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB database
- Redis server
- Required API keys (see Environment Variables section)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/tuhsin45/codefolio.git
   cd codefolio
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   ```

3. **Frontend Setup**
   ```bash
   cd frontend
   npm install
   ```

### Environment Variables

1. **Backend Environment Variables**
   
   Copy the example environment file:
   ```bash
   cd backend
   cp .env.example .env
   ```
   
   Fill in your actual values in `backend/.env`:
   ```env
   PORT=3000
   DB_CONNECT_STRING=mongodb+srv://username:password@cluster.mongodb.net/database_name
   JWT_KEY=your_jwt_secret_key_here
   REDIS_PASS=your_redis_password_here
   JUDGE0_KEY=your_judge0_api_key_here
   GEMINI_KEY=your_gemini_api_key_here
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   ```

### Required External Services

1. **MongoDB Atlas**: Set up a MongoDB cluster
2. **Redis**: Set up Redis server (local or cloud)
3. **Judge0 API**: Get API key from RapidAPI
4. **Google Gemini API**: Get API key from Google AI Studio
5. **Cloudinary**: Set up account for media storage

### Running the Application

1. **Start the Backend Server**
   ```bash
   cd backend
   npm run dev
   # or
   nodemon src/index.js
   ```

2. **Start the Frontend Development Server**
   ```bash
   cd frontend
   npm run dev
   ```

3. **Access the Application**
   - Frontend: http://localhost:5173
   - Backend: http://localhost:3000

## Project Structure

```
codefolio/
├── backend/
│   ├── src/
│   │   ├── config/         # Database and Redis configuration
│   │   ├── controllers/    # Request handlers
│   │   ├── middleware/     # Authentication and validation
│   │   ├── models/         # MongoDB schemas
│   │   ├── routes/         # API routes
│   │   └── utils/          # Utility functions
│   ├── .env.example        # Environment variables template
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── store/          # Redux store configuration
│   │   └── utils/          # Utility functions
│   └── package.json
└── README.md
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout

### Problems
- `GET /api/problems` - Get all problems
- `GET /api/problems/:id` - Get specific problem
- `POST /api/problems` - Create new problem (Admin)
- `PUT /api/problems/:id` - Update problem (Admin)
- `DELETE /api/problems/:id` - Delete problem (Admin)

### Code Submission
- `POST /api/submit/:id` - Submit code for evaluation
- `POST /api/run/:id` - Run code with visible test cases

### AI Chat
- `POST /api/ai/chat` - Chat with AI for doubt resolution

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Security Notes

- Never commit `.env` files to version control
- Keep your API keys secure
- Use strong JWT secrets in production
- Implement rate limiting for production deployment

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

- GitHub: [@tuhsin45](https://github.com/tuhsin45)
- Repository: [https://github.com/tuhsin45/codefolio](https://github.com/tuhsin45/codefolio)
