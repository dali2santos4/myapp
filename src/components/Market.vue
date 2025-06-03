<script>
export default {
  name: "MarketSection",
  data() {
    return {
      filter: "All",
      listings: [
  {
    id: 1,
    type: "Rent",
    title: "Large Standard Single Room",
    description: "Free Wi-Fi, Towels, Private bathroom with shower, Non-smoking, Television, Toilet, Shared kitchen, Private shower room",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    type: "Rent",
    title: "Cozy Double Room",
    description: "Wi-Fi, Towels, Shared bathroom, Non-smoking, TV, Kitchen access",
    image: "https://images.unsplash.com/photo-1600585154154-3f9b94d6f89e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    type: "Sale",
    title: "Modern Apartment",
    description: "3 bedrooms, 2 bathrooms, kitchen, balcony, city view",
    image: "https://images.unsplash.com/photo-1600585154337-0c3e8023ba89?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    type: "Sale",
    title: "Spacious Loft",
    description: "Open plan, large windows, industrial design",
    image: "https://images.unsplash.com/photo-1600585154237-d3c1399e75f3?auto=format&fit=crop&w=800&q=80"
  }
]
    }
  },
  computed: {
    filteredListings() {
      if (this.filter === "All") {
        return this.listings;
      }
      return this.listings.filter(listing => listing.type === this.filter);
    }
  },
  methods: {
    setFilter(type) {
      this.filter = type;
    }
  }
};
</script>

<template>
  <section class="fresh-market">
    <h2>Fresh On The Market</h2>
    <div class="filter-buttons">
      <button :class="{ active: filter === 'All' }" @click="setFilter('All')">All</button>
      <button :class="{ active: filter === 'Rent' }" @click="setFilter('Rent')">Rent</button>
      <button :class="{ active: filter === 'Sale' }" @click="setFilter('Sale')">Sale</button>
    </div>

    <div class="cards">
      <div v-for="item in filteredListings" :key="item.id" class="card">
        <img :src="item.image" :alt="item.title" />
        <div class="card-content">
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
        </div>
      </div>
    </div>

    <div class="see-all">
      <button>See All Properties</button>
    </div>
  </section>
</template>

<style>
.fresh-market {
  padding: 50px;
  height: 40%;
  width: 100vw;
  background: #fff;
}

.fresh-market h2 {
  font-size: 24px;
  margin-bottom: 20px;
}

.filter-buttons {
  display: flex;
  gap: 10px;
  margin-bottom: 30px;
}

.filter-buttons button {
  padding: 8px 20px;
  border: none;
  border-radius: 8px;
  background: #F5F5F5;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s ease;
}

.filter-buttons .active {
  background: #FFCD00;
  color: black;
}

.cards {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.card {
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  width: 300px;
  display: flex;
  flex-direction: column;
}

.card img {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.card-content {
  padding: 15px;
}

.card-content h3 {
  font-size: 16px;
  margin-bottom: 5px;
}

.card-content p {
  font-size: 12px;
  color: #555;
}

.see-all {
  margin-top: 20px;
  text-align: right;
}

.see-all button {
  background: #FFCD00;
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;
  font-weight: bold;
}
</style>
