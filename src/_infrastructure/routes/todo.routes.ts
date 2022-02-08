import CreateTodoController from "../../adapters/controllers/todos/create-todos.ctrl";
import GetTodoController from "../../adapters/controllers/todos/get-todos.ctrl";
import { makeExpressCallback } from "../server/express-callback";

import { BaseRouter } from "./BaseRouter";

export default class TodoRoutes extends BaseRouter {
    static path: string = '/todos';

    init() {
        this.router.get('/', makeExpressCallback(new GetTodoController()))

        this.router.post('/', makeExpressCallback(new CreateTodoController()))

        return this.router
    }
}