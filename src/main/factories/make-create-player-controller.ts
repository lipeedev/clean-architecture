import { CreatePlayerService } from '@data/services'
import { FakePlayerRepository } from '@infra/repositories'
import { CreatePlayerController } from '@presentation/controllers'

export const makeCreatePlayerController = () => {
  const playerRepository = new FakePlayerRepository()
  const createPlayerService = new CreatePlayerService(playerRepository)
  return new CreatePlayerController(createPlayerService)
}
