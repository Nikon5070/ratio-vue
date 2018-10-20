<template lang='pug'>
  div#app
    header.header
      nav.nav.container
        router-link.nav__item(:to="{name : 'main' }") Главная
        router-link.nav__item(:to="{name : 'create' }") Создать
    transition(@enter="enterTrans" appear @leave="leaveTrans" :css="false" mode="out-in")
      router-view.container
</template>

<script>

import anime from 'animejs';

export default {
  name: 'App',
  methods: {
    enterTrans(el) {
      anime.remove(el);
      anime({
        targets: el,
        opacity: [0, 1],
        translateX: [250, 0],
        easing: 'easeOutElastic',
        duration: 1000,
      });
    },
    leaveTrans(el, done) {
      anime.remove(el);
      anime({
        targets: el,
        opacity: [1, 0],
        translateX: -250,
        easing: 'easeInElastic',
        duration: 1000,
        complete: () => done(),
      });
    },
  },
};
</script>

<style lang='scss'>
body {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
}
ul,
li {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
button {
  background: #ffffff;
  border: 0;
  padding: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}

.container {
  max-width: 1170px;
  margin: 0 auto;
  @media (max-width: 1190px) {
    padding: 0 20px;
  }
}

.header {
  background: #f4f7f6;
  height: 50px;
}

.nav {
  display: flex;
  height: 100%;
  align-items: center;
  &__item {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 0.8em;
    color: #000;
    &:not(:last-child) {
      margin-right: 0.5em;
    }
    &.is-active {
      background: #000;
      color: #fff;
    }
  }
}
</style>
