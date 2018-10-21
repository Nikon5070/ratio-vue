<template lang="pug">
  main.update-page(v-if='item')
    h2 Изменить закладку
    form.form.container(v-on:submit.prevent='updateItem')
      input.form__item.field(placeholder="Название" v-model='item.label'
                             v-validate="'required'" name='label' type='text')
      input.form__item.field(placeholder="Ссылка" v-model='item.url'
                             v-validate="'required'" name='url' type='text')
      button.form__item.button(type='submit' ) Изменить
</template>

<script>
export default {
  name: 'Change',
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

<style lang="scss" scoped>
.create-page {
  h2 {
    margin-bottom: 1em;
  }
}
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  .field {
    width: 100%;
    max-width: 570px;
    padding: 0.3em;
    border: 0;
    border-bottom: 1px solid #cccccc;
    outline: none;
    margin-bottom: 0.8em;
  }

  .button {
    margin-top: 0.5em;
    padding: 0.5em 2em;
    outline: none;
    color: #ffffff;
    background: #fd4b59;
    border-radius: 80px;
  }
}
</style>
