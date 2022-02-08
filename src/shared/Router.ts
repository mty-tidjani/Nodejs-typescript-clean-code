import { Router } from 'express'

export default interface IRouter {
    init (): Router
}