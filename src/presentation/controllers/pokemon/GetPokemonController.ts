import { injectable, inject } from 'tsyringe';
import { IBaseController } from '../../../domain/contracts/controllers/IBaseController';
import { IGetPokemonUseCase } from '../../../domain/contracts/useCases/pokemon/IGetPokemonUseCase';
import { HttpRequest, HttpResponse } from '../../../domain/contracts/http/http';
import { AppError } from '../../../shared/errors/AppError';
import { ErrorMessages } from '../../../core/config/enums/messages/messages';
import { HttpStatusCode } from '../../../core/config/enums/HttpStatusCodes';

@injectable()
export class GetPokemonController implements IBaseController {
  constructor(
    @inject('IGetPokemonUseCase')
    private getPokemonUseCase: IGetPokemonUseCase,
  ) {}

  public async handle(request: HttpRequest): Promise<HttpResponse> {
    try {
      const name = request.query?.name as string | undefined;

      const result = await this.getPokemonUseCase.execute(name);

      return {
        statusCode: HttpStatusCode.OK,
        body: result,
      };
    } catch (error: unknown) {
      if (error instanceof AppError) {
        return {
          statusCode: error.statusCode,
          body: { message: error.message },
        };
      }

      if (error instanceof Error) {
        return {
          statusCode: HttpStatusCode.INTERNAL_SERVER_ERROR,
          body: {
            message: error.message || ErrorMessages.INTERNAL_SERVER_ERROR,
          },
        };
      }

      return {
        statusCode: HttpStatusCode.INTERNAL_SERVER_ERROR,
        body: { message: ErrorMessages.INTERNAL_SERVER_ERROR },
      };
    }
  }
}
