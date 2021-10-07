<template>
  <div>
    <v-icon class="load-icon">mdi-camera-iris</v-icon>
  </div>
</template>

<style>
.load-icon {
  -webkit-animation: spin 5s linear infinite;
  animation: spin 5s linear infinite;
}

@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
