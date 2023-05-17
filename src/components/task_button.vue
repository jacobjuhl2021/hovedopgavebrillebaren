<template>
    <button class="task-button">{{ task_buttontext }}</button>
</template>

<script>
export default {
  props: {
    task_buttontext: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.task-button {
text-align: center;
width: 162px;
height: 55px;
left: 72px;
top: 352px;
border-style: none;
background: #0B426E;
border-radius: 21px;
color: white;
}


</style>