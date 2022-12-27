import { IController } from '@presentation/contracts'
import { Request, Response } from 'express'

export class ExpressRouteAdapter {
  static adapt (controller: IController) {
    return async (req: Request, res: Response) => {
      const httpRequest = {
        body: req.body
      }

      const httpResponse = await controller.handle(httpRequest)

      res.status(httpResponse.statusCode).json(httpResponse.data)
    }
  }
}
