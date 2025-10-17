<script setup>
import { ref } from "vue"
import { useRoute } from "vue-router"

const hotels = [
  {
    id: 1,
    name: 'Le Gourmet',
    rating: 4.5,
    stars: 0,
    location: '75007 Paris',
    description: 'A cozy restaurant serving classic French cuisine with fresh, local ingredients in an elegant setting.',
    amenities: {
      'Outdoor Seating': true,
      'Free WiFi': true,
      'Parking': false,
      'Live Music': true,
      'Wheelchair Accessible': true,
      'Reservations': true,
    },
    type: 'Restaurant',
    image: 'https://images.unsplash.com/photo-1600891963934-c6f152f5574d?auto=format&fit=crop&w=800&q=80',
    pricePerNight: 120
  },
  {
    id: 2,
    name: 'Hotel Lumière',
    rating: 4.8,
    stars: 4,
    location: '75008 Paris',
    description: 'Modern hotel with stylish rooms, excellent service, and convenient access to major Paris attractions.',
    amenities: {
      'Free WiFi': true,
      'Swimming Pool': true,
      'Gym': true,
      'Restaurant': true,
      'Room Service': true,
      'Air Conditioning': true,
      'Parking': true,
    },
    hotelInfo: {
      'Check In': '3:00 PM',
      'Check Out': '12:00 PM',
      'Parking Area': 50,
      'Minimum Age to Check In': 18,
    },
    type: 'Hotel',
    image: 'https://images.unsplash.com/photo-1542317854-336c984173cb?auto=format&fit=crop&w=800&q=80',
    pricePerNight: 200
  },
  {
    id: 3,
    name: 'La Belle Époque',
    rating: 4.7,
    stars: 0,
    location: '69002 Lyon',
    description: 'Charming bistro offering a fusion of traditional and modern French dishes in a vibrant atmosphere.',
    amenities: {
      'Outdoor Seating': true,
      'Free WiFi': true,
      'Parking': false,
      'Live Music': false,
      'Wheelchair Accessible': true,
      'Reservations': true,
    },
    type: 'Restaurant',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
    pricePerNight: 90
  },
  {
    id: 4,
    name: 'Château du Soleil',
    rating: 4.9,
    stars: 5,
    location: '83990 Saint-Tropez',
    description: 'Luxurious seaside hotel with stunning views, world-class spa, and gourmet dining options.',
    amenities: {
      'Free WiFi': true,
      'Swimming Pool': true,
      'Gym': true,
      'Restaurant': true,
      'Room Service': true,
      'Air Conditioning': true,
      'Parking': true,
      'Spa': true,
    },
    hotelInfo: {
      'Check In': '2:00 PM',
      'Check Out': '11:00 AM',
      'Parking Area': 30,
      'Minimum Age to Check In': 21,
    },
    type: 'Hotel',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
    pricePerNight: 350
  },
  {
    id: 5,
    name: 'Café de la Paix',
    rating: 4.3,
    stars: 0,
    location: '75009 Paris',
    description: 'Historic café known for its opulent decor and a menu featuring classic Parisian pastries and coffee.',
    amenities: {
      'Outdoor Seating': true,
      'Free WiFi': true,
      'Parking': false,
      'Live Music': false,
      'Wheelchair Accessible': true,
      'Reservations': false,
    },
    type: 'Restaurant',
    image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800&q=80',
    pricePerNight: 60
  },
  {
    id: 6,
    name: 'Auberge des Montagnes',
    rating: 4.6,
    stars: 3,
    location: '74400 Chamonix',
    description: 'Cozy alpine hotel perfect for skiers, with warm rooms and easy access to Mont Blanc slopes.',
    amenities: {
      'Free WiFi': true,
      'Swimming Pool': false,
      'Gym': false,
      'Restaurant': true,
      'Room Service': false,
      'Air Conditioning': false,
      'Parking': true,
    },
    hotelInfo: {
      'Check In': '4:00 PM',
      'Check Out': '10:00 AM',
      'Parking Area': 20,
      'Minimum Age to Check In': 18,
    },
    type: 'Hotel',
    image: 'https://images.unsplash.com/photo-1576675764574-81a7256b7023?auto=format&fit=crop&w=800&q=80',
    pricePerNight: 150
  },
  {
    id: 7,
    name: 'Trattoria Bella',
    rating: 4.4,
    stars: 0,
    location: '31000 Toulouse',
    description: 'Authentic Italian trattoria serving homemade pasta and wood-fired pizzas in a rustic setting.',
    amenities: {
      'Outdoor Seating': true,
      'Free WiFi': false,
      'Parking': true,
      'Live Music': true,
      'Wheelchair Accessible': true,
      'Reservations': true,
    },
    type: 'Restaurant',
    image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=800&q=80',
    pricePerNight: 80
  },
  {
    id: 8,
    name: 'Hôtel de la Mer',
    rating: 4.8,
    stars: 4,
    location: '06000 Nice',
    description: 'Elegant beachfront hotel with modern rooms, a rooftop terrace, and proximity to the Promenade des Anglais.',
    amenities: {
      'Free WiFi': true,
      'Swimming Pool': true,
      'Gym': true,
      'Restaurant': true,
      'Room Service': true,
      'Air Conditioning': true,
      'Parking': true,
      'Beach Access': true,
    },
    hotelInfo: {
      'Check In': '3:00 PM',
      'Check Out': '11:30 AM',
      'Parking Area': 40,
      'Minimum Age to Check In': 18,
    },
    type: 'Hotel',
    image: 'https://images.unsplash.com/photo-1517840901100-8179e20d97c5?auto=format&fit=crop&w=800&q=80',
    pricePerNight: 250
  },
  {
    id: 9,
    name: 'Seine River Cruise',
    rating: 4.6,
    stars: 0,
    location: '75004 Paris',
    description: 'Scenic evening cruise along the Seine, offering stunning views of Paris landmarks like the Eiffel Tower and Notre-Dame.',
    amenities: {
      'Guided Tour': true,
      'Food Available': true,
      'Wheelchair Accessible': true,
      'Reservations': true,
      'Outdoor Seating': true,
    },
    type: 'Activity',
    image: 'https://images.unsplash.com/photo-1502602898650-2c301c8c3633?auto=format&fit=crop&w=800&q=80',
    pricePerNight: 45
  },
  {
    id: 10,
    name: 'Villa Étoile',
    rating: 4.7,
    stars: 4,
    location: '06400 Cannes',
    description: 'Boutique hotel with elegant rooms, a lush garden, and close proximity to the Cannes Film Festival venues.',
    amenities: {
      'Free WiFi': true,
      'Swimming Pool': true,
      'Gym': false,
      'Restaurant': true,
      'Room Service': true,
      'Air Conditioning': true,
      'Parking': true,
    },
    hotelInfo: {
      'Check In': '3:00 PM',
      'Check Out': '11:00 AM',
      'Parking Area': 25,
      'Minimum Age to Check In': 18,
    },
    type: 'Hotel',
    image: 'https://images.unsplash.com/photo-1564501049412-3d59d1a81e43?auto=format&fit=crop&w=800&q=80',
    pricePerNight: 220
  },
  {
    id: 11,
    name: 'Bistro du Marché',
    rating: 4.2,
    stars: 0,
    location: '33000 Bordeaux',
    description: 'Lively bistro specializing in regional wines and farm-to-table dishes in a cozy market setting.',
    amenities: {
      'Outdoor Seating': true,
      'Free WiFi': true,
      'Parking': false,
      'Live Music': false,
      'Wheelchair Accessible': true,
      'Reservations': true,
    },
    type: 'Restaurant',
    image: 'https://images.unsplash.com/photo-1555396273-36734e4ce2b1?auto=format&fit=crop&w=800&q=80',
    pricePerNight: 70
  },
  {
    id: 12,
    name: 'Montmartre Walking Tour',
    rating: 4.8,
    stars: 0,
    location: '75018 Paris',
    description: 'Guided walking tour through the artistic heart of Montmartre, visiting Sacré-Cœur and historic artist haunts.',
    amenities: {
      'Guided Tour': true,
      'Wheelchair Accessible': false,
      'Reservations': true,
      'Outdoor Activity': true,
    },
    type: 'Activity',
    image: 'https://images.unsplash.com/photo-1505761671935-8a2b2eb378b5?auto=format&fit=crop&w=800&q=80',
    pricePerNight: 30
  }
]

const route = useRoute()
const id = Number(route.params.id)
const hotel = hotels.find(h => h.id === id) || {}

// form state
const dateStart = ref("")
const dateEnd = ref("")
const guests = ref("1 Room, 2 Adults")
const rate = ref("Lowest Regular Rate")
const price = ref("")

// Save reservation
function reserve() {
  if (!hotel.id) return

  const newReservation = {
    id: Date.now(),
    hotelId: hotel.id,
    name: hotel.name,
    dateStart: dateStart.value,
    dateEnd: dateEnd.value,
    guests: guests.value,
    rate: rate.value,
    price: price.value,
    image: hotel.image,
    type: hotel.type,
    address: hotel.address,
  }

  const existing = JSON.parse(localStorage.getItem("bookings") || "[]")
  existing.push(newReservation)
  localStorage.setItem("bookings", JSON.stringify(existing))

  alert("✅ Reservation saved!")
}

// Helper to extract number of rooms from guests string
function getRooms(guestsStr) {
  const match = guestsStr.match(/^(\d+) Room/)
  return match ? Number(match[1]) : 1
}

// Price calculation
function calculatePrice() {
  if (!dateStart.value || !dateEnd.value) {
    price.value = 0;
    return;
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0); // strip time

  const start = new Date(dateStart.value);
  const end = new Date(dateEnd.value);

  // Check if start date is in the past
  if (start < today) {
    alert("Start date cannot be in the past.");
    dateStart.value = "";
    price.value = 0;
    return;
  }

  // Check if end date is before start
  if (end < start) {
    alert("End date must be after start date.");
    dateEnd.value = "";
    price.value = 0;
    return;
  }

  // Calculate nights
  const nights = Math.max(0, (end - start) / (1000 * 60 * 60 * 24));

  // Calculate rooms
  const rooms = getRooms(guests.value);

  // Base price
  let total = nights * rooms * (hotel.pricePerNight || 0);

  // Apply discount
  if (rate.value === "Member Discount") {
    total *= 0.9; // 10% discount
  }

  price.value = total;
}
</script>

<template>
  <div class="container" v-if="hotel && hotel.id">
    <header class="resort-header">
      <div class="header-top">
        <img :src="hotel.image" alt="Hotel Image" class="hotel-image" />
        <h1>{{ hotel.name }}</h1>
      </div>
      <div class="rating">
        <span class="stars">★★★★★</span>
        <span class="score">{{ hotel.rating.toFixed(1) }}</span>
      </div>
    </header>

    <main class="content">
      <section class="info-box amenities">
        <h2>Amenities</h2>
        <div class="amenity-list">
          <div v-for="(value, key) in hotel.amenities" :key="key">
            {{ key }}: {{ value }}
          </div>
        </div>
      </section>

      <section class="info-box hotel-info" v-if="hotel.hotelInfo">
        <h2>Hotel Information</h2>
        <ul>
          <li v-for="(value, key) in hotel.hotelInfo" :key="key">
            {{ key }}: {{ value }}
          </li>
        </ul>
      </section>

      <aside class="booking-box">
        <h2>Details</h2>

        <div class="form-group">
          <label for="date-start">📅 Dates</label>
          <div class="date-range">
            <input type="date" id="date-start" v-model="dateStart"  @change="calculatePrice"/>
            <span>→</span>
            <input type="date" id="date-end" v-model="dateEnd" @change="calculatePrice" />
          </div>
        </div>

        <div class="form-group">
          <label for="guests">👥 Guests</label>
          <select id="guests" v-model="guests" @change="calculatePrice">
            <option>1 Room, 2 Adults</option>
            <option>1 Room, 1 Adult</option>
            <option>2 Rooms, 4 Adults</option>
          </select>
        </div>

        <div class="form-group">
          <label for="rate">💰 Special Rates</label>
          <select id="rate" v-model="rate" @change="calculatePrice">
            <option>Lowest Regular Rate</option>
            <option>Member Discount</option>
          </select>
        </div>

        <div class="form-group">
          <label for="price">Total Price</label>
          <span>{{priceDisplay}}</span>
        </div>

        <button class="reserve-btn" @click="reserve">Reserve</button>
      </aside>
    </main>
  </div>

  <div v-else>
    <p>Hotel not found</p>
  </div>
</template>

<style scoped>
.container {
  max-width: 1200px;
  margin: auto;
  padding-top: 100px;
  margin-bottom: 100px;
}

.resort-header h1 {
  font-size: 2.5rem;
  margin-bottom: 5px;
}

.rating {
  color: #fbc02d;
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px;
  margin-top: 30px;
}

.info-box {
  background: #fff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.1);
}

.amenity-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-top: 15px;
}

.hotel-info ul {
  list-style: none;
  margin-top: 10px;
  font-size: small;
}

.hotel-info li {
  margin-bottom: 10px;
  font-size: small;
}

.booking-box {
  background: #fff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  font-weight: 600;
  margin-bottom: 6px;
}

.date-range {
  display: flex;
  align-items: center;
  gap: 10px;
}

input[type="date"],
select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
}

.price {
  font-size: 1.2rem;
  margin: 20px 0;
}

input[type="text"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
}

.reserve-btn {
  background-color: #f7c948;
  border: none;
  padding: 15px;
  width: 100%;
  font-size: 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.reserve-btn:hover {
  background-color: #e0b137;
}

@media (max-width: 768px) {
  .content {
    grid-template-columns: 1fr;
  }

  .amenity-list {
    grid-template-columns: 1fr 1fr;
  }
}

.resort-header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.header-top {
  display: flex;
  align-items: center;
  gap: 15px;
}

.hotel-image {
  width: 80px;   /* adjust size as needed */
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
}

</style>
