@echo off
echo ========================================
echo Etiquette LMS - MongoDB Edition
echo ========================================
echo.

echo Checking MongoDB...
mongosh --eval "db.adminCommand('ping')" >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] MongoDB is not running!
    echo Please start MongoDB first.
    echo.
    pause
    exit /b 1
)
echo [OK] MongoDB is running
echo.

echo Installing dependencies...
call npm install
cd server
call npm install
cd ..
echo [OK] Dependencies installed
echo.

echo Seeding database with sample data...
cd server
call npm run seed
cd ..
echo.

echo Starting application...
echo Backend: http://localhost:3001
echo Frontend: http://localhost:5173
echo.
echo Login Credentials:
echo   Admin: etiqettelms@gmail.com / Akshara@123
echo   Employee: john.doe@company.com / employee123
echo.
echo Press Ctrl+C to stop
echo.

start cmd /k "cd server && npm run dev"
timeout /t 3 >nul
npm run dev
