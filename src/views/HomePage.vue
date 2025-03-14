<template>
    <div>
        
        <div class="container">
        <h1>Let's Explore The Beauty Of The World</h1>
        <a href="#" class="button">Get Started</a>
        <div class="image-container">
            <img src="log.jpeg" alt="Voyage et découverte">
        </div>
    </div>
    <button >
        <router-link class="nav-link" to="/signup"><a href="SignUp.vue"> Login </a></router-link>
    </button>
    </div>


</template>
<script>
export default{
    name:'HomePage'
}
</script>
<style>
.container {
            margin-top: 50px;
        }
        h1 {
            font-size: 24px;
            color: #333;
        }
        .button {
            display: inline-block;
            padding: 10px 20px;
            font-size: 16px;
            color: white;
            background-color: black;
            border: none;
            border-radius: 20px;
            cursor: pointer;
            text-decoration: none;
        }
        .button:hover {
            background-color: #333;
        }
        .image-container {
            margin-top: 20px;
        }
        img {
            width: 80%;
            max-width: 600px;
            border-radius: 10px;
        }
</style>