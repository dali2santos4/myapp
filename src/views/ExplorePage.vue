<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const activeCategory = ref('Restaurant')
const searchQuery = ref('')

const places = ref([
  {
    id: 1,
    name: 'Le Gourmet',
    type: 'Restaurant',
    address: '45 Rue Cler, 75007 Paris',
    image: 'https://images.unsplash.com/photo-1600891963934-c6f152f5574d?auto=format&fit=crop&w=250&q=80'
  },
  {
    id: 2,
    name: 'Hotel Lumière',
    type: 'Hotel',
    address: '12 Avenue des Champs, 75008 Paris',
    image: 'https://images.unsplash.com/photo-1542317854-336c984173cb?auto=format&fit=crop&w=250&q=80'
  },
  {
    id: 3,
    name: 'Eiffel Tower Tour',
    type: 'Activity',
    address: 'Champ de Mars, 75007 Paris',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=250&q=80'
  },
  {
    id: 4,
    name: 'Chez Marie',
    type: 'Restaurant',
    address: '88 Rue de Rivoli, 75004 Paris',
    image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=250&q=80'
  },
  {
    id: 5,
    name: 'Parisian Stay',
    type: 'Hotel',
    address: '22 Boulevard Haussmann, 75009 Paris',
    image: 'https://images.unsplash.com/photo-1560067174-89427a2a0f29?auto=format&fit=crop&w=250&q=80'
  },
  {
    id: 6,
    name: 'Seine River Cruise',
    type: 'Activity',
    address: 'Quai de la Tournelle, 75005 Paris',
    image: 'https://images.unsplash.com/photo-1602524207232-0c3ee9427c9b?auto=format&fit=crop&w=250&q=80'
  },
  {
    id: 7,
    name: 'Bistro Belleville',
    type: 'Restaurant',
    address: '10 Rue de Belleville, 75020 Paris',
    image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=250&q=80'
  },
  {
    id: 8,
    name: 'Montmartre Inn',
    type: 'Hotel',
    address: '3 Rue Lepic, 75018 Paris',
    image: 'https://images.unsplash.com/photo-1542317850-88d7e3a3705c?auto=format&fit=crop&w=250&q=80'
  },
  {
    id: 9,
    name: 'Louvre Guided Visit',
    type: 'Activity',
    address: 'Rue de Rivoli, 75001 Paris',
    image: 'https://images.unsplash.com/photo-1534850336045-c6c6d287f89e?auto=format&fit=crop&w=250&q=80'
  },
  {
    id: 10,
    name: 'Café de Flore',
    type: 'Restaurant',
    address: '172 Boulevard Saint-Germain, 75006 Paris',
    image: 'https://images.unsplash.com/photo-1604893431688-803f66e493f9?auto=format&fit=crop&w=250&q=80'
  },
  {
    id: 11,
    name: 'Etoile Palace',
    type: 'Hotel',
    address: '5 Rue Balzac, 75008 Paris',
    image: 'https://images.unsplash.com/photo-1582719478148-bd1aa4a2c859?auto=format&fit=crop&w=250&q=80'
  },
  {
    id: 12,
    name: 'Wine Tasting Tour',
    type: 'Activity',
    address: '18 Rue des Martyrs, 75009 Paris',
    image: 'https://images.unsplash.com/photo-1527168020-7768fa7ab04f?auto=format&fit=crop&w=250&q=80'
  },
  {
    id: 13,
    name: 'Brasserie Royale',
    type: 'Restaurant',
    address: '2 Place de la Concorde, 75008 Paris',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=250&q=80'
  },
  {
    id: 14,
    name: 'Opera Suites',
    type: 'Hotel',
    address: '8 Rue Scribe, 75009 Paris',
    image: 'https://images.unsplash.com/photo-1576671081837-d24c406848cc?auto=format&fit=crop&w=250&q=80'
  },
  {
    id: 15,
    name: 'Bike Tour Paris',
    type: 'Activity',
    address: 'Place Vendôme, 75001 Paris',
    image: 'https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?auto=format&fit=crop&w=250&q=80'
  },
  {
    id: 16,
    name: 'La Petite Cuisine',
    type: 'Restaurant',
    address: '11 Rue Oberkampf, 75011 Paris',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=250&q=80'
  },
  {
    id: 17,
    name: 'Marais Boutique Hotel',
    type: 'Hotel',
    address: '29 Rue de Turenne, 75003 Paris',
    image: 'https://images.unsplash.com/photo-1590490360180-3b3c2febe776?auto=format&fit=crop&w=250&q=80'
  },
  {
    id: 18,
    name: 'Cooking Class',
    type: 'Activity',
    address: 'Rue Saint-Antoine, 75004 Paris',
    image: 'https://images.unsplash.com/photo-1577978305975-25e5077f3b7f?auto=format&fit=crop&w=250&q=80'
  },
  {
    id: 19,
    name: 'Riviera Café',
    type: 'Restaurant',
    address: '60 Quai de Jemmapes, 75010 Paris',
    image: 'https://images.unsplash.com/photo-1572059055613-4f2d1f1782dd?auto=format&fit=crop&w=250&q=80'
  },
  {
    id: 20,
    name: 'Versailles Escape',
    type: 'Activity',
    address: 'Place d’Armes, 78000 Versailles',
    image: 'https://images.unsplash.com/photo-1600585153088-8403e04aa8f3?auto=format&fit=crop&w=250&q=80'
  }
])

function goToHotelDetails(id) {
  router.push(`/hotel/${id}`)
}

const categories = ['Hotel', 'Restaurant', 'Activity']

const filteredPlaces = computed(() => {
  return places.value.filter(
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
        <p>{{ place.address }}</p>
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
</style>
