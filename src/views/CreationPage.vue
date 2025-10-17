<script setup>

</script>


<template>

<div class="container">
        <header>
            <h1>Create Resort Listing</h1>
            <p class="subtitle">Fill out the form below to create your luxury resort listing</p>
        </header>
        
        <div class="form-container">
          <!--
            <div class="form-preview">
                <h2 class="preview-title">Listing Preview</h2>
                <div class="preview-content">
                    <h3 class="preview-resort">Azure Haven Resort</h3>
                    <div class="preview-rating">★★★★★ 5.0</div>
                    <p class="preview-location">Bora Bora, French Polynesia</p>
                    <p class="preview-description">Our spacious ocean-view suites are thoughtfully designed with floor-to-ceiling windows, private terraces, and premium amenities to ensure unparalleled comfort.</p>
                    
                    <div class="preview-amenities">
                        <div class="amenity-preview">
                            <span>Lounge chairs:</span>
                            <span>2</span>
                        </div>
                        <div class="amenity-preview">
                            <span>Washing Machine:</span>
                            <span>3</span>
                        </div>
                        <div class="amenity-preview">
                            <span>Refrigerator:</span>
                            <span>5</span>
                        </div>
                        <div class="amenity-preview">
                            <span>Bedroom:</span>
                            <span>2</span>
                        </div>
                        <div class="amenity-preview">
                            <span>Oven:</span>
                            <span>2</span>
                        </div>
                        <div class="amenity-preview">
                            <span>WiFi:</span>
                            <span>5</span>
                        </div>
                    </div>
                </div>
            </div>  

            -->
            
            <div class="form-section" style=" flex:1">
                <div style="justify-content: space-between; align-items: center; height: 50px; padding: 8px;position: relative;">
                    <h2>Resort Information</h2>
                    <div class="btn-group" style="position: absolute; bottom: 16px; right:0;">
                        <button class="btn btn-primary">Create Listing</button>
                         <!--
                            <button class="btn btn-secondary">Save Draft</button>
                        
                         -->
                        <button class="btn btn-outline">Cancel</button>
                    </div>
                </div>

                <div style="flex:1; display: flex; flex-direction: row; gap: 6px; width:  100%; justify-content: space-around; margin-top: 10px;">
                    <div class="form-group">
                        <h3>Basic Details</h3>
                        <div class="input-group">
                            <label for="resortName" class="required">Resort Name</label>
                            <input type="text" id="resortName" placeholder="Enter resort name">
                        </div>
                        
                        <div class="input-group">
                            <label for="location" class="required">Location</label>
                            <input type="text" id="location" placeholder="Enter resort location">
                        </div>
                        
                        <div class="input-group">
                            <label for="description" class="required">Description</label>
                            <textarea id="description" placeholder="Describe your resort"></textarea>
                        </div>
                    </div>
                    <div class="form-group">
                        <h3>Amenities</h3>
                        <p>Specify the quantity for each amenity</p>
                        
                        <div class="amenity-grid">
                            <div class="amenity-item">
                                <label for="loungeChairs">Lounge chairs</label>
                                <input type="number" id="loungeChairs" min="0" value="2" style="width: 60px;">
                            </div>
                            
                            <div class="amenity-item">
                                <label for="washingMachine">Washing Machine</label>
                                <input type="number" id="washingMachine" min="0" value="3" style="width: 60px;">
                            </div>
                            
                            <div class="amenity-item">
                                <label for="refrigerator">Refrigerator</label>
                                <input type="number" id="refrigerator" min="0" value="5" style="width: 60px;">
                            </div>
                            
                            <div class="amenity-item">
                                <label for="bedroom">Bedroom</label>
                                <input type="number" id="bedroom" min="0" value="2" style="width: 60px;">
                            </div>
                            
                            <div class="amenity-item">
                                <label for="oven">Oven</label>
                                <input type="number" id="oven" min="0" value="2" style="width: 60px;">
                            </div>
                            
                            <div class="amenity-item">
                                <label for="wifi">WiFi</label>
                                <input type="number" id="wifi" min="0" value="5" style="width: 60px;">
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <h3>Hotel Policies</h3>
                        
                        <div class="input-group">
                            <label for="checkIn" class="required">Check-in Time</label>
                            <input type="time" id="checkIn" value="15:00">
                        </div>
                        
                        <div class="input-group">
                            <label for="checkOut" class="required">Check-out Time</label>
                            <input type="time" id="checkOut" value="12:00">
                        </div>
                        
                        <div class="input-group">
                            <label for="minAge" class="required">Minimum Age to Check-in</label>
                            <input type="number" id="minAge" min="0" value="17">
                        </div>
                        
                        <div class="input-group">
                            <label for="parking">Parking Spaces</label>
                            <input type="number" id="parking" min="0" value="2">
                        </div>
                    </div>

                     <div class="form-group">
                        <h3>Pricing</h3>
                        
                        <div class="input-group">
                            <label for="price" class="required">Price per Night ($)</label>
                            <input type="number" id="price" min="0" value="600">
                        </div>
                    </div>
                </div>
                
                
                <!--
                    
                    
                   
                    
                
                -->
            </div>
        </div>
    </div>

</template>


<style scoped>
/*.form-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  flex:1;
  margin-top: 70px;
}

label {
  display: block;
  margin-top: 15px;
  font-weight: bold;
}

input,
select,
textarea {
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border-radius: 6px;
  border: 1px solid #ccc;
}

button {
  margin-top: 20px;
  padding: 12px;
  width: 100%;
  background-color: #f7c948;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #e0b137;
}*/

.container {
    max-width: 1400px;
    margin: 0 auto;
    background: white;
    border-radius: 12px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
    margin-top: 80px;
    height: calc(100vh - 80px);
    
}

header {
    background: white;
    color: brown;
    padding: 25px 40px;
    text-align: center;
}

h1 {
    font-size: 2.5rem;
    margin-bottom: 15px;
}

.subtitle {
    font-size: 1.2rem;
    opacity: 0.9;
}

.form-container {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    padding: 30px;
    height: 100%;
}

.form-preview {
    flex: 1;
    min-width: 300px;
    background: #f8f9fa;
    padding: 25px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.preview-title {
    color: #1a4b8c;
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: 2px solid #eaeaea;
    text-align: center;
}

.preview-content {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.preview-resort {
    font-size: 1.8rem;
    color: #1a4b8c;
    margin-bottom: 10px;
}

.preview-rating {
    color: #FFD700;
    margin-bottom: 10px;
}

.preview-location {
    font-style: italic;
    margin-bottom: 15px;
    color: #666;
}

.preview-description {
    margin-bottom: 15px;
    line-height: 1.5;
}

.preview-amenities {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    margin-top: 20px;
}

.amenity-preview {
    display: flex;
    justify-content: space-between;
    padding: 5px 0;
    border-bottom: 1px dashed #eaeaea;
}

.form-section {
    flex: 2;
    min-width: 300px;
    width: 100%;
    height: auto;
}

.form-section h2 {
    color: #1a4b8c;
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: 2px solid #eaeaea;
}

.form-group {
    background: #f8f9fa;
    padding: 20px;
    border-radius: 8px;
}

.form-group h3 {
    color: #2b8cba;
    margin-bottom: 15px;
}

.input-group {
    margin-bottom: 15px;
}

label {
    display: block;
    margin-bottom: 8px;
    font-weight: 600;
    color: #444;
}

input, select, textarea {
    width: 100%;
    padding: 12px 15px;
    border: 1px solid #ddd;
    border-radius: 6px;
    font-size: 1rem;
}

textarea {
    min-height: 120px;
    resize: vertical;
}

.amenity-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 15px;
    margin-top: 15px;
}

.amenity-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background: white;
    border-radius: 6px;
    border: 1px solid #eee;
}

.btn-group {
    display: flex;
    gap: 15px;
    margin-top: 30px;
}

.btn {
    padding: 10px 20px;
    border: none;
    border-radius: 6px;
    font-size: 1.1rem;
    cursor: pointer;
    transition: all 0.3s;
}

.btn-primary {
    background: #1a4b8c;
    color: white;
}

.btn-primary:hover {
    background: #15396d;
}

.btn-secondary {
    background: #6c757d;
    color: white;
}

.btn-secondary:hover {
    background: #5a6268;
}

.btn-outline {
    background: transparent;
    border: 2px solid #1a4b8c;
    color: #1a4b8c;
}

.btn-outline:hover {
    background: #1a4b8c;
    color: white;
}

.required::after {
    content: " *";
    color: #e22;
}

@media (max-width: 768px) {
    .form-container {
        flex-direction: column;
    }
    
    .amenity-grid {
        grid-template-columns: 1fr;
    }
}
</style>
