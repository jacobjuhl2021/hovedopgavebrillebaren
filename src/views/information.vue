<template>
<div class="information-layout">
    <backbutton/>
    <img class="information-img" src="../assets/img1.png">
    <div class="baggrundinformation">
    <ModalComponent class="information-modalc"></ModalComponent>
    </div>
    
    
 
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
        overflow-y: hidden;
        background: url(../assets/baggrund.jpg) no-repeat center center fixed;
        background-size: cover;
    }

    .information-layout{
        display: flex;
        flex-direction: column;
        
    }
    .information-img{
        height: 294px;
    }
</style>  
