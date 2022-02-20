import { Model } from "mongoose"
import { IRepository, TRepository } from "../../shared/interfaces";



export default abstract class BaseRepository<T> implements IRepository {
    Model!: Model<T>;

    getRepository(): TRepository {
        return Object.freeze({
            find: this.find,
            findOne: this.findOne,
            findById: this.findById,
            create: this.create,
            insert: this.insert,
        })
    }

    async find(qry: any): Promise<T[]> {
        return await this.Model.find(qry);
    }

    async findOne(qry: any): Promise<T | null> {
        return await this.Model.findOne(qry);
    }

    async findById(id: string | number): Promise<T | null> {
        return await this.Model.findById(id);
    }

    async create(data: any[]): Promise<T[]> {
        return await this.Model.create(data)
    }

    async insert(data: any): Promise<T> {
        return await this.Model.create(data);
    }

    async updateOne(filter: any, data: any): Promise<T | null> {
        return await this.Model.findOneAndUpdate(filter, data)
    }

    async updateMany(filter: any, data: any): Promise<T | null> {
        return await this.Model.findOneAndUpdate(filter, data)
    }
} 