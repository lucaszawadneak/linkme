import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    files: [
      // {
      //   name: 'BMW',
      //   price: 110,
      //   owned: 0,
      // },
    ],
    code: {
      value: null,
      created_at: null,
    },
  },
  mutations: {
    newFile(state, file) {
      console.log(file);
      state.files.push(file);
    },
    cutFile(state, index) {
      state.files.splice(index, 1);
    },
    newCode(state, { value, createdAt }) {
      state.code = { value, createdAt };
    },
  },
  actions: {
    addFile(context, payload) {
      const { file } = payload;
      context.commit('newFile', { ...file, id: this.state.files.length });
    },
    removeFile(context, payload) {
      const { index } = payload;
      if (this.state.files[index]) {
        context.commit('cutFile', index);
      }
    },
    // sendFiles(context, payload) {},
    // async setData() {
    //   const response = await Vue.prototype.$http.put('data.json', this.state);

    //   if (response.status === 200) {
    //     Vue.toasted.show('Changes stored successfully!', {
    //       duration: 3000,
    //       position: 'top-center',
    //       theme: 'outline',
    //     });
    //   }

    //   return response;
    // },
  },
});
