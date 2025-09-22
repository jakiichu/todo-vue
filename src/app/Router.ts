import {createMemoryHistory, createRouter, type RouteRecordRaw} from "vue-router";
import TodoListPage from "@/pages/TodoListPage/TodoListPage.vue";
import AddTodoAddTodoPage from "@/pages/AddTodo/AddTodoPage.vue";
import DeleteTodoDeleteTodoPage from "@/pages/DeleteTodo/DeleteTodoPage.vue";
import EditTodoPage from "@/pages/EditTodo/EditTodoPage.vue";
import TodoDetailsPage from "@/pages/TodoDetailsPage/TodoDetailsPage.vue";
import {ERouterPath} from "@/shared/enum/Router.ts";
import Header from "./layout/Header.vue";

const routes: RouteRecordRaw[] = [
    {path: ERouterPath.MAIN, components: {default: TodoListPage, header: Header},},
    {path: ERouterPath.ADD, components: {default: AddTodoAddTodoPage, header: Header},},
    {path: ERouterPath.DELETE, components: {default: DeleteTodoDeleteTodoPage, header: Header},},
    {path: ERouterPath.EDIT, components: {default: EditTodoPage, header: Header},},
    {path: ERouterPath.ONE, components: {default: TodoDetailsPage, header: Header},},
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export {router}
