import { TInfractructure } from "src/shared/types/common";
import { THttpRequest, THttpResponse } from "src/shared/types/http";
import {IController, IUseCase} from "../../../shared/interfaces";

export class LoginController implements IController {
    private loginUseCase: IUseCase;
    
    constructor(loginUseCase: IUseCase) {
        this.loginUseCase = loginUseCase
    }

    async make(data: THttpRequest, infrastructure: TInfractructure): Promise<THttpResponse> {
       try {
            const result = await this.loginUseCase.run(data.body, infrastructure)

            return {
                body: { result, statusCode: 200, success: true },
                statusCode: 201,
            }
        } catch (error: any) {
            return {
                body: { statusCode: 400, success: true, message: error.message },
                statusCode: 400,
            }
        }
    }
}