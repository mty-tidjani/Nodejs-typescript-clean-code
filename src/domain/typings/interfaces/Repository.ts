export interface IRepository {
    getRepository(): TRepository

    find(qry: any): Promise<any[]>
    findOne(qry: any): Promise<any>
    findById(id: string | number): Promise<any>
    create(data: any[]): Promise<any[]>
    insert(data: any): Promise<any>
}

export type TRepository = {
    find: (qry: any) => Promise<any[]>
    findOne: (qry: any) => Promise<any>
    findById: (id: string | number) => Promise<any>
    create(data: any[]): Promise<any[]>
    insert(data: any): Promise<any>
} & Record<string, (...arg: any) => Promise<any>>