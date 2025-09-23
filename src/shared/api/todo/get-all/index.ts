import {BACKEND_HTTPS_SERVICES} from "@/shared/api/client.ts";
import type {IGetAllTodoDto} from "./dto.ts";

const getAllTodoApi = async (): Promise<IGetAllTodoDto> => {
    return BACKEND_HTTPS_SERVICES.get('/todos').then(res => res.data)
}


export {getAllTodoApi}
