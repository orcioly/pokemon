import { PokemonDTO } from '../dto/PokemonDTO';

export interface IPokemonService {
  getPokemon(identifier?: string | number): Promise<PokemonDTO | PokemonDTO[]>;
}
