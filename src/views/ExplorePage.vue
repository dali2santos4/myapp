<script setup>
</script>

<template> 
  <main class="container">
    <h1>Explore Top Place</h1>

    <div class="tabs">
      <button>Hotel</button>
      <button class="active">Restaurent</button>
      <button>Activities</button>
    </div>

    <div class="search-bar">
      <input type="text" placeholder="Search here">
      <i class="fas fa-search"></i>
    </div>

    <div class="cards">
      <!-- Card -->
      <div class="card">
        <img src="../assets/room1.jpg" alt="Tour Eiffel">
        <h5>Tour Eiffel</h5>
        <p>Champ de Mars, 5 Avenue Anatole France, 75007 Paris.</p>
        <div class="card-actions">
          <button class="view-btn">View</button>
          <i class="far fa-heart"></i>
        </div>
      </div>

      <!-- Repeat for 2 more cards -->
      <div class="card">
        <img src="../assets/room1.jpg" alt="Tour Eiffel">
        <h5>Tour Eiffel</h5>
        <p>Champ de Mars, 5 Avenue Anatole France, 75007 Paris.</p>
        <div class="card-actions">
          <button class="view-btn">View</button>
          <i class="far fa-heart"></i>
        </div>
      </div>

      <div class="card">
        <img src="../assets/room1.jpg" alt="Tour Eiffel">
        <h5>Tour Eiffel</h5>
        <p>Champ de Mars, 5 Avenue Anatole France, 75007 Paris.</p>
        <div class="card-actions">
          <button class="view-btn">View</button>
          <i class="far fa-heart"></i>
        </div>
      </div>
    </div>

    
  </main>
</template>
  
<style scoped>
   body {
  margin: 0;
  font-family: 'Inter', sans-serif;
  background: #fff;
}

.container {
  padding: 20px  ;
  width: 100vw;
}

.search-bar {
  background: #ddd;
  padding: 10px 20px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  width: 50%;
}

.search-bar input {
  border: none;
  background: none;
  width: 100%;
  font-size: 16px;
}


.tabs {
  margin-top: 20px;
}

.tabs button {
  padding: 10px 25px;
  border: 1px solid gold;
  background: white;
  color: #444;
  font-weight: 500;
  margin-right: 10px;
  border-radius: 8px;
}

.tabs .active {
  background-color: gold;
  color: black;
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
}

.card img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
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

.search-bar {
  background: #ddd;
  padding: 10px 20px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  width: 20%;
  margin-top: 12px;
}

.search-bar input {
  border: none;
  background: none;
  width: 100%;
  font-size: 16px;
}

.footer {
  background: #0b1c20;
  color: white;
  display: flex;
  justify-content: space-around;
  padding: 30px 10px;
  flex-wrap: wrap;
}

.footer-section h4 {
  margin-bottom: 10px;
}

.footer-section p {
  margin: 4px 0;
}

.socials i {
  margin-right: 10px;
  font-size: 20px;
}

</style>
  