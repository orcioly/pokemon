import { HttpRequest, HttpResponse } from '../http/http';

export interface IBaseController {
  handle(request: HttpRequest): Promise<HttpResponse>;
}
