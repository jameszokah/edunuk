import { app } from './app';
import dotenv from 'dotenv';

dotenv.config();

app.get('/', (req, res) => {
    res.json({ message: 'Hello, world!' });
    }
);

app.listen(process.env.PORT, () => {
  console.log(`🚀🚀🚀🚀 Server listening on port ${process.env.PORT}`);
});

