import { THttpRequest, THttpResponse } from "./types/http";

export default interface IController {
    /**
     * run
     */
    make(data: THttpRequest): Promise<THttpResponse>;
}