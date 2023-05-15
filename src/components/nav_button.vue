<template>
    <div class="container">
        <div class="nav-button">{{ buttontext }}</div>
        <slot></slot>
    </div>
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
width: 312px;
height: 105px;
left: 72px;
top: 352.26px;
border-style: none;
background: #0B426E;
border-radius: 21.1695px;
}

</style>