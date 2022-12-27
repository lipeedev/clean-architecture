import { AppError } from '@data/errors'
import { ZodError } from 'zod'

export interface HttpResponse<T = any> {
  statusCode: number
  data: T
}

export interface HttpRequest<T = any> {
  body: T
}

export const clientError = (error: AppError | ZodError): HttpResponse => {
  return {
    statusCode: error instanceof AppError ? error.status : 400,
    data: error instanceof AppError ? error.message : error.errors[0].message
  }
}

export const serverError = (error: Error): HttpResponse => {
  return {
    statusCode: 500,
    data: error.message
  }
}

export const ok = (data: any, statusCode = 200): HttpResponse => {
  return {
    statusCode,
    data
  }
}
