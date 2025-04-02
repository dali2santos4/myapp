<script>
export default {
  name: "NavbarSection", // <-- Multi-word name
};

</script>


<template>
     <header class="header">
      <div class="logo">
        <img src="../assets/loggo.png"  alt="Image" class="logo-img" />
        <h2 class="styled-heading">Alliance Hotel</h2>
      </div>
      <div class="action">
        <div class="btn-signup">
          <p class="btn-text-2">Sign Up</p>
        </div>
        <RouterLink to="/signin" class="btn-login">
          <p class="btn-text-1">Login</p>
        </RouterLink>
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
</style>