import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    bookmarks: [],
  },
  getters: {
    getBookmarks: state => [...state.bookmarks].reverse(),
    getBookmarksItem: state => index => [...state.bookmarks].reverse()[index],
  },
  mutations: {
    createItem(state, item) {
      state.bookmarks = [...state.bookmarks, item];
    },
    updateItem(state, index, item) {
      // state.bookmarks[index] = item;
      state.bookmarks = [
        ...state.bookmarks.slice(0, index),
        item,
        ...state.bookmarks.slice(index + 1),
      ];
    },
    deleteItem(state, index) {
      state.bookmarks = [...state.bookmarks.slice(0, index), ...state.bookmarks.slice(index + 1)];
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
