<script setup lang="ts">
import {reactive, watch} from "vue";
import {useRoute, useRouter} from "vue-router";
import {useMutation, useQuery} from "@tanstack/vue-query";
import {getOneTodoApi} from "@/shared/api/todo/get-one";
import type {IGetOneTodoDto} from "@/shared/api/todo/get-one/dto.ts";
import {UpdateTodoApi} from "@/shared/api/todo/update";
import {ERouterName} from "@/shared/enum/router.ts";

const route = useRoute();
const router = useRouter();
const id = route.params.id as string;

const form = reactive({
  todo: "",
  completed: false,
});

const {data, isLoading, error} = useQuery<IGetOneTodoDto>({
  queryKey: ["todo", id],
  queryFn: () => getOneTodoApi({id}),
  enabled: !!id,
});

watch(
    () => data.value,
    (val) => {
      if (val) {
        form.todo = val.todo ?? "";
        form.completed = !!val.completed;
      }
    },
    {immediate: true}
);

const {mutateAsync} = useMutation({
  mutationFn: UpdateTodoApi,
  onSuccess: () => {
    router.push({name: ERouterName.MAIN})
  }
})


async function onSubmit() {
  await mutateAsync({completed: form.completed, id})
}

function onCancel() {
  router.back();
}
</script>

<template>
  <div class="w-full max-w-md mx-auto">
    <div class="bg-background-light rounded-xl shadow-lg border border-black/10 overflow-hidden">
      <div class="p-6 sm:p-8">
        <h2 class="text-2xl font-bold text-black/90 mb-6">Edit Todo</h2>

        <div v-if="isLoading" class="py-6 text-center">Loading...</div>
        <div v-else-if="error" class="py-6 text-center text-red-500">Error loading todo</div>
        <form v-else @submit.prevent="onSubmit" class="space-y-6">
          <div>
            <label class="block text-sm font-medium text-black/60 mb-1" for="todo">Todo</label>
            <input
                v-model="form.todo"
                class="w-full bg-white/5 border border-black/10 text-black/90 placeholder:text-black/40 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 px-4 py-3"
                id="todo"
                type="text"
                placeholder="Enter todo text"
            />
          </div>

          <div class="flex items-center justify-between">
            <label class="text-sm font-medium text-black/60" for="completed">Completed</label>
            <input
                v-model="form.completed"
                class="h-5 w-5 rounded border-black/20 text-primary bg-background-light focus:ring-primary focus:ring-2 focus:ring-offset-0 focus:ring-offset-background-light checked:bg-primary"
                id="completed"
                type="checkbox"
            />
          </div>

          <div class="flex flex-col sm:flex-row-reverse gap-3 pt-4">
            <button
                class="bg-black w-full sm:w-auto inline-flex justify-center items-center px-6 py-3 border border-transparent text-sm font-semibold rounded-lg text-white bg-primary hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
                type="submit"
            >
              Update
            </button>
            <button
                @click.prevent="onCancel"
                type="button"
                class=" w-full sm:w-auto inline-flex justify-center items-center px-6 py-3 border border-black/10 text-sm font-semibold rounded-lg text-black/80 bg-black/5 hover:bg-black/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
