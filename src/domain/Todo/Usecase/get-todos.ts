
import { THttpRequest, TInfractructure } from "@libs/types";
import { IUseCase } from "@libs/interfaces";
import ITodoRepository from "../Port/ITodoRepository";



export class GetTodosUseCase implements IUseCase {

    constructor(private todoRepository: ITodoRepository) {
        
    }

    async execute(data: THttpRequest, _infra: TInfractructure): Promise<any> {
        // Todo Heavy logic if needed here

        return await this.todoRepository.find({});
    }
}