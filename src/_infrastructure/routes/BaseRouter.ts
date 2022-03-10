import { Router } from 'express';
import { IRouter } from "@libs/interfaces";

export abstract class BaseRouter implements IRouter {
    static path: string;
    protected router: Router;

    constructor() {
        this.router = Router()
    }

    init(): Router {
        throw new Error("Method not implemented.");
    }
}