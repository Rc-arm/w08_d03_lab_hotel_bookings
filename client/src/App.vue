<template>
  <div id="app">
    <h1>My Hotel App</h1>
    <p v-if="serverMessage">The server said: {{ serverMessage }}</p>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  mounted(){
    fetch("http://localhost:3000/")
      .then(response => response.json())
      .then(json => this.serverMessage = json.message);
  },
  data () {
    return {
      serverMessage: ""
    }
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
