import { THttpRequest } from "../types/http";

export interface IUseCase {
    /**
     * run
     */
    run(data: THttpRequest): any;
}