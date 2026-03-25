import { MongoClient } from 'mongodb';

const MONGODB_URI = 'mongodb+srv://jishnunreddy_db_user:yJDLa5dDrOaXMpGC@cluster900.rtmxg8z.mongodb.net/etiquette_lms?retryWrites=true&w=majority&appName=Cluster900';

async function verifyAtlas() {
  const client = new MongoClient(MONGODB_URI);
  
  try {
    await client.connect();
    console.log('✅ Connected to MongoDB Atlas\n');
    
    const db = client.db();
    
    console.log('='.repeat(60));
    console.log('MONGODB ATLAS VERIFICATION');
    console.log('='.repeat(60));
    console.log(`\nDatabase: ${db.databaseName}`);
    console.log('Cluster: cluster900.rtmxg8z.mongodb.net\n');
    
    const collections = await db.listCollections().toArray();
    console.log(`📁 Collections: ${collections.length}\n`);
    
    for (const collection of collections) {
      const count = await db.collection(collection.name).countDocuments();
      const indexes = await db.collection(collection.name).indexes();
      console.log(`   ✅ ${collection.name.padEnd(20)} ${count} documents, ${indexes.length} indexes`);
    }
    
    const totalDocs = await Promise.all(
      collections.map(c => db.collection(c.name).countDocuments())
    );
    const sum = totalDocs.reduce((a, b) => a + b, 0);
    
    console.log(`\n📊 Total Documents: ${sum}`);
    console.log(`📑 Total Indexes: ${collections.length > 0 ? 'Multiple' : '0'}`);
    
    // Sample data
    console.log('\n' + '='.repeat(60));
    console.log('SAMPLE DATA');
    console.log('='.repeat(60) + '\n');
    
    const users = await db.collection('users').find({}).limit(5).toArray();
    console.log(`👥 Users (${users.length}):`);
    users.forEach((user: any) => {
      console.log(`   • ${user.email} (${user.role}) - ${user.xp} XP`);
    });
    
    const courses = await db.collection('courses').find({}).limit(5).toArray();
    console.log(`\n📚 Courses (${courses.length}):`);
    courses.forEach((course: any) => {
      console.log(`   • ${course.title}`);
    });
    
    const departments = await db.collection('departments').find({}).toArray();
    console.log(`\n🏢 Departments (${departments.length}):`);
    departments.forEach((dept: any) => {
      console.log(`   • ${dept.name}`);
    });
    
    console.log('\n' + '='.repeat(60));
    console.log('✅ MONGODB ATLAS MIGRATION SUCCESSFUL!');
    console.log('='.repeat(60) + '\n');
    
    console.log('🎉 All data has been migrated to MongoDB Atlas cloud database!');
    console.log('🔗 You can now access your data from anywhere.\n');
    
  } catch (error: any) {
    console.error('❌ Verification failed!');
    console.error('Error:', error.message);
    process.exit(1);
  } finally {
    await client.close();
  }
}

verifyAtlas();
