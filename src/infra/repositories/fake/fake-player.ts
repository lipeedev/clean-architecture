import { IPlayerRepository } from '@data/contracts'
import { Player } from '@domain/entities'

export class FakePlayerRepository implements IPlayerRepository {
  private readonly players: Player[] = []

  async findByEmail (email: string): Promise<Player | null> {
    return this.players.find(player => player.email === email) ?? null
  }

  async create (player: Player): Promise<void> {
    this.players.push(player)
  }
}
