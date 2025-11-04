import { inject, injectable } from 'tsyringe';
import { IPokemonService } from '../../../domain/contracts/services/IPokemonService';
import { IGetPokemonUseCase } from '../../../domain/contracts/useCases/pokemon/IGetPokemonUseCase';
import { PokemonDTO } from '../../../domain/contracts/dto/PokemonDTO';

@injectable()
export class GetPokemonUseCase implements IGetPokemonUseCase {
  constructor(
    @inject('IPokemonService')
    private readonly pokemonApiService: IPokemonService,
  ) {}

  async execute(name?: string): Promise<PokemonDTO | PokemonDTO[]> {
    const data = await this.pokemonApiService.getPokemon(name ?? '');

    if (Array.isArray(data)) {
      return data.map(p => ({
        id: p.id,
        name: p.name,
        height: p.height,
        weight: p.weight,
        types: p.types,
        abilities: p.abilities ?? [],
        image: p.image ?? null,
      }));
    }

    return {
      id: data.id,
      name: data.name,
      height: data.height,
      weight: data.weight,
      types: data.types,
      abilities: data.abilities ?? [],
      image: data.image ?? null,
    };
  }
}
