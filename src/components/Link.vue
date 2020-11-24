<template>
  <div class="getBox">
    <div class="iconBox">
      <button class="addButton" @click="handleAdd">
        <PhFolderPlus :size="58" color="#D0FEFE" />
      </button>
    </div>
    <Button title="link" :onPress="handleSubmit" />
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
  methods: {},
};
</script>

<style>
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
