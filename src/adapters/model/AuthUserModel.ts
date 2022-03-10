import { Model, Schema, Document, model } from "mongoose"

export interface IAuthUserModel extends Document {
    userId: { type: String, required: true },
    email: { type: String, unique: true, required: true, select: false },
    password: { type: String },
    emailToken: { type: String },
}

const userSchema = new Schema(
    {
        userId: { type: String, required: true },
        username: { type: String },
        email: { type: String, unique: true, required: true },
        emailToken: { type: String },
    },
    {
        versionKey: false,
        collection: 'USER'
    }
)

export const AuthUserModel: Model<IAuthUserModel> = model<IAuthUserModel>('AUTH_USER', userSchema)
