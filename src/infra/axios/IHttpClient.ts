export interface IHttpClient {
  setBaseURL(baseURL: string): void;
  get<T>(url: string, config?: any): Promise<T>;
  // post<T, U>(url: string, data: U, config?: any): Promise<T>;
  // put<T, U>(url: string, data: U, config?: any): Promise<T>;
  // delete<T>(url: string, config?: any): Promise<T>;
}
