import mongoose, { set } from 'mongoose';

const DBURL = process.env.MONGODB_URI || '';

export const connectDB = async () => {
    try {
        const connection = await mongoose.connect(DBURL, {});

        mongoose.connection.on('connected', () => {
            console.log('Connected to database');
        });

        console.log(`Connected to database: ${connection.connection.name}`);
    } catch (error: any) {
        console.error(`Error connecting to database: ${error.message}`);
        setTimeout(connectDB, 3000);
    }
};
