import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';

const envFileName =
  process.env.NODE_ENV === 'production' ? '.env.production' : '.env';
const envFilePath = path.join(process.cwd(), envFileName);

console.log('Looking for env file at:', envFilePath);
console.log('Env file exists:', fs.existsSync(envFilePath));

dotenv.config({ path: envFilePath });

export const config = {
  nodeEnv: process.env.NODE_ENV || 'development',
  server: {
    port: process.env.PORT || 3000,
  },
  pokeApiBaseUrl:
    process.env.POKE_API_BASE_URL || 'https://pokeapi.co/api/v2/pokemon',
};
