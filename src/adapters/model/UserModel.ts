import { Model, Schema, Document, model } from "mongoose"

export interface IAuthUserModel extends Document {
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

export const AuthUserModel: Model<IAuthUserModel> = model<IAuthUserModel>('AUTH_USER', userSchema)
