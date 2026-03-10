# Database Seeding Complete ✅

The MongoDB database has been successfully populated with sample data for testing and development.

## 📊 Database Overview

**Database Name:** `etiquette_lms`
**Total Collections:** 6
**Total Documents:** 29

---

## 📁 Collections Created

### 1. Users Collection (6 documents)

Complete user accounts with authentication, profiles, and progress tracking.

#### Platform Admin
- **Email:** `etiqettelms@gmail.com`
- **Password:** `Akshara@123`
- **Role:** Platform Admin
- **Department:** Administration
- **XP:** 0
- **Access:** Full system access, user management, course assignment

#### HR Manager
- **Email:** `hr@company.com`
- **Password:** `hr123`
- **Role:** HR
- **Department:** Human Resources
- **XP:** 0
- **Access:** User management, course assignment

#### Employees

**John Doe**
- **Email:** `john.doe@company.com`
- **Password:** `employee123`
- **Department:** Engineering
- **XP:** 200
- **Assigned Courses:** 3
- **Progress:** Started Information Security Awareness (1 module completed)

**Jane Smith**
- **Email:** `jane.smith@company.com`
- **Password:** `employee123`
- **Department:** Marketing
- **XP:** 1,200
- **Assigned Courses:** 3
- **Progress:** Completed Diversity and Inclusion (Score: 85%)

**Mike Johnson**
- **Email:** `mike.johnson@company.com`
- **Password:** `employee123`
- **Department:** Sales
- **XP:** 0
- **Assigned Courses:** 2
- **Progress:** No courses started yet

**Sarah Williams** (Top Performer)
- **Email:** `sarah.williams@company.com`
- **Password:** `employee123`
- **Department:** Finance
- **XP:** 2,400
- **Assigned Courses:** 3
- **Progress:** 
  - Completed Data Privacy (Score: 92%)
  - Completed Information Security Awareness (Score: 78%)

---

### 2. Courses Collection (12 documents)

Course metadata and statistics. Actual course content is stored in code files.

#### Security Category (2 courses)
- Information Security Awareness
- Software Security Concerns

#### Compliance Category (4 courses)
- Data Privacy
- Employee Code of Conduct
- Anti-Bribery and Corruption (ABC)
- Legal and Industrial Regulations

#### HR Category (2 courses)
- Diversity and Inclusion
- POSH - Prevention of Sexual Harassment

#### Ethics Category (1 course)
- Business Ethics and Integrity

#### Safety Category (2 courses)
- Health and Safety (OHS)
- Fire Safety and Evacuation

#### Technology Category (1 course)
- AI Ethics and Workplace Usage

---

### 3. Activity Logs Collection (4 documents)

Tracks all user learning activities with timestamps.

**Recent Activities:**
1. John Doe completed Module 1 of Information Security Awareness (+200 XP)
2. Jane Smith completed Diversity and Inclusion course (Score: 85%, +500 XP)
3. Sarah Williams completed Data Privacy course (Score: 92%, +500 XP)
4. Sarah Williams completed Information Security Awareness (Score: 78%, +500 XP)

---

### 4. Achievements Collection (3 documents)

Gamification achievements earned by users.

**Achievements Earned:**

🎓 **First Steps** - Jane Smith
- Completed your first course
- XP Awarded: 100

⭐ **Excellence** - Sarah Williams
- Scored 90% or higher on a course
- XP Awarded: 200

📚 **Dedicated Learner** - Sarah Williams
- Completed 2 or more courses
- XP Awarded: 300

---

### 5. Notifications Collection (3 documents)

User notifications for course assignments and achievements.

- John Doe: New course assigned (Unread)
- Mike Johnson: 2 new courses assigned (Unread)
- Jane Smith: Achievement unlocked (Read)

---

### 6. System Settings Collection (1 document)

Global system configuration.

**XP Rules:**
- Module Completion: 200 XP
- Course Completion: 500 XP
- High Score Bonus (90%+): 100 XP
- Perfect Score Bonus (100%): 200 XP

**Other Settings:**
- Passing Score: 70%
- Gamification: Enabled
- Certificates: Enabled
- Email Notifications: Enabled
- Maintenance Mode: Disabled
- Version: 1.0.0

---

## 📈 Statistics

- **Total Users:** 6
- **Total XP Earned:** 3,800
- **Average XP per User:** 633
- **Total Courses Completed:** 3
- **Total Activities Logged:** 4
- **Total Achievements Earned:** 3
- **Course Completion Rate:** 25% (3 out of 12 courses have completions)

---

## 🔐 Login Credentials

### Admin Access
```
Email: etiqettelms@gmail.com
Password: Akshara@123
```

### HR Access
```
Email: hr@company.com
Password: hr123
```

### Employee Access (All employees)
```
Password: employee123

Emails:
- john.doe@company.com
- jane.smith@company.com
- mike.johnson@company.com
- sarah.williams@company.com
```

---

## 🗂️ Database Indexes

Indexes created for optimal query performance:

**Users Collection:**
- `email` (unique)
- `role`
- `department`

**Courses Collection:**
- `courseId` (unique)
- `category`

**Activity Logs Collection:**
- `userId`
- `timestamp` (descending)
- `action`

**Achievements Collection:**
- `userId`
- `earnedAt` (descending)

**Notifications Collection:**
- `userId`
- `read`
- `createdAt` (descending)

---

## 🔄 Re-seeding the Database

To clear and re-seed the database:

```bash
cd server
npm run seed
```

**Warning:** This will delete all existing data and create fresh sample data.

---

## ✅ Verification

To verify the database contents:

```bash
cd server
npm run verify
```

This will display a detailed report of all collections and their contents.

---

## 🚀 Next Steps

1. **Start the Backend Server:**
   ```bash
   cd server
   npm run dev
   ```

2. **Start the Frontend:**
   ```bash
   npm run dev
   ```

3. **Access the Application:**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:3001

4. **Login and Test:**
   - Try logging in with different user accounts
   - View the dashboard and course catalog
   - Check user progress and achievements
   - Test course assignments (admin/HR)
   - Complete modules and assessments

---

## 📝 Notes

- All passwords are hashed using bcrypt (10 salt rounds)
- JWT tokens expire after 7 days
- XP is synced between localStorage and MongoDB
- Course content is stored in code files (`data/courses/`)
- Progress is automatically tracked and saved
- Achievements are awarded automatically based on actions

---

## 🛠️ Database Management

### View Data in MongoDB
```bash
mongosh etiquette_lms
```

Then use MongoDB commands:
```javascript
// List all collections
show collections

// View users
db.users.find().pretty()

// View courses
db.courses.find().pretty()

// View activity logs
db.activity_logs.find().sort({timestamp: -1}).pretty()

// Count documents
db.users.countDocuments()
```

### Backup Database
```bash
mongodump --db etiquette_lms --out ./backup
```

### Restore Database
```bash
mongorestore --db etiquette_lms ./backup/etiquette_lms
```

---

## 🎯 Testing Scenarios

Use the seeded data to test these scenarios:

1. **Admin Dashboard:** Login as admin and manage users
2. **Course Assignment:** Assign courses to employees
3. **Employee Progress:** Login as John Doe and complete modules
4. **High Scores:** Login as Sarah Williams to see achievements
5. **Notifications:** Check unread notifications for Mike Johnson
6. **XP System:** Complete activities and watch XP increase
7. **Leaderboard:** View top performers (Sarah Williams leads)

---

**Database seeding completed successfully! 🎉**
