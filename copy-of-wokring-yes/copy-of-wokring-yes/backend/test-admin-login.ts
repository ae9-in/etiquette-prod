import { MongoClient } from 'mongodb';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://jishnunreddy_db_user:yJDLa5dDrOaXMpGC@cluster900.rtmxg8z.mongodb.net/etiquette_lms?retryWrites=true&w=majority&appName=Cluster900';
const JWT_SECRET = process.env.JWT_SECRET || 'etiquette-lms-jwt-secret-key-2026';

async function testAdminLogin() {
  const client = new MongoClient(MONGODB_URI);
  
  try {
    console.log('🔍 Testing Admin Login Flow...\n');
    
    await client.connect();
    console.log('✅ Connected to MongoDB\n');
    
    const db = client.db();
    
    // Test credentials
    const testEmail = 'etiqettelms@gmail.com';
    const testPassword = 'Akshara@123';
    
    console.log('📧 Looking for admin user:', testEmail);
    
    // Find user
    const user = await db.collection('users').findOne({ email: testEmail });
    
    if (!user) {
      console.log('❌ Admin user NOT FOUND in database!');
      console.log('\n💡 Solution: Run "npm run seed" to create the admin user\n');
      return;
    }
    
    console.log('✅ Admin user found in database');
    console.log('   Name:', user.name);
    console.log('   Email:', user.email);
    console.log('   Role:', user.role);
    console.log('   ID:', user._id.toString());
    
    // Test password
    console.log('\n🔐 Testing password...');
    const isValidPassword = await bcrypt.compare(testPassword, user.password);
    
    if (!isValidPassword) {
      console.log('❌ Password does NOT match!');
      console.log('   Expected: Akshara@123');
      console.log('   Stored hash:', user.password.substring(0, 20) + '...');
      console.log('\n💡 Solution: Run "npm run seed" to reset the password\n');
      return;
    }
    
    console.log('✅ Password is correct');
    
    // Generate JWT
    console.log('\n🎫 Generating JWT token...');
    const token = jwt.sign(
      { 
        id: user._id.toString(), 
        email: user.email, 
        role: user.role 
      }, 
      JWT_SECRET, 
      { expiresIn: '7d' }
    );
    
    console.log('✅ JWT token generated successfully');
    console.log('   Token (first 50 chars):', token.substring(0, 50) + '...');
    
    // Verify JWT
    console.log('\n🔍 Verifying JWT token...');
    const decoded = jwt.verify(token, JWT_SECRET) as any;
    
    console.log('✅ JWT token is valid');
    console.log('   Decoded ID:', decoded.id);
    console.log('   Decoded Email:', decoded.email);
    console.log('   Decoded Role:', decoded.role);
    console.log('   Expires:', new Date(decoded.exp * 1000).toLocaleString());
    
    console.log('\n' + '='.repeat(60));
    console.log('✅ ADMIN LOGIN TEST: PASSED');
    console.log('='.repeat(60));
    console.log('\n📝 Login Credentials:');
    console.log('   Email:    etiqettelms@gmail.com');
    console.log('   Password: Akshara@123');
    console.log('\n🌐 Test the login at: http://localhost:3000');
    console.log('');
    
  } catch (error: any) {
    console.error('\n❌ ERROR:', error.message);
    console.error('\nFull error:', error);
  } finally {
    await client.close();
  }
}

testAdminLogin();
