export class Todo {
    public id: string
    public title: string
    public description: string
    public state: 'pending' | 'approved' | 'done'

    constructor(data: Todo) {
        const { title, description, state, id } = data
        this.id = id
        this.title = title;
        this.description = description
        this.state = state
    }
}

