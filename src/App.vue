<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
        <RouterLink to="/">home</RouterLink>
        <RouterLink to="/underholdning">Underholdning</RouterLink>
        <RouterLink to="/synsprofil">Synsprofil</RouterLink>
        <div class="button">
          <RouterLink to="/infomation">Infomation</RouterLink>
        </div>
  <RouterView />
</template>

<style scoped>

</style>
