import {createRouter, createWebHistory, type RouteRecordRaw} from "vue-router";
import TodoListPage from "@/pages/TodoListPage/TodoListPage.vue";
import AddTodoAddTodoPage from "@/pages/AddTodo/AddTodoPage.vue";
import DeleteTodoDeleteTodoPage from "@/pages/DeleteTodo/DeleteTodoPage.vue";
import EditTodoPage from "@/pages/EditTodo/EditTodoPage.vue";
import TodoDetailsPage from "@/pages/TodoDetailsPage/TodoDetailsPage.vue";
import {ERouterName, ERouterPath} from "@/shared/enum/router";
import Header from "./layout/Header.vue";

const routes: RouteRecordRaw[] = [
    {name: ERouterName.MAIN, path: ERouterPath.MAIN, components: {default: TodoListPage, header: Header},},
    {name: ERouterName.ADD, path: ERouterPath.ADD, components: {default: AddTodoAddTodoPage, header: Header},},
    {
        name: ERouterName.DELETE,
        path: ERouterPath.DELETE,
        components: {default: DeleteTodoDeleteTodoPage, header: Header},
    },
    {name: ERouterName.EDIT, path: ERouterPath.EDIT, components: {default: EditTodoPage, header: Header},},
    {name: ERouterName.ONE, path: ERouterPath.ONE, components: {default: TodoDetailsPage, header: Header},},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export {router}
