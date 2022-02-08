import { Router } from 'express';
import IRoute from "../../shared/Route";

export class BaseRouter implements IRoute {
    static path: string;
    protected router: Router;

    constructor(router) {
        this.router = router
    }
    
    init(): Router {
        throw new Error("Method not implemented.");
    }
}