<template>
    <div class="content">
        <div class="top_part">
            <nav_button class="Nav_position" onclick="window.location.href='https://appointments.optikit.dk/da/NjY4MjlkZmEtYTEwOC00MjM2LTgyOGYtNWE1N2RkZGU5NjM5?store=2059';" buttontext = "Book tid"/>
        </div>
        <div class="container">
            <div class="row justify-content-center align-items-center">
                <div class="col">
                    <div class="middle_part">
                        <div>
                            <RouterLink to="/underholdning"><nav_button class="Nav_position" buttontext = "Underholdning"/></RouterLink>
                        </div>
                            <plantanimation/>
                        <div>
                            <RouterLink to="/information"><nav_button class="Nav_position" buttontext = "Information"/></RouterLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bottom_part">
            <RouterLink to="/synsprofil"><nav_button class="Nav_position" buttontext = "Synsprofil"/></RouterLink>
        </div>
    </div>
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

body{
    background-color: #f5ede1;
    overflow-y: hidden;
}

.content{
    padding-top: 75px;
    width: 100%;
    height: 810px;
    
}

.top_part {
    display: flex;
    justify-content: center;
    margin-bottom: 35px;
}

.middle_part {
    display: flex;
    flex-direction: row;
    align-items: center;

}

.bottom_part {
    margin-top: 35px;
    display: flex;
    justify-content: center;
}

</style>
