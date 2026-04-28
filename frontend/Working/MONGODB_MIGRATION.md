# MongoDB Migration Guide

This project has been migrated from Supabase to MongoDB. Follow these steps to set up and run the application.

## Prerequisites

- Node.js (v18 or higher)
- MongoDB (v6 or higher)
- npm or yarn

## Installation Steps

### 1. Install MongoDB

**Windows:**
```bash
# Download and install from: https://www.mongodb.com/try/download/community
# Or use Chocolatey:
choco install mongodb
```

**macOS:**
```bash
brew tap mongodb/brew
brew install mongodb-community
```

**Linux:**
```bash
# Ubuntu/Debian
sudo apt-get install mongodb

# Or use Docker:
docker run -d -p 27017:27017 --name mongodb mongo:latest
```

### 2. Start MongoDB

```bash
# Windows (if installed as service, it starts automatically)
# Or manually:
mongod

# macOS:
brew services start mongodb-community

# Linux:
sudo systemctl start mongod

# Docker:
docker start mongodb
```

### 3. Install Dependencies

**Frontend:**
```bash
cd copy-of-wokring-yes/copy-of-wokring-yes
npm install
```

**Backend:**
```bash
cd copy-of-wokring-yes/copy-of-wokring-yes/server
npm install
```

### 4. Configure Environment Variables

Update `.env.local` in the project root:

```env
VITE_MONGODB_URI=mongodb://localhost:27017/etiquette_lms
VITE_API_URL=http://localhost:3001/api
VITE_JWT_SECRET=your-secret-key-change-in-production

VITE_ENABLE_REMOTE=true
VITE_USE_LOCAL_ADMIN=false
VITE_USE_LOCAL_EMPLOYEE=false

VITE_EMPLOYEE_LOGIN_DOMAIN=employees.local

VITE_PLATFORM_ADMIN_EMAIL=etiqettelms@gmail.com
VITE_PLATFORM_ADMIN_PASSWORD=Akshara@123
```

Create `server/.env` for backend:

```env
MONGODB_URI=mongodb://localhost:27017/etiquette_lms
JWT_SECRET=your-secret-key-change-in-production
PORT=3001
```

### 5. Create Initial Admin User

Connect to MongoDB and create the first admin user:

```bash
mongosh etiquette_lms
```

Then run:

```javascript
db.users.insertOne({
  email: "etiqettelms@gmail.com",
  password: "$2a$10$YourHashedPasswordHere", // Use bcrypt to hash "Akshara@123"
  name: "Platform Admin",
  role: "platform_admin",
  department: "Administration",
  avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Admin&backgroundColor=b6e3f4",
  progress: {},
  assignedCourses: [],
  xp: 0,
  createdAt: new Date()
})
```

Or use this Node.js script to hash the password:

```javascript
const bcrypt = require('bcryptjs');
const password = 'Akshara@123';
bcrypt.hash(password, 10).then(hash => console.log(hash));
```

### 6. Run the Application

**Terminal 1 - Backend Server:**
```bash
cd copy-of-wokring-yes/copy-of-wokring-yes/server
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd copy-of-wokring-yes/copy-of-wokring-yes
npm run dev
```

The application will be available at:
- Frontend: http://localhost:5173
- Backend API: http://localhost:3001

## Key Changes from Supabase

### Authentication
- **Before:** Supabase Auth with Google OAuth
- **After:** JWT-based authentication with email/password

### Database
- **Before:** PostgreSQL with Supabase client
- **After:** MongoDB with REST API

### Data Structure
- Users collection stores all user data
- No separate auth tables needed
- Progress and XP stored directly in user documents

### API Endpoints

**Auth:**
- POST `/api/auth/register` - Register new user
- POST `/api/auth/login` - Login with email/password

**Profiles:**
- GET `/api/profiles/me` - Get current user profile
- GET `/api/profiles` - Get all profiles (admin only)
- PUT `/api/profiles/:id` - Update profile

**Users (Admin):**
- POST `/api/users` - Create new user
- PUT `/api/users/:id` - Update user
- DELETE `/api/users/:id` - Delete user

**Progress:**
- POST `/api/progress/module` - Update module progress
- POST `/api/progress/complete` - Submit course completion

**XP:**
- POST `/api/xp` - Update user XP

## Database Schema

### Users Collection

```javascript
{
  _id: ObjectId,
  email: String,
  password: String (hashed with bcrypt),
  name: String,
  role: String, // 'platform_admin', 'hr', 'employee'
  department: String,
  avatar: String,
  progress: {
    [courseId]: {
      completedModules: [String],
      assessmentScore: Number,
      isCompleted: Boolean,
      completionDate: String,
      lastUpdated: String
    }
  },
  assignedCourses: [String],
  xp: Number,
  createdAt: Date,
  updatedAt: Date
}
```

## Troubleshooting

### MongoDB Connection Issues
```bash
# Check if MongoDB is running
mongosh --eval "db.adminCommand('ping')"

# Check MongoDB logs
# Windows: C:\Program Files\MongoDB\Server\6.0\log\mongod.log
# macOS: /usr/local/var/log/mongodb/mongo.log
# Linux: /var/log/mongodb/mongod.log
```

### Backend Server Issues
```bash
# Check if port 3001 is available
netstat -ano | findstr :3001  # Windows
lsof -i :3001                  # macOS/Linux

# View server logs
cd server
npm run dev
```

### Authentication Issues
- Ensure JWT_SECRET is set in both frontend and backend
- Check that the admin user exists in MongoDB
- Verify password hash matches

## Migration from Existing Supabase Data

If you have existing data in Supabase, you can export and import:

1. Export from Supabase:
```sql
COPY (SELECT * FROM profiles) TO '/tmp/profiles.csv' CSV HEADER;
```

2. Transform and import to MongoDB using a migration script

## Production Deployment

1. Use a hosted MongoDB service (MongoDB Atlas, etc.)
2. Update environment variables with production URLs
3. Set strong JWT_SECRET
4. Enable HTTPS
5. Configure CORS properly
6. Set up proper authentication middleware
7. Add rate limiting and security headers

## Support

For issues or questions, refer to:
- MongoDB Documentation: https://docs.mongodb.com/
- Express.js Documentation: https://expressjs.com/
- JWT Documentation: https://jwt.io/
