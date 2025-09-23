interface ITodoEntity {
    id: string;
    todo: string
    completed: boolean
    userId: number
}

interface IGlobalState {
    todos: Array<ITodoEntity>
    total: number,
    skip: number
    limit: number
}

export type {IGlobalState}