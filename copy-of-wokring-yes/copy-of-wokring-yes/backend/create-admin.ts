import { MongoClient } from 'mongodb';
import bcrypt from 'bcryptjs';

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://jishnunreddy_db_user:yJDLa5dDrOaXMpGC@cluster900.rtmxg8z.mongodb.net/etiquette_lms?retryWrites=true&w=majority&appName=Cluster900';

async function createAdmin() {
  const client = new MongoClient(MONGODB_URI);
  
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    
    const db = client.db();
    
    // Check if admin already exists
    const existingAdmin = await db.collection('users').findOne({ 
      email: 'etiqettelms@gmail.com' 
    });
    
    if (existingAdmin) {
      console.log('Admin user already exists!');
      return;
    }
    
    // Create admin user
    const hashedPassword = await bcrypt.hash('Akshara@123', 10);
    
    const adminUser = {
      email: 'etiqettelms@gmail.com',
      password: hashedPassword,
      name: 'Platform Admin',
      role: 'platform_admin',
      department: 'Administration',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Admin&backgroundColor=b6e3f4',
      progress: {},
      assignedCourses: [],
      xp: 0,
      createdAt: new Date()
    };
    
    const result = await db.collection('users').insertOne(adminUser);
    
    console.log('✅ Admin user created successfully!');
    console.log('Email: etiqettelms@gmail.com');
    console.log('Password: Akshara@123');
    console.log('User ID:', result.insertedId.toString());
    
  } catch (error) {
    console.error('Error creating admin user:', error);
  } finally {
    await client.close();
  }
}

createAdmin();
