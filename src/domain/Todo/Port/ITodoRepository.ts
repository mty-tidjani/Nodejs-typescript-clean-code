import { Todo } from "../Entities/Todo";

export default interface ITodoRepository {
    create(todo: Omit<Todo, 'id'>): Promise<Todo | null>;
    findOne(qry: any): Promise<Todo | null>;
    find(qry: any): Promise<Todo[] | null>;
    update(qry: any, fields: Partial<Todo>): Promise<Todo | null>;
}