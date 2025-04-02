<script>
export default {
  name: "MarketSection", // <-- Multi-word name
};
</script>

<template>
      <section class="fresh-market">
          

            
                        <h2>Fresh On The Market</h2>
                <div class="filter-buttons">
                    <button class="active">All</button>
                    <button>Rent</button>
                </div>
                <div class="cards">
                    
                    <div class="card">
                        <img src="../assets/room1.jpg" alt="Large Standard Single Room">
                        <div class="card-content">
                            <h3>Large Standard Single Room</h3>
                            <p>Free Wi-Fi, Towels, Private bathroom with shower, Non-smoking, Television, Toilet, Shared kitchen, Private shower room</p>
                        </div>
                    </div>
            
                </div>
            
            
                <div class="see-all">
                    <button>See All Properties</button>
                </div>
            
 
     

        
     
    </section>
</template>

<style>
.fresh-market {
    padding: 50px;
    height: 40%;
    width: 100vw;
    background: #fff;
}

.fresh-market h2 {
    font-size: 24px;
    margin-bottom: 20px;
}

.filter-buttons {
    display: flex;
    gap: 10px;
    margin-bottom: 30px;
}

.filter-buttons button {
    padding: 8px 20px;
    border: none;
    border-radius: 8px;
    background: #F5F5F5;
    cursor: pointer;
    font-weight: bold;
    transition: all 0.3s ease;
}

.filter-buttons .active {
    background: #FFCD00;
    color: black;
}

.cards {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
}

.card {
    background: #fff;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    width: 300px;
    display: flex;
    flex-direction: column;
}

.card img {
    width: 100%;
    height: 180px;
    object-fit: cover;
}

.card-content {
    padding: 15px;
}

.card-content h3 {
    font-size: 16px;
    margin-bottom: 5px;
}

.card-content p {
    font-size: 12px;
    color: #555;
}

.see-all {
    margin-top: 20px;
    text-align: right;
}

.see-all button {
    background: #FFCD00;
    border: none;
    padding: 10px 20px;
    border-radius: 20px;
    cursor: pointer;
    font-weight: bold;
}
</style>