import {BACKEND_HTTPS_SERVICES} from "@/shared/api/client.ts";
import type {IGetOneTodoPort} from "./port.ts";
import type {IGetOneTodoDto} from "./dto.ts";

const getOneTodoApi = async ({id}: IGetOneTodoPort): Promise<IGetOneTodoDto> => {
    return BACKEND_HTTPS_SERVICES.get(`/todos/${id}`).then(res => res.data)
}


export {getOneTodoApi}
