export interface PokemonDTO {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: string[];
  abilities: string[];
  image: string | null;
}
