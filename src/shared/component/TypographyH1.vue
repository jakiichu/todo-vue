<script setup lang="ts">
import type {HTMLAttributes} from 'vue'
import {useAttrs} from 'vue'

const attrs = useAttrs() as HTMLAttributes
</script>

<template>
  <h1 class="text-3xl font-semibold" v-bind="attrs">
    <slot/>
  </h1>
</template>
