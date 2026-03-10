import { MongoClient } from 'mongodb';
import bcrypt from 'bcryptjs';

const MONGODB_URI = process.env.MONGO_URI || process.env.MONGODB_URI || 'mongodb+srv://jishnunreddy_db_user:yJDLa5dDrOaXMpGC@cluster900.rtmxg8z.mongodb.net/etiquette_lms?retryWrites=true&w=majority&appName=Cluster900';

async function seedDatabase() {
  const client = new MongoClient(MONGODB_URI);

  try {
    await client.connect();
    console.log('✅ Connected to MongoDB');

    const db = client.db();

    // Drop existing collections for fresh start
    console.log('\n🗑️  Clearing existing data...');
    const collections = await db.listCollections().toArray();
    for (const collection of collections) {
      await db.collection(collection.name).drop();
      console.log(`   Dropped: ${collection.name}`);
    }

    // Create Users Collection
    console.log('\n👥 Creating users collection...');

    const hashedAdminPassword = await bcrypt.hash('Akshara@123', 10);
    const hashedEmployeePassword = await bcrypt.hash('employee123', 10);

    const users = [
      {
        email: 'etiqettelms@gmail.com',
        password: hashedAdminPassword,
        name: 'Platform Admin',
        role: 'platform_admin',
        department: 'Administration',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Admin&backgroundColor=b6e3f4',
        progress: {},
        assignedCourses: [],
        xp: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'hr@company.com',
        password: await bcrypt.hash('hr123', 10),
        name: 'HR Manager',
        role: 'hr',
        department: 'Human Resources',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=HR&backgroundColor=c7d2fe',
        progress: {},
        assignedCourses: [],
        xp: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'john.doe@company.com',
        password: hashedEmployeePassword,
        name: 'John Doe',
        role: 'employee',
        department: 'Engineering',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John&backgroundColor=fef3c7',
        progress: {
          'information_security_awareness': {
            completedModules: ['module_1'],
            assessmentScore: 0,
            isCompleted: false,
            lastUpdated: new Date().toISOString()
          }
        },
        assignedCourses: [
          'information_security_awareness',
          'data_privacy',
          'employee_code_of_conduct'
        ],
        xp: 200,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'jane.smith@company.com',
        password: hashedEmployeePassword,
        name: 'Jane Smith',
        role: 'employee',
        department: 'Marketing',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jane&backgroundColor=fecaca',
        progress: {
          'diversity_and_inclusion': {
            completedModules: ['module_1', 'module_2'],
            assessmentScore: 85,
            isCompleted: true,
            completionDate: new Date().toISOString(),
            lastUpdated: new Date().toISOString()
          }
        },
        assignedCourses: [
          'diversity_and_inclusion',
          'business_ethics_and_integrity',
          'posh_prevention_of_sexual_harassment'
        ],
        xp: 1200,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'mike.johnson@company.com',
        password: hashedEmployeePassword,
        name: 'Mike Johnson',
        role: 'employee',
        department: 'Sales',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mike&backgroundColor=bfdbfe',
        progress: {},
        assignedCourses: [
          'anti_bribery_and_corruption_abc',
          'business_ethics_and_integrity'
        ],
        xp: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'sarah.williams@company.com',
        password: hashedEmployeePassword,
        name: 'Sarah Williams',
        role: 'employee',
        department: 'Finance',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah&backgroundColor=ddd6fe',
        progress: {
          'data_privacy': {
            completedModules: ['module_1', 'module_2', 'module_3'],
            assessmentScore: 92,
            isCompleted: true,
            completionDate: new Date().toISOString(),
            lastUpdated: new Date().toISOString()
          },
          'information_security_awareness': {
            completedModules: ['module_1', 'module_2'],
            assessmentScore: 78,
            isCompleted: true,
            completionDate: new Date().toISOString(),
            lastUpdated: new Date().toISOString()
          }
        },
        assignedCourses: [
          'data_privacy',
          'information_security_awareness',
          'anti_bribery_and_corruption_abc'
        ],
        xp: 2400,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];

    const usersResult = await db.collection('users').insertMany(users);
    console.log(`   ✅ Created ${usersResult.insertedCount} users`);

    // Create indexes for users collection
    console.log('\n📑 Creating indexes...');
    await db.collection('users').createIndex({ email: 1 }, { unique: true });
    await db.collection('users').createIndex({ role: 1 });
    await db.collection('users').createIndex({ department: 1 });
    console.log('   ✅ Created indexes on users collection');

    // Create Courses Collection (metadata only, actual course content is in code)
    console.log('\n📚 Creating courses collection...');
    const courses = [
      {
        courseId: 'information_security_awareness',
        title: 'Information Security Awareness',
        category: 'Security',
        totalEnrollments: 2,
        averageScore: 78,
        completionRate: 50,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        courseId: 'data_privacy',
        title: 'Data Privacy',
        category: 'Compliance',
        totalEnrollments: 2,
        averageScore: 92,
        completionRate: 50,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        courseId: 'diversity_and_inclusion',
        title: 'Diversity and Inclusion',
        category: 'HR',
        totalEnrollments: 1,
        averageScore: 85,
        completionRate: 100,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        courseId: 'employee_code_of_conduct',
        title: 'Employee Code of Conduct',
        category: 'Compliance',
        totalEnrollments: 1,
        averageScore: 0,
        completionRate: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        courseId: 'business_ethics_and_integrity',
        title: 'Business Ethics and Integrity',
        category: 'Ethics',
        totalEnrollments: 2,
        averageScore: 0,
        completionRate: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        courseId: 'anti_bribery_and_corruption_abc',
        title: 'Anti-Bribery and Corruption (ABC)',
        category: 'Compliance',
        totalEnrollments: 2,
        averageScore: 0,
        completionRate: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        courseId: 'posh_prevention_of_sexual_harassment',
        title: 'POSH - Prevention of Sexual Harassment',
        category: 'HR',
        totalEnrollments: 1,
        averageScore: 0,
        completionRate: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        courseId: 'health_and_safety_ohs',
        title: 'Health and Safety (OHS)',
        category: 'Safety',
        totalEnrollments: 0,
        averageScore: 0,
        completionRate: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        courseId: 'fire_safety_and_evacuation',
        title: 'Fire Safety and Evacuation',
        category: 'Safety',
        totalEnrollments: 0,
        averageScore: 0,
        completionRate: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        courseId: 'ai_ethics_and_workplace_usage',
        title: 'AI Ethics and Workplace Usage',
        category: 'Technology',
        totalEnrollments: 0,
        averageScore: 0,
        completionRate: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        courseId: 'software_security_concerns',
        title: 'Software Security Concerns',
        category: 'Security',
        totalEnrollments: 0,
        averageScore: 0,
        completionRate: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        courseId: 'legal_and_industrial_regulations',
        title: 'Legal and Industrial Regulations',
        category: 'Compliance',
        totalEnrollments: 0,
        averageScore: 0,
        completionRate: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];

    const coursesResult = await db.collection('courses').insertMany(courses);
    console.log(`   ✅ Created ${coursesResult.insertedCount} course records`);

    await db.collection('courses').createIndex({ courseId: 1 }, { unique: true });
    await db.collection('courses').createIndex({ category: 1 });
    console.log('   ✅ Created indexes on courses collection');

    // Create Activity Logs Collection
    console.log('\n📊 Creating activity_logs collection...');
    const activityLogs = [
      {
        userId: usersResult.insertedIds[2].toString(),
        userEmail: 'john.doe@company.com',
        userName: 'John Doe',
        action: 'module_completed',
        courseId: 'information_security_awareness',
        moduleId: 'module_1',
        xpGained: 200,
        timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000) // 2 days ago
      },
      {
        userId: usersResult.insertedIds[3].toString(),
        userEmail: 'jane.smith@company.com',
        userName: 'Jane Smith',
        action: 'course_completed',
        courseId: 'diversity_and_inclusion',
        score: 85,
        xpGained: 500,
        timestamp: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000) // 5 days ago
      },
      {
        userId: usersResult.insertedIds[5].toString(),
        userEmail: 'sarah.williams@company.com',
        userName: 'Sarah Williams',
        action: 'course_completed',
        courseId: 'data_privacy',
        score: 92,
        xpGained: 500,
        timestamp: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) // 7 days ago
      },
      {
        userId: usersResult.insertedIds[5].toString(),
        userEmail: 'sarah.williams@company.com',
        userName: 'Sarah Williams',
        action: 'course_completed',
        courseId: 'information_security_awareness',
        score: 78,
        xpGained: 500,
        timestamp: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000) // 10 days ago
      }
    ];

    const logsResult = await db.collection('activity_logs').insertMany(activityLogs);
    console.log(`   ✅ Created ${logsResult.insertedCount} activity logs`);

    await db.collection('activity_logs').createIndex({ userId: 1 });
    await db.collection('activity_logs').createIndex({ timestamp: -1 });
    await db.collection('activity_logs').createIndex({ action: 1 });
    console.log('   ✅ Created indexes on activity_logs collection');

    // Create Achievements Collection
    console.log('\n🏆 Creating achievements collection...');
    const achievements = [
      {
        userId: usersResult.insertedIds[3].toString(),
        userEmail: 'jane.smith@company.com',
        userName: 'Jane Smith',
        achievementType: 'first_course_completed',
        title: 'First Steps',
        description: 'Completed your first course',
        icon: '🎓',
        xpAwarded: 100,
        earnedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000)
      },
      {
        userId: usersResult.insertedIds[5].toString(),
        userEmail: 'sarah.williams@company.com',
        userName: 'Sarah Williams',
        achievementType: 'high_scorer',
        title: 'Excellence',
        description: 'Scored 90% or higher on a course',
        icon: '⭐',
        xpAwarded: 200,
        earnedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
      },
      {
        userId: usersResult.insertedIds[5].toString(),
        userEmail: 'sarah.williams@company.com',
        userName: 'Sarah Williams',
        achievementType: 'multiple_courses',
        title: 'Dedicated Learner',
        description: 'Completed 2 or more courses',
        icon: '📚',
        xpAwarded: 300,
        earnedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
      }
    ];

    const achievementsResult = await db.collection('achievements').insertMany(achievements);
    console.log(`   ✅ Created ${achievementsResult.insertedCount} achievements`);

    await db.collection('achievements').createIndex({ userId: 1 });
    await db.collection('achievements').createIndex({ earnedAt: -1 });
    console.log('   ✅ Created indexes on achievements collection');

    // Create Notifications Collection
    console.log('\n🔔 Creating notifications collection...');
    const notifications = [
      {
        userId: usersResult.insertedIds[2].toString(),
        userEmail: 'john.doe@company.com',
        type: 'course_assigned',
        title: 'New Course Assigned',
        message: 'You have been assigned to "Information Security Awareness"',
        read: false,
        createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000)
      },
      {
        userId: usersResult.insertedIds[4].toString(),
        userEmail: 'mike.johnson@company.com',
        type: 'course_assigned',
        title: 'New Courses Assigned',
        message: 'You have been assigned to 2 new courses',
        read: false,
        createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000)
      },
      {
        userId: usersResult.insertedIds[3].toString(),
        userEmail: 'jane.smith@company.com',
        type: 'achievement_earned',
        title: 'Achievement Unlocked!',
        message: 'You earned "First Steps" achievement',
        read: true,
        createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000)
      }
    ];

    const notificationsResult = await db.collection('notifications').insertMany(notifications);
    console.log(`   ✅ Created ${notificationsResult.insertedCount} notifications`);

    await db.collection('notifications').createIndex({ userId: 1 });
    await db.collection('notifications').createIndex({ read: 1 });
    await db.collection('notifications').createIndex({ createdAt: -1 });
    console.log('   ✅ Created indexes on notifications collection');

    // Create System Settings Collection
    console.log('\n⚙️  Creating system_settings collection...');
    const systemSettings = {
      xpRules: {
        moduleCompletion: 200,
        courseCompletion: 500,
        highScore: 100, // Bonus for 90%+
        perfectScore: 200 // Bonus for 100%
      },
      passingScore: 70,
      certificateEnabled: true,
      gamificationEnabled: true,
      emailNotificationsEnabled: true,
      maintenanceMode: false,
      version: '1.0.0',
      lastUpdated: new Date()
    };

    await db.collection('system_settings').insertOne(systemSettings);
    console.log('   ✅ Created system settings');

    // Print Summary
    console.log('\n' + '='.repeat(60));
    console.log('📊 DATABASE SEEDING SUMMARY');
    console.log('='.repeat(60));

    const stats = {
      users: await db.collection('users').countDocuments(),
      courses: await db.collection('courses').countDocuments(),
      activityLogs: await db.collection('activity_logs').countDocuments(),
      achievements: await db.collection('achievements').countDocuments(),
      notifications: await db.collection('notifications').countDocuments(),
      systemSettings: await db.collection('system_settings').countDocuments()
    };

    console.log(`\n📈 Collections Created:`);
    console.log(`   • users: ${stats.users} documents`);
    console.log(`   • courses: ${stats.courses} documents`);
    console.log(`   • activity_logs: ${stats.activityLogs} documents`);
    console.log(`   • achievements: ${stats.achievements} documents`);
    console.log(`   • notifications: ${stats.notifications} documents`);
    console.log(`   • system_settings: ${stats.systemSettings} documents`);

    console.log(`\n👥 User Accounts Created:`);
    console.log(`   • Platform Admin: etiqettelms@gmail.com / Akshara@123`);
    console.log(`   • HR Manager: hr@company.com / hr123`);
    console.log(`   • Employees: john.doe@company.com, jane.smith@company.com, etc. / employee123`);

    console.log(`\n✅ Database seeding completed successfully!`);
    console.log('='.repeat(60) + '\n');

  } catch (error: any) {
    console.error('\n❌ Database seeding failed!');
    console.error('Error:', error.message);
    process.exit(1);
  } finally {
    await client.close();
    console.log('Connection closed.');
  }
}

seedDatabase();
