import { AppError } from '@data/errors'
import { ICreatePlayerUseCase } from '@domain/use-cases'
import { clientError, HttpRequest, HttpResponse, IController, ok, serverError } from '@presentation/contracts'
import { ICreatePlayerDTO } from '@presentation/dtos'
import { PlayerViewModel } from '@presentation/view-models'
import { z, ZodError } from 'zod'

export class CreatePlayerController implements IController {
  constructor (private readonly createPlayerUseCase: ICreatePlayerUseCase) {}

  async handle (request: HttpRequest<ICreatePlayerDTO>): Promise<HttpResponse<PlayerViewModel>> {
    try {
      const requestBodyDataParser = z.object({
        email: z.string().email(),
        name: z.string()
      })

      const { email, name } = requestBodyDataParser.parse(request.body)

      const player = await this.createPlayerUseCase.execute({ email, name })

      return ok(PlayerViewModel.map(player), 201)
    } catch (error) {
      if (error instanceof AppError || error instanceof ZodError) {
        return clientError(error)
      }

      return serverError(error)
    }
  }
}
