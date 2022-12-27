import { Player } from '@domain/entities'

export interface CreatePlayerRequest {
  name: string
  email: string
}

export type CreatePlayerResponse = Player

export interface ICreatePlayerUseCase {
  execute: (request: CreatePlayerRequest) => Promise<CreatePlayerResponse>
}
