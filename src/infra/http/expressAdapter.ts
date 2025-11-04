import { Request, Response, NextFunction } from 'express';
import { container } from 'tsyringe';
import { IBaseController } from '../../domain/contracts/controllers/IBaseController';

type Constructor<T> = new (...args: any[]) => T;

export const expressAdapter = <T extends IBaseController>(
  ControllerClass: Constructor<T>,
) => {
  return async (request: Request, response: Response, next: NextFunction) => {
    try {
      const controller = container.resolve(ControllerClass);

      const httpRequest = {
        body: request.body,
        params: request.params,
        query: request.query,
        headers: request.headers,
      };

      const httpResponse = await controller.handle(httpRequest);

      return response.status(httpResponse.statusCode).json(httpResponse.body);
    } catch (error) {
      next(error);
    }
  };
};
