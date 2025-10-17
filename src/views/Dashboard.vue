

<script >
export default {
  name: "DashboardPage", // <-- Multi-word name
};
</script>

<template> 

<div class="container">
    <main class="main-content">
      <section class="dashboard">
        <h2>Manager Dashboard</h2>
        <p>Good morning. Here’s what’s going on today</p>

        <div class="cards">
          <div class="card">
            <h3>Length of Service</h3>
            <div class="chart-placeholder">[Graph here]</div>
          </div>
        </div>
      </section>
    </main>
  </div>

</template>
  
<style scoped>

.container {
  display: flex;
  flex-direction: row;
  height: 100vh;
}

.sidebar {
  width: 220px;
  height: 100%;
  background-color: #0a1f24;
  color: white;
  padding: 20px;
  padding-top: 70px;
  display: flex;
  flex-direction: column;
}

.logo {
  text-align: center;
  font-weight: bold;
  margin-bottom: 30px;
}

.sidebar ul {
  list-style: none;
}

.sidebar li {
  padding: 20px 18px;
  margin: 6px 0;
  cursor: pointer;
  border-radius: 6px;
}

.sidebar li.active,
.sidebar li:hover {
  background-color: #f4cb00;
  color: black;
}

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-top: 70px;
}

.topbar {
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #0a1f24;
}

.topbar input {
  width: 300px;
  padding: 8px 12px;
  border-radius: 8px;
  border: none;
  background-color: #f4cb00;
}

.profile-icon {
  font-size: 24px;
  color: white;
}

.dashboard {
  padding: 30px;
  background-color: white;
  flex: 1;
}

.dashboard h2 {
  margin-bottom: 10px;
}

.dashboard p {
  margin-bottom: 20px;
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}

.card {
  background-color: #fff;
  border: 1px solid #f4cb00;
  border-radius: 10px;
  padding: 20px;
  min-height: 150px;
  min-width: 450px;
}

.card h3 {
  margin-bottom: 10px;
}

.chart-placeholder {
  height: 100px;
  background-color: #e0e0e0;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: #555;
}

</style>
  