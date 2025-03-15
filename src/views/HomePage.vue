<template>
    <div class="app">
      <div class="hero-section">
        <h1>Lets Explore The Beauty Of The World</h1>
        <button @click="currentPage ='SignIn'">Get Started</button>
        <router-link to="SignIn">Get Started</router-link>
      </div>
      <div class="image-container">
        <img src="../assets/log.png" alt="Travel Destination" />
      </div>
    </div>
  </template>
  
  <script>

  export default {
    name: "HomePage",
    methods: {
      getStarted() {
        console.log("Let's start the adventure!");
      },
    },
  };
  </script>
  
  <style scoped>
  .app {
    text-align: center;
    font-family: Arial, sans-serif;
  }
  
  .hero-section {
    padding: 40px;
  }
  
  .hero-section h1 {
    font-size: 36px;
    margin-bottom: 20px;
  }
  
  button {
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    font-size: 16px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #45a049;
  }
  
  .image-container img {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }
  </style>
  