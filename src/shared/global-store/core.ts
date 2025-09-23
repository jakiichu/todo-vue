import {createStore} from "vuex";
import type {IGlobalState} from "./types.ts";

const store = createStore<IGlobalState>({
    state: () => ({
        todos: [], limit: 0, skip: 0, total: 0
    })
})

export {store}