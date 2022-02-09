import { THttpRequest } from "./types/http";

export default interface IUseCase {
    /**
     * run
     */
    run(data: THttpRequest): any;
}