import { Router } from 'express'
import { playerRoutes } from './player.routes'

const routes = Router()

routes.use('/players', playerRoutes)

export { routes }
