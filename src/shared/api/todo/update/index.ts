import {BACKEND_HTTPS_SERVICES} from "@/shared/api/client.ts";
import type {IUpdateTodoPort} from "./port.ts";

const UpdateTodoApi = async ({id, ...props}: IUpdateTodoPort): Promise<void> => {
    return BACKEND_HTTPS_SERVICES.put(`/todos/${id}`, props)
}


export {UpdateTodoApi}
