# Complete MongoDB Database Structure

## ✅ Migration Complete!

A separate production database has been created with a complete, normalized structure.

---

## 📦 Database Information

**Database Name:** `etiquette_lms_production`
**Total Collections:** 13
**Total Documents:** 34
**Total Indexes:** 31

---

## 📁 Collections Structure

### 1. Users Collection
**Purpose:** Store user accounts and authentication

**Schema:**
```javascript
{
  _id: String,
  email: String (unique),
  password: String (bcrypt hashed),
  name: String,
  role: Enum['platform_admin', 'hr', 'employee'],
  departmentId: String (ref: departments),
  avatar: String,
  xp: Number,
  level: Number,
  status: String,
  createdAt: Date,
  updatedAt: Date
}
```

**Indexes:**
- email (unique)
- role
- departmentId
- status

**Sample Data:** 4 users (1 admin, 1 HR, 2 employees)

---

### 2. Departments Collection
**Purpose:** Organize users by department

**Schema:**
```javascript
{
  _id: String,
  name: String,
  description: String,
  employeeCount: Number
}
```

**Sample Data:** 6 departments
- Administration
- Human Resources
- Engineering
- Marketing
- Sales
- Finance

---

### 3. Course Categories Collection
**Purpose:** Categorize courses

**Schema:**
```javascript
{
  _id: String,
  name: String,
  description: String,
  icon: String,
  color: String
}
```

**Sample Data:** 6 categories
- Security 🔒
- Compliance ⚖️
- HR 👥
- Ethics 🤝
- Safety 🛡️
- Technology 💻

---

### 4. Courses Collection
**Purpose:** Store course information

**Schema:**
```javascript
{
  _id: String,
  courseId: String (unique),
  title: String,
  description: String,
  categoryId: String (ref: course_categories),
  duration: String,
  moduleCount: Number,
  passingScore: Number,
  xpReward: Number,
  status: String,
  createdAt: Date,
  updatedAt: Date
}
```

**Indexes:**
- courseId (unique)
- categoryId
- status

**Sample Data:** 3 courses
- Information Security Awareness
- Data Privacy
- Diversity and Inclusion

---

### 5. Enrollments Collection
**Purpose:** Track user course enrollments

**Schema:**
```javascript
{
  userId: String (ref: users),
  courseId: String (ref: courses),
  enrolledAt: Date,
  status: Enum['enrolled', 'in_progress', 'completed', 'dropped'],
  progress: Number (0-100),
  completedAt: Date (optional)
}
```

**Indexes:**
- userId + courseId (unique composite)
- userId
- courseId
- status

**Sample Data:** 2 enrollments

---

### 6. Progress Collection
**Purpose:** Track detailed course progress

**Schema:**
```javascript
{
  userId: String (ref: users),
  courseId: String (ref: courses),
  completedModules: [String],
  currentModule: String,
  lastAccessedAt: Date,
  timeSpent: Number (seconds)
}
```

**Indexes:**
- userId + courseId (unique composite)
- userId
- courseId

**Sample Data:** 2 progress records

---

### 7. Assessments Collection
**Purpose:** Store assessment results

**Schema:**
```javascript
{
  userId: String (ref: users),
  courseId: String (ref: courses),
  score: Number,
  totalQuestions: Number,
  correctAnswers: Number,
  passed: Boolean,
  attemptNumber: Number,
  completedAt: Date,
  answers: Array
}
```

**Indexes:**
- userId + courseId
- userId
- courseId
- completedAt (descending)

**Sample Data:** 1 assessment

---

### 8. Activity Logs Collection
**Purpose:** Track all user activities

**Schema:**
```javascript
{
  userId: String (ref: users),
  action: String,
  courseId: String (ref: courses),
  moduleId: String (optional),
  score: Number (optional),
  xpGained: Number,
  timestamp: Date
}
```

**Indexes:**
- userId
- courseId
- timestamp (descending)
- action

**Sample Data:** 2 activity logs

---

### 9. Achievements Collection
**Purpose:** Define available achievements

**Schema:**
```javascript
{
  _id: String,
  title: String,
  description: String,
  icon: String,
  xpReward: Number,
  type: String,
  criteria: Object
}
```

**Sample Data:** 3 achievements
- First Steps 🎓
- Excellence ⭐
- Dedicated Learner 📚

---

### 10. User Achievements Collection
**Purpose:** Track earned achievements

**Schema:**
```javascript
{
  userId: String (ref: users),
  achievementId: String (ref: achievements),
  earnedAt: Date,
  xpAwarded: Number
}
```

**Indexes:**
- userId
- achievementId
- earnedAt (descending)

**Sample Data:** 1 earned achievement

---

### 11. Notifications Collection
**Purpose:** User notifications

**Schema:**
```javascript
{
  userId: String (ref: users),
  type: String,
  title: String,
  message: String,
  read: Boolean,
  createdAt: Date
}
```

**Indexes:**
- userId
- read
- createdAt (descending)

**Sample Data:** 2 notifications

---

### 12. Certificates Collection
**Purpose:** Store issued certificates

**Schema:**
```javascript
{
  userId: String (ref: users),
  courseId: String (ref: courses),
  certificateNumber: String (unique),
  issuedAt: Date,
  score: Number,
  validUntil: Date
}
```

**Indexes:**
- userId
- courseId
- certificateNumber (unique)

**Sample Data:** 1 certificate

---

### 13. System Settings Collection
**Purpose:** Global system configuration

**Schema:**
```javascript
{
  xpRules: {
    moduleCompletion: Number,
    courseCompletion: Number,
    highScore: Number,
    perfectScore: Number
  },
  passingScore: Number,
  certificateEnabled: Boolean,
  gamificationEnabled: Boolean,
  emailNotificationsEnabled: Boolean,
  maintenanceMode: Boolean,
  version: String,
  lastUpdated: Date
}
```

**Sample Data:** 1 settings document

---

## 🔗 Relationships

```
users
  ├─→ departments (departmentId)
  ├─→ enrollments (userId)
  ├─→ progress (userId)
  ├─→ assessments (userId)
  ├─→ activity_logs (userId)
  ├─→ user_achievements (userId)
  ├─→ notifications (userId)
  └─→ certificates (userId)

courses
  ├─→ course_categories (categoryId)
  ├─→ enrollments (courseId)
  ├─→ progress (courseId)
  ├─→ assessments (courseId)
  ├─→ activity_logs (courseId)
  └─→ certificates (courseId)

achievements
  └─→ user_achievements (achievementId)
```

---

## 📊 Statistics

- **Users:** 4
- **Departments:** 6
- **Categories:** 6
- **Courses:** 3
- **Enrollments:** 2
- **Progress Records:** 2
- **Assessments:** 1
- **Activity Logs:** 2
- **Achievements:** 3
- **User Achievements:** 1
- **Notifications:** 2
- **Certificates:** 1
- **System Settings:** 1

---

## 🔐 Login Credentials

**Admin:**
- Email: etiqettelms@gmail.com
- Password: Akshara@123

**HR:**
- Email: hr@company.com
- Password: hr123

**Employees:**
- john.doe@company.com / employee123
- jane.smith@company.com / employee123

---

## 🛠️ Database Commands

### View All Databases
```bash
mongosh
show dbs
```

### Switch to Production Database
```bash
use etiquette_lms_production
```

### View Collections
```bash
show collections
```

### Query Examples
```javascript
// View all users
db.users.find().pretty()

// View enrollments with user details
db.enrollments.aggregate([
  {
    $lookup: {
      from: "users",
      localField: "userId",
      foreignField: "_id",
      as: "user"
    }
  }
])

// View courses by category
db.courses.aggregate([
  {
    $lookup: {
      from: "course_categories",
      localField: "categoryId",
      foreignField: "_id",
      as: "category"
    }
  }
])
```

---

## 🔄 Migration Scripts

### Run Complete Migration
```bash
cd server
npm run migrate
```

### Verify Database
```bash
cd server
npm run verify
```

---

## 📝 Notes

- All passwords are hashed with bcrypt (10 salt rounds)
- Indexes are optimized for common queries
- Foreign key relationships are maintained via references
- Timestamps track creation and updates
- XP system is fully integrated
- Gamification features are enabled

---

**Database migration completed successfully! 🎉**
