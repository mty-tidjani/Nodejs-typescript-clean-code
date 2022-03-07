export class AuthUserEntity {
    public id: string | number
    public userId: string | number
    public email: string
    public emailToken?: string
    public password: string

    constructor(userInput: AuthUserEntity) {
        this.id = userInput.id
        this.userId = userInput.userId
        this.email = userInput.email
        this.password = userInput.password
    }
}