import { injectable, inject } from 'tsyringe';
import { IPokemonService } from '../../domain/contracts/services/IPokemonService';
import { PokemonDTO } from '../../domain/contracts/dto/PokemonDTO';
import { IHttpClient } from '../axios/IHttpClient';
import { config } from '../../core/config/config';

interface PokeApiType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

interface PokeApiAbility {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}

interface PokeApiSprites {
  front_default?: string;
  other?: {
    ['official-artwork']?: {
      front_default?: string;
    };
  };
}

interface PokeApiResponse {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: PokeApiType[];
  abilities: PokeApiAbility[];
  sprites: PokeApiSprites;
}

@injectable()
export class PokemonService implements IPokemonService {
  private readonly baseUrl: string;

  constructor(
    @inject('IHttpClient')
    private httpClient: IHttpClient,
  ) {
    this.baseUrl = config.pokeApiBaseUrl;
    this.httpClient.setBaseURL(this.baseUrl);
  }

  async getPokemon(
    identifier?: string | number,
  ): Promise<PokemonDTO | PokemonDTO[]> {
    try {
      if (identifier) {
        const idOrName = String(identifier).toLowerCase();
        const response = await this.httpClient.get<PokeApiResponse>(
          `/${idOrName}`,
        );
        const { id, name, height, weight, types, abilities, sprites } =
          response;

        return {
          id,
          name,
          height,
          weight,
          types: types.map(t => t.type.name),
          abilities: abilities.map(a => a.ability.name),
          image: sprites.other?.['official-artwork']?.front_default ?? null,
        };
      }

      const listResponse = await this.httpClient.get<{
        results: { name: string }[];
      }>('/', {});

      const pokemons = await Promise.all(
        listResponse.results.map(
          p => this.getPokemon(p.name) as Promise<PokemonDTO>,
        ),
      );

      return pokemons;
    } catch (error) {
      throw error;
    }
  }
}
