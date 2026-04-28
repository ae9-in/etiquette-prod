#!/bin/bash

echo "========================================"
echo "Etiquette LMS - MongoDB Edition"
echo "========================================"
echo ""

echo "Checking MongoDB..."
if ! mongosh --eval "db.adminCommand('ping')" > /dev/null 2>&1; then
    echo "[ERROR] MongoDB is not running!"
    echo "Please start MongoDB first:"
    echo "  macOS: brew services start mongodb-community"
    echo "  Linux: sudo systemctl start mongod"
    echo "  Docker: docker start mongodb"
    exit 1
fi
echo "[OK] MongoDB is running"
echo ""

echo "Installing dependencies..."
npm install
cd server
npm install
cd ..
echo "[OK] Dependencies installed"
echo ""

echo "Seeding database with sample data..."
cd server
npm run seed
cd ..
echo ""

echo "Starting application..."
echo "Backend: http://localhost:3001"
echo "Frontend: http://localhost:5173"
echo ""
echo "Login Credentials:"
echo "  Admin: etiqettelms@gmail.com / Akshara@123"
echo "  Employee: john.doe@company.com / employee123"
echo ""
echo "Press Ctrl+C to stop"
echo ""

# Start backend in background
cd server
npm run dev &
BACKEND_PID=$!
cd ..

# Wait a bit for backend to start
sleep 3

# Start frontend (this will block)
npm run dev

# Cleanup on exit
kill $BACKEND_PID 2>/dev/null
