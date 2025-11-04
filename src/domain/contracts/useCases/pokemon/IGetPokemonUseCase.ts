import { PokemonDTO } from '../../dto/PokemonDTO';

export interface IGetPokemonUseCase {
  execute(name?: string): Promise<PokemonDTO | PokemonDTO[]>;
}
