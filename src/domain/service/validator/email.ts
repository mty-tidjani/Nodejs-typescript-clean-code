export class EmailValidator {
    private email: string
    private field: string

    constructor(email: string, field = 'Email') {
        if (typeof email !== 'string') {
            throw new Error('Email must be string')
        }

        this.email = email
        this.field = field
    }

    isValid() {
        // todo check vailidity

        return this
    }

    sanitize() {
        // Todo

        return this
    }

    get() {
        return this.email
    }
}