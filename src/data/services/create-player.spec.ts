import { AppError } from '@data/errors'
import { Player } from '@domain/entities'
import { FakePlayerRepository } from '@infra/repositories'
import { describe, expect, it } from 'vitest'
import { CreatePlayerService } from './create-player'

const makeSUT = () => {
  const playerRepository = new FakePlayerRepository()
  return new CreatePlayerService(playerRepository)
}

describe('CreatePlayer Service', () => {
  it('should create a player', () => {
    const sut = makeSUT()

    expect(sut.execute({
      email: 'leep@email.com',
      name: 'Leep'
    })).resolves.toBeInstanceOf(Player)
  })

  it('should not create a player if already exists', async () => {
    const sut = makeSUT()

    await sut.execute({
      email: 'leep@email.com',
      name: 'Leep'
    })

    expect(sut.execute({
      email: 'leep@email.com',
      name: 'Leep'
    })).rejects.toBeInstanceOf(AppError)
  })
})
