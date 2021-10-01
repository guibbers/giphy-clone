<template>
  <div class="gif-wrapper">
    <div class="gif-content">
      <v-img :src="gifImage.images.original.url" height="350px" width="400px" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    gifImage: Object,
  },
}
</script>

<style scoped lang="scss">
.gif-wrapper {
  position: relative;
  margin: 10px 6px;
}

.gif-content {
  position: relative;
  z-index: 100;
}

.gif-background {
  position: absolute;
  top: 40%;
  left: 45%;
  z-index: 0;
  color: white;
}
</style>
