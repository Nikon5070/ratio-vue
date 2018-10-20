<template lang="pug">
  li.bookmarks__item
    .content
      a.content__link(:href='item.url' target="_blank") {{ item.label }}
      button.button.content__button(@click='toogleAction')
        div.point
        div.point
        div.point
    .modal(v-if='showModal')
      button.modal__button(@click='updateItem') Изменить
      button.modal__button(@click='clipboard(item.url)') Копировать URL
      button.modal__button(@click='deleteItem') Удалить

</template>

<script>
export default {
  props: {
    index: Number,
    item: Object,
  },
  data: () => ({
    showModal: false,
  }),
  mounted() {
    document.addEventListener('click', (event) => {
      const element = event.target;
      if (!element.closest('.modal , .content__button ') && this.showModal) {
        this.showModal = false;
      }
    });
  },
  methods: {
    clipboard(text) {
      const input = document.createElement('input');
      input.value = text;
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);
      this.toogleAction();
    },
    updateItem() {
      this.$router.push(`/change/${this.index}`);
      this.toogleAction();
    },
    deleteItem() {
      this.$store.dispatch('deleteItem', this.index);
      this.toogleAction();
    },
    toogleAction() {
      this.showModal = !this.showModal;
      // if (this.showModal) {
      //   this.$emit('showModal', this.item, this.index);
      // }
    },
  },
};
</script>

<style lang="scss" scoped>
.bookmarks__item {
  position: relative;
}
.content {
  display: flex;
  &__link {
    margin-right: 1em;
    color: #000;
  }
  &__button {
    border-radius: 50%;
    width: 18px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;

    div.point {
      border: 2px solid #000;
      border-radius: 2px;
      margin: 1px 8px;
      transform: scale(0.7);
    }
    // &:hover {
    //   background: #cccccc;
    // }
  }
}
.modal {
  z-index: 10;
  position: absolute;
  top: 0;
  right: 0;
  box-shadow: 0px 0px 5px 0px;
  display: flex;
  flex-direction: column;
  &__button {
    padding: 0.3em 1em;
    &:not(:last-child) {
      border-bottom: 1px solid #cccccc;
    }
  }
}
</style>
