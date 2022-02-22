import { TInfractructure } from "../types/common";
import { THttpRequest } from "../types/http";

export interface IUseCase {
    /**
     * run
     */
    run(data: THttpRequest, infrastructure: TInfractructure): any;
}