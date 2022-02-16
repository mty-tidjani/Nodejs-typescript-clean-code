import { EmailValidator } from "./email";
import { StringValidator } from "./string";

class Validator {
    private input: any
    private field?: string

    constructor(input: any, field?: string) {
        this.input = input
        this.field = field
    }

    email () {
        return new EmailValidator(this.input, this.field)
    }

    string () {
        return new StringValidator(this.input, this.field)
    }
}

const validator = (input: any, field?: string) => new Validator(input, field)

export default validator;
