<script setup lang="ts">
import {useQuery} from "@tanstack/vue-query";
import {useRoute} from "vue-router";
import {getOneTodoApi} from "@/shared/api/todo/get-one";
import type {IGetOneTodoDto} from "@/shared/api/todo/get-one/dto.ts";
import {ERouterPath} from "@/shared/enum/router.ts";

const {params: {id}} = useRoute()

const {data} = useQuery<IGetOneTodoDto>({
  queryKey: ['todo', id],
  queryFn: () => getOneTodoApi({id: id as string}),
})
</script>

<template>
  <div class="max-w-2xl mx-auto bg-background-light  rounded-lg shadow-sm">
    <div class="p-6 border-b border-gray-200 ">
      <h2 class="text-2xl font-bold text-gray-900">Todo Details</h2>
    </div>
    <div class="p-6 space-y-5">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-2">
        <p class="font-medium text-gray-500 ">ID</p>
        <p class="col-span-2 text-gray-900 ">{{ data?.id }}</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-2">
        <p class="font-medium text-gray-500 ">Task</p>
        <p class="col-span-2 text-gray-900 ">{{ data?.todo }}</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-2 items-center">
        <p class="font-medium text-gray-500">Status</p>
        <div class="col-span-2">
    <span
        class="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-primary/10 text-primary">
      {{ data?.completed ? "Completed" : "Pending" }}
    </span>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-2">
        <p class="font-medium text-gray-500 ">User ID</p>
        <p class="col-span-2 text-gray-900 ">{{ data?.userId }}</p>
      </div>
    </div>
    <div class="p-6 bg-background-light/50  rounded-b-lg flex justify-end space-x-3">
      <router-link :to="ERouterPath.MAIN"
                   class="px-4 py-2 rounded text-sm font-medium bg-gray-200 hover:bg-gray-300  text-gray-800 transition-colors">
        Back to list
      </router-link>
      <button class="px-4 py-2 rounded text-sm font-medium bg-primary text-white hover:bg-primary/90 transition-colors">
        Edit
      </button>
    </div>
  </div>
</template>
