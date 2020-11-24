<template>
  <div id="main">
    <h1>linkme</h1>
    <GetCard />
    <LinkCard />
    <a href="https://lucaszawadneak.me">Lucas Zawadneak - 2020</a>
  </div>
</template>

<script>
import GetCard from './components/Get.vue';
import LinkCard from './components/Link.vue';

export default {
  components: {
    GetCard,
    LinkCard,
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
#main > h1 {
  font-family: 'Lobster', cursive;
  color: #d0fefe;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-size: 64px;
  text-align: center;
  margin-top: 20px;
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
</style>
