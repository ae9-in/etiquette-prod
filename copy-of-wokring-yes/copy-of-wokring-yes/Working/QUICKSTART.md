# Quick Start Guide - MongoDB Migration

## Step 1: Install MongoDB

**Windows:**
```bash
# Download from: https://www.mongodb.com/try/download/community
# Or use Chocolatey:
choco install mongodb
```

**macOS:**
```bash
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb-community
```

**Linux/Docker:**
```bash
docker run -d -p 27017:27017 --name mongodb mongo:latest
```

## Step 2: Install Dependencies

```bash
# Install frontend dependencies
npm install

# Install backend dependencies
cd server
npm install
cd ..
```

## Step 3: Create Admin User

```bash
cd server
npm run create-admin
cd ..
```

This creates an admin user with:
- Email: `etiqettelms@gmail.com`
- Password: `Akshara@123`

## Step 4: Start the Application

**Option A: Run both frontend and backend together**
```bash
npm run dev:all
```

**Option B: Run separately in two terminals**

Terminal 1 (Backend):
```bash
cd server
npm run dev
```

Terminal 2 (Frontend):
```bash
npm run dev
```

## Step 5: Access the Application

Open your browser and go to: http://localhost:5173

Login with:
- Email: `etiqettelms@gmail.com`
- Password: `Akshara@123`

## Troubleshooting

### MongoDB not running?
```bash
# Check if MongoDB is running
mongosh --eval "db.adminCommand('ping')"

# Start MongoDB
# Windows: Start MongoDB service from Services
# macOS: brew services start mongodb-community
# Docker: docker start mongodb
```

### Port already in use?
```bash
# Check what's using port 3001
netstat -ano | findstr :3001  # Windows
lsof -i :3001                  # macOS/Linux

# Kill the process or change PORT in server/.env
```

### Can't connect to backend?
- Make sure backend is running on port 3001
- Check `VITE_API_URL` in `.env.local` is set to `http://localhost:3001/api`
- Check browser console for CORS errors

## What Changed?

✅ Replaced Supabase with MongoDB
✅ Replaced Supabase Auth with JWT authentication
✅ Removed Google OAuth (now using email/password)
✅ Created Express.js backend API
✅ All data now stored in MongoDB

## Next Steps

1. Create more users from the admin dashboard
2. Assign courses to employees
3. Customize the application as needed

For detailed information, see `MONGODB_MIGRATION.md`
