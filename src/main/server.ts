import express from 'express'
import { routes } from './routes'

const server = express()
const port = process.env.PORT ?? 3000

server.use(express.json())
server.use(routes)

server.listen(port, () => console.log(`🚀 Server is running at: http://localhost:${port}`))
