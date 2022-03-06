import { TInfractructure } from "../types/common";
import { THttpRequest } from "../types/http";

export interface IUseCase {
    /**
     * run
     */
    execute(data: THttpRequest, infrastructure: TInfractructure): any;
}