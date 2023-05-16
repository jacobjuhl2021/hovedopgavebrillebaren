<template>
    <button class="nav-button">{{ buttontext }}</button>
</template>

<script>
export default {
  props: {
    buttontext: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.nav-button {
text-align: center;
width: 312px;
height: 105px;
left: 72px;
top: 352px;
border-style: none;
background: #0B426E;
border-radius: 21px;
color: white;
font-size: 20px;
}


</style>