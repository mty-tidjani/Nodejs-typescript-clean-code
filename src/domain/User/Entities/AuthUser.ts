import BaseEntity from "../../entities/BaseEntity"
import validator from "../../service/validator"

type UserInput = {
    name: string
    username: string
    email: string
    password: string
}

export class UserEntity extends BaseEntity {
    private name: string
    private username: string
    private email: string
    private password: string

    constructor(userInput: UserInput) {
        super(userInput)

        this.name = validator(userInput.name, 'User name').string().notEmpty().get()

        this.username = validator(userInput.username, 'Username').string().notEmpty().get()

        this.email = validator(userInput.email).email().isValid().sanitize().get()

        this.password = validator(userInput.password).string().min(6).get()

    }

    getFields() {
        return Object.freeze({
            name: this.name,
            username: this.username,
            email: this.email,
            password: this.password
        })
    }
}