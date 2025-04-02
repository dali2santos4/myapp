<script>
export default {
  name: "HeroSection", // <-- Multi-word name
};
</script>

<template>
 <section class="content">
      
     
      <div class="overlay">
          <div class="text-content">
              <h1>Live Your Adventure<br>Anywhere</h1>
              <span>Discover unique rentals around the world and embrace a nomadic lifestyle.</span>
              <button class="btn-primary">Find Your Home</button>
          </div>


          <div class="search-box">
              <div class="input-group">
                  <label>Rent</label>
                  <select>
                      <option>All</option>
                      <option>Daily</option>
                      <option>Monthly</option>
                  </select>
              </div>
              <div class="input-group">
                  <label>Type</label>
                  <select>
                      <option>All</option>
                      <option>House</option>
                      <option>Apartment</option>
                      <option>Villa</option>
                  </select>
              </div>
              <div class="input-group">
                  <label>City</label>
                  <input type="text" placeholder="Localization">
              </div>
              <div class="input-group">
                  <label>Price range</label>
                  <div class="price-inputs">
                      <input type="number" placeholder="Min">
                      <input type="number" placeholder="Max">
                  </div>
              </div>
              <button class="btn-search">Search 🔍</button>
          </div>
      </div>
  </section>
</template>


<style scoped> 
.content {
    width: 100vw; /* Full screen width */
    flex: 1; /* Adjust height automatically */
    background-image: url('../assets/p.jpg'); 
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
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

  .bg-img {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}

.hero {
    background-image: url('../assets/uyuy.jfif'); 
    background-size: cover;
    background-position: center;
    position: relative;
    height: 100vh;
}

.overlay {
    background: rgba(0, 0, 0, 0.6);
    width: 100%;
    height: 100%;
    padding: 100px 50px 50px 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.text-content {
    max-width: 500px;
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
}

.text-content h1 {
    font-size: 32px;
    color: rgb(224, 224, 224);
    margin-bottom: 10px;
    padding: 0;
    
}

.text-content span {
    font-size: 16px;
    color: rgb(189, 189, 189);
}

.search-box {
    display: flex;
    gap: 10px;
    background: rgba(255,255,255,0.9);
    padding: 15px;
    border-radius: 8px;
    align-items: center;
    flex-wrap: wrap;
}

.input-group {
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 120px;
}

.input-group label {
    font-size: 12px;
    margin-bottom: 5px;
}

.input-group select, 
.input-group input {
    padding: 8px;
    border-radius: 5px;
    border: 1px solid #ccc;
}

.price-inputs {
    display: flex;
    gap: 5px;
}

.price-inputs input {
    width: 45%;
}

.btn-search {
    background: #FFCD00;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px;
}

.btn-primary {
    background: #FFCD00;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    max-width: 200px;
    margin-top: 16px;
}
</style>