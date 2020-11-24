<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="header">
            <h3>Tipo do arquivo</h3>
            <button class="icon-button" @click="onDismiss">
              <PhX :size="25" color="#fff" />
            </button>
          </div>
          <div class="inputHolder">
            <div id="radio">
              <input type="radio" id="text" name="type" value="text" v-model="fileType" />
              <label for="text">Texto</label>
            </div>
            <div id="radio">
              <input type="radio" id="text" name="type" value="file" v-model="fileType" />
              <label for="text">Arquivo</label>
            </div>
          </div>
          <h3>Inserir</h3>
          <textarea type="text" v-if="fileTypeBoolean" />
          <input type="file" v-else class="file-picker" />
          <Button title="inserir arquivo" @click="handleSubmit" />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { PhX } from 'phosphor-vue';
import Button from './Button.vue';

export default {
  props: {
    handleSubmit: {
      type: Function,
      default: () => {},
    },
    onDismiss: {
      type: Function,
      default: () => {},
    },
  },
  data() {
    return {
      fileType: 'text',
      fileTypeBoolean: true,
    };
  },
  methods: {
    clickme() {
      console.log('oi');
    },
  },
  watch: {
    fileType() {
      this.fileTypeBoolean = this.fileType === 'text';
    },
  },
  components: {
    Button,
    PhX,
  },
};
</script>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  z-index: 0;
  transition: opacity 0.3s ease;
  cursor: pointer;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 30%;
  min-width: 250px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #1f3b4d;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  z-index: 1;
}

.modal-container > textarea {
  background-color: #1f3b4d;
  border: 0px;
  border-bottom: 1px solid #fff;
  margin-bottom: 10px;
  height: 60px;
  font-size: 18px;
  font-family: 'Roboto', sans-serif;
  color: #fff;
  transition: 300ms;
  resize: none;
}

.modal-container > textarea:focus {
  border-bottom-color: #017374;
}
.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.inputHolder {
  margin: 10px 0px;
  display: flex;
  margin-bottom: 20px;
}

#radio {
  margin-right: 20px;
}

#radio > label {
  margin-left: 5px;
  color: #fff;
  font-family: 'Roboto', sans-serif;
}

h3 {
  font-family: 'Lobster', cursive;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: #d0fefe;
  font-size: 18px;
}
.file-picker {
  border: 0px;
  margin: 10px 0px;
  color: #fff;
  display: flex;
}
.file-picker:hover::before {
  opacity: 0.7;
}
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.icon-button {
  border: 0px;
  background-color: #1f3b4d;
  cursor: pointer;
  transition: 300ms;
}
.icon-button:hover {
  opacity: 0.5;
}
</style>
