import { TInfractructure } from "../types/common";
import { THttpRequest, THttpResponse } from "../types/http";

export interface IController {
    /**
     * make
     */
    make(data: THttpRequest, infra: TInfractructure): Promise<THttpResponse>;
}

