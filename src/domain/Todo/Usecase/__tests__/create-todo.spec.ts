import { Todo } from "../../Entities/Todo";
import ITodoRepository from "../../Port/ITodoRepository";
import CreateTodo from "../create-todo"

class InMemoryTodoRepository implements ITodoRepository {
    create(todo: Todo): Promise<Todo | null> {
        throw new Error("Method not implemented.");
    }

    findOne(qry: any): Promise<Todo | null> {
        throw new Error("Method not implemented.");
    }

    update(qry: any, fields: Partial<Todo>): Promise<Todo | null> {
        throw new Error("Method not implemented.");
    }

}

describe('Todo Entity', () => {
    let todoInput: any = undefined
    const createTodoUC = new CreateTodo(new InMemoryTodoRepository())

    beforeEach(() => {
        todoInput = {
            id: 'xxxxx',
            title: 'title clearly good',
            description: 'This could be a great one',
            state: 'approved'
        }
    });

    it('Should throw if initialised with empty object', () => {
        const empty: any = undefined
        expect(createTodoUC.execute({ body: empty } as any, {} as any)).rejects.toThrow('Data must be valid!')
    })

    it('Should throw error if todo title is less than 10 character', () => {
        todoInput.title = '';

        expect(createTodoUC.execute({ body:todoInput} as any, {} as any)).rejects.toThrow()
    })

    it('Should throw if description is les than 10 characters', () => {
        todoInput.description = ''

        expect(createTodoUC.execute({ body:todoInput} as any, {} as any)).rejects.toThrow()
    })

    it("Should throw if state is not in ['pending', 'approved', 'done']", () => {
        const state: any = 'undefined'
        todoInput.state = state;

        expect(createTodoUC.execute({ body:todoInput} as any, {} as any)).rejects.toThrow()
    })

    // it("Should be idempotent", () => {
    //     const todo1 = new Todo(todoInput)
    //     const todo2 = new Todo({ title: todo1.getTitle(), description: todo1.getDescription(), state: todo1.getState() })

    //     expect(todo1.getTitle()).toBe(todo2.getTitle())
    //     expect(todo1.getDescription()).toBe(todo2.getDescription())
    //     expect(todo1.getState()).toBe(todo2.getState())
    // })

})