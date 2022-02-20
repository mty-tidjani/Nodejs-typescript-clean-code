import * as mongoose from 'mongoose'
import { config } from './Config';

export class DataBase {
    static async connect() {

        const options: mongoose.ConnectOptions = {

        }

        await mongoose.connect(config.MONGO_URL, options)

        console.log('Database connected!!!');
    }
}