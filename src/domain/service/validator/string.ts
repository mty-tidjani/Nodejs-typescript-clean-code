export class StringValidator {
    private theString: string
    private field: string

    constructor (theString: string, field = 'String') {
        if (typeof theString !== 'string') {
            throw new Error('Email must be string')
        }

        this.theString = theString
        this.field = field
    }

    notEmpty () {
        if (this.theString.length === 0) {
            throw new Error(`${this.field} must have a value`)
        }
        return this
    }

    max (max: number) {
        if (this.theString.length > max) {
            throw new Error(`${this.field} must be less than ${max} characters`)
        }

        return this
    }

    min (min: number) {
        if (this.theString.length < min) {
            throw new Error(`${this.field} must be greater than ${min} characters`)
        }

        return this
    }

    get () {
        return this.theString
    }
}