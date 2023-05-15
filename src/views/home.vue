<template>
    <button onclick="window.location.href='https://appointments.optikit.dk/da/NjY4MjlkZmEtYTEwOC00MjM2LTgyOGYtNWE1N2RkZGU5NjM5?store=2059';">Book tid</button>
    <RouterLink to="/underholdning"><button>Underholdning</button></RouterLink>
    <RouterLink to="/synsprofil"><button>Synsprofil</button></RouterLink>
    <RouterLink to="/infomation"><button>Information</button></RouterLink>
    <plantanimation/>
</template>

<script>
import plantanimation from '../components/plantanimation.vue'

export default {
    data() {
    return {
    };
  },
  components: {
    plantanimation
  }
}


</script>

<style>
</style>
