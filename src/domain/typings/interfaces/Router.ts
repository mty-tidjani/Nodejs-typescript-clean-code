import { Router } from 'express'

export interface IRouter {
    init (): Router
}