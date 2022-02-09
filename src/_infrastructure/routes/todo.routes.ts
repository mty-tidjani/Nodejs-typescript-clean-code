import todoCtrl from "../../adapters/controllers/todos/index";
import { makeExpressCallback } from "../server/express-callback";

import { BaseRouter } from "./BaseRouter";

export default class TodoRoutes extends BaseRouter {
    static path: string = '/todos';

    init() {
        this.router.get('/', makeExpressCallback(todoCtrl.getTodo))

        this.router.post('/', makeExpressCallback(todoCtrl.createTodo))

        this.router.patch('/', makeExpressCallback(todoCtrl.updateTodo))

        return this.router
    }
}