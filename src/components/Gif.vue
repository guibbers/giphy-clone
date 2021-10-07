<template>
  <div class="gif-wrapper">
    <div class="gif-content">
      <v-img :src="gifImage.images.original.url" height="350px" width="400px" />
    </div>
    <Loader class="gif-background" />
  </div>
</template>

<script>
import Loader from '@/components/Loader.vue'
export default {
  props: {
    gifImage: Object,
  },
  components: {
    Loader,
  },
}
</script>

<style scoped lang="scss">
.gif-wrapper {
  position: relative;
  margin: 10px 6px;
}

.gif-content {
  border: 1px solid black;
  position: relative;
  z-index: 100;
}

.gif-background {
  position: absolute;
  top: 45%;
  left: 45%;
  z-index: 0;
  color: black;
}
</style>
