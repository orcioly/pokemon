import { container } from 'tsyringe';
import { IPokemonService } from '../../../domain/contracts/services/IPokemonService';
import { PokemonService } from '../../../infra/services/PokemonService';

export function setupServiceContainer(): void {
  container.registerSingleton<IPokemonService>(
    'IPokemonService',
    PokemonService,
  );
}
