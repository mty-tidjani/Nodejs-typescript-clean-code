export default interface IRepository {
    getRepository(): TRepository

    getAll(): Promise<any[]>
    findOne(qry: any): Promise<any>
    findById(id: string | number): Promise<any>
    findMany(qry: any): Promise<any>
}

export type TRepository = {
    getAll: () => Promise<any[]>
    findOne: (qry: any) => Promise<any>
    findById: (id: string | number) => Promise<any>
    findMany: (qry: any) => Promise<any>
} & Record<string, (...arg: any) => Promise<any>>