import { Router } from 'express';
import { expressAdapter } from '../../infra/http/expressAdapter';
import { GetPokemonController } from '../controllers/pokemon/GetPokemonController';

const dataRouter = Router();

dataRouter.get('/', expressAdapter(GetPokemonController));

export { dataRouter };
