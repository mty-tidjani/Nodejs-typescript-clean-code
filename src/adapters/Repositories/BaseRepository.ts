import { IRepository, TRepository } from "../../shared/interfaces";



export default abstract class BaseRepository implements IRepository  {
    
    getRepository(): TRepository {
        return Object.freeze({
            getAll: this.getAll,
            findOne: this.findOne,
            findById: this.findById,
            findMany: this.findMany,
            insert: this.insert
        })
    }

    getAll(): Promise<any[]> {
        throw new Error("Method not implemented.");
    }

    findOne(qry: any): Promise<any> {
        throw new Error("Method not implemented.");
    }

    findById(id: string | number): Promise<any> {
        throw new Error("Method not implemented.");
    }

    findMany(qry: any): Promise<any> {
        throw new Error("Method not implemented.");
    }
    
    insert(data: any): Promise<any> {
        throw new Error("Method not implemented.");
    }
} 