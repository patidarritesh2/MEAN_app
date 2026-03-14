const mongoose = require('mongoose');
MONGO_URI = 'mongodb+srv://patidarritesh2001_db_user:j3bhMhLoio55P6NP@cluster0.jnls7r4.mongodb.net/?appName=Cluster0';

const connectMongo = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log('MongoDB Connected ');
    } catch (error) {
        console.error('MongoDB Connection Failed ');
        console.error(error.message);
        process.exit(1);
    }
};

module.exports = connectMongo;