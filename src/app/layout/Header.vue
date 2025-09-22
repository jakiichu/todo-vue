<script setup lang="ts">
import {PhMastodonLogo} from "@phosphor-icons/vue";
import {ERouterPath} from "@/shared/enum/Router";
</script>

<template>
  <div>
    <header
        class="bg-background-light dark:bg-background-dark/80 backdrop-blur-sm sticky top-0 z-10 border-b border-background-dark/10 dark:border-background-light/10">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <router-link :to='{path: ERouterPath.MAIN }'>
            <PhMastodonLogo :size="32"/>
          </router-link>
          <router-link :to='{path: ERouterPath.ADD}' class="flex items-center gap-4">
            button
          </router-link>
        </div>
      </div>
    </header>
  </div>
</template>
