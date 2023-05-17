<template>
<div class="information-layout">
    <RouterLink to="/home"><button>Gå tilbage</button></RouterLink>
    <img class="information-img" src="../assets/img1.png">
    <ModalComponent/>

    
    
 
</div>
</template>

<script>
import ModalComponent from '../components/ModalComponent.vue'
import task_button from '../components/task_button.vue'
export default {
    data() {
    return {
    };
  },
  components: {
    ModalComponent,
    task_button
  }
}
</script>

<style scoped>
    .information-layout{
        display: flex;
        flex-direction: column;
    }
    .information-img{
        height: 30vh;
    }
</style>  