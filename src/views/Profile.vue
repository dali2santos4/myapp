<template>
  <div class="container">
    <main class="main-content">
      <div class="profile-card">
        <div class="profile-header">
          <div style="height: 40px; width: 40px; border-radius: 20px; background-color: cadetblue; display: flex; align-items: center; justify-content: center;">
            <h4>{{ profile.firstName.charAt(0).toUpperCase() + profile.lastName.charAt(0).toUpperCase() }}</h4>
          </div>
          <h2>{{ profile.username || "Anonymous" }}</h2>
          <p class="user-email">{{ profile.email }}</p>
        </div>

        <form class="profile-form" @submit.prevent="updateProfile">
          <div class="form-row">
            <label>First name</label>
            <div class="name-inputs">
              <input type="text" placeholder="First name" v-model="profile.firstName" />
            </div>
          </div>

          <div class="form-row">
            <label>Last name</label>
            <div class="name-inputs">
              <input type="text" placeholder="Last name" v-model="profile.lastName" />
            </div>
          </div>

          <div class="form-row">
            <label>Email</label>
            <div class="input-with-icon">
              <input type="email" placeholder="email" v-model="profile.email" style="border-width: 0;" />
            </div>
          </div>

          <div class="form-row">
            <label>Username</label>
            <input type="text" v-model="profile.username" />
          </div>

          <div class="form-buttons">
            <button type="button" class="cancel-btn" @click="clearProfile">Clear</button>
            <button type="submit" class="save-btn">Save changes</button>
          </div>
        </form>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "ProfilePage",

  data() {
    const email = localStorage.getItem("email") || "";
    const savedProfile = JSON.parse(localStorage.getItem("userProfile")) || {};
    return {
      userEmail: email,
      profile: {
        firstName: savedProfile.firstName || "",
        lastName: savedProfile.lastName || "",
        email: savedProfile.email || email,
        username: savedProfile.username || ""
      }
    };
  },

  methods: {
    updateProfile() {
      localStorage.setItem("userProfile", JSON.stringify(this.profile));
      alert("Profile saved locally!");
    },
    clearProfile() {
      localStorage.removeItem("userProfile");
      this.profile = {
        firstName: "",
        lastName: "",
        email: this.userEmail,
        username: ""
      };
      alert("Local profile cleared.");
    }
  }
};
</script>

<style scoped>
.main-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
}

.profile-card {
  background-color: #ffd500;
  border-radius: 10px;
  margin-top: 40px;
  padding: 30px 20px;
  width: 400px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  position: relative;
}

.profile-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 8px;
  margin-bottom: 20px;
}

.profile-header h2 {
  margin-bottom: 5px;
}

.user-email {
  font-size: 0.9rem;
  color: #555;
}

.profile-form .form-row {
  margin-bottom: 15px;
}

.profile-form label {
  font-weight: bold;
  font-size: 0.9rem;
  margin-bottom: 5px;
  display: block;
}

.name-inputs {
  display: flex;
  gap: 10px;
}

.name-inputs input {
  flex: 1;
}

.input-with-icon {
  display: flex;
  align-items: center;
  background: white;
  border-radius: 5px;
  padding: 5px 10px;
}

.input-with-icon input,
.input-with-icon select {
  border: none;
  background: none;
  outline: none;
  flex: 1;
  font-size: 1rem;
}

.profile-form input,
.profile-form select {
  width: 100%;
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

.form-buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.cancel-btn {
  background-color: white;
  border: 2px solid #ccc;
  padding: 8px 15px;
  border-radius: 5px;
  cursor: pointer;
}

.save-btn {
  background-color: #4b58f4;
  color: white;
  border: none;
  padding: 8px 15px;
  border-radius: 5px;
  cursor: pointer;
}

.save-btn:hover {
  background-color: #3742fa;
}
</style>
