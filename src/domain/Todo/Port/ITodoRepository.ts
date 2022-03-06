import { Todo } from "../Entities/Todo";

export default interface ITodoRepository {
    create(todo: Todo): Promise<Todo | null>;
    findOne(qry: any): Promise<Todo | null>;
    update(qry: any, fields: Partial<Todo>): Promise<Todo | null>;
}