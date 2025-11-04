import { container } from 'tsyringe';
import { IGetPokemonUseCase } from '../../../domain/contracts/useCases/pokemon/IGetPokemonUseCase';
import { GetPokemonUseCase } from '../../../application/useCases/pokemon/GetPokemonUseCase';

export function setupUseCasesContainer(): void {
  container.registerSingleton<IGetPokemonUseCase>(
    'IGetPokemonUseCase',
    GetPokemonUseCase,
  );
}
