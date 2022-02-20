import { ITodoModel, TodoModel } from '../model'
import BaseRepository from "./BaseRepository";

export default class TodoRepository extends BaseRepository<ITodoModel>  {
    constructor() {
        super()
        this.Model = TodoModel
    }
}