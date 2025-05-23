<template>
    <div class="full-page-container">
        <div class="item-container">
            <h1 class="title">Alliance-hotel</h1>
            <p class="subtitle">Welcome back! Please enter your details</p>
            <div class="form-group">
                <input v-model="email" type="email" placeholder="Email address" autocomplete="email" />
            </div>
            <div class="form-group">
                <input v-model="password" type="password" placeholder="Password" autocomplete="current-password" />
            </div>
            <button class="login-button" @click="handleSubmit">Login</button>
            <router-link to="/signup" class="signup-link">Create an account</router-link>
            <a href="#" class="forgot-password">Mot de passe oublié</a>
        </div>
        <div class="item-img">
            <img src="../assets/htht.jpg" alt="Image" class="item-image" />
        </div>
    </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

export default {
    setup() {
        const email = ref("");
        const password = ref("");
        const router = useRouter();

        const handleSubmit = async () => {
            if (!email.value || !password.value) {
                alert("Please fill in all fields.");
                return;
            }

            try {
                const response = await axios.post("http://127.0.0.1:5000/login", {
                    email: email.value,
                    password: password.value,
                });

                if (response.status === 200) {
                    localStorage.setItem("token", response.data.token);
                    localStorage.setItem("role", response.data.role);
                    console.log('res',  response.data)
                    if (response.data.role == "ADM") {
                        router.push("/dashboard");
                    }else{
                        router.push("/");
                    }
                } else {
                    alert(response.data.message || "Something went wrong!");
                }
            } catch (error) {
                alert(error.response?.data?.message || "An error occurred.");
            }
        };

        return { email, password, handleSubmit };
    },
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
}

.item-container {
    background-color: #f8f8f8;
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
@media (max-width: 480px) {
    .full-page-container {
        flex-direction: column;
        height: 100vh;
        width: 100vw;
    }

    .item-container {
        width: 100%;
        height: 50vh;
        order: 2;
    }

    .item-img {
        width: 100%;
        height: 50vh;
        order: 1;
    }

    .item-image {
        border-radius: 0;
        border-bottom-right-radius: 26px;
        border-bottom-left-radius: 26px;
    }

    .title {
        font-size: 24px;
    }

    .form-group {
        width: 90%;
        max-width: 260px;
    }

    .login-button {
        width: 100%;
        max-width: 260px;
    }
}

@media (max-width: 375px) {
    .full-page-container {
        flex-direction: column;
        height: 100vh;
        width: 100vw;
    }

    .item-container {
        width: 100%;
        height: 60vh;
        order: 2;
    }

    .item-img {
        width: 100%;
        height: 40vh;
        order: 1;
    }

    .title {
        font-size: 20px;
    }
}
</style>
