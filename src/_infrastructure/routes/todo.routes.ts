import TodoController from "@controllers/todos/index";
import { makeExpressCallback } from "../server/express-callback";

import { BaseRouter } from "./BaseRouter";

export default class TodoRoutes extends BaseRouter {
    static path: string = '/todos';

    init() {
        this.router.get('/', makeExpressCallback(TodoController.getTodo))

        this.router.post('/', makeExpressCallback(TodoController.createTodo))

        this.router.patch('/', makeExpressCallback(TodoController.updateTodo))

        return this.router
    }
}