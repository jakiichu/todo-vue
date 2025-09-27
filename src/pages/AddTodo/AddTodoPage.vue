<script setup lang="ts">
import {ref} from "vue";
import Input from "@/shared/component/Input.vue";
import {useMutation} from "@tanstack/vue-query";
import {CreateTodoApi} from "@/shared/api/todo/create";
import {useRouter} from "vue-router";
import {ERouterName} from "@/shared/enum/router.ts";

const router = useRouter();


const handleNavigateToMain = async () => {
  await router.push({name: ERouterName.MAIN})
}

const todo = ref("");
const {mutateAsync} = useMutation({
  mutationFn: CreateTodoApi,
  onSuccess: handleNavigateToMain
})

async function onSubmit() {

  await mutateAsync({
    todo: todo.value,
    userId: 10,
    completed: false
  })
}


</script>

<template>
  <div class="max-w-2xl mx-auto">
    <h2 class="text-3xl font-bold text-gray-900 mb-8">Add Todo</h2>
    <form
        @submit.prevent="onSubmit"
        class="space-y-6 bg-white p-8 rounded-lg shadow-sm border border-gray-200"
    >
      <div>
        <label
            for="todo"
            class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          Todo
        </label>
        <Input
            id="todo"
            name="todo"
            placeholder="e.g. Buy groceries"
            type="text"
            v-model="todo"
        />
      </div>

      <div class="flex justify-end space-x-4 pt-4">
        <button @click="handleNavigateToMain"
                type="button"
                class="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary dark:focus:ring-offset-background-dark"
        >
          Cancel
        </button>

        <button
            type="submit"
            class="inline-flex justify-center rounded-lg border border-transparent bg-black px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-background-dark"
        >
          Save
        </button>
      </div>
    </form>
  </div>
</template>
