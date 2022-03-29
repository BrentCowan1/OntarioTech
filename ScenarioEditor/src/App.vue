<template>
  <div id="app">
    <Baklava></Baklava>
  </div>
</template>

<!--
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Baklava } from './components/BaklavaJS.vue';
// import HelloWorld from './components/HelloWorld.vue';

@Component({
  components: {
    // HelloWorld,
    Baklava
  },
})
export default class App extends Vue {}
</script>
-->

<script>
import Baklava from "./components/baklava";

export default {
  name: "App",
  components: {
    Baklava,
  },
  created() {
    window.addEventListener("beforeunload", this.reloadWarning);
  },
  methods: {
    reloadWarning(event) {
      event.preventDefault();
      event.returnValue = "";
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  width: 100vw;
}
</style>
