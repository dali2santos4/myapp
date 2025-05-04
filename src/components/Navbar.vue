<script>
export default {
  name: "NavbarSection", // <-- Multi-word name
  
  data() {
  
      let token = localStorage.getItem('token')
      console.log('token', token)

      const logout = () => {
        localStorage.removeItem('token'); // or whatever key you're using
        this.$router.push('/'); // Redirect to login page
      }

      return {
        // Define your variables here
        token: token,
        logout
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

      <nav v-if="token" class="nav-links">
        <a href="#">Welcome</a>
        <RouterLink to="/explore" >
          <a href="#">Explore</a>
        </RouterLink>
        <a href="#">Profile</a>
        <a href="#">My Reservations</a>
        <a href="#">Favorites</a>
      </nav>

      <div v-if="!token" class="action">
        <RouterLink  to="/signup" class="btn-signup">
          <p class="btn-text-2">Sign Up</p>
        </RouterLink>
        <RouterLink to="/signin" class="btn-login">
          <p class="btn-text-1">Login</p>
        </RouterLink>
      </div>

      <div v-else class="action">
        <RouterLink to="/messanger" class="btn-act">
          <img src="../assets/mess.png"  alt="Image" class="item-image-w" />
        </RouterLink>

        <div class="btn-act">
          <img src="../assets/not.png"  alt="Image" class="item-image-w" />
        </div>
        <button class="btn-act" @click="logout()">
          <img src="../assets/logout.png"  alt="Image" class="item-image-x" />
        </button>
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
    align-items: center;
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
  margin-right: 6px;
}
.btn-act{
  background-color: transparent;
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  margin-right: 10px;
  color: aliceblue;
}
.item-image {
     width: 25px; /* Make the image take full width of the container */
     height: 25px; /* Make the image take full height of the container */
     object-fit: cover; /* Make the image cover the container without distortion */
 }

 .item-image-w {
     width: 25px; /* Make the image take full width of the container */
     height: 25px; /* Make the image take full height of the container */
     object-fit: cover; /* Make the image cover the container without distortion */
     filter: brightness(0) invert(1);
     transition: filter 0.3s ease;
 }
 .item-image-x {
     width: 20px; /* Make the image take full width of the container */
     height: 20px; /* Make the image take full height of the container */
     object-fit: cover; /* Make the image cover the container without distortion */
     filter: brightness(0) invert(1);
     transition: filter 0.3s ease;
 }

 .item-image-w:hover,  .item-image-x:hover{
  filter: brightness(0) invert(1) sepia(1) saturate(10000%) hue-rotate(10deg); /* white → yellow */
}

 .nav-links a {
  color: white;
  margin: 0 15px;
  text-decoration: none;
}

.nav-links a:hover {
  color: #facc15;
}
</style>