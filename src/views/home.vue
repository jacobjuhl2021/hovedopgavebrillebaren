<template>
    <div>
    <nav_button onclick="window.location.href='https://appointments.optikit.dk/da/NjY4MjlkZmEtYTEwOC00MjM2LTgyOGYtNWE1N2RkZGU5NjM5?store=2059';" buttontext = "Book tid"/>
    </div>
    <div class="container">
        <div class="row justify-content-center align-items-center">
            <div class="col">
                <div class="middle_part">
                    <div>
                        <RouterLink to="/underholdning"><nav_button buttontext = "Underholdning"/></RouterLink>
                    </div>
                    <plantanimation/>
                    <div>
                        <RouterLink to="/information"><nav_button buttontext = "Information"/></RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <RouterLink to="/synsprofil"><nav_button buttontext = "Synsprofil"/></RouterLink>
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
.middle_part{
    display: flex;
    flex-direction: row;
    align-items: center;
}
</style>
