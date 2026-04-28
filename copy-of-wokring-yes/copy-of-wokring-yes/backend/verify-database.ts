import { MongoClient } from 'mongodb';

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://jishnunreddy_db_user:yJDLa5dDrOaXMpGC@cluster900.rtmxg8z.mongodb.net/etiquette_lms?retryWrites=true&w=majority&appName=Cluster900';

async function verifyDatabase() {
  const client = new MongoClient(MONGODB_URI);
  
  try {
    await client.connect();
    console.log('✅ Connected to MongoDB\n');
    
    const db = client.db();
    
    console.log('=' .repeat(60));
    console.log('DATABASE VERIFICATION REPORT');
    console.log('='.repeat(60) + '\n');
    
    // List all collections
    const collections = await db.listCollections().toArray();
    console.log(`📁 Collections (${collections.length}):`);
    collections.forEach(col => console.log(`   • ${col.name}`));
    console.log('');
    
    // Users
    console.log('👥 USERS COLLECTION:');
    const users = await db.collection('users').find({}).toArray();
    console.log(`   Total: ${users.length} users\n`);
    
    for (const user of users) {
      console.log(`   📧 ${user.email}`);
      console.log(`      Name: ${user.name}`);
      console.log(`      Role: ${user.role}`);
      console.log(`      Department: ${user.department}`);
      console.log(`      XP: ${user.xp}`);
      console.log(`      Assigned Courses: ${user.assignedCourses.length}`);
      console.log(`      Completed Courses: ${Object.keys(user.progress).length}`);
      console.log('');
    }
    
    // Courses
    console.log('📚 COURSES COLLECTION:');
    const courses = await db.collection('courses').find({}).toArray();
    console.log(`   Total: ${courses.length} courses\n`);
    
    const coursesByCategory: Record<string, number> = {};
    courses.forEach(course => {
      coursesByCategory[course.category] = (coursesByCategory[course.category] || 0) + 1;
    });
    
    console.log('   By Category:');
    Object.entries(coursesByCategory).forEach(([category, count]) => {
      console.log(`      • ${category}: ${count} courses`);
    });
    console.log('');
    
    // Activity Logs
    console.log('📊 ACTIVITY LOGS:');
    const logs = await db.collection('activity_logs').find({}).sort({ timestamp: -1 }).toArray();
    console.log(`   Total: ${logs.length} activities\n`);
    
    logs.forEach(log => {
      console.log(`   • ${log.userName} - ${log.action}`);
      console.log(`     Course: ${log.courseId}`);
      if (log.xpGained) console.log(`     XP Gained: ${log.xpGained}`);
      if (log.score) console.log(`     Score: ${log.score}%`);
      console.log(`     Date: ${new Date(log.timestamp).toLocaleDateString()}`);
      console.log('');
    });
    
    // Achievements
    console.log('🏆 ACHIEVEMENTS:');
    const achievements = await db.collection('achievements').find({}).toArray();
    console.log(`   Total: ${achievements.length} achievements earned\n`);
    
    achievements.forEach(achievement => {
      console.log(`   • ${achievement.userName}: ${achievement.title} ${achievement.icon}`);
      console.log(`     ${achievement.description}`);
      console.log(`     XP Awarded: ${achievement.xpAwarded}`);
      console.log('');
    });
    
    // Notifications
    console.log('🔔 NOTIFICATIONS:');
    const notifications = await db.collection('notifications').find({}).toArray();
    console.log(`   Total: ${notifications.length} notifications`);
    const unread = notifications.filter(n => !n.read).length;
    console.log(`   Unread: ${unread}\n`);
    
    // System Settings
    console.log('⚙️  SYSTEM SETTINGS:');
    const settings = await db.collection('system_settings').findOne({});
    if (settings) {
      console.log(`   XP Rules:`);
      console.log(`      • Module Completion: ${settings.xpRules.moduleCompletion} XP`);
      console.log(`      • Course Completion: ${settings.xpRules.courseCompletion} XP`);
      console.log(`      • High Score Bonus: ${settings.xpRules.highScore} XP`);
      console.log(`      • Perfect Score Bonus: ${settings.xpRules.perfectScore} XP`);
      console.log(`   Passing Score: ${settings.passingScore}%`);
      console.log(`   Gamification: ${settings.gamificationEnabled ? 'Enabled' : 'Disabled'}`);
      console.log(`   Version: ${settings.version}`);
    }
    console.log('');
    
    // Statistics
    console.log('='.repeat(60));
    console.log('📈 STATISTICS');
    console.log('='.repeat(60));
    
    const totalXP = users.reduce((sum, user) => sum + (user.xp || 0), 0);
    const avgXP = Math.round(totalXP / users.length);
    const completedCourses = users.reduce((sum, user) => {
      return sum + Object.values(user.progress).filter((p: any) => p.isCompleted).length;
    }, 0);
    
    console.log(`   Total Users: ${users.length}`);
    console.log(`   Total XP Earned: ${totalXP}`);
    console.log(`   Average XP per User: ${avgXP}`);
    console.log(`   Total Courses Completed: ${completedCourses}`);
    console.log(`   Total Activities Logged: ${logs.length}`);
    console.log(`   Total Achievements Earned: ${achievements.length}`);
    console.log('');
    
    console.log('='.repeat(60));
    console.log('✅ DATABASE VERIFICATION COMPLETE');
    console.log('='.repeat(60) + '\n');
    
    console.log('🚀 Ready to start the application!');
    console.log('   Backend: cd server && npm run dev');
    console.log('   Frontend: npm run dev');
    console.log('');
    
  } catch (error: any) {
    console.error('❌ Verification failed!');
    console.error('Error:', error.message);
    process.exit(1);
  } finally {
    await client.close();
  }
}

verifyDatabase();
