import AuthController from "src/adapters/controllers/auth";
import { makeExpressCallback } from "../server/express-callback";
import { BaseRouter } from "./BaseRouter";

export default class TodoRoutes extends BaseRouter {
    static path: string = '/todos';

    init() {
        this.router.post('/', makeExpressCallback(AuthController.register))
        
        return this.router
    }
}