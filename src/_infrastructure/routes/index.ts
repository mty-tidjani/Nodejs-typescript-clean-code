import { Router } from "express";
import { BaseRouter } from "./BaseRouter";
import TodoRoutes from "./todo.routes";

export class AppRouter extends BaseRouter {
    static path = '/api';

    private static instance: AppRouter

    static getInstance = () => {
        if (!this.instance) {
            this.instance = new AppRouter()
        }
        return this.instance
    }

    init() {
       this.router.use(TodoRoutes.path, new TodoRoutes().init())

       return this.router
    }
}
    