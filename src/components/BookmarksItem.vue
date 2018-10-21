<template lang="pug">
  li.bookmarks__item
      a.link(:href='item.url' target="_blank") {{ item.label }}
      button.button.call-menu(@click='showMenu')
        div.point
        div.point
        div.point

</template>

<script>
import EventBus from '@/EventBus';

export default {
  props: {
    index: Number,
    item: Object,
  },
  methods: {
    showMenu(e) {
      const target = e.target;
      EventBus.$emit('TOGGLE_MENU', this.item, this.index, target);
    },
  },
};
</script>

<style lang="scss" scoped>
.bookmarks__item {
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 0.5em;

  &:not(:last-child) {
    border-bottom: 1px solid #eeeeee;
  }
}

.link {
  margin-right: 1em;
  color: #000;
}
.button {
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
</style>
