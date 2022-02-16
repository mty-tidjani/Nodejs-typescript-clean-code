import { THttpRequest, THttpResponse } from "src/shared/types/http";
import {IController, IUseCase} from "../../../shared/interfaces";

export class RegisterController implements IController {
    private registerUseCase: IUseCase;
    
    constructor(registerUseCase: IUseCase) {
        this.registerUseCase = registerUseCase
    }

    async make(data: THttpRequest): Promise<THttpResponse> {
       try {
            const todo = await this.registerUseCase.run(data.body)

            return {
                body: { result: todo, statusCode: 201, success: true },
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