import * as Joi from 'joi';

import { THttpRequest, TInfractructure } from "@libs/types";
import { IUseCase } from "@libs/interfaces";
import { Todo } from "../Entities/Todo";
import ITodoRepository from "../Port/ITodoRepository";




export default class CreateTodo implements IUseCase {

    constructor(private todoRepository: ITodoRepository) { }

    async execute({ body }: THttpRequest, _infra: TInfractructure): Promise<Todo | null> {

        this.validate(body);

        const todo = new Todo(body);

        return await this.todoRepository.create({
            title: todo.title,
            description: todo.description,
            state: todo.state
        })
    }

    private validate(data: any) {

        if (!data) throw new Error('Data must be valid!');

        const schema = Joi.object({
            title: Joi.string().min(10).max(40).required(),
            description: Joi.string().min(10).required(),
            state: Joi.string().valid('pending', 'approved', 'done').required(),
        }).required()

        const result = schema.validate(data)

        if (result.error) {
            throw new Error(result.error.message)
        }
    }
}