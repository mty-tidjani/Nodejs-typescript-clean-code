import { BaseRouter } from "./BaseRouter";
import TodoRoutes from "./todo.routes";

export class AppRouter extends BaseRouter {
    private path = '/';

    init() {
       this.router.use(TodoRoutes.path, new TodoRoutes(this.router).init())

       return this.router
    }
}
    