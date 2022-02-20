import { Model, Schema, Document, model } from "mongoose"

export interface ITodoModel extends Document {
    name: { type: String, required: true },
    username: { type: String },
    email: { type: String, unique: true, required: true, select: false },
    password: { type: String },
}

const todoSchema = new Schema(
    {
        name: { type: String, required: true },
        username: { type: String },
        email: { type: String, unique: true, required: true, select: false },
        password: { type: String, required: true, select: false },
    },
    {
        versionKey: false,
        collection: 'TODO',
    }
)

export const TodoModel: Model<ITodoModel> = model<ITodoModel>('TODO', todoSchema)