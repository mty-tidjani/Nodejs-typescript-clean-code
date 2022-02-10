import { Router } from 'express';
import IRoute from "../../shared/Router";

export abstract class BaseRouter implements IRoute {
    static path: string;
    protected router: Router;

    constructor(router: Router) {
        this.router = router
    }

    init(): Router {
        throw new Error("Method not implemented.");
    }
}