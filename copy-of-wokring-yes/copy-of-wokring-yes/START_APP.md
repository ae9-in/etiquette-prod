# 🚀 Start the Application

## Quick Start (Recommended)

### Option 1: Start Both Servers Together
```bash
cd copy-of-wokring-yes/copy-of-wokring-yes
npm run dev:all
```

### Option 2: Start Servers Separately

**Terminal 1 - Backend Server:**
```bash
cd copy-of-wokring-yes/copy-of-wokring-yes/server
npm run dev
```

**Terminal 2 - Frontend Server:**
```bash
cd copy-of-wokring-yes/copy-of-wokring-yes
npm run dev
```

## Access the Application

- **Frontend:** http://localhost:3000
- **Backend API:** http://localhost:3001

## Login Credentials

### Admin Account
```
Email: etiqettelms@gmail.com
Password: Akshara@123
```

### HR Account
```
Email: hr@company.com
Password: hr123
```

### Employee Accounts
```
Password: employee123

Available Users:
- john.doe@company.com
- jane.smith@company.com
- mike.johnson@company.com
- sarah.williams@company.com
```

## First Time Setup

If the database is empty, seed it:
```bash
cd copy-of-wokring-yes/copy-of-wokring-yes/server
npm run seed
```

## Troubleshooting

### Can't connect to MongoDB?
- Check your internet connection (using MongoDB Atlas)
- Verify the MONGODB_URI in server/index.ts

### Port already in use?
- Kill the process using the port:
  ```bash
  # Windows
  netstat -ano | findstr :3000
  taskkill /PID <PID> /F
  ```

### Build errors?
- Clear node_modules and reinstall:
  ```bash
  rm -rf node_modules package-lock.json
  npm install
  ```
