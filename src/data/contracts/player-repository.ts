import { Player } from '@domain/entities'

export interface IPlayerRepository {
  findByEmail: (email: string) => Promise<Player | null>
  create: (player: Player) => Promise<void>
}
