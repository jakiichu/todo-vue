import {createStore} from "vuex";
import type {IGlobalState} from "./types.ts";
import {todoModules} from "@/shared/global-store/modules/todo.ts";

const store = createStore<IGlobalState>({
    modules: {
        todo: todoModules
    }
})

export {store}
