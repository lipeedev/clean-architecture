import { HttpRequest, HttpResponse } from '@presentation/contracts'

export interface IController {
  handle: (request: HttpRequest) => Promise<HttpResponse>
}
