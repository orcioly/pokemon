import express, { Response } from 'express';
import cors from 'cors';
import path from 'path';
import { routes } from './routes';
import { globalErrorHandler } from '../shared/middlewares/globalErrorHandler';

const app = express();

app.use(cors());
app.use(express.json());

const BUILD_FOLDER = 'dist';
const PUBLIC_FOLDER_NAME = 'public';
const ROOT_DIR = process.cwd();

const publicPath: string =
  process.env.NODE_ENV === 'production'
    ? path.join(ROOT_DIR, BUILD_FOLDER, PUBLIC_FOLDER_NAME)
    : path.join(ROOT_DIR, PUBLIC_FOLDER_NAME);

app.use(express.static(publicPath));

app.use(routes);

app.get('/', (req, res: Response) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.use(globalErrorHandler);

export { app };
