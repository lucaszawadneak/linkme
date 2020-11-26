<template>
  <div class="getBox">
    <div class="iconBox" v-if="files.length === 0">
      <button class="addButton" @click="handleAdd">
        <PhFolderPlus :size="58" color="#D0FEFE" />
      </button>
    </div>
    <div v-else>
      <template v-for="item in files">
        <div :key="item.id">
          <h1>{{ item.value }}</h1>
        </div>
      </template>
      <button class="addButton" @click="handleAdd">
        <PhFolderPlus :size="58" color="#D0FEFE" />
      </button>
    </div>
    <Button title="link" v-if="files.length !== 0" :onPress="handleSubmit" />
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
  computed: {
    files() {
      return this.$store.state.files;
    },
  },
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
  align-self: center;
}
.addButton:hover {
  opacity: 0.5;
  transition: 0ms;
}
.addButton:focus {
  opacity: 1;
}
</style>
