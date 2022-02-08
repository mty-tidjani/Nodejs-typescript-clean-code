import IRepository, { TRepository } from "../../shared/Repository";



export default class BaseRepository implements IRepository  {
    
    getRepository(): TRepository {
        return Object.freeze({
            getAll: this.getAll,
            findOne: this.findOne,
            findById: this.findById,
            findMany: this.findMany,
            save: this.save
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
    
    save(data: any): Promise<any> {
        throw new Error("Method not implemented.");
    }
} 