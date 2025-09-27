<script setup lang="ts">
import {useAttrs} from "vue"

const attrs = useAttrs()

const props = defineProps<{
  modelValue?: string | number
}>()

const emit = defineEmits<{
  (e: "update:modelValue", value: string | number): void
}>()

function onInput(e: Event) {
  const value = (e.target as any).value
  emit("update:modelValue", value)
}
</script>

<template>
  <input
      v-bind="attrs"
      :value="props.modelValue"
      @input="onInput"
      class="block w-full rounded-lg border-gray-300 dark:border-gray-600 bg-background-light text-black p-4"
  />
</template>
