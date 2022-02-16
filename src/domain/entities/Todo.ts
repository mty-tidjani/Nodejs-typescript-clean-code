import validator from "../service/validator"
import BaseEntity from "./BaseEntity"

export type TTodoIput = {
    title: string
    description: string
    state: 'pending' | 'approved' | 'done'
}

export class Todo extends BaseEntity {
    private title: string
    private description: string
    private state: 'pending' | 'approved' | 'done'

    constructor(data: TTodoIput) {
        super(data)

        const { title, description, state } = data

        this.title = validator(title, 'Todo title').string().min(10).max(40).get()

        this.description = validator(description).string().min(10).get()

        if (!['pending', 'approved', 'done'].includes(state)) {
            throw new Error('Todo state shoul eigther be pending, approved or done')
        }

        
        this.state = state
    }

    getTitle = () => this.title
    getDescription = () => this.description
    getState = () => this.state
}