

<script >
export default {
  name: "MessangerPage", // <-- Multi-word name
};
</script>

<template>
    
  <div class="messaging-container">

<div class="sidebar">
  <h2>Your Message</h2>
  <div class="search-bar">
    <input type="text" placeholder="Search...">
    <button>🔍</button>
  </div>

  <div class="chat-list">
    <div class="chat-item active">
      <img src="p.jpg" alt="Profile">
      <div class="chat-info">
        <h4>Eleanor Pena</h4>
        <p>hey my friend<br>how are you?</p>
      </div>
    </div>

    <div class="chat-item">
      <img src="p.jpg" alt="Profile">
      <div class="chat-info">
        <h4>Leader-nim</h4>
        <p>Time is running !</p>
      </div>
    </div>

    <div class="chat-item">
      <img src="p.jpg" alt="Profile">
      <div class="chat-info">
        <h4>Beak Hyung</h4>
        <p>photo</p>
      </div>
    </div>
  </div>
</div>

<div class="chat-area">
  <div class="chat-header">
    <div class="chat-user">
      <img src="p.jpg" alt="User">
      <h3>Beak Hyung</h3>
    </div>
    <div class="chat-actions">
      <button>📷</button>
      <button>📞</button>
    </div>
  </div>

  <div class="chat-messages">
    <div class="message received">Hello</div>
    <div class="message sent">Hi</div>
  </div>

  <div class="chat-input">
    <button class="plus-btn">➕</button>
    <input type="text" placeholder="Type a message">
    <button class="send-btn">📨</button>
  </div>
</div>

</div>
</template>
<style>

/* Messaging layout */
.messaging-container {
  display: flex;
  height: calc(100vh - 80px); /* Adjusted for navbar height */
  padding-top: 70px;
}

/* Sidebar */
.sidebar {
  width: 300px;
  background-color: #f9f9f9;
  border-right: 1px solid #eee;
  padding: 6px;
  display: flex;
  flex-direction: column;
}

.sidebar h2 {
  margin-bottom: 1rem;
}

.search-bar {
  display: flex;
  margin-bottom: 1rem;
}

.search-bar input {
  flex: 1;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-right: none;
  border-radius: 0.5rem 0 0 0.5rem;
}

.search-bar button {
  padding: 0.5rem;
  border: 1px solid #ccc;
  background: white;
  border-radius: 0 0.5rem 0.5rem 0;
  cursor: pointer;
}

.chat-list {
  flex: 1;
  overflow-y: auto;
}

.chat-item {
  display: flex;
  align-items: center;
  padding: 0.5rem 0;
  cursor: pointer;
}

.chat-item.active {
  background-color: #fff7e6;
  border-radius: 0.5rem;
}

.chat-item img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 1rem;
}

.chat-info h4 {
  margin-bottom: 0.2rem;
}

.chat-info p {
  font-size: 0.8rem;
  color: #666;
}

/* Chat Area */
.chat-area {
  flex: 1;
  display: flex;
  flex-direction: column;
  background: #fff;
}

.chat-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: #f5f5f5;
  border-bottom: 1px solid #ddd;
}

.chat-user {
  display: flex;
  align-items: center;
}

.chat-user img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 0.5rem;
}

.chat-actions button {
  background: none;
  border: none;
  font-size: 1.5rem;
  margin-left: 1rem;
  cursor: pointer;
}

/* Messages */
.chat-messages {
  flex: 1;
  padding: 1rem;
  overflow-y: auto;
  background: #fff;
}

.message {
  max-width: 60%;
  padding: 0.8rem 1rem;
  margin-bottom: 1rem;
  border-radius: 1rem;
  display: inline-block;
  font-size: 1rem;
}

.received {
  background-color: #f9eaea;
  align-self: flex-start;
}

.sent {
  background-color: #d5d6ff;
  align-self: flex-end;
  margin-left: auto;
}

/* Input */
.chat-input {
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-top: 1px solid #ddd;
}

.chat-input input {
  flex: 1;
  padding: 0.8rem;
  margin: 0 0.5rem;
  border: 1px solid #ccc;
  border-radius: 1rem;
}

.plus-btn, .send-btn {
  background: #7f56d9;
  color: white;
  border: none;
  padding: 0.8rem;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.2rem;
}
</style>