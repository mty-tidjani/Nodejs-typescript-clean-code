import { Model, Schema, Document, model } from "mongoose"

export interface IUserModel extends Document {
    name: { type: String, required: true },
    username: { type: String },
    email: { type: String, unique: true, required: true, select: false },
    password: { type: String },
}

const userSchema = new Schema(
    {
        name: { type: String, required: true },
        username: { type: String },
        email: { type: String, unique: true, required: true, select: false },
        password: { type: String, required: true, select: false },
    },
    {
        versionKey: false,
        collection: 'USER'
    }
)

export const UserModel: Model<IUserModel> = model<IUserModel>('USER', userSchema)
