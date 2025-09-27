import {BACKEND_HTTPS_SERVICES} from "@/shared/api/client.ts";
import type {IDeleteTodoPort} from "@/shared/api/todo/delete/port.ts";

const DeleteTodoApi = async ({id}: IDeleteTodoPort): Promise<void> => {
    return BACKEND_HTTPS_SERVICES.delete(`/todos/${id}`)
}


export {DeleteTodoApi}


