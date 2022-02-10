import { Router } from "express";
import { BaseRouter } from "./BaseRouter";
import TodoRoutes from "./todo.routes";

export class AppRouter extends BaseRouter {
    static path = '/';

    private static instance: AppRouter

    static getInstance = () => {
        if (!this.instance) {
            this.instance = new AppRouter(Router())
        }
        return this.instance
    }

    init() {
       this.router.use(TodoRoutes.path, new TodoRoutes(this.router).init())

       return this.router
    }
}
    