<template>
  <div class="getBox">
    <strong>código</strong>
    <input type="text" maxlength="8" />
    <Button title="get" :onPress="handleGet" />
  </div>
</template>

<script>
import Button from './Button.vue';

export default {
  components: { Button },
  props: {
    handleSubmit: {
      type: Function,
      default: () => {},
    },
  },
  methods: {
    handleGet() {
      return console.log('oi');
    },
  },
};
</script>

<style>
.getBox > input {
  background-color: #1f3b4d;
  border: 0px;
  border-bottom: 1px solid #fff;
  margin-bottom: 10px;
  height: 60px;
  font-size: 32px;
  font-family: 'Roboto', sans-serif;
  color: #fff;
  transition: 300ms;
}

.getBox > input:focus {
  border-bottom-color: #017374;
}
</style>
