use hotel;
db.dropDatabase();

db.bookings.insertMany([
  {
    name: "Guest 01",
    email: "guest01@email.com",
    status: false
  },
  {
    name: "Guest 02",
    email: "guest02@email.com",
    status: false
  },
  {
    name: "Guest 03",
    email: "guest03@email.com",
    status: false
  }
])
