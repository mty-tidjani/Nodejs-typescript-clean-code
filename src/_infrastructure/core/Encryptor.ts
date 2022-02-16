import { IEncryptor } from "src/shared/interfaces";

export class Encryptor implements IEncryptor {
    hash(input: string): string {
        throw new Error("Method not implemented.");
    }

    compare(input: string, hash: string): boolean {
        throw new Error("Method not implemented.");
    }
}