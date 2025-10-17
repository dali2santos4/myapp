<script setup>
import { ref, onMounted, computed } from "vue";

const bookings = ref([]);
const searchQuery = ref("");
const activeCategory = ref("All");
const categories = ["All", "Hotel", "Restaurant", "Activity"];

onMounted(() => {
  const stored = JSON.parse(localStorage.getItem("bookings"));
  if (stored && stored.length > 0) {
    bookings.value = stored;
  } else {
    // Sample fallback data
    bookings.value = [
      {
        id: 1,
        name: "Grand Plaza Hotel",
        address: "123 Main Street, New York",
        type: "Hotel",
        image:
          "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      },
      {
        id: 2,
        name: "Seaside Restaurant",
        address: "456 Ocean Avenue, Miami",
        type: "Restaurant",
        image:
          "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      },
      {
        id: 3,
        name: "Mountain Hiking Tour",
        address: "789 Mountain Road, Denver",
        type: "Activity",
        image:
          "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      },
    ];
    localStorage.setItem("bookings", JSON.stringify(bookings.value));
  }
});

// Cancel booking
function cancelBooking(id) {
  if (confirm("Are you sure you want to cancel this booking?")) {
    bookings.value = bookings.value.filter((b) => b.id !== id);
    localStorage.setItem("bookings", JSON.stringify(bookings.value));
  }
}

// Filtered bookings
const filteredBookings = computed(() => {
  return bookings.value.filter((place) => {
    const matchesCategory =
      activeCategory.value === "All" || place.type === activeCategory.value;
    const matchesSearch = place.name
      ?.toLowerCase()
      .includes(searchQuery.value.toLowerCase());
    return matchesCategory && matchesSearch;
  });
});

console.log('Bookings:', bookings);
</script>

<template>
  <main class="container">
    <div class="page-header">
      <h1 class="page-title">
        My Bookings
        <span class="bookings-count">{{ filteredBookings.length }}</span>
      </h1>
    </div>

    <!-- Search + Filters -->
    <div class="filters-container">
      <div class="search-wrapper">
        <i class="fas fa-search search-icon"></i>
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search bookings..."
          class="search-input"
        />
      </div>

      <div class="category-filters">
        <div
          v-for="cat in categories"
          :key="cat"
          @click="activeCategory = cat"
          :class="['category-filter', { active: activeCategory === cat }]"
        >
          {{ cat }}
        </div>
      </div>
    </div>

    <!-- Empty state -->
    <div v-if="filteredBookings.length === 0" class="empty-state">
      <i class="far fa-calendar-check empty-icon"></i>
      <h3 class="empty-title">No bookings found</h3>
      <p class="empty-desc">
        Try adjusting your search or filter to find what you're looking for.
      </p>
    </div>

    <!-- Cards -->
    <div class="cards-grid" v-else>
      <div class="booking-card" v-for="place in filteredBookings" :key="place.id">
        <img :src="place.image" :alt="place.name" class="card-image" />
        <div class="card-content">
          <div class="card-header">
            <div>
              <h3 class="place-name">{{ place.name }}</h3>
              <p class="place-address">{{ place.address }}</p>
            </div>
            <span :class="['type-badge', place?.type?.toLowerCase()]">
              {{ place.type }}
            </span>
          </div>

          <!-- New details section -->
          <div class="card-details">
            <p><strong>Start Date:</strong> {{ place.dateStart }}</p>
            <p><strong>End Date:</strong> {{ place.dateEnd }}</p>
            <p><strong>Price:</strong> {{ place.price }} €</p>
          </div>

          <div class="card-actions">
            <button class="cancel-btn" @click="cancelBooking(place.id)">
              <i class="fas fa-times"></i> Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
:root {
  --primary: #3a86ff;
  --primary-dark: #2563eb;
  --secondary: #f8fafc;
  --accent: #ff6b6b;
  --text: #1e293b;
  --text-light: #64748b;
  --card-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  --hotel: #3b82f6;
  --restaurant: #ef4444;
  --activity: #10b981;
}

.container {
  width: 100%;
  padding: 2rem 1.5rem;
  font-family: "Inter", sans-serif;
  background-color: #f8fafc;
  color: var(--text);
  line-height: 1.6;
  min-height: 100vh;
  margin-top: 80px;
}

/* Header */
.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.page-title {
  font-size: 2rem;
  font-weight: 700;
  color: var(--text);
}

.bookings-count {
  background: #4caf50;
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
  margin-left: 0.75rem;
}

/* Filters */
.filters-container {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: var(--card-shadow);
  margin-bottom: 2rem;
}

.search-wrapper {
  position: relative;
  margin-bottom: 1rem;
}

.search-input {
  width: 100%;
  padding: 0.75rem 1rem 0.75rem 2.75rem;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.2s;
}

.search-input:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(58, 134, 255, 0.2);
}

.search-icon {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-light);
}

.category-filters {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.category-filter {
  padding: 0.5rem 1rem;
  border-radius: 6px;
  background-color: #f8fafc;
  border: 1px solid #e2e8f0;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.2s;
}

.category-filter.active {
  background: #4caf50;
  color: white;
  border-color: #4caf50;
}

/* Cards Grid */
.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1.5rem;
}

.booking-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 8px 16px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.booking-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 24px rgba(0,0,0,0.15);
}

.card-image {
  height: 180px;
  width: 100%;
  object-fit: cover;
}

.card-content {
  padding: 1rem 1.25rem 1.25rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.75rem;
  gap: 0.5rem;
}

.place-name {
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.place-address {
  color: var(--text-light);
  font-size: 0.875rem;
  line-height: 1.3;
}

.type-badge {
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: uppercase;
  white-space: nowrap;
}

.type-badge.hotel {
  background: rgba(59, 130, 246, 0.1);
  color: var(--hotel);
}

.type-badge.restaurant {
  background: rgba(239, 68, 68, 0.1);
  color: var(--restaurant);
}

.type-badge.activity {
  background: rgba(16, 185, 129, 0.1);
  color: var(--activity);
}

.card-actions {
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid #e2e8f0;
  display: flex;
  justify-content: flex-end;
}

.cancel-btn {
  background: #e63946;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.cancel-btn:hover {
  background: #e63946;
}

/* Empty State */
.empty-state {
  text-align: center;
  padding: 3rem 1rem;
  background: white;
  border-radius: 12px;
  box-shadow: var(--card-shadow);
}

.empty-icon {
  font-size: 3rem;
  color: var(--text-light);
  margin-bottom: 1rem;
}

.empty-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--text);
}

.empty-desc {
  color: var(--text-light);
  margin-bottom: 1.5rem;
}

/* Responsive */
@media (max-width: 768px) {
  .container {
    padding: 1.5rem 1rem;
  }

  .page-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .cards-grid {
    grid-template-columns: 1fr;
  }
}

.card-details {
  margin: 10px 0;
  font-size: 14px;
  color: #333;
}
.card-details p {
  margin: 4px 0;
}

</style>
