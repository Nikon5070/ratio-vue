<template lang="pug">
  .menu(v-if='show' @click='clickMenu' :style="styleMenu" )
    button.menu__button(@click='updateItem') Изменить
    button.menu__button(@click='clipboard(item.url)') Копировать URL
    button.menu__button(@click='deleteItem') Удалить

</template>

<script>
import EventBus from '@/EventBus';

export default {
  data: () => ({
    index: '',
    item: {},
    show: false,
    target: '',
  }),
  computed: {
    styleMenu() {
      const top = this.target.closest('.bookmarks__item').offsetTop;
      const style = {
        top: `${top}px`,
      };
      return style;
    },
  },
  mounted() {
    EventBus.$on('TOGGLE_MENU', (item, index, target) => {
      if (this.index === index) {
        this.show = !this.show;
        return;
      }
      this.item = item;
      this.index = index;
      this.target = target;
      this.show = true;
    });

    document.addEventListener('click', (event) => {
      const element = event.target;
      if (!element.closest('.menu, .call-menu') && this.show) {
        this.show = false;
      }
    });
  },
  beforeDestroy() {
    EventBus.$off('TOGGLE_MENU');
  },
  methods: {
    clickMenu() {
      this.show = false;
    },
    clipboard(text) {
      const input = document.createElement('input');
      input.value = text;
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);
    },
    updateItem() {
      this.$router.push(`/change/${this.index}`);
    },
    deleteItem() {
      this.$store.dispatch('deleteItem', this.index);
    },
  },
};
</script>

<style lang="scss" scoped>
.menu {
  z-index: 10;
  position: fixed;
  right: 0.5em;
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
