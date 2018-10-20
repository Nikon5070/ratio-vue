<template lang="pug">
  main.update-page(v-if='item')
    h2 Изменить закладку
    form.form.container(v-on:submit.prevent='updateItem')
      input.form__item.field(placeholder="Название" v-model='item.label')
      input.form__item.field(placeholder="Ссылка" v-model='item.url')
      button.form__item.button(type='submit' ) Изменить
</template>

<script>
export default {
  name: 'Change',
  // data: () => ({
  //   // index: this.$route.params.index,
  // }),
  computed: {
    index() {
      return this.$route.params.index;
    },
    item() {
      return this.$store.getters.getBookmarksItem(this.index);
    },
  },
  methods: {
    updateItem() {
      this.$store.dispatch('updateItem', this.item, this.index)
        .then(this.$router.push('/'));
    },
  },
};
</script>

<style lang="scss">
</style>
