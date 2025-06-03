<script setup>
import { useRoute } from 'vue-router'

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
    image: 'https://images.unsplash.com/photo-1600891963934-c6f152f5574d?auto=format&fit=crop&w=250&q=80'
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
      'Check In': '3.00 PM',
      'Check Out': '12.00 PM',
      'Parking Area': 50,
      'Minimum Age to Check In': 18,
    },
    type: 'Hotel',
    image: 'https://images.unsplash.com/photo-1542317854-336c984173cb?auto=format&fit=crop&w=250&q=80'
  },
  {
    id: 3,
    name: 'Eiffel Tower Tour',
    rating: 4.9,
    stars: 0,
    location: '75007 Paris',
    description: 'Enjoy an unforgettable guided tour of the Eiffel Tower, including priority access and breathtaking views.',
    amenities: {
      'Guide Included': true,
      'Duration': '2 hours',
      'Tickets Included': true,
      'Group Size': 15,
      'Accessibility': 'Limited',
    },
    type: 'Activity',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=250&q=80'
  },
  {
    id: 4,
    name: 'Chez Marie',
    rating: 4.3,
    stars: 0,
    location: '75004 Paris',
    description: 'Traditional French bistro offering a warm atmosphere and a seasonal menu with local specialties.',
    amenities: {
      'Outdoor Seating': true,
      'Pet Friendly': true,
      'Free WiFi': false,
      'Reservations': true,
      'Live Music': false,
    },
    type: 'Restaurant',
    image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=250&q=80'
  },
  {
    id: 5,
    name: 'Parisian Stay',
    rating: 4.7,
    stars: 3,
    location: '75009 Paris',
    description: 'Comfortable hotel with charming rooms and attentive service, located near shopping and dining areas.',
    amenities: {
      'Free WiFi': true,
      'Breakfast Included': true,
      'Laundry Service': true,
      '24-hour Front Desk': true,
      'Parking': true,
      'Air Conditioning': true,
    },
    hotelInfo: {
      'Check In': '2.00 PM',
      'Check Out': '11.00 AM',
      'Parking Area': 20,
      'Minimum Age to Check In': 18,
    },
    type: 'Hotel',
    image: 'https://images.unsplash.com/photo-1560067174-89427a2a0f29?auto=format&fit=crop&w=250&q=80'
  },
  {
    id: 6,
    name: 'Seine River Cruise',
    rating: 4.8,
    stars: 0,
    location: '75005 Paris',
    description: 'Relax on a scenic cruise along the Seine River, enjoying views of Paris landmarks and a lively atmosphere.',
    amenities: {
      'Duration': '1.5 hours',
      'Onboard Snacks': true,
      'Audio Guide': true,
      'Accessibility': 'Limited',
      'Tickets Included': true,
    },
    type: 'Activity',
    image: 'https://images.unsplash.com/photo-1602524207232-0c3ee9427c9b?auto=format&fit=crop&w=250&q=80'
  },
  {
    id: 7,
    name: 'Bistro Belleville',
    rating: 4.4,
    stars: 0,
    location: '75020 Paris',
    description: 'Friendly neighborhood bistro serving hearty French dishes and local wines in a casual setting.',
    amenities: {
      'Outdoor Seating': true,
      'Pet Friendly': true,
      'Free WiFi': false,
      'Reservations': true,
      'Live Music': false,
    },
    type: 'Restaurant',
    image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=250&q=80'
  },
  {
    id: 8,
    name: 'Montmartre Inn',
    rating: 4.2,
    stars: 3,
    location: '75018 Paris',
    description: 'Charming hotel near Montmartre with cozy rooms, perfect for exploring the artistic district of Paris.',
    amenities: {
      'Free WiFi': true,
      'Breakfast Included': true,
      '24-hour Front Desk': true,
      'Parking': false,
      'Air Conditioning': true,
    },
    hotelInfo: {
      'Check In': '3.00 PM',
      'Check Out': '11.00 AM',
      'Parking Area': 0,
      'Minimum Age to Check In': 18,
    },
    type: 'Hotel',
    image: 'https://images.unsplash.com/photo-1542317850-88d7e3a3705c?auto=format&fit=crop&w=250&q=80'
  },
  {
    id: 9,
    name: 'Louvre Guided Visit',
    rating: 4.9,
    stars: 0,
    location: '75001 Paris',
    description: 'Explore the Louvre with a professional guide who shares insights about famous artworks and history.',
    amenities: {
      'Guide Included': true,
      'Duration': '3 hours',
      'Tickets Included': true,
      'Group Size': 20,
      'Accessibility': 'Good',
    },
    type: 'Activity',
    image: 'https://images.unsplash.com/photo-1534850336045-c6c6d287f89e?auto=format&fit=crop&w=250&q=80'
  },
  {
    id: 10,
    name: 'Café de Flore',
    rating: 4.6,
    stars: 0,
    location: '75006 Paris',
    description: 'Historic café famous for its intellectual clientele and classic Parisian ambiance.',
    amenities: {
      'Outdoor Seating': true,
      'Pet Friendly': false,
      'Free WiFi': true,
      'Reservations': false,
      'Live Music': false,
    },
    type: 'Restaurant',
    image: 'https://images.unsplash.com/photo-1604893431688-803f66e493f9?auto=format&fit=crop&w=250&q=80'
  },
  {
    id: 11,
    name: 'Etoile Palace',
    rating: 4.7,
    stars: 5,
    location: '75008 Paris',
    description: 'Luxury hotel featuring elegant suites, gourmet dining, and exceptional service in the heart of Paris.',
    amenities: {
      'Free WiFi': true,
      'Swimming Pool': true,
      'Spa': true,
      'Restaurant': true,
      'Room Service': true,
      'Air Conditioning': true,
      'Parking': true,
    },
    hotelInfo: {
      'Check In': '3.00 PM',
      'Check Out': '12.00 PM',
      'Parking Area': 60,
      'Minimum Age to Check In': 18,
    },
    type: 'Hotel',
    image: 'https://images.unsplash.com/photo-1582719478148-bd1aa4a2c859?auto=format&fit=crop&w=250&q=80'
  },
  {
    id: 12,
    name: 'Wine Tasting Tour',
    rating: 4.8,
    stars: 0,
    location: '75009 Paris',
    description: 'Sample the best French wines on this guided tour through charming Parisian wine cellars.',
    amenities: {
      'Guide Included': true,
      'Duration': '2 hours',
      'Wine Samples': true,
      'Tickets Included': true,
      'Group Size': 12,
    },
    type: 'Activity',
    image: 'https://images.unsplash.com/photo-1527168020-7768fa7ab04f?auto=format&fit=crop&w=250&q=80'
  },
  {
    id: 13,
    name: 'Brasserie Royale',
    rating: 4.5,
    stars: 0,
    location: '75008 Paris',
    description: 'Classic brasserie with a regal ambiance offering a diverse menu and fine wines.',
    amenities: {
      'Outdoor Seating': true,
      'Pet Friendly': true,
      'Free WiFi': true,
      'Reservations': true,
      'Live Music': false,
    },
    type: 'Restaurant',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=250&q=80'
  },
  {
    id: 14,
    name: 'Opera Suites',
    rating: 4.6,
    stars: 4,
    location: '75009 Paris',
    description: 'Elegant hotel near the Opera with spacious suites, ideal for business and leisure travelers.',
    amenities: {
      'Free WiFi': true,
      'Gym': true,
      'Room Service': true,
      '24-hour Front Desk': true,
      'Parking': true,
      'Air Conditioning': true,
    },
    hotelInfo: {
      'Check In': '3.00 PM',
      'Check Out': '12.00 PM',
      'Parking Area': 30,
      'Minimum Age to Check In': 18,
    },
    type: 'Hotel',
    image: 'https://images.unsplash.com/photo-1576671081837-d24c406848cc?auto=format&fit=crop&w=250&q=80'
  },
  {
    id: 15,
    name: 'Bike Tour Paris',
    rating: 4.7,
    stars: 0,
    location: '75007 Paris',
    description: 'Capture stunning photos of Paris landmarks on this guided photography tour along the Seine.',
    amenities: {
      'Guide Included': true,
      'Duration': '2 hours',
      'Photography Tips': true,
      'Tickets Included': true,
      'Group Size': 10,
    },
    type: 'Activity',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=250&q=80'
  },
  {
    id: 16,
    name: 'La Petite Cuisine',
    rating: 4.4,
    stars: 0,
    location: '75005 Paris',
    description: 'Charming small restaurant serving innovative French cuisine with a cozy atmosphere.',
    amenities: {
      'Outdoor Seating': false,
      'Pet Friendly': false,
      'Free WiFi': true,
      'Reservations': true,
      'Live Music': false,
    },
    type: 'Restaurant',
    image: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=250&q=80'
  },
  {
    id: 17,
    name: 'Marais Boutique Hotel',
    rating: 4.3,
    stars: 3,
    location: '75006 Paris',
    description: 'Comfortable hotel with classic decor, located near famous cafés and shops in Saint-Germain.',
    amenities: {
      'Free WiFi': true,
      'Breakfast Included': true,
      '24-hour Front Desk': true,
      'Parking': false,
      'Air Conditioning': false,
    },
    hotelInfo: {
      'Check In': '2.00 PM',
      'Check Out': '11.00 AM',
      'Parking Area': 0,
      'Minimum Age to Check In': 18,
    },
    type: 'Hotel',
    image: 'https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?auto=format&fit=crop&w=250&q=80'
  },
  {
    id: 18,
    name: 'Cooking Class',
    rating: 4.5,
    stars: 0,
    location: '75011 Paris',
    description: 'Popular burger joint with homemade buns and gourmet toppings in a relaxed atmosphere.',
    amenities: {
      'Outdoor Seating': true,
      'Pet Friendly': true,
      'Free WiFi': false,
      'Reservations': false,
      'Live Music': false,
    },
    type: 'Activity',
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=250&q=80'
  },
  {
    id: 19,
    name: 'Riviera Café',
    rating: 4.1,
    stars: 2,
    location: '75012 Paris',
    description: 'Affordable hotel with simple rooms and friendly service, close to public transport.',
    amenities: {
      'Free WiFi': true,
      'Breakfast Included': false,
      '24-hour Front Desk': true,
      'Parking': false,
      'Air Conditioning': false,
    },
    hotelInfo: {
      'Check In': '3.00 PM',
      'Check Out': '11.00 AM',
      'Parking Area': 0,
      'Minimum Age to Check In': 18,
    },
    type: 'Restaurant',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=250&q=80'
  },
  {
    id: 20,
    name: 'Versailles Escape',
    rating: 4.9,
    stars: 0,
    location: '75001 Paris',
    description: 'See Paris illuminated on this evening tour featuring landmarks and charming city views.',
    amenities: {
      'Guide Included': true,
      'Duration': '2 hours',
      'Tickets Included': true,
      'Group Size': 15,
      'Accessibility': 'Good',
    },
    type: 'Activity',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=250&q=80'
  },
]

const route = useRoute()
const id = Number(route.params.id) // read id param and convert to number

// Find hotel by id
const hotel = hotels.find(h => h.id === id) || {}

</script>

<template>
  <div class="container" v-if="hotel && hotel.id">
    <header class="resort-header">
      <h1>{{ hotel.name }}</h1>
      <div class="rating">
        <span class="stars">★★★★★</span>
        <span class="score">{{ hotel.rating.toFixed(1) }}</span>
      </div>
      <!--
        <p class="location">📍 {{ hotel.location }}</p>
        <p class="description">{{ hotel.description }}</p>
        <a href="#" class="read-more">Read More</a>
      
      -->
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

      <section class="info-box hotel-info">
        <h2>Hotel Information</h2>
        <ul>
          <li v-for="(value, key) in hotel.hotelInfo" :key="key">
            {{ key }}: {{ value }}
          </li>
        </ul>
      </section>

      <aside class="booking-box">
        <!-- booking form remains unchanged -->
        <h2>Details</h2>

        <div class="form-group">
          <label for="date-start">📅 Dates</label>
          <div class="date-range">
            <input type="date" id="date-start" placeholder="jj/mm/aaaa" />
            <span>→</span>
            <input type="date" id="date-end" placeholder="jj/mm/aaaa" />
          </div>
        </div>

        <div class="form-group">
          <label for="guests">👥 Guests</label>
          <select id="guests">
            <option>1 Room, 2 Adults</option>
            <option>1 Room, 1 Adult</option>
            <option>2 Rooms, 4 Adults</option>
          </select>
        </div>

        <div class="form-group">
          <label for="rate">💰 Special Rates</label>
          <select id="rate">
            <option>Lowest Regular Rate</option>
            <option>Member Discount</option>
          </select>
        </div>

        <div class="price">
          <strong>Pricing</strong>
          <input type="text" />
        </div>

        <button class="reserve-btn">Reserve</button>
      </aside>
    </main>
  </div>

  <div v-else>
    <p>Hotel not found</p>
  </div>
</template>

<style scoped>
/* include the full CSS from your original file here or import it */

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

.location {
  color: #777;
  margin-bottom: 15px;
}

.description {
  line-height: 1.6;
  margin-bottom: 10px;
}

.read-more {
  color: #0077cc;
  text-decoration: none;
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
input[type="text"]{
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

  .profile-circle {
  width: 40px;
  height: 40px;
  background-color: #facc15;
  border-radius: 50%;
}

/* Gallery */
.gallery {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px;
  padding: 32px;
}

.main-image {
  position: relative;
}

.main-image img {
  width: 100%;
  border-radius: 10px;
  height: 100%;
  object-fit: cover;
}

.play-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  border: none;
  padding: 12px 16px;
  border-radius: 50%;
  font-size: 20px;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0,0,0,0.3);
}

.side-images {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.side-images img {
  width: 100%;
  border-radius: 10px;
  object-fit: cover;
}

.image-with-buttons {
  position: relative;
}

.image-with-buttons .buttons {
  position: absolute;
  bottom: 10px;
  right: 10px;
  display: flex;
  gap: 10px;
}

.image-with-buttons .buttons button {
  background: white;
  border: none;
  padding: 6px 12px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 14px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.2);
}
}
</style>