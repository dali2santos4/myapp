<template > 
  <div class="background">
    <div class="hero-section">
        <span class="text">Let's explore the beauty of France</span>
        <div class="actions-btn">
          <RouterLink to="/signin" class="styled-link">
            <h2 class="styled-heading">
              Get Started
            </h2>
          </RouterLink>
        </div>
      </div>
  </div>
</template>

<script setup>
import {RouterLink} from 'vue-router'
</script>
  
<style>
  .app {
    text-align: center;
    font-family: Arial, sans-serif;
    width: 100%;
    height: 100%;
  }
  
  .hero-section {
    padding: 40px;
    /*background-color: red;*/
    align-items: center;
  }

  .hero-section span{
    color: rgb(236, 238, 238);
    font-size: 64px;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
    animation: bounce 2s infinite;
    font-family: 'Merriweather', serif;
  }

  .actions-btn {
    display: flex;
    width: 100%;
    min-width: 80px;
    align-items: center;
    justify-content: center; /* Centers button horizontally */
    /*background-color: red;*/
    padding: 20px; /* Optional */
  }
  
  .btn-get {
    width: 160px;
    min-width: 80px;
    height: 40px;
    background-color: #4CAF50;
    color: white;
    border: none;
    font-size: 16px;
    cursor: pointer;
  }

  .background {
    background-image: url('../assets/uyuy.jfif'); /* Adjust path */
    background-size: cover;
    background-position: center;
    height: 100vh; /* Full screen height */
    width: 100vw;
    align-items: center;
    display: flex;
    justify-content: center;
  }
  
  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }

  .text {
    color: white;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
    font-size: 2rem;
    text-align: center;
    animation: bounce 1.5s ease-in-out infinite;
    display: block; /* Ensures transform works properly */
    font-family: 'Poppins', sans-serif;
  }
  .styled-link {
  text-decoration: none; /* Remove underline */
  display: inline-block; /* Allows setting padding, margin, etc. */
  background-color: #060707; /* Blue background */
  width: 30%;
  height: 45px;
  min-width: 120px;
  border-radius: 8px; /* Rounded corners */
  transition: all 0.3s ease; /* Smooth transition for hover effect */
  display: flex;
  align-items: center;
  justify-content: center;
}

.styled-link:hover {
  background-color: #2980b9; /* Darker blue on hover */
}

.styled-heading {
  color: white; /* White text color */
  font-size: 16px; /* Set font size */
  font-family: 'Arial', sans-serif; /* Choose a clean font */
  margin: 0; /* Remove default margin */
  text-align: center; /* Center the text */
  font-weight: bold; /* Make the text bold */
}

.styled-link:active .styled-heading {
  transform: scale(0.98); /* Slightly shrink text on click */
}
</style>
  