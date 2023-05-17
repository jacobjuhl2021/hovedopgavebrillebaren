<template>
    <backbutton/>
    <div class="container-fluid">
        <div class="row">
            <div class="col">
                <iframe class="synsprofil" src="https://myvisionprofile.zeiss.com/ecp/Nf0IflUV?fbclid=IwAR3j8WAJ3ZGBgkI_hG9Wiee9hd0R_7OLVj6LgrNHW4HJtKW3Fuh6Y8uHo0Y#intro/introduction-02" frameborder="0"></iframe>
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
.synsprofil{
    width: 100%;
    min-height: 810px;
}

</style>
