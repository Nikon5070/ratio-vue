import Vue from 'vue';
import Router from 'vue-router';

import MainRoute from './main';
import CreateRoute from './create';
import ChangeRoute from './change';


Vue.use(Router);

export default new Router({
  routes: [
    MainRoute,
    CreateRoute,
    ChangeRoute,
  ],
  mode: 'history',
  linkExactActiveClass: 'is-active',
});
