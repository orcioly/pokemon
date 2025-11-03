import express, { Response } from 'express';
import cors from 'cors';
// import { routes } from './routes';
// import { globalErrorHandler } from '../core/middlewares/globalErrorHandler';

const app = express();

app.use(cors());
app.use(express.json());
// app.use(routes);

app.get('/', (response: Response) => {
  return response.json('Api - Sinibref is running!');
});

// app.use(globalErrorHandler);

export { app };
