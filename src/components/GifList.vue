<template>
  <div class="gif-list">
    <div class="d-flex flex-wrap">
      <Gif v-for="gif in gifList" :key="gif.id" :gifImage="gif" />
    </div>
    <v-form @submit.prevent="loadMore">
      <v-col cols="12" class="d-flex justify-center">
        <BaseButton type="submit">Load More Gifs</BaseButton>
      </v-col>
    </v-form>
  </div>
</template>

<script>
import Gif from '@/components/Gif.vue'
import BaseButton from '@/components/BaseButton.vue'
import { mapState } from 'vuex'

export default {
  components: {
    Gif,
    BaseButton,
  },
  methods: {
    loadMore() {
      this.$store.dispatch('updateOffset', 28).then(
        this.$store.dispatch('loadMoreGifs', {
          keyword: this.$store.state.query,
        })
      )
    },
  },
  computed: {
    ...mapState(['gifList']),
  },
}
</script>

<style scoped>
.gif-list {
  margin-left: 7rem;
}
</style>
