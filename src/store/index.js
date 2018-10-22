import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    bookmarks: [],
  },
  getters: {
    getBookmarks: state => state.bookmarks,
    getBookmarksItem: state => index => state.bookmarks[index],
  },
  mutations: {
    createItem(state, item) {
      state.bookmarks.push(item);
    },
    updateItem(state, index, item) {
      state.bookmarks[index] = item;
    },
    deleteItem(state, index) {
      state.bookmarks.splice(index, 1);
    },
  },
  actions: {
    createItem({
      commit,
    }, item) {
      return new Promise((resolve, reject) => {
        if (item.label !== '') {
          commit('createItem', item);
          resolve();
        }
        reject();
      });
    },
    updateItem({
      commit,
    }, index, item) {
      commit('updateItem', index, item);
    },
    deleteItem({
      commit,
    }, index) {
      commit('deleteItem', index);
    },
  },

});

export default store;
