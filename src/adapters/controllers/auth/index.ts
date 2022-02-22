import UserRepository from "src/adapters/Repositories/UserRepository"
import { RegisterUseCase } from "src/application/usecases/auth/register.uc"

import { LoginController } from "./login.ctrl"
import { RegisterController } from "./register.ctrl"

const userRepo = new UserRepository()

const AuthController = Object.freeze({
    register: new RegisterController(new RegisterUseCase(userRepo)),
    login: new LoginController(new RegisterUseCase(userRepo))
})

export default AuthController