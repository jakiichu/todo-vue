import type {ITodoEntities} from "@/shared/api/todo/type.ts";

interface IGetAllTodoDto {
    total: number
    skip: number
    limit: number
    todos: Array<ITodoEntities>
}

export type {IGetAllTodoDto}
