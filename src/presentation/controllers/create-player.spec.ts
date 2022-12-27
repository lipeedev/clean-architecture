import { CreatePlayerService } from '@data/services'
import { FakePlayerRepository } from '@infra/repositories'
import { describe, expect, it } from 'vitest'
import { CreatePlayerController } from './create-player'

const makeSUT = () => {
  const playerRepository = new FakePlayerRepository()
  const createPlayerService = new CreatePlayerService(playerRepository)
  return new CreatePlayerController(createPlayerService)
}

describe('CreatePlayer Controller', () => {
  it('should return a http response of success', () => {
    const sut = makeSUT()

    const httpRequest = {
      body: {
        email: 'Leep@email.com',
        name: 'Leep'
      }
    }

    expect(sut.handle(httpRequest)).resolves.toEqual(expect.objectContaining({
      statusCode: 201,
      data: expect.objectContaining({
        id: expect.any(String),
        nickname: expect.any(String),
        email: expect.any(String),
        createdAt: expect.any(String)
      })
    }))
  })

  it('should return a http response of client error', async () => {
    const sut = makeSUT()

    const httpRequest = {
      body: {
        email: 'Leep@email.com',
        name: 'Leep'
      }
    }

    await sut.handle(httpRequest)

    expect(sut.handle(httpRequest)).resolves.toEqual(expect.objectContaining({
      statusCode: 400,
      data: expect.any(String)
    }))
  })
})
