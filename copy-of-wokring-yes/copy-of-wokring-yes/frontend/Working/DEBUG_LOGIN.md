# 🔍 Login Loading Issue - Debug Guide

## Problem
Login page is stuck in loading state and not redirecting to admin dashboard.

## Root Causes Fixed

### 1. ✅ AuthContext Timeout Issue
**Problem:** The timeout closure was checking a stale `loading` variable  
**Fix:** Properly managed timeout with cleanup

### 2. ✅ Missing React Types
**Problem:** TypeScript couldn't find React type definitions  
**Fix:** Installed `@types/react` and `@types/react-dom`

### 3. ✅ LoginPage Redirect Logic
**Problem:** Missing `platform_admin` role handling  
**Fix:** Added proper role-based redirect

## How to Debug

### Step 1: Check if Backend is Running

```bash
# Test backend health
curl http://localhost:3001/api/profiles

# Expected: 401 Unauthorized (means server is running)
# If connection refused: Backend is not running
```

**Start backend if needed:**
```bash
cd copy-of-wokring-yes/copy-of-wokring-yes/server
npm run dev
```

### Step 2: Check Browser Console

Open DevTools (F12) and look for:

```
[Auth] Initializing session...
[Auth] No token found
```

Or if token exists:
```
[Auth] Token found, loading profile...
[Auth] Profile load error: ...
```

### Step 3: Check Network Tab

1. Open DevTools → Network tab
2. Try to login
3. Look for these requests:

**POST /api/auth/login**
- Status: 200 OK
- Response: `{ "token": "eyJ..." }`

**GET /api/profiles/me**
- Status: 200 OK  
- Response: `{ "id": "...", "role": "platform_admin", ... }`

### Step 4: Check localStorage

In browser console:
```javascript
// Check if token is stored
localStorage.getItem('auth_token')

// Should return: "eyJhbGc..."
// If null: Login didn't store token
```

### Step 5: Manual Token Test

```javascript
// In browser console after login
const token = localStorage.getItem('auth_token');
console.log('Token:', token);

// Test API call
fetch('http://localhost:3001/api/profiles/me', {
  headers: {
    'Authorization': `Bearer ${token}`
  }
})
.then(r => r.json())
.then(d => console.log('Profile:', d))
.catch(e => console.error('Error:', e));
```

## Common Issues & Solutions

### Issue 1: Stuck on "Initializing Session..."

**Cause:** Backend not responding  
**Solution:**
```bash
# Check if backend is running
netstat -ano | findstr :3001

# If not running, start it
cd server
npm run dev
```

### Issue 2: "Invalid credentials" Error

**Cause:** Wrong password or user doesn't exist  
**Solution:**
```bash
# Verify admin user exists
cd server
npx tsx test-admin-login.ts

# If user doesn't exist, seed database
npm run seed
```

### Issue 3: "No token received" Error

**Cause:** Backend login endpoint not returning token  
**Solution:** Check server logs for errors

### Issue 4: "Invalid token" or 403 Error

**Cause:** JWT_SECRET mismatch or expired token  
**Solution:**
```javascript
// Clear token and try again
localStorage.clear();
// Then login again
```

### Issue 5: CORS Error

**Cause:** Frontend can't reach backend  
**Solution:** Check vite.config.ts proxy settings

## Testing Checklist

Run these tests in order:

### ✅ 1. Backend Health
```bash
cd server
npm run verify
```
Expected: Database connection successful

### ✅ 2. Admin User Exists
```bash
cd server
npx tsx test-admin-login.ts
```
Expected: All checks pass

### ✅ 3. API Endpoints
```bash
# Start backend first
cd server
npm run dev

# In another terminal
npx tsx test-full-auth-flow.ts
```
Expected: All API tests pass

### ✅ 4. Frontend Build
```bash
npm run build
```
Expected: Build completes without errors

### ✅ 5. Full Application
```bash
npm run dev:all
```
Expected: Both servers start

## Manual Login Test

1. **Clear everything:**
   ```javascript
   localStorage.clear();
   ```

2. **Open:** http://localhost:3000/login

3. **Open DevTools Console** (F12)

4. **Enter credentials:**
   - Email: `etiqettelms@gmail.com`
   - Password: `Akshara@123`

5. **Watch console for:**
   ```
   [Auth] Initializing session...
   [Auth] No token found
   (after login)
   [Auth] Token found, loading profile...
   [Auth] Profile loaded: { role: "platform_admin", ... }
   ```

6. **Expected redirect:** http://localhost:3000/admin

## Debug Output

### Good Login Flow:
```
[Auth] Initializing session...
[Auth] No token found
(user clicks login)
POST /api/auth/login → 200 OK
Token stored in localStorage
[Auth] Token found, loading profile...
GET /api/profiles/me → 200 OK
Profile loaded
Redirect to /admin
```

### Bad Login Flow (Stuck Loading):
```
[Auth] Initializing session...
[Auth] Token found, loading profile...
GET /api/profiles/me → (pending forever)
[Auth] Initialization timed out, forcing loading=false
```

**Solution:** Backend not responding, restart it

## Environment Check

### Required Services:
- ✅ MongoDB Atlas (cloud - requires internet)
- ✅ Backend Server (port 3001)
- ✅ Frontend Server (port 3000)

### Check Ports:
```powershell
# Windows
netstat -ano | findstr :3000
netstat -ano | findstr :3001

# Should show LISTENING on both ports
```

## Quick Fix Commands

```bash
# Full reset and restart
cd copy-of-wokring-yes/copy-of-wokring-yes

# 1. Clear node_modules (if needed)
# rm -rf node_modules package-lock.json
# npm install

# 2. Install dependencies
npm install
cd server && npm install && cd ..

# 3. Seed database
cd server && npm run seed && cd ..

# 4. Start everything
npm run dev:all
```

## Success Indicators

✅ Backend console shows:
```
Connected to MongoDB
Server running on http://localhost:3001
```

✅ Frontend console shows:
```
VITE v6.x.x ready in xxx ms
➜ Local: http://localhost:3000/
```

✅ Browser console shows:
```
[Auth] Initializing session...
[Auth] No token found
```

✅ After login:
```
[Auth] Token found, loading profile...
Profile loaded successfully
Redirecting to /admin
```

## Still Not Working?

1. **Check this file:** `copy-of-wokring-yes/copy-of-wokring-yes/server/index.ts`
   - Verify MongoDB URI is correct
   - Verify JWT_SECRET is set

2. **Check browser console** for any red errors

3. **Check Network tab** for failed requests

4. **Try incognito mode** to rule out cache issues

5. **Restart both servers** completely

---

**Last Updated:** March 4, 2026  
**Status:** Debugging guide complete
