import { BaseRouter } from "./BaseRouter";

export default class TodoRoutes extends BaseRouter {
    static path: string = '/todos';

    init() {
        return this.router
    }
}