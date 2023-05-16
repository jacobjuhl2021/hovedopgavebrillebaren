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
z-index: 2;
position: relative;
text-align: center;
width: 312px;
height: 105px;
border-style: none;
background: #0B426E;
border-radius: 21px;
color: white;
font-size: 20px;
box-shadow: rgb(146, 146, 146) 6px 8px 16px;
}


</style>