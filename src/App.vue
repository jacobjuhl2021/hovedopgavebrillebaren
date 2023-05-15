<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>

        <RouterLink to="/">Book tid</RouterLink>
        <RouterLink to="/about">Underholdning</RouterLink>

  <RouterView />
</template>

<style scoped>
.router-link-active {
  
}
</style>
