import { IUserModel, UserModel } from "../model";
import BaseRepository from "./BaseRepository";

export default class UserRepository extends BaseRepository<IUserModel>  {
    constructor() {
        super()
        this.Model = UserModel
    }
}