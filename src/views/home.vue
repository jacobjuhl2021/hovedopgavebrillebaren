<template>
    <div><nav_button onclick="window.location.href='https://appointments.optikit.dk/da/NjY4MjlkZmEtYTEwOC00MjM2LTgyOGYtNWE1N2RkZGU5NjM5?store=2059';" buttontext = "Book tid"/></div>
    <div><RouterLink to="/underholdning"><nav_button buttontext = "Underholdning"/></RouterLink></div>
    <div><RouterLink to="/synsprofil"><nav_button buttontext = "Synsprofil"/></RouterLink></div>
    <div><RouterLink to="/information"><nav_button buttontext = "Information"/></RouterLink></div>
    <plantanimation/>
</template>

<script>
import plantanimation from '../components/plantanimation.vue'
import nav_button from '../components/nav_button.vue'

export default {
    data() {
    return {
    };
  },
  components: {
    plantanimation,
    nav_button
  }
}


</script>

<style>
</style>
