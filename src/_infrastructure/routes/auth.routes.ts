import AuthController from "src/adapters/controllers/auth";
import { Encryptor } from "../core/Encryptor";
import { makeExpressCallback } from "../server/express-callback";
import { BaseRouter } from "./BaseRouter";

export default class TodoRoutes extends BaseRouter {
    static path: string = '/todos';

    init() {
        this.router.post('/', makeExpressCallback(AuthController.register(new Encryptor())))
        
        return this.router
    }
}