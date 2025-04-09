<script>
export default {
  name: "NavbarSection", // <-- Multi-word name
  
  data() {
  
      const token = localStorage.getItem('token')
      console.log('token', token)
      return {
        // Define your variables here
        token: token,
      };
    }
};

</script>


<template>
     <header class="header">
      <div class="logo">
        <img src="../assets/loggo.png"  alt="Image" class="logo-img" />
        <h2 class="styled-heading">Alliance Hotel</h2>
      </div>
      <div v-if="!token" class="action">
        <div class="btn-signup">
          <p class="btn-text-2">Sign Up</p>
        </div>
        <RouterLink to="/signin" class="btn-login">
          <p class="btn-text-1">Login</p>
        </RouterLink>
      </div>

      <div v-else class="action">
        <div class="btn-user">
          <img src="../assets/usr-icn.png"  alt="Image" class="item-image" />
        </div>
      </div>
    </header>
</template>


<style scoped>

.header {
    width: 100vw;
    height: 70px;
    background-color: #0A2227;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000; /* To make sure it stays on top */
  }

  .logo{
    height: 50px;
    display: flex;
    align-items: center;
  }
  .action{
    height: 50px;
    display: flex;
  }
  .logo-img{
    height: 100%;
    width: 50px;
    margin-right: 10px;
  }


  .btn-signup{
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    margin-right: 16px;
  }

  .btn-login{
    height: 50px;
    padding: 0 24px;
    background-color: #F0C807;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .btn-text-1{
    font-size: 16px;
    color: #000;
    font-weight: 500;
    margin: 0;
    text-decoration: none;
  }
  .btn-text-2{
    font-size: 16px;
    color: #fff;
    font-weight: 500;
    margin: 0;
  }

  .styled-heading {
  color: white; /* White text color */
  font-size: 16px; /* Set font size */
  font-family: cursive;
  margin: 0; /* Remove default margin */
  text-align: center; /* Center the text */
  font-weight: bold; /* Make the text bold */
}
.btn-user{
  background-color: #F0C807;
  height: 50px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
}

.item-image {
     width: 40px; /* Make the image take full width of the container */
     height: 40px; /* Make the image take full height of the container */
     object-fit: cover; /* Make the image cover the container without distortion */
 }
</style>