<template>
  <v-form @submit.prevent="getGifs">
    <v-row>
      <v-col cols="12">
        <v-text-field v-model="query" label="Search GIF"> </v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="d-flex justify-center">
        <BaseButton type="submit">Search</BaseButton>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
import BaseButton from '@/components/BaseButton.vue'
export default {
  components: { BaseButton },
  data() {
    return {
      query: '',
    }
  },
  methods: {
    getGifs() {
      this.$store.dispatch('setQuery', this.query).then(
        this.$store.dispatch('fetchGifList', {
          keyword: this.$store.state.query,
          limit: this.$store.state.limit,
          offset: this.$store.state.offset,
        })
      )
    },
  },
  mounted() {
    this.getGifs()
  },
}
</script>
