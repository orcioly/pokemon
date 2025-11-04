import { container } from 'tsyringe';
import { IHttpClient } from '../../../infra/axios/IHttpClient';
import { AxiosHttpClient } from '../../../infra/axios/AxiosHttpClient';

export function setupHttpClientContainer(): void {
  container.registerSingleton<IHttpClient>('IHttpClient', AxiosHttpClient);
}
