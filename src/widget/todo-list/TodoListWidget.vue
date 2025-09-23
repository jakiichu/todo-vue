<script setup>
const {todos} = defineProps(['todos'])
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
      <tr class="border-t border-background-dark/10 dark:border-background-light/10" v-for="todo in todos"
          :key="todo.id">
        <td class="p-4 text-center">
          <input
              class="form-checkbox h-5 w-5 rounded border-background-dark/20 dark:border-background-light/20 bg-background-light dark:bg-background-dark text-primary focus:ring-primary/50"
              type="checkbox"/>
        </td>
        <td class="p-4 text-background-dark dark:text-background-light">Grocery shopping</td>
        <td class="p-4">
          <div class="flex justify-center items-center gap-2">
            <button class="p-2 rounded-full hover:bg-primary/10 text-primary transition-colors">
              <span class="material-symbols-outlined">edit</span>
            </button>
            <button class="p-2 rounded-full hover:bg-primary/10 text-primary transition-colors">
              <span class="material-symbols-outlined">delete</span>
            </button>
          </div>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
