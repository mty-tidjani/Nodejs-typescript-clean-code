export class EmailValidator {
    private email: string
    private field: string

    constructor(email: string, field = 'Email') {
        if (typeof email !== 'string') {
            throw new Error('Email must be string')
        }

        this.email = email.toLowerCase()
        this.field = field
    }

    isValid() {
        // todo check vailidity
        if (!this.email.match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )) {
            throw new Error(`${this.field} must be a valid email address`)
        }
        return this
    }

    sanitize() {
        this.email = this.email.split('@')
            .map((part, i) => i == 0 ? part.split('.').join('') : part)
            .join('@')

        return this
    }

    get() {
        return this.email
    }
}