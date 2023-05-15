<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>

        <RouterLink to="/">Book tid</RouterLink>
        <RouterLink to="/about">Underholdning</RouterLink>
        <RouterLink to="/infomation">infomation</RouterLink>
  <RouterView />
</template>

<style scoped>
.router-link-active {
  
}
</style>
