import type {IPaginationDto} from "@/shared/interface/common";

interface ITodoEntity {
    id: string;
    todo: string
    completed: boolean
    userId: number
}

interface ITodos extends IPaginationDto {
    data: Array<ITodoEntity>
}

interface IGlobalState {
    todo: ITodos
}

export type {IGlobalState}
