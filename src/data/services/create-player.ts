import { IPlayerRepository } from '@data/contracts'
import { AppError } from '@data/errors'
import { Player } from '@domain/entities'
import { CreatePlayerRequest, CreatePlayerResponse, ICreatePlayerUseCase } from '@domain/use-cases'

export class CreatePlayerService implements ICreatePlayerUseCase {
  constructor (private readonly playerRepository: IPlayerRepository) {}

  async execute ({ name, email }: CreatePlayerRequest): Promise<CreatePlayerResponse> {
    const playerAlreadyExists = await this.playerRepository.findByEmail(email)

    if (playerAlreadyExists != null) {
      throw new AppError('This Player already exists.')
    }

    const player = new Player({ email, name })
    await this.playerRepository.create(player)

    return player
  }
}
