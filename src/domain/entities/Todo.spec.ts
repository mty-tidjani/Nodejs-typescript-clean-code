import { Todo } from "./Todo"

describe('Todo Entity', () => {
    let todoInput: any = undefined

    beforeEach(() => {
        todoInput = {
            title: 'title clearly good',
            description: 'This could be a great one',
            state: 'approved'
        }
    })

    it('Should throw if initialised with empty object', () => {
        const empty: any = undefined
        expect(() => new Todo(empty)).toThrow('Data must be valid!')
    })

    it('Should throw error if todo title is less than 10 character', () => {
        todoInput.title = '';

        expect(() => new Todo(todoInput)).toThrow()
    })

    it('Should throw if description is les than 10 characters', () => {
        todoInput.description = ''

        expect(() => new Todo(todoInput)).toThrow()
    })

    it("Should throw if state is not in ['pending', 'approved', 'done']", () => {
        const state: any = 'undefined'
        todoInput.state = state;

        expect(() => new Todo(todoInput)).toThrow()
    })

    it("Should be idempotent", () => {
        const todo1 = new Todo(todoInput)
        const todo2 = new Todo({ title: todo1.getTitle(), description: todo1.getDescription(), state: todo1.getState() })

        expect(todo1.getTitle()).toBe(todo2.getTitle())
        expect(todo1.getDescription()).toBe(todo2.getDescription())
        expect(todo1.getState()).toBe(todo2.getState())
    })

})