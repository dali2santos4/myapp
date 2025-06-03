<script>
export default {
  name: "LocationSection",
  data() {
    return {
      locations: [
        {
          id: 1,
          title: "Tour Eiffel",
          address: "Champ de Mars, 5 Avenue Anatole France, 75007 Paris.",
          image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80"
        },
        {
          id: 2,
          title: "Louvre Museum",
          address: "Rue de Rivoli, 75001 Paris.",
          image: "https://images.unsplash.com/photo-1543340900-513ca1c1c1e4?auto=format&fit=crop&w=800&q=80"
        },
        {
          id: 3,
          title: "Notre-Dame Cathedral",
          address: "6 Parvis Notre-Dame - Pl. Jean-Paul II, 75004 Paris.",
          image: "https://images.unsplash.com/photo-1566564734284-9f4e0b52b215?auto=format&fit=crop&w=800&q=80"
        },
        {
          id: 4,
          title: "Montmartre",
          address: "75018 Paris.",
          image: "https://images.unsplash.com/photo-1533245305277-b034e48b9b83?auto=format&fit=crop&w=800&q=80"
        }
      ]
    };
  }
};
</script>

<template>
  <section class="popular-localisation">
    <h2>Popular Localisation</h2>

    <div class="location-cards">
      <div class="location-card" v-for="location in locations" :key="location.id">
        <img :src="location.image" :alt="location.title" />
        <div class="location-content">
          <h3>{{ location.title }}</h3>
          <p>{{ location.address }}</p>
        </div>
      </div>
    </div>

    <div class="see-all">
      <button>See All Properties</button>
    </div>
  </section>
</template>

<style>
.see-all button {
  background: #ffcd00;
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;
  font-weight: bold;
}

.popular-localisation {
  padding: 50px;
  height: 40%;
  width: 100vw;
  background: #fff;
  margin-top: 10px;
}

.popular-localisation h2 {
  font-size: 24px;
  margin-bottom: 20px;
}

.location-cards {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.location-card {
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  width: 300px;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease;
}

.location-card:hover {
  transform: translateY(-5px);
}

.location-card img {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.location-content {
  padding: 15px;
}

.location-content h3 {
  font-size: 16px;
  margin-bottom: 5px;
}

.location-content p {
  font-size: 12px;
  color: #555;
}

.see-all {
  margin-top: 20px;
  text-align: right;
}
</style>
