import { Player } from '@domain/entities'

export class PlayerViewModel {
  id: string
  email: string
  nickname: string
  createdAt: string

  static map (player: Player) {
    return {
      id: player.id,
      email: player.email,
      nickname: player.name,
      createdAt: player.createdAt.toISOString()
    }
  }
};
