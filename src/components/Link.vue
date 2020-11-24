<template>
  <div class="getBox">
    <div class="iconBox">
      <button class="addButton">
        <PhFolderPlus :size="58" color="#D0FEFE" />
      </button>
    </div>
    <Button title="link" :onPress="handleLink" />
  </div>
</template>

<script>
import { PhFolderPlus } from 'phosphor-vue';
import Button from './Button.vue';

export default {
  components: { Button, PhFolderPlus },
  props: {
    handleAdd: {
      type: Function,
      default: () => {},
    },
    handleSubmit: {
      type: Function,
      default: () => {},
    },
  },
  methods: {
    handleLink() {
      return console.log('oi');
    },
  },
};
</script>

<style>
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
}

.getBox > input {
  background-color: #1f3b4d;
  border: 0px;
  border-bottom: 1px solid #1f3b4d;
  margin-bottom: 10px;
  height: 60px;
  font-size: 32px;
  font-family: 'Roboto', sans-serif;
  color: #fff;
}
.getBox > input:focus {
  border-bottom-color: #fff;
}

.iconBox {
  background-color: #1f3b4d;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.addButton {
  background-color: #1f3b4d;
  border: 0px;
  cursor: pointer;
  transition: 300ms;
}
.addButton:hover {
  opacity: 0.5;
}
</style>
