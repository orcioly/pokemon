import { setupHttpClientContainer } from './httpClient';
import { setupServiceContainer } from './services';
import { setupUseCasesContainer } from './useCases';

export async function setupContainer(): Promise<void> {
  console.log('Starting dependency logging...');

  setupUseCasesContainer();
  setupServiceContainer();
  setupHttpClientContainer();

  console.log('All Tsyringe dependencies have been successfully registered.');
}
