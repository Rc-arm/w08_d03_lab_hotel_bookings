<template>
  <div id="app">
    <section id="top-of-page">
      <h1 id="page-header">Really Good Hotel</h1>
      <h2 id="subtitle-1">Come and stay with Ian and Rob. You'll be fine.</h2>
      <h3 id="subtitle-2">Trust us.</h3>
      <img id="quality" src="./assets/premium-quality-rubber-stamp.jpg">
    </section>
    <div id="flex-container">
      <bookings-form id="bookings-form"/>
      <bookings-grid :bookings="bookings" id="bookings-grid"/>
    </div>
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
    this.fetchData();
    eventBus.$on('booking-added', res => {
      this.bookings.push(res)
    });
    eventBus.$on('booking-deleted', id => {
      const index = this.bookings.findIndex(booking => booking._id === id)
      this.bookings.splice(index, 1)
    });
  },
  methods: {
    fetchData(){
      BookingService.getBookings()
      .then(bookings => this.bookings = bookings);
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

#flex-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

#bookings-form {
  text-align: left;
}

#bookings-grid {
  text-align: left;
}

#top-of-page {
  background-color: royalblue;
  margin: 2em;
  color: #D2BA19;

}

#page-header {
  font-size: 3em;
  padding-top: 0.3em;
}

#subtitle-1 {
  font-size: 1.5em;
  margin: 0.5em;
}

#subtitle-2 {
  font-size: 0.8em;
  margin: 0.5em;
  padding-bottom: 1em;
}

#quality {
  height: 7em;
  float: left;
}

</style>
