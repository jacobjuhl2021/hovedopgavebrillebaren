<template>
<div class="information-layout">
    <backbutton/>
    <img class="information-img" src="../assets/img1.png">
    <ModalComponent class="information-modalc"></ModalComponent>/>

    
    
 
</div>
</template>

<script>
import ModalComponent from '../components/ModalComponent.vue'
import task_button from '../components/task_button.vue'
import backbutton from '../components/backbutton.vue'
export default {
    data() {
    return {
    };
  },
  components: {
    ModalComponent,
    task_button,
    backbutton
  }
}
</script>

<style>
    body{
        background-color: #f5ede1;
    }
    .information-layout{
        display: flex;
        flex-direction: column;
        
    }
    .information-img{
        height: 220px;
        margin-top: -30px;
    }
</style>  
