import { randomUUID } from 'crypto'

interface IPlayerProps {
  email: string
  name: string
  createdAt?: Date
}

export class Player {
  private readonly props: IPlayerProps
  private readonly _id: string

  constructor (props: IPlayerProps, id?: string) {
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date()
    }

    this._id = id ?? randomUUID()
  }

  get id () {
    return this._id
  }

  set email (email: string) {
    this.props.email = email
  }

  get email () {
    return this.props.email
  }

  set name (name: string) {
    this.props.name = name
  }

  get name () {
    return this.props.name
  }

  get createdAt () {
    return this.props.createdAt
  }
}
