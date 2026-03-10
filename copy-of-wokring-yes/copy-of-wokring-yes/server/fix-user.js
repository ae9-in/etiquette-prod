const { MongoClient } = require('mongodb');
const bcrypt = require('bcryptjs');

const uri = 'mongodb+srv://suryassecofficial_db_user:reshotgamer@cluster99.fgod92i.mongodb.net/etiquette_lms?retryWrites=true&w=majority&appName=Cluster99';

async function fix() {
    const client = new MongoClient(uri);
    await client.connect();
    const db = client.db();

    const hash = await bcrypt.hash('Akshara@123', 10);

    // Make sure to add both spellings of the email just in case!
    await db.collection('users').updateOne(
        { email: 'etiquettelms@gmail.com' }, // with u
        {
            $set: {
                email: 'etiquettelms@gmail.com',
                password: hash,
                name: 'Platform Admin',
                role: 'platform_admin',
                department: 'Administration',
                xp: 0
            }
        },
        { upsert: true }
    );

    await db.collection('users').updateOne(
        { email: 'etiqettelms@gmail.com' }, // without u
        {
            $set: {
                password: hash
            }
        }
    );

    console.log('Fixed auth accounts in DB!');
    await client.close();
}
fix().catch(console.error);
