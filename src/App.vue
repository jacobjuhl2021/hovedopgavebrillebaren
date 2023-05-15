<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
        <RouterLink to="/">home</RouterLink>
        <RouterLink to="/underholdning">Underholdning</RouterLink>
        <RouterLink to="/synsprofil">Synsprofil</RouterLink>
        <div class="btn btn-primary">
          <RouterLink to="/infomation">Infomation</RouterLink>
        </div>
  <RouterView />
</template>

<style scoped>
.router-link{
  color: black;
  text-decoration: none;
  font-size: xx-large;
}
</style>
