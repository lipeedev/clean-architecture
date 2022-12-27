import { makeCreatePlayerController } from '@main/factories'
import { ExpressRouteAdapter } from '@presentation/adapters'
import { Router } from 'express'

const playerRoutes = Router()

playerRoutes.post('/', ExpressRouteAdapter.adapt(makeCreatePlayerController()))

export { playerRoutes }
