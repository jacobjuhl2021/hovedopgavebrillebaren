<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
        <RouterLink to="/">home</RouterLink>
        <RouterLink to="/underholdning">Underholdning</RouterLink>
        <RouterLink to="/synsprofil">Synsprofil</RouterLink>
        <RouterLink to="/infomation"></RouterLink>
        <RouterView />
</template>

<style scoped>
</style>
