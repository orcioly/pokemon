import axios, { AxiosInstance } from 'axios';
import { injectable } from 'tsyringe';
import { IHttpClient } from './IHttpClient';
import { AppError } from '../../shared/errors/AppError';
import { ErrorMessages } from '../../core/config/enums/messages/messages';
import { HttpStatusCode } from '../../core/config/enums/HttpStatusCodes';

@injectable()
export class AxiosHttpClient implements IHttpClient {
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      timeout: 30000,
    });
  }

  setBaseURL(baseURL: string): void {
    this.axiosInstance.defaults.baseURL = baseURL;
  }

  async get<T>(url: string, config?: any): Promise<T> {
    try {
      const response = await this.axiosInstance.get<T>(url, config);
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  async post<T, U>(url: string, data: U, config?: any): Promise<T> {
    try {
      const response = await this.axiosInstance.post<T>(url, data, config);
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  private handleError(error: unknown): never {
    if (axios.isAxiosError(error)) {
      const status = error.response?.status ?? 500;
      const msg = error.response?.data?.message || error.message;

      if (status === 404) {
        throw new AppError(
          ErrorMessages.POKEMON_NOT_FOUND,
          HttpStatusCode.NOT_FOUND,
        );
      }

      throw new AppError(
        `${ErrorMessages.REQUEST_ERROR}: ${msg}`,
        status ?? HttpStatusCode.INTERNAL_SERVER_ERROR,
      );
    }

    if (error instanceof Error) {
      throw new AppError(
        ErrorMessages.UNEXPECTED_ERROR,
        HttpStatusCode.INTERNAL_SERVER_ERROR,
      );
    }

    throw new AppError(
      ErrorMessages.UNEXPECTED_ERROR,
      HttpStatusCode.INTERNAL_SERVER_ERROR,
    );
  }
}
