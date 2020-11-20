<template>
  <div class="getBox">
    <Button title="link" :onPress="handleLink" />
  </div>
</template>

<script>
import Button from './Button.vue';

export default {
  components: { Button },
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
  border-bottom: 1px solid #fff;
  margin-bottom: 10px;
  height: 60px;
  font-size: 32px;
  font-family: 'Roboto', sans-serif;
  color: #fff;
}
</style>
