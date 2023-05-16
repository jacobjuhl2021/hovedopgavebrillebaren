<template>
    <RouterLink to="/home"><button>Gå tilbage</button></RouterLink>
  
  
  <ModalComponent/>

</template>
<script>
import ModalComponent from '../components/ModalComponent.vue'


export default {
    data() {
    return {
    };
  },
  components: {
    ModalComponent
  }
}


</script>

  