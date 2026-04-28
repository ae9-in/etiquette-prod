import { MongoClient } from 'mongodb';

const MONGODB_URI = 'mongodb+srv://jishnunreddy_db_user:yJDLa5dDrOaXMpGC@cluster900.rtmxg8z.mongodb.net/etiquette_lms?retryWrites=true&w=majority&appName=Cluster900';

async function testConnection() {
  console.log('🔗 Testing MongoDB Atlas connection...\n');
  console.log('URI:', MONGODB_URI.replace(/:[^:@]+@/, ':****@'));
  console.log('');

  let client;
  try {
    client = new MongoClient(MONGODB_URI);
    
    console.log('Connecting...');
    await client.connect();
    
    console.log('✅ Successfully connected to MongoDB Atlas!\n');
    
    const db = client.db();
    console.log('Database:', db.databaseName);
    
    // Test ping
    const pingResult = await db.admin().ping();
    console.log('Ping result:', pingResult);
    
    // List existing collections
    const collections = await db.listCollections().toArray();
    console.log('\nExisting collections:', collections.length);
    if (collections.length > 0) {
      collections.forEach(col => console.log(`  • ${col.name}`));
    } else {
      console.log('  (No collections yet - database is empty)');
    }
    
    console.log('\n✅ MongoDB Atlas is ready for migration!\n');
    
  } catch (error: any) {
    console.error('\n❌ Connection failed!');
    console.error('Error:', error.message);
    console.error('\nPossible issues:');
    console.error('1. Check if IP address is whitelisted in MongoDB Atlas');
    console.error('2. Verify credentials are correct');
    console.error('3. Check network connectivity');
    process.exit(1);
  } finally {
    if (client) {
      await client.close();
      console.log('Connection closed.');
    }
  }
}

testConnection();
