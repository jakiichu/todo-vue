import {BACKEND_HTTPS_SERVICES} from "@/shared/api/client.ts";
import type {ICreateTodoPort} from "@/shared/api/todo/create/port.ts";

const CreateTodoApi = async (port: ICreateTodoPort): Promise<void> => {
    return BACKEND_HTTPS_SERVICES.post('/todos/add', port)
}


export {CreateTodoApi}
