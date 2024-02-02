import express, {Express} from 'express';

export const app: Express  = express();
import cors from 'cors';
import cookieParser from 'cookie-parser';

app.use(cors(
    {
        origin: process.env.CORS_ORIGIN,
        credentials: true,
    }
));
app.use(cookieParser());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.disable('x-powered-by');
