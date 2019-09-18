<template>
  <div id="app">
    <h1>My Hotel App</h1>
    <bookings-form />
    <bookings-grid :bookings="bookings" />
  </div>
</template>

<script>
import BookingsForm from './components/BookingsForm';
import BookingsGrid from './components/BookingsGrid';
import BookingService from './services/BookingService';
import { eventBus } from './main';

export default {
  name: 'app',
  data () {
    return {
      bookings: []
    }
  },
  components: {
    'bookings-form': BookingsForm,
    'bookings-grid': BookingsGrid
  },
  mounted(){
    fetch("http://localhost:3000/")
      .then(response => response.json())
      .then(json => this.serverMessage = json.message);
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
