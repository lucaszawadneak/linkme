<template>
  <button class="generalBtn" @click="onPress">
    <strong>{{ title }}</strong>
  </button>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    onPress: {
      type: Function,
      default: () => {},
    },
  },
};
</script>

<style>
.generalBtn {
  background-color: #017374;
  border: 0px;
  margin: 10px 0px;
  padding: 5px;
  border-radius: 5px;
  transition: 300ms;
  cursor: pointer;
}
.generalBtn:hover {
  opacity: 0.7;
}
</style>
