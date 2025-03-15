<template>
    <header>
        <nav>
            <div class="logo">TuniGuide</div>
            <div class="menu-toggle" onclick="toggleMenu()">
                <div></div>
                <div></div>
                <div></div>
            </div>
            <ul id="menu">
                <li><a href="#"><router-link to="home">Home</router-link> </a></li>
                <li><a href="#"><router-link to="About">About</router-link>About</a></li>
                <li><a href="#"><router-link to="Destination">Destination</router-link></a></li>
                <li><a href="#"><router-link to="Our Blog">Our Blog</router-link></a></li>
            </ul>
        </nav>
    </header>
    <section class="hero">
        <div class="hero-text">
            <h1>A new world awaits you.</h1>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit..."</p>
            <div class="buttons">
                <button class="discover">Discover Now</button>
                <button class="watch-video">&#9654; Watch in video</button>
            </div>
        </div>
        <div class="hero-image">
            <img src="../assets/log.png" alt="Travel illustration">
        </div>
    </section>
</template>

<style>
header {
            background: #fff;
            padding: 20px;
            box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
        }
        nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            max-width: 1200px;
            margin: auto;
        }
        .logo {
            font-size: 24px;
            font-weight: bold;
        }
        .menu-toggle {
            display: none;
            flex-direction: column;
            cursor: pointer;
        }
        .menu-toggle div {
            width: 30px;
            height: 3px;
            background: #333;
            margin: 5px;
        }
        ul {
            list-style: none;
            display: flex;
            gap: 20px;
        }
        ul li {
            display: inline;
        }
        ul li a {
            text-decoration: none;
            color: #333;
            font-weight: bold;
        }
        .login-btn {
            background: #4a6cf7;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 20px;
            cursor: pointer;
        }
        .hero {
            display: flex;
            justify-content: space-between;
            align-items: center;
            max-width: 1200px;
            margin: 50px auto;
            padding: 20px;
            flex-wrap: wrap;
        }
        .hero-text {
            max-width: 50%;
        }
        .hero-text h1 {
            font-size: 36px;
        }
        .buttons {
            margin-top: 20px;
        }
        .discover, .watch-video {
            background: #4a6cf7;
            color: white;
            border: none;
            padding: 10px 20px;
            margin-right: 10px;
            border-radius: 20px;
            cursor: pointer;
        }
        .hero-image img {
            max-width: 100%;
        }

        @media (max-width: 768px) {
            nav ul {
                display: none;
                flex-direction: column;
                position: absolute;
                top: 60px;
                right: 20px;
                background: white;
                width: 200px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                padding: 10px;
            }
            nav ul.active {
                display: flex;
            }
            .menu-toggle {
                display: flex;
            }
            .hero {
                flex-direction: column;
                text-align: center;
            }
            .hero-text {
                max-width: 100%;
            }
        }
</style>
