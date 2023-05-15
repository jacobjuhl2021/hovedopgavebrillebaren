<template>
    <RouterLink to="/underholdning"><button>Underholdning</button></RouterLink>
    <RouterLink to="/synsprofil"><button>Synsprofil</button></RouterLink>
    <RouterLink to="/infomation"><button>Information</button></RouterLink>
    <plantanimation/>
</template>

<script>
import plantanimation from '../components/plantanimation.vue'

export default {
  components: {
    plantanimation
  }
}
</script>

<style>
</style>
