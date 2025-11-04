import { Router } from 'express';
import { dataRouter } from '../../presentation/routes/pokemon.routes';

const routes = Router();

routes.use('/api/data', dataRouter);

export { routes };
