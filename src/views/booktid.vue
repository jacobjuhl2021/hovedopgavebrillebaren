<template>
    <backbutton/>
    <div class="container-fluid">
        <div class="row">
            <div class="col">
                <iframe class="booktid" src="https://appointments.optikit.dk/da/NjY4MjlkZmEtYTEwOC00MjM2LTgyOGYtNWE1N2RkZGU5NjM5?store=2059" frameborder="0"></iframe>
            </div>
        </div>
    </div>
</template>

<script>
import backbutton from '../components/backbutton.vue'

export default {
    data() {
    return {
    };
  },
  components: {
    backbutton
  }
}
</script>

<style>
body {
    background-color: #f5ede1;
    overflow-y: hidden;
}

.booktid {
    width: 100%;
    height: 810px;
    margin-top: 74px;
}
</style>