import * as bcrypt from "bcryptjs";
import { IEncryptor } from "src/domain/typings/interfaces";

export class Encryptor implements IEncryptor {
    hash(input: string): string {
        return bcrypt.hashSync(input, 10)
    }

    compare(input: string, hash: string): boolean {
        return bcrypt.compareSync(input, hash)
    }
}