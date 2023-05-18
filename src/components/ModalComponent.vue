<template>
    <div class="containerbox">
      <div class="info-row-container">
        <div class="info-row1">
          <task_button class="infobutton" @click="showText(1)" task_buttontext="Button 1"></task_button>
          <task_button class="infobutton" @click="showText(2)" task_buttontext="Button 2"></task_button>
          <task_button class="infobutton" @click="showText(3)" task_buttontext="Button 3"></task_button>
          <task_button class="infobutton" @click="showText(4)" task_buttontext="Button 4"></task_button>
        </div>
  
        <div class="dialogbox"></div>

        <div class="info-row2">
          <task_button class="infobutton" @click="showText(5)" task_buttontext="Button 5"></task_button>
          <task_button class="infobutton" @click="showText(6)" task_buttontext="Button 6"></task_button>
          <task_button class="infobutton" @click="showText(7)" task_buttontext="Button 7"></task_button>
          <task_button class="infobutton" @click="showText(8)" task_buttontext="Button 8"></task_button>
        </div>
      </div>
    </div>
    
  </template>
  
  <script>
  import task_button from './task_button.vue'
  
  export default {
    components: {
      task_button
    }}
  
  </script>
  
  <style scoped>
  .containerbox{
    margin-top: 23px;
    height: 484px;
    display: flex;
    margin-left: 33px;
    margin-right: 33px;
  }
.info-row-container {
  display: flex;

}

.info-row1,
.info-row2 {
  display: flex;
  flex-direction: column;

}
.info-row1{
    padding-right: 37px;
}
.info-row2{
    padding-left: 37px;
}
.infobutton {
  margin-bottom: 7%;
}
/*-------------------------------------------------------------------------------------------------------------------------------*/

.dialogbox {
  width: 537px;
  height: 484px;
  background-color: #04192A;
  border-color: pink;
  border-style: solid;
  border-radius: 5px;
  opacity: 10%;
  display: flex;
}

</style>