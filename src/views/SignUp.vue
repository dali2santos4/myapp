<template>
    <div class="full-page-container">
      <div class="item-container">
        <h1>Create an account</h1>
              <p>Welcome back! Please enter your details</p>
              <form @submit.prevent="registerUser" class="form">
              <div class="form-group">
                  <input v-model="user.username" type="text" placeholder="Username" required />
              </div>
               <div class="form-group">
                   <input v-model="user.email" type="email" placeholder="Email" required />
               </div>
               <div class="form-group">
                  <input v-model="user.password" type="password" placeholder="Password" required />
              </div>
              <div class="form-group">
                   <input v-model="confirmPassword" type="password" placeholder="Repeat password" required />
               </div>
               <p v-if="error" class="error">{{ error }}</p>
               <button class="login-button" type="submit">Create</button>
              </form>
              <p v-if="message">{{ message }}</p>
               <p class="terms">By signing in or creating an account, you agree with our <a href="#">Terms & Conditions</a> and <a href="#">Privacy Statement</a>.</p>
   
               <p >Already have an account ?</p>
               <router-link to="/signin" class="back-button" >
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

<script>
import axios from "axios";

export default {
  data() {
    return {
      user: {
        username: "",
        email: "",
        password: ""
      },
      confirmPassword: "",
      message: "",
      error: ""
    };
  },
  methods: {
    async registerUser() {
      this.error = "";
      this.message = "";

      // Validate password match
      if (this.user.password !== this.confirmPassword) {
        this.error = "Passwords do not match!";
        return;
      }

      try {
        const response = await axios.post("http://127.0.0.1:5000/register", this.user);
        this.message = response.data.message;

        // Redirect after a short delay
        setTimeout(() => {
          this.$router.push("/signin"); // Redirect to login page
        }, 1500); // Wait for 1.5 seconds to show success message
      } catch (error) {
        this.error = error.response?.data?.message || "Registration failed.";
      }
    }
  }
};
</script>
 
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
     font-size: 32px;
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
     font-size: 14px;
     color: #666;
     margin-bottom: 10px;
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
     text-decoration: none;
     justify-content: center;
     display: flex;
 }
 .forgot-password {
     font-size: 12px;
     color: #555;
     margin-top: 10px;
     text-decoration: none;
 }
 .full-page-container {
     display: flex; /* Use flexbox for horizontal alignment */
     flex-direction: row;
     justify-content: space-between; /* Distribute space between items */
     align-items: center; /* Vertically align items to the center */
     height: 100vh; /* Full viewport height */
     width: 100vw; /* Full viewport width */
     margin: 0; /* Remove any default margin */
 }
 
 .item-container {
     /*background-color: #f8f8f8;*/
     width: 50%; /* Make each container take up 50% of the width */
     height: 100%; /* Make each container take up 100% of the height */
     justify-content: center; /* Center items horizontally */
     align-items: center; /* Center items vertically */
     /*padding: 20px;*/
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
     color: #000;
     text-decoration: none;
 }
 .error {
  color: red;
}
.success {
  color: green;
}

.form {
    width: 100%; /* Ensure form takes full width */
  display: flex;
  flex-direction: column;
  align-items: center;
}

.back-button {
     width: 100%;
     max-width: 300px;
     padding: 10px;
     background-color: #fff;
     border: none;
     border-radius: 5px;
     cursor: pointer;
     font-size: 16px;
     margin-bottom: 6px;
     text-decoration: none;
     justify-content: center;
     display: flex;
 }

 </style>
 
