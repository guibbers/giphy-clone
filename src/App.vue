<template>
  <v-app>
    <SearchBar />
    <v-main>
      <GifList />
    </v-main>
  </v-app>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue'
import GifList from '@/components/GifList.vue'

export default {
  name: 'App',

  components: {
    SearchBar,
    GifList,
  },

  data: () => ({
    //
  }),
}
</script>
