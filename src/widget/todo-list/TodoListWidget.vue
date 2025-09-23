<script setup>
import {ERouterName} from "@/shared/enum/router.js";
import {PhPencilSimple, PhTrash} from "@phosphor-icons/vue";

import {useRouter} from 'vue-router'

const {todos} = defineProps(['todos'])

const router = useRouter();

const goToPage = (id) => {
  router.push({name: ERouterName.ONE, params: {id}})
};

</script>

<template>
  <div
      class="bg-background-light dark:bg-background-dark/50 rounded-xl shadow-sm overflow-hidden border border-background-dark/10 dark:border-background-light/10">
    <table class="w-full text-left">
      <thead class="bg-background-light/50 dark:bg-background-dark/20">
      <tr>
        <th class="p-4 w-16 text-center font-semibold text-sm text-background-dark/60 dark:text-background-light/60">
          Status
        </th>
        <th class="p-4 font-semibold text-sm text-background-dark/60 dark:text-background-light/60">Task</th>
        <th class="p-4 w-32 text-center font-semibold text-sm text-background-dark/60 dark:text-background-light/60">
          Actions
        </th>
      </tr>
      </thead>
      <tbody>
      <tr @click="goToPage(todo.id)" class="border-t border-background-dark/10 dark:border-background-light/10"
          v-for="todo in todos"
          :key="todo.id">
        <td class="p-4 text-center">
          <input
              class="form-checkbox h-5 w-5 rounded border-background-dark/20 dark:border-background-light/20 bg-background-light dark:bg-background-dark text-primary focus:ring-primary/50"
              type="checkbox"/>
        </td>
        <td class="p-4 text-background-dark dark:text-background-light">Grocery shopping</td>
        <td class="p-4">
          <div class="flex justify-center items-center gap-2">
            <router-link :to="{ name: ERouterName.EDIT, params: { id: todo.id } }"
                         class="p-2 rounded-full hover:bg-primary/10 text-primary transition-colors" @click.stop>
              <PhPencilSimple :size="24"/>
            </router-link>
            <router-link :to="{ name: ERouterName.DELETE, params: { id: todo.id } }"
                         class="p-2 rounded-full hover:bg-primary/10 text-primary transition-colors" @click.stop>
              <PhTrash :size="24"/>
            </router-link>
          </div>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

