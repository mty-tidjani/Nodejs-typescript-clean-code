import { THttpRequest, THttpResponse } from "./types/http";

export default interface IController {
    /**
     * make
     */
    make(data: THttpRequest): Promise<THttpResponse>;
}