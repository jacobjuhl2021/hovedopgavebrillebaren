<template>
    <div>
      <!-- Button to trigger the modal -->
      <button type="button" class="btn btn-primary" @click="openModal">Open Modal</button>
  
      <!-- Modal component -->
      <b-modal v-model="showModal" title="Modal Title" @hide="closeModal">
        <p>Modal content goes here.</p>
        <template #modal-footer>
          <b-button variant="secondary" @click="closeModal">Close</b-button>
          <b-button variant="primary">Save changes</b-button>
        </template>
      </b-modal>
    </div>
  </template>
  
  <script>

  
  export default {
    components: {
      BButton,
      BModal
    },
    data() {
      return {
        showModal: false
      };
    },
    methods: {
      openModal() {
        this.showModal = true;
      },
      closeModal() {
        this.showModal = false;
      }
    }
  };
  </script>
  