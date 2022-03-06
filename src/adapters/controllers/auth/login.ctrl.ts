import { TInfractructure } from "src/domain/typings/types/common";
import { THttpRequest, THttpResponse } from "src/domain/typings/types/http";
import {IController, IUseCase} from "../../../domain/typings/interfaces";

export class LoginController implements IController {
    private loginUseCase: IUseCase;
    
    constructor(loginUseCase: IUseCase) {
        this.loginUseCase = loginUseCase
    }

    async make(data: THttpRequest, infrastructure: TInfractructure): Promise<THttpResponse> {
       try {
            const result = await this.loginUseCase.execute(data.body, infrastructure)

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