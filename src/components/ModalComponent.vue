<template>
    <div>
        <div class="container">
            <div class="modal-row-container">

                <div class="modal-row1">
                    <task_button class="modalbutton" data-bs-toggle="modal" data-bs-target="#exampleModal" @click="showText(1)" task_buttontext="Button 1"></task_button>
                    <task_button class="modalbutton" data-bs-toggle="modal" data-bs-target="#exampleModal" @click="showText(2)" task_buttontext="Button 2"></task_button>
                    <task_button class="modalbutton" data-bs-toggle="modal" data-bs-target="#exampleModal" @click="showText(3)" task_buttontext="Button 3"></task_button>
                    <task_button class="modalbutton" data-bs-toggle="modal" data-bs-target="#exampleModal" @click="showText(4)" task_buttontext="Button 4"></task_button>
                </div>

                <div class="modal-row2">
                    <!-- Buttons -->
                    <task_button class="modalbutton" data-bs-toggle="modal" data-bs-target="#exampleModal" @click="showText(5)" task_buttontext="Button 5"></task_button>
                    <task_button class="modalbutton" data-bs-toggle="modal" data-bs-target="#exampleModal" @click="showText(6)" task_buttontext="Button 6"></task_button>
                    <task_button class="modalbutton" data-bs-toggle="modal" data-bs-target="#exampleModal" @click="showText(7)" task_buttontext="Button 7"></task_button>
                    <task_button class="modalbutton" data-bs-toggle="modal" data-bs-target="#exampleModal" @click="showText(8)" task_buttontext="Button 8"></task_button>
                </div>

            </div>
        </div>
      <!-- Modal -->
      <div class="modal fade" id="exampleModal" aria-hidden="true"> <!-- tabindex="-1" aria-labelledby="exampleModalLabel" -->
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-body">
              {{ currentText }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
<script>
import task_button from './task_button.vue'
  export default {
    components: {
    task_button
  },
    methods: {
      showText(textNumber) {
        // Update the currentText based on the button clicked
        if (textNumber === 1) {
          this.currentText = 'Text for Button 1';
        } else if (textNumber === 2) {
          this.currentText = 'Text for Button 2';
        } else if (textNumber === 3) {
          this.currentText = 'Text for Button 3';
        } else if (textNumber === 4) {
          this.currentText = 'Text for Button 4';
        } else if (textNumber === 5) {
          this.currentText = 'Text for Button 5';
        } else if (textNumber === 6) {
          this.currentText = 'Text for Button 6';
        } else if (textNumber === 7) {
          this.currentText = 'Text for Button 7';
        } else if (textNumber === 8) {
          this.currentText = 'Text for Button 8';
        }
        
        // Show the modal
        $('#exampleModal').modal('show');
      }
    },
    data() {
      return {
        currentText: ''
      };
    }
  };
  </script>
  
<style scoped>
.modal-row-container{
margin-top: 4%;
display: flex;
flex-direction: row;
justify-content: space-between;
}
.modal-row1{
display: flex;
flex-direction: column;
}
.modal-row2{
display: flex;
flex-direction: column;
}
.modalbutton{
    margin: 7px;
}
</style>