<script>
export default {
  name: "LocationSection", // <-- Multi-word name
};
</script>


<template>
    <section class="popular-localisation">
    <h2>Popular Localisation</h2>

    <div class="location-cards">
        
        <div class="location-card">
            <img src="../assets/tour-eiffel.png" alt="Tour Eiffel">
            <div class="location-content">
                <h3>Tour Eiffel</h3>
                <p>Champ de Mars, 5 Avenue Anatole France, 75007 Paris.</p>
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
    background: #FFCD00;
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
    /*justify-content: center;*/
}

.location-card {
    background: #fff;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
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