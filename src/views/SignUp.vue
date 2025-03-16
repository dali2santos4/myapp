<template>
    <div class="full-page-container">
         <div class="item-container">
             <h1>TuniGuide</h1>
            <h2>Create an account</h2>
            <p>Welcome back! Please enter your details</p>
            <div class="form-group">
                <input type="text" placeholder="Name">
            </div>
             <div class="form-group">
                 <input type="email" placeholder="Email address">
             </div>
             <div class="form-group">
                <input type="password" placeholder="Password">
            </div>
            <div class="form-group">
                 <input type="password" placeholder="Repeat password">
             </div>
             <button class="login-button">Create my account</button>
             <p class="terms">By signing in or creating an account, you agree with our <a href="#">Terms & Conditions</a> and <a href="#">Privacy Statement</a>.</p>
 
             <span  class="already">Already have an account ?</span>
             <router-link to="/signin">
                 <span class="already">
                     login
                 </span>
             </router-link>
         </div>
         <div class="item-img">
             <img src="../assets/htht.jpg"  alt="Image" class="item-image" />
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
 
 h1 {
     font-size: 28px;
     font-weight: bold;
     color: #333;
     margin-bottom: 10px;
 }
 
 h2 {
     font-size: 22px;
     color: #555;
     margin-bottom: 10px;
 }
 
 p {
     font-size: 16px;
     color: #666;
     margin-bottom: 15px;
     text-align: center;
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
     margin-bottom: 6px;
 }
 .forgot-password {
     font-size: 12px;
     color: #555;
     margin-top: 10px;
     text-decoration: none;
 }
 .full-page-container {
     display: flex; /* Use flexbox for horizontal alignment */
     justify-content: space-between; /* Distribute space between items */
     align-items: center; /* Vertically align items to the center */
     height: 100vh; /* Full viewport height */
     width: 100vw; /* Full viewport width */
     margin: 0; /* Remove any default margin */
 }
 
 .item-container {
     background-color: #f8f8f8;
     width: 50%; /* Make each container take up 50% of the width */
     height: 100%; /* Make each container take up 100% of the height */
     display: flex; /* Use flexbox for item alignment inside each container */
     justify-content: center; /* Center items horizontally */
     align-items: center; /* Center items vertically */
     flex-direction: column;
     padding: 20px;
 }
 
 .item-img {
     width: 50%; /* Make each container take up 50% of the width */
     height: 100%; /* Make each container take up 100% of the height */
     display: flex; /* Use flexbox for item alignment inside each container */
     justify-content: center; /* Center items horizontally */
     align-items: center; /* Center items vertically */
 }
 
 .item-image {
     width: 100%; /* Make the image take full width of the container */
     height: 100%; /* Make the image take full height of the container */
     object-fit: cover; /* Make the image cover the container without distortion */
 }
 
 .terms {
     font-size: 12px;
     text-align: center;
     width: 45%;
     min-width: 200px;
     margin-bottom: 16px;
     color: #777;
 }
 
 .already {
     font-size: 14px;
     font-weight: 500;
     color: #444;
 }
 </style>
 