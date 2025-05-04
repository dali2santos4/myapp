<script>
export default {
  name: "FooterSection", // <-- Multi-word name
};
</script>


<template>
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-section">
          <h3 class="footer-title">About Us</h3>
          <p class="footer-text">Delivering quality content and seamless experiences.</p>
        </div>
        <div class="footer-section">
          <h3 class="footer-title">Quick Links</h3>
          <ul class="footer-links">
            <li><a href="#" class="footer-link">Home</a></li>
            <li><a href="#" class="footer-link">Services</a></li>
            <li><a href="#" class="footer-link">Contact</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h3 class="footer-title">Follow Us</h3>
          <div class="social-icons">
            <a href="#" class="footer-link">Facebook</a>
            <a href="#" class="footer-link">Twitter</a>
            <a href="#" class="footer-link">Instagram</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  </template>
  
  <style scoped>
  .footer {
    background-color: #404142;
    color: #f1f1f1;
    padding: 2rem;
    width: 100vw;
  }
  
  .footer-content {
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    margin-bottom: 1rem;
    flex-wrap: wrap;
  }
  
  .footer-section {
    flex: 1;
    min-width: 200px;
  }
  
  .footer-title {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
  }
  
  .footer-text {
    margin-bottom: 1rem;
  }
  
  .footer-links {
    list-style: none;
    padding: 0;
  }
  
  .footer-link {
    color: #f1f1f1;
    text-decoration: none;
    margin: 0.2rem 0;
    display: block;
    transition: color 0.3s ease;
  }
  
  .footer-link:hover {
    color: #e0e0e0;
  }
  
  .social-icons a {
    margin-right: 1rem;
  }
  
  .footer-bottom {
    text-align: center;
    margin-top: 1rem;
    font-size: 0.875rem;
  }
  </style>