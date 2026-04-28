import bcrypt from 'bcryptjs';
import { getDatabase } from './config/db.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function seed() {
  console.log('--- Database Seeding Started ---');
  
  try {
    const db = await getDatabase();
    const usersCollection = db.collection('users');

    // 1. Ensure Platform Admin exists
    const adminEmail = 'admin@etiquette.local';
    const existingAdmin = await usersCollection.findOne({ email: adminEmail });

    if (!existingAdmin) {
      console.log(`[Seed] Creating platform admin: ${adminEmail}`);
      const hashedPassword = await bcrypt.hash('adminPassword123!', 10);
      
      const adminUser = {
        email: adminEmail,
        password: hashedPassword,
        name: 'Platform Admin',
        role: 'platform_admin',
        department: 'Administration',
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=Admin&backgroundColor=b6e3f4`,
        progress: {},
        assignedCourses: [],
        xp: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      await usersCollection.insertOne(adminUser);
      console.log('[Seed] Platform admin created successfully.');
      console.log('--- CREDENTIALS ---');
      console.log(`Email: ${adminEmail}`);
      console.log('Password: adminPassword123!');
      console.log('-------------------');
    } else {
      console.log(`[Seed] Platform admin already exists: ${adminEmail}`);
    }

    // 2. Add some sample employees if needed
    const employeeEmail = 'employee@etiquette.local';
    const existingEmployee = await usersCollection.findOne({ email: employeeEmail });

    if (!existingEmployee) {
      console.log(`[Seed] Creating sample employee: ${employeeEmail}`);
      const hashedEmpPassword = await bcrypt.hash('employee123!', 10);
      
      const employeeUser = {
        email: employeeEmail,
        password: hashedEmpPassword,
        name: 'John Employee',
        role: 'employee',
        department: 'Operations',
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=John&backgroundColor=b6e3f4`,
        progress: {},
        assignedCourses: ['posh-certification-2024', 'data-privacy-2024'],
        xp: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      await usersCollection.insertOne(employeeUser);
      console.log('[Seed] Sample employee created successfully.');
    }

    console.log('--- Database Seeding Completed ---');
    process.exit(0);
  } catch (error) {
    console.error('[Seed] Error seeding database:', error);
    process.exit(1);
  }
}

seed();
