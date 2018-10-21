<template lang="pug">
  main.create-page
    h2 Добавить закладку
    form.form.container(v-on:submit.prevent='addItem')
      input.form__item.field(placeholder="Название" v-model='item.label')
      input.form__item.field(placeholder="Ссылка" v-model='item.url')
      button.form__item.button(type='submit' ) Добавить
</template>

<script>
export default {
  name: 'Create',
  data: () => ({
    item: {},
  }),
  methods: {
    addItem() {
      this.$store.dispatch('createItem', this.item)
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
