<script setup lang="ts">
import {useQuery} from "@tanstack/vue-query";
import {getAllTodoApi} from "@/shared/api/todo/get-all";
import type {IGetAllTodoDto} from "@/shared/api/todo/get-all/dto.ts";
import TodoListWidget from "@/widget/todo-list/TodoListWidget.vue";
import TypographyH1 from "@/shared/component/TypographyH1.vue";

const {data} = useQuery<IGetAllTodoDto>({
  queryKey: ['todos'],
  queryFn: getAllTodoApi,
})
</script>

<template>
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="py-10 flex justify-between">
      <TypographyH1>Todos</TypographyH1>

    </div>
    <todo-list-widget :todos='data?.todos || []'></todo-list-widget>
  </div>
</template>
