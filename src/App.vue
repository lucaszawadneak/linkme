<template>
  <div id="main">
    <Modal v-show="modalVisible" :onDismiss="handleVisible" />
    <h1>linkme</h1>
    <get-card v-show="!linkActive" />
    <link-card v-show="!getActive" :handleAdd="addFile" />
    <VModal />
    <a href="https://lucaszawadneak.me">Lucas Zawadneak - 2020</a>
  </div>
</template>

<script>
import Modal from './components/Modal.vue';
import GetCard from './components/Get.vue';
import LinkCard from './components/Link.vue';

export default {
  components: {
    GetCard,
    LinkCard,
    Modal,
  },
  data() {
    return {
      modalVisible: false,
      getActive: false,
      linkActive: false,
    };
  },
  methods: {
    addFile() {
      this.linkActive = true;
      console.log('test');
      this.handleVisible();
    },
    handleVisible() {
      this.modalVisible = !this.modalVisible;
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}
*:focus {
  outline: 0;
}
html,
body {
  height: 100%;
}
#main {
  height: 100%;
  overflow: hidden;
  background-color: #2b4c61;
  -webkit-font-smoothing-: antialiased;
  display: flex;
  flex-direction: column;
}

h3 {
  font-family: 'Roboto', sans-serif;
}

h1 {
  font-family: 'Lobster', cursive;
  text-align: center;
  margin-top: 20px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: #d0fefe;
  font-size: 64px;
}
#main > a {
  font-family: 'Roboto', sans-serif;
  color: #fff;
  text-decoration: none;
  font-size: 14px;
  text-align: center;
  margin-top: 20px;
}
strong {
  font-family: 'Lobster', cursive;
  color: #d0fefe;
  font-size: 18px;
}
button,
span {
  font-family: 'Roboto', sans-serif;
}

.getBox {
  display: flex;
  flex-direction: column;
  width: 30%;
  min-width: 250px;
  align-self: center;
  margin: 20px;
  background-color: #1f3b4d;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
}

.modalBox {
  padding: 20px;
  display: flex;
  flex-direction: column;
}
</style>
