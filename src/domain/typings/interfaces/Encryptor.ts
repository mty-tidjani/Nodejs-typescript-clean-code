export interface IEncryptor {
    hash(input: string): string
    compare(input:string, hash: string): boolean
}