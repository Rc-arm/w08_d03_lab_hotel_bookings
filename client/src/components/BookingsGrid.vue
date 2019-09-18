<template lang="html">
  <div id="bookingsGrid">
    <div class="booking" v-for="booking in bookings">
      <h2>{{ booking.name }}</h2>
      <p>{{ booking.email }}</p>
      <p>{{ booking.status }}</p>

      <button v-on:click="deleteBooking(booking._id)">Delete Booking</button>
    </div>
  </div>
</template>

<script>
import { eventBus } from '../main';
import BookingService from '../services/BookingService';

export default {
  name: "bookings-grid",
  props: ["bookings"],
  methods: {
    deleteBooking(id) {
      BookingService.deleteBooking(id)
      .then(() => eventBus.$emit('booking-deleted', id))
    }
  }
}
</script>

<style lang="css" scoped>
</style>
