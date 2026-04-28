import { MongoClient } from 'mongodb';
import bcrypt from 'bcryptjs';

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://jishnunreddy_db_user:yJDLa5dDrOaXMpGC@cluster900.rtmxg8z.mongodb.net/etiquette_lms?retryWrites=true&w=majority&appName=Cluster900';

async function migrateCompleteDatabase() {
  const client = new MongoClient(MONGODB_URI);
  
  try {
    await client.connect();
    console.log('✅ Connected to MongoDB');
    console.log(`📦 Database: ${client.db().databaseName}\n`);
    
    const db = client.db();
    
    // Drop existing collections
    console.log('🗑️  Clearing existing collections...');
    const existingCollections = await db.listCollections().toArray();
    for (const collection of existingCollections) {
      await db.collection(collection.name).drop();
      console.log(`   Dropped: ${collection.name}`);
    }
    console.log('');
    
    // Create all collections with validation schemas
    await createCollections(db);
    
    // Seed with comprehensive data
    await seedData(db);
    
    // Create indexes
    await createIndexes(db);
    
    // Verify migration
    await verifyMigration(db);
    
    console.log('\n✅ Complete database migration finished successfully!\n');
    
  } catch (error: any) {
    console.error('\n❌ Migration failed!');
    console.error('Error:', error.message);
    process.exit(1);
  } finally {
    await client.close();
  }
}

async function createCollections(db: any) {
  console.log('📁 Creating collections with schemas...\n');
  
  // Users Collection
  await db.createCollection('users', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        required: ['email', 'password', 'name', 'role'],
        properties: {
          email: { bsonType: 'string' },
          password: { bsonType: 'string' },
          name: { bsonType: 'string' },
          role: { enum: ['platform_admin', 'hr', 'employee'] }
        }
      }
    }
  });
  console.log('   ✅ users');

  
  // Courses Collection
  await db.createCollection('courses');
  console.log('   ✅ courses');
  
  // Enrollments Collection
  await db.createCollection('enrollments');
  console.log('   ✅ enrollments');
  
  // Progress Collection
  await db.createCollection('progress');
  console.log('   ✅ progress');
  
  // Assessments Collection
  await db.createCollection('assessments');
  console.log('   ✅ assessments');
  
  // Activity Logs Collection
  await db.createCollection('activity_logs');
  console.log('   ✅ activity_logs');
  
  // Achievements Collection
  await db.createCollection('achievements');
  console.log('   ✅ achievements');
  
  // User Achievements Collection
  await db.createCollection('user_achievements');
  console.log('   ✅ user_achievements');
  
  // Notifications Collection
  await db.createCollection('notifications');
  console.log('   ✅ notifications');
  
  // Certificates Collection
  await db.createCollection('certificates');
  console.log('   ✅ certificates');
  
  // System Settings Collection
  await db.createCollection('system_settings');
  console.log('   ✅ system_settings');
  
  // Departments Collection
  await db.createCollection('departments');
  console.log('   ✅ departments');
  
  // Course Categories Collection
  await db.createCollection('course_categories');
  console.log('   ✅ course_categories');
  
  console.log('\n   Total: 13 collections created\n');
}


async function seedData(db: any) {
  console.log('🌱 Seeding data...\n');
  
  // Departments
  const departments = [
    { _id: 'dept_admin', name: 'Administration', description: 'Administrative staff', employeeCount: 1 },
    { _id: 'dept_hr', name: 'Human Resources', description: 'HR department', employeeCount: 1 },
    { _id: 'dept_eng', name: 'Engineering', description: 'Software development', employeeCount: 2 },
    { _id: 'dept_marketing', name: 'Marketing', description: 'Marketing and communications', employeeCount: 1 },
    { _id: 'dept_sales', name: 'Sales', description: 'Sales team', employeeCount: 1 },
    { _id: 'dept_finance', name: 'Finance', description: 'Finance and accounting', employeeCount: 1 }
  ];
  await db.collection('departments').insertMany(departments);
  console.log(`   ✅ Departments: ${departments.length}`);
  
  // Course Categories
  const categories = [
    { _id: 'cat_security', name: 'Security', description: 'Information and cyber security', icon: '🔒', color: '#ef4444' },
    { _id: 'cat_compliance', name: 'Compliance', description: 'Legal and regulatory compliance', icon: '⚖️', color: '#3b82f6' },
    { _id: 'cat_hr', name: 'HR', description: 'Human resources and workplace', icon: '👥', color: '#8b5cf6' },
    { _id: 'cat_ethics', name: 'Ethics', description: 'Business ethics and integrity', icon: '🤝', color: '#10b981' },
    { _id: 'cat_safety', name: 'Safety', description: 'Health and safety', icon: '🛡️', color: '#f59e0b' },
    { _id: 'cat_tech', name: 'Technology', description: 'Technology and AI', icon: '💻', color: '#06b6d4' }
  ];
  await db.collection('course_categories').insertMany(categories);
  console.log(`   ✅ Categories: ${categories.length}`);

  
  // Users
  const hashedPassword = await bcrypt.hash('employee123', 10);
  const users = [
    {
      _id: 'user_admin',
      email: 'etiqettelms@gmail.com',
      password: await bcrypt.hash('Akshara@123', 10),
      name: 'Platform Admin',
      role: 'platform_admin',
      departmentId: 'dept_admin',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Admin&backgroundColor=b6e3f4',
      xp: 0,
      level: 1,
      status: 'active',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      _id: 'user_hr',
      email: 'hr@company.com',
      password: await bcrypt.hash('hr123', 10),
      name: 'HR Manager',
      role: 'hr',
      departmentId: 'dept_hr',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=HR&backgroundColor=c7d2fe',
      xp: 0,
      level: 1,
      status: 'active',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      _id: 'user_john',
      email: 'john.doe@company.com',
      password: hashedPassword,
      name: 'John Doe',
      role: 'employee',
      departmentId: 'dept_eng',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John&backgroundColor=fef3c7',
      xp: 200,
      level: 1,
      status: 'active',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      _id: 'user_jane',
      email: 'jane.smith@company.com',
      password: hashedPassword,
      name: 'Jane Smith',
      role: 'employee',
      departmentId: 'dept_marketing',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jane&backgroundColor=fecaca',
      xp: 1200,
      level: 2,
      status: 'active',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ];
  await db.collection('users').insertMany(users);
  console.log(`   ✅ Users: ${users.length}`);

  
  // Courses
  const courses = [
    {
      _id: 'course_infosec',
      courseId: 'information_security_awareness',
      title: 'Information Security Awareness',
      description: 'Learn essential information security practices',
      categoryId: 'cat_security',
      duration: '2 hours',
      moduleCount: 4,
      passingScore: 70,
      xpReward: 500,
      status: 'published',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      _id: 'course_privacy',
      courseId: 'data_privacy',
      title: 'Data Privacy',
      description: 'Understanding data privacy regulations and best practices',
      categoryId: 'cat_compliance',
      duration: '1.5 hours',
      moduleCount: 3,
      passingScore: 70,
      xpReward: 500,
      status: 'published',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      _id: 'course_diversity',
      courseId: 'diversity_and_inclusion',
      title: 'Diversity and Inclusion',
      description: 'Building an inclusive workplace',
      categoryId: 'cat_hr',
      duration: '1 hour',
      moduleCount: 3,
      passingScore: 70,
      xpReward: 500,
      status: 'published',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ];
  await db.collection('courses').insertMany(courses);
  console.log(`   ✅ Courses: ${courses.length}`);
  
  // Enrollments
  const enrollments = [
    {
      userId: 'user_john',
      courseId: 'course_infosec',
      enrolledAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
      status: 'in_progress',
      progress: 25
    },
    {
      userId: 'user_jane',
      courseId: 'course_diversity',
      enrolledAt: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000),
      status: 'completed',
      progress: 100,
      completedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000)
    }
  ];
  await db.collection('enrollments').insertMany(enrollments);
  console.log(`   ✅ Enrollments: ${enrollments.length}`);

  
  // Progress
  const progress = [
    {
      userId: 'user_john',
      courseId: 'course_infosec',
      completedModules: ['module_1'],
      currentModule: 'module_2',
      lastAccessedAt: new Date(),
      timeSpent: 1800
    },
    {
      userId: 'user_jane',
      courseId: 'course_diversity',
      completedModules: ['module_1', 'module_2', 'module_3'],
      currentModule: null,
      lastAccessedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
      timeSpent: 3600
    }
  ];
  await db.collection('progress').insertMany(progress);
  console.log(`   ✅ Progress: ${progress.length}`);
  
  // Assessments
  const assessments = [
    {
      userId: 'user_jane',
      courseId: 'course_diversity',
      score: 85,
      totalQuestions: 10,
      correctAnswers: 8,
      passed: true,
      attemptNumber: 1,
      completedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
      answers: []
    }
  ];
  await db.collection('assessments').insertMany(assessments);
  console.log(`   ✅ Assessments: ${assessments.length}`);
  
  // Activity Logs
  const activityLogs = [
    {
      userId: 'user_john',
      action: 'module_completed',
      courseId: 'course_infosec',
      moduleId: 'module_1',
      xpGained: 200,
      timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000)
    },
    {
      userId: 'user_jane',
      action: 'course_completed',
      courseId: 'course_diversity',
      score: 85,
      xpGained: 500,
      timestamp: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000)
    }
  ];
  await db.collection('activity_logs').insertMany(activityLogs);
  console.log(`   ✅ Activity Logs: ${activityLogs.length}`);

  
  // Achievements
  const achievements = [
    {
      _id: 'ach_first_course',
      title: 'First Steps',
      description: 'Complete your first course',
      icon: '🎓',
      xpReward: 100,
      type: 'course_completion',
      criteria: { coursesCompleted: 1 }
    },
    {
      _id: 'ach_high_scorer',
      title: 'Excellence',
      description: 'Score 90% or higher on a course',
      icon: '⭐',
      xpReward: 200,
      type: 'high_score',
      criteria: { minScore: 90 }
    },
    {
      _id: 'ach_dedicated',
      title: 'Dedicated Learner',
      description: 'Complete 5 courses',
      icon: '📚',
      xpReward: 300,
      type: 'course_completion',
      criteria: { coursesCompleted: 5 }
    }
  ];
  await db.collection('achievements').insertMany(achievements);
  console.log(`   ✅ Achievements: ${achievements.length}`);
  
  // User Achievements
  const userAchievements = [
    {
      userId: 'user_jane',
      achievementId: 'ach_first_course',
      earnedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
      xpAwarded: 100
    }
  ];
  await db.collection('user_achievements').insertMany(userAchievements);
  console.log(`   ✅ User Achievements: ${userAchievements.length}`);
  
  // Notifications
  const notifications = [
    {
      userId: 'user_john',
      type: 'course_assigned',
      title: 'New Course Assigned',
      message: 'You have been assigned to Information Security Awareness',
      read: false,
      createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000)
    },
    {
      userId: 'user_jane',
      type: 'achievement_earned',
      title: 'Achievement Unlocked!',
      message: 'You earned the "First Steps" achievement',
      read: true,
      createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000)
    }
  ];
  await db.collection('notifications').insertMany(notifications);
  console.log(`   ✅ Notifications: ${notifications.length}`);

  
  // Certificates
  const certificates = [
    {
      userId: 'user_jane',
      courseId: 'course_diversity',
      certificateNumber: 'CERT-2026-001',
      issuedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
      score: 85,
      validUntil: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000)
    }
  ];
  await db.collection('certificates').insertMany(certificates);
  console.log(`   ✅ Certificates: ${certificates.length}`);
  
  // System Settings
  const systemSettings = {
    xpRules: {
      moduleCompletion: 200,
      courseCompletion: 500,
      highScore: 100,
      perfectScore: 200
    },
    passingScore: 70,
    certificateEnabled: true,
    gamificationEnabled: true,
    emailNotificationsEnabled: true,
    maintenanceMode: false,
    version: '2.0.0',
    lastUpdated: new Date()
  };
  await db.collection('system_settings').insertOne(systemSettings);
  console.log(`   ✅ System Settings: 1\n`);
}

async function createIndexes(db: any) {
  console.log('📑 Creating indexes...\n');
  
  // Users indexes
  await db.collection('users').createIndex({ email: 1 }, { unique: true });
  await db.collection('users').createIndex({ role: 1 });
  await db.collection('users').createIndex({ departmentId: 1 });
  await db.collection('users').createIndex({ status: 1 });
  console.log('   ✅ users (4 indexes)');
  
  // Courses indexes
  await db.collection('courses').createIndex({ courseId: 1 }, { unique: true });
  await db.collection('courses').createIndex({ categoryId: 1 });
  await db.collection('courses').createIndex({ status: 1 });
  console.log('   ✅ courses (3 indexes)');
  
  // Enrollments indexes
  await db.collection('enrollments').createIndex({ userId: 1, courseId: 1 }, { unique: true });
  await db.collection('enrollments').createIndex({ userId: 1 });
  await db.collection('enrollments').createIndex({ courseId: 1 });
  await db.collection('enrollments').createIndex({ status: 1 });
  console.log('   ✅ enrollments (4 indexes)');

  
  // Progress indexes
  await db.collection('progress').createIndex({ userId: 1, courseId: 1 }, { unique: true });
  await db.collection('progress').createIndex({ userId: 1 });
  await db.collection('progress').createIndex({ courseId: 1 });
  console.log('   ✅ progress (3 indexes)');
  
  // Assessments indexes
  await db.collection('assessments').createIndex({ userId: 1, courseId: 1 });
  await db.collection('assessments').createIndex({ userId: 1 });
  await db.collection('assessments').createIndex({ courseId: 1 });
  await db.collection('assessments').createIndex({ completedAt: -1 });
  console.log('   ✅ assessments (4 indexes)');
  
  // Activity logs indexes
  await db.collection('activity_logs').createIndex({ userId: 1 });
  await db.collection('activity_logs').createIndex({ courseId: 1 });
  await db.collection('activity_logs').createIndex({ timestamp: -1 });
  await db.collection('activity_logs').createIndex({ action: 1 });
  console.log('   ✅ activity_logs (4 indexes)');
  
  // User achievements indexes
  await db.collection('user_achievements').createIndex({ userId: 1 });
  await db.collection('user_achievements').createIndex({ achievementId: 1 });
  await db.collection('user_achievements').createIndex({ earnedAt: -1 });
  console.log('   ✅ user_achievements (3 indexes)');
  
  // Notifications indexes
  await db.collection('notifications').createIndex({ userId: 1 });
  await db.collection('notifications').createIndex({ read: 1 });
  await db.collection('notifications').createIndex({ createdAt: -1 });
  console.log('   ✅ notifications (3 indexes)');
  
  // Certificates indexes
  await db.collection('certificates').createIndex({ userId: 1 });
  await db.collection('certificates').createIndex({ courseId: 1 });
  await db.collection('certificates').createIndex({ certificateNumber: 1 }, { unique: true });
  console.log('   ✅ certificates (3 indexes)');
  
  console.log('\n   Total: 31 indexes created\n');
}


async function verifyMigration(db: any) {
  console.log('🔍 Verifying migration...\n');
  
  const collections = await db.listCollections().toArray();
  console.log(`   Collections: ${collections.length}`);
  
  for (const collection of collections) {
    const count = await db.collection(collection.name).countDocuments();
    const indexes = await db.collection(collection.name).indexes();
    console.log(`   • ${collection.name}: ${count} documents, ${indexes.length} indexes`);
  }
  
  const totalDocs = await Promise.all(
    collections.map(c => db.collection(c.name).countDocuments())
  );
  const sum = totalDocs.reduce((a, b) => a + b, 0);
  
  console.log(`\n   Total Documents: ${sum}`);
}

migrateCompleteDatabase();
