<template>
    <div class="full-page-container">
        <div class="item-container">
            <h1 class="title">Alliance-hotel</h1>
            <p class="subtitle">Welcome back! Please enter your details</p>
            <div class="form-group">
                <input type="email" placeholder="Email address">
            </div>
            <div class="form-group">
                <input type="password" placeholder="Password">
            </div>
            <button class="login-button">Login</button>
            <router-link to="SignUp" class="signup-link">Create an account</router-link>
            <a href="#" class="forgot-password">Mot de passe oublié</a>
        </div>
        <div class="item-img">
            <img src="../assets/htht.jpg" alt="Image" class="item-image" />
        </div>
    </div>
</template>

<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Arial, sans-serif;
    }

    body {
        display: flex;
        height: 100vh;
    }

    .title {
        font-size: 32px;
        font-weight: bold;
        color: #222;
        margin-bottom: 10px;
    }

    .subtitle {
        font-size: 16px;
        color: #666;
        margin-bottom: 20px;
    }

    .form-group {
        width: 100%;
        max-width: 300px;
        margin-bottom: 15px;
    }

    .form-group input {
        width: 100%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
    }

    .login-button {
        width: 100%;
        max-width: 300px;
        padding: 10px;
        background-color: black;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 16px;
        margin-bottom: 10px;
        transition: background 0.3s;
    }

    .login-button:hover {
        background-color: #333;
    }

    .signup-link {
        font-size: 14px;
        color: #007bff;
        text-decoration: none;
        margin-bottom: 10px;
    }

    .signup-link:hover {
        text-decoration: underline;
    }

    .forgot-password {
        font-size: 12px;
        color: #555;
        margin-top: 10px;
        text-decoration: none;
    }

    .full-page-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100vh;
        width: 100vw;
        margin: 0;
    }

    .item-container {
        background-color:  #f8f8f8;;
        width: 35%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 20px;
    }

    .item-img {
        width: 65%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .item-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-top-left-radius: 16px;
        border-bottom-left-radius: 16px;
    }


    /* Responsive Design */
    @media (max-width: 480px){
    .full-page-container {
        flex-direction: column;
        width:100vw;
        display: flex;
        height: 100vh;
    }

    .item-container {
        width: 100%;
        height: 50vh;
        order: 2;
    }
    .item-img {
        width: 100vw; /* Make each container take up 50% of the width */
        height: 50vh; /* Make each container take up 100% of the height */
        display: flex; /* Use flexbox for item alignment inside each container */
        justify-content: center; /* Center items horizontally */
        align-items: center; /* Center items vertically */
        order: 1;
    }

    .item-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 0;
        border-bottom-right-radius: 26px;
        border-bottom-left-radius: 26px;
    }

    .title {
        font-size: 24px;
        font-weight: bold;
        color: #333;
        margin-bottom: 10px;
    }

    h1 {
        font-size: 24px;
        font-weight: bold;
        color: #333;
        margin-bottom: 10px;
    }

    .terms {
        display: none;
    }

    .form-group {
        width: 90%;
        max-width: 260px;
        margin-bottom: 15px;
    }

    .form-group input {
        width: 100%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
    }

    .login-button {
        width: 100%;
        max-width: 260px;
        padding: 10px;
        background-color: black;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 16px;
        margin-bottom: 10px;
        transition: background 0.3s;
    }
}

@media (max-width: 375px){
    .full-page-container {
        flex-direction: column;
        width:100vw;
        display: flex;
        height: 100vh;
    }

    .item-container {
        width: 100%;
        height: 60vh;
        order: 2;
    }
    .item-img {
        width: 100vw; /* Make each container take up 50% of the width */
        height: 40vh; /* Make each container take up 100% of the height */
        display: flex; /* Use flexbox for item alignment inside each container */
        justify-content: center; /* Center items horizontally */
        align-items: center; /* Center items vertically */
        order: 1;
    }

    .title {
        font-size: 20px;
        font-weight: bold;
        color: #333;
        margin-bottom: 10px;
    }

}

</style>
