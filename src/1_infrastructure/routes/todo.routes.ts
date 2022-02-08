import GetTodoController from "../../2_adapters/controllers/todos/get-todos.ctrl";
import { makeExpressCallback } from "../server/express-callback";

import { BaseRouter } from "./BaseRouter";

export default class TodoRoutes extends BaseRouter {
    static path: string = '/todos';

    init() {
        this.router.get('/', makeExpressCallback(new GetTodoController()))

        return this.router
    }
}