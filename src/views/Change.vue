<template lang="pug">
  main.update-page(v-if='item')
    h2 Изменить закладку
    form.form.container(v-on:submit.prevent='updateItem')
      .form__field
        input.form__field-input(placeholder='Название' v-model.trim='item.label'
                          name='label' type='text' @input="$v.item.label.$touch()"
                          :class = "{ error : $v.item.label.$error}")
      .form__field
        input.form__field-input(placeholder='Ссылка' v-model.trim='item.url'
                          name='url' type='text' @input="$v.item.url.$touch()"
                          :class = "{ error : $v.item.url.$error}")
      button.form__item.button(type='submit' ) Изменить
</template>

<script>

import { required } from 'vuelidate/lib/validators';

export default {
  name: 'Change',
  computed: {
    index() {
      return this.$route.params.index;
    },
    item() {
      const itemData = this.$store.getters.getBookmarksItem(this.index);
      return itemData;
    },
  },
  mounted() {
    this.$v.$params.item = this.item;
  },
  methods: {
    updateItem() {
      this.$v.item.$touch();
      if (this.$v.item.$error) { return; }

      this.$store.dispatch('updateItem', this.item, this.index)
        .then(this.$router.push('/'));
    },
  },
  validations: {
    item: {
      label: { required },
      url: { required },
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
  &__field {
    width: 100%;
    max-width: 570px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    &-input {
      width: 100%;
      padding: 0.3em;
      border: 0;
      border-bottom: 1px solid #cccccc;
      outline: none;
      margin-bottom: 0.8em;
    }
  }

  .button {
    width: auto;
    margin-top: 0.5em;
    padding: 0.5em 2em;
    outline: none;
    color: #ffffff;
    background: #fd4b59;
    border-radius: 80px;
  }
}

.error {
  border-color: red;
  background: #fdd;
}
</style>
