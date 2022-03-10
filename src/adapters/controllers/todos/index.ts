

import { GetTodosUseCase } from "src/domain/Todo/Usecase/get-todos";
import { CreateTodosUseCase } from "src/domain/Todo/Usecase/update-todos";
import TodoRepository from "../../Repositories/TodoRepository";
import CreateTodoController from "./create-todos.ctrl";
import GetTodoController from "./get-todos.ctrl";
import UpdateTodoController from "./update-todos.ctrl";

const todoRepository = new TodoRepository();

const getTodoUC = new GetTodosUseCase(todoRepository);
const createTodoUC = new CreateTodosUseCase(todoRepository);
const updateTodoUC = new GetTodosUseCase(todoRepository);

const TodoController =  Object.freeze({
    getTodo: new GetTodoController(getTodoUC),
    createTodo: new CreateTodoController(createTodoUC),
    updateTodo: new UpdateTodoController(updateTodoUC)
});

export default TodoController;