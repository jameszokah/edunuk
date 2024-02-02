import { app } from './app';
import dotenv from 'dotenv';
import { connectDB } from './src/util/db';

dotenv.config();

app.get('/', (req, res) => {
    res.json({ message: 'Hello, world!' });
    }
);

app.listen(process.env.PORT, () => {
    connectDB();
  console.log(`🚀🚀🚀🚀 Server listening on port ${process.env.PORT}`);
});

