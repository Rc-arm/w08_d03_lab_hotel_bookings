<template lang="html">
  <form id="bookings-form" v-on:submit="addBooking">
    <h2>Add a Booking</h2>
    <div class="formWrap">
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="name" required/>
    </div>
    <div class="formWrap">
      <label for="email">Email:</label>
      <input type="text" id="email" v-model="email" required/>
    </div>

    <input type="submit" value="Add Booking" id="add-booking"/>

  </form>
</template>

<script>
import { eventBus } from '../main';
import BookingService from '../services/BookingService.js';

export default {
  name: "bookings-form",
  data () {
    return {
      name: null,
      email: null,
      status: true
    }
  },
  methods: {
    addBooking(e) {
      e.preventDefault()
      const booking = {
        name: this.name,
        email: this.email,
        status: this.status
      }
      BookingService.postBooking(booking)
      .then(res => eventBus.$emit('booking-added', res))
    }
  }
}
</script>

<style lang="css" scoped>
</style>
