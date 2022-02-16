import { THttpRequest, THttpResponse } from "../types/http";

export interface IController {
    /**
     * make
     */
    make(data: THttpRequest): Promise<THttpResponse>;
}