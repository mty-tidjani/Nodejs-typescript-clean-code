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

        if (title?.length < 10) {
            throw new Error('Todo title must be greater than 10 characters')
        }

        if (description?.length < 10) {
            throw new Error('Todo title must be greater than 10 characters')
        }

        if (!['pending', 'approved', 'done'].includes(state)) {
            throw new Error('Todo state shoul eigther be pending, approved or done')
        }

        this.title = title
        this.description = description
        this.state = state
    }

    getTitle = () => this.title
    getDescription = () => this.description
    getState = () => this.state
}