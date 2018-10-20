<template lang='pug'>
  main
    Bookmarks(v-bind:bookmarks='bookmarks')
</template>

<script>
import Bookmarks from '@/components/Bookmarks';


export default {
  name: 'Main',
  components: {
    Bookmarks,
  },
  data: () => ({
    textItem: '',
  }),
  computed: {
    bookmarks() {
      return this.$store.getters.getBookmarks;
    },
  },
};
</script>

<style lang='scss' scoped>
</style>
