<template lang="pug">
  .modal(v-if='showModal')
    button.modal__button(@click='updateItem') Изменить
    button.modal__button(@click='clipboard(item.url)') Копировать URL
    button.modal__button(@click='deleteItem') Удалить

</template>

<script>
export default {
  data: () => ({

  }),
  methods: {

  },
};
</script>

<style lang="scss" scoped>
</style>
