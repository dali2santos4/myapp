<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const activeCategory = ref('Restaurant')
const searchQuery = ref('')

const places = [
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

function goToHotelDetails(id) {
  router.push(`/hotel/${id}`)
}

const categories = ['Hotel', 'Restaurant', 'Activity']

const filteredPlaces = computed(() => {
  return places.filter(
    (place) =>
      place.type === activeCategory.value &&
      place.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})

function changeCategory(category) {
  activeCategory.value = category
  searchQuery.value = ''
}
</script>

<template>
  <main class="container">
    <h1>Explore Top Places</h1>

    <div class="tabs">
      <button
        v-for="category in categories"
        :key="category"
        :class="{ active: activeCategory === category }"
        @click="changeCategory(category)"
      >
        {{ category }}
      </button>
    </div>

    <div class="search-bar">
      <input v-model="searchQuery" type="text" placeholder="Search here..." />
      <i class="fas fa-search"></i>
    </div>

    <div class="cards">
      <div class="card" v-for="place in filteredPlaces" :key="place.id">
        <img :src="place.image" :alt="place.name" />
        <h5>{{ place.name }}</h5>
        <p>{{ place.location }}</p>
        <div class="card-actions">
          <button class="view-btn" @click="goToHotelDetails(place.id)">View</button>
          <i class="far fa-heart"></i>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.container {
  padding: 20px;
  width: 100vw;
}

h1 {
  font-size: 28px;
  margin-bottom: 20px;
}

.tabs {
  margin-top: 10px;
}

.tabs button {
  padding: 10px 25px;
  border: 1px solid gold;
  background: white;
  color: #444;
  font-weight: 500;
  margin-right: 10px;
  border-radius: 8px;
  cursor: pointer;
}

.tabs .active {
  background-color: gold;
  color: black;
}

.search-bar {
  background: #ddd;
  padding: 10px 20px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  width: 40%;
  margin: 20px 0;
}

.search-bar input {
  border: none;
  background: none;
  width: 100%;
  font-size: 16px;
  outline: none;
}

.cards {
  display: flex;
  gap: 20px;
  margin: 20px 0;
  flex-wrap: wrap;
}

.card {
  border: 1px solid #eee;
  border-radius: 10px;
  width: 250px;
  padding: 10px;
  box-shadow: 0 0 10px rgba(0,0,0,0.05);
  background: white;
}

.card img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
}

.card h5 {
  margin: 10px 0 5px;
}

.card-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}

.view-btn {
  background: gold;
  border: none;
  padding: 5px 20px;
  border-radius: 6px;
  cursor: pointer;
  width: 100%;
}

.book-btn {
  background: #4caf50;
  color: white;
  border: none;
  padding: 5px 15px;
  border-radius: 6px;
  cursor: pointer;
}
</style>