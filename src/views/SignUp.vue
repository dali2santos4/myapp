<template>
    <div class="container">
         <div class="left-section">
             <h1>TuniGuide</h1>
             <p>Welcome back! Please enter your details</p>
             <div class="form-group">
                 <input type="email" placeholder="Email address">
             </div>
             <div class="form-group">
                 <input type="password" placeholder="Password">
             </div>
             <button class="login-button">Login</button>
             <a href="#" class="forgot-password">Mot de passe oublié</a>
         </div>
         <div class="right-section">
             <img src="bjb.jpg" alt="View">
         </div>
     </div>
 
 </template>
 <script>
 export default{
     name: 'SignUp'
 }
 
 </script>
 <style>
 .container {
             display: flex;
             width: 100%;
         }
         .left-section {
             width: 50%;
             background-color: #f8f8f8;
             display: flex;
             flex-direction: column;
             justify-content: center;
             align-items: center;
             padding: 40px;
         }
         .left-section h1 {
             font-size: 28px;
             font-weight: bold;
             margin-bottom: 10px;
         }
         .left-section p {
             font-size: 14px;
             color: #555;
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
         }
         .forgot-password {
             font-size: 12px;
             color: #555;
             margin-top: 10px;
             text-decoration: none;
         }
         .right-section {
             width: 50%;
         }
         .right-section img {
             width: 100%;
             height: 100vh;
             object-fit: cover;
         }
 </style>