<script setup lang="ts">
import {PhTrashSimple} from "@phosphor-icons/vue";
import {useMutation} from "@tanstack/vue-query";
import {DeleteTodoApi} from "@/shared/api/todo/delete";
import {useRoute, useRouter} from "vue-router";
import {ERouterName} from "@/shared/enum/router.ts";

const route = useRoute();
const router = useRouter();

const id = route.params.id as string;

const {mutateAsync} = useMutation({
  mutationFn: async () => DeleteTodoApi({id}),
  onSuccess: () => {
    router.push({name: ERouterName.MAIN})
  }
})

function onCancel() {
  router.back();
}

</script>

<template>
  <div class="flex items-center justify-center min-h-screen">
    <div
        class="bg-white dark:bg-background-dark rounded-xl shadow-lg p-8 max-w-md w-full m-4 border border-slate-200 dark:border-slate-700">
      <div class="flex flex-col items-center text-center">
        <div class="bg-red-100 dark:bg-red-900/30 p-3 rounded-full mb-4">
<span class="material-symbols-outlined text-red-500 dark:text-red-400"
      style="font-size: 32px; font-variation-settings: 'FILL' 1;">
                        <PhTrashSimple :size="32"/>
                     </span>
        </div>
        <h2 class="text-xl font-bold text-slate-900 dark:text-white mb-2">Are you sure?</h2>
        <p class="text-slate-600 dark:text-slate-400 mb-6">You are about to delete this task. This action cannot be
          undone.</p>
        <div class="w-full flex justify-center gap-4">
          <button @click="mutateAsync()"
                  class="flex-1 px-4 py-2 text-sm font-bold text-white bg-red-600 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 dark:focus:ring-offset-background-dark">
            Delete
          </button>
          <button @click="onCancel()"
                  class="flex-1 px-4 py-2 text-sm font-bold text-slate-700 dark:text-slate-300 bg-slate-200 dark:bg-slate-700 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary dark:focus:ring-offset-background-dark">
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
