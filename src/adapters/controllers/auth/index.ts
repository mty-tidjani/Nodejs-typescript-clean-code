import AuthUserRepository from "src/adapters/Repositories/AuthUserRepository"
import { LoginUseCase } from "src/domain/Auth/usecase/login"
import { RegisterUseCase } from "src/domain/Auth/usecase/register"

import { LoginController } from "./login.ctrl"
import { RegisterController } from "./register.ctrl"

const userRepo = new AuthUserRepository()

const AuthController = Object.freeze({
    register: new RegisterController(new RegisterUseCase(userRepo)),
    login: new LoginController(new LoginUseCase(userRepo))
})

export default AuthController