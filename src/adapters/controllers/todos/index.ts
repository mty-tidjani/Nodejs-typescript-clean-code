
import { CreateTodosUseCase } from "../../../application/usecases/todo/create-todos";
import { GetTodosUseCase } from "../../../application/usecases/todo/get-todos";
import TodoRepository from "../../Repositories/TodoRepository";
import CreateTodoController from "./create-todos.ctrl";
import GetTodoController from "./get-todos.ctrl";
import UpdateTodoController from "./update-todos.ctrl";

const todoRepo = new TodoRepository();

const getTodoUC = new GetTodosUseCase(todoRepo);
const createTodoUC = new CreateTodosUseCase(todoRepo);
const updateTodoUC = new GetTodosUseCase(todoRepo);

const TodoControllers =  Object.freeze({
    getTodo: new GetTodoController(getTodoUC),
    createTodo: new CreateTodoController(createTodoUC),
    updateTodo: new UpdateTodoController(updateTodoUC)
});

export default TodoControllers;