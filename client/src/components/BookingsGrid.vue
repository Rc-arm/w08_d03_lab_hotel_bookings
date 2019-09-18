<template lang="html">
  <div>
    <div class="booking" v-for="booking in bookings">
      <h3>Booking</h3>
      <ul>
        <li>Name: {{ booking.name }}</li>
        <li>Email: {{ booking.email }}</li>
        <li>Status: {{ booking.status }}</li>
      </ul>
      <button id="delete-button" v-on:click="deleteBooking(booking._id)">Delete Booking</button>
      <!-- <li v-for="(item, index) in items"
          v-bind:class="{'purchased': item.purchased, 'notPurchased': !item.purchased}">
        <span>{{ item.name }}</span>
        <span v-if="item.purchased">Purchased!</span>
        <button v-if="!item.purchased"
                v-on:click="buyItem(index)">
          Purchase
        </button> -->
      <button id="status-button" v-if="!booking.status" v-on:click="updateBooking(booking.status)">Check In</button>
      <!-- <input type="checkbox" v-model="status"> -->
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
    },

  }
}
</script>

<style lang="css" scoped>
</style>
