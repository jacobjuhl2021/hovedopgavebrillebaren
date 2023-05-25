<template>
  <button :class="{ 'task-button': true, 'active': isActive }" @click="toggleButton">{{ task_buttontext }}</button>
</template>

<script>
export default {
  data() {
    return {
      isActive: false
    };
  },
  props: {
    task_buttontext: {
      type: String,
      required: true
    }
  },
  methods: {
    toggleButton() {
      this.isActive = !this.isActive;
      if (this.isActive) {
        document.addEventListener('click', this.handleOutsideClick);
      } else {
        document.removeEventListener('click', this.handleOutsideClick);
      }
    },
    handleOutsideClick(event) {
      if (!this.$el.contains(event.target)) {
        this.isActive = false;
        document.removeEventListener('click', this.handleOutsideClick);
      }
    }
  }
};
</script>

<style>
.task-button {
  text-align: center;
  width: 200px;
  height: 70px;
  left: 72px;
  top: 352px;
  border-style: none;
  background: #0B426E;
  border-radius: 21px;
  color: white;
}

.active {
  background: #365F54;
}
</style>