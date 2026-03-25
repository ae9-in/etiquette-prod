@echo off
echo ========================================
echo Testing and Starting Etiquette LMS
echo ========================================
echo.

echo [1/4] Testing MongoDB Connection...
cd server
call npm run verify
if %errorlevel% neq 0 (
    echo.
    echo ERROR: Cannot connect to MongoDB!
    echo Please check your internet connection and MongoDB Atlas credentials.
    pause
    exit /b 1
)

echo.
echo [2/4] Checking if database is seeded...
echo If you see "Total: 0 users" above, run: npm run seed
echo.

echo [3/4] Starting Backend Server...
start "Backend Server" cmd /k "npm run dev"
timeout /t 3 /nobreak > nul

echo.
echo [4/4] Starting Frontend Server...
cd ..
start "Frontend Server" cmd /k "npm run dev"

echo.
echo ========================================
echo Servers are starting!
echo ========================================
echo.
echo Frontend: http://localhost:3000
echo Backend:  http://localhost:3001
echo.
echo Login with:
echo   Email: etiqettelms@gmail.com
echo   Password: Akshara@123
echo.
echo Press any key to exit this window...
pause > nul
