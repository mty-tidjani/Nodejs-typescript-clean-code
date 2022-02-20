import * as dotenv from "dotenv";

dotenv.config()

export const config = {
    MONGO_URL: process.env.MONGO_DB_URL || ''
}