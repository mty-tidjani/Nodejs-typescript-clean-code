import { Todo } from 'src/domain/Todo/Entities/Todo';
import ITodoRepository from 'src/domain/Todo/Port/ITodoRepository';
import { TodoModel } from '../model'

export default class TodoRepository implements ITodoRepository {
     Model = TodoModel
     
     find(qry: any): Promise<Todo[] | null> {
        throw new Error('Method not implemented.');
    }
   

    create(todo: Todo): Promise<Todo | null> {
        throw new Error('Method not implemented.');
    }
    findOne(qry: any): Promise<Todo | null> {
        throw new Error('Method not implemented.');
    }
    update(qry: any, fields: Partial<Todo>): Promise<Todo | null> {
        throw new Error('Method not implemented.');
    }
}