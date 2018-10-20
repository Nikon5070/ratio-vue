<template lang="pug">
  section.bookmarks(v-if='checkBookmarks')
    h2 Список закладок
    ul.bookmarks__list
      BookmarksItem(v-for="(item, index) in bookmarks"
                    :key="index" v-bind:item='item' v-bind:index='index')
    //- Modal
  section.bookmarks(v-else)
    h2 Закладки отсуствуют
    router-link.bookmarks__create(:to="{name : 'create' }") Создать


</template>

<script>
import BookmarksItem from './BookmarksItem';
import Modal from './Modal';

export default {
  components: {
    BookmarksItem,
    Modal,
  },
  computed: {
    checkBookmarks() {
      return this.bookmarks.length > 0;
    },
  },
  props: {
    bookmarks: Array,
  },
};
</script>

<style lang="scss" scoped>
.bookmarks {
  &__list {
    display: flex;
    flex-direction: column;
  }
  &__create {
    padding: 0.5em;
    background: #cccccc;
    color: #000;
    border-radius: 5px;
  }
}
</style>
