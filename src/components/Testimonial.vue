<script>
export default {
  name: "TestimonialSection",
  data() {
    return {
      testimonials: [
        {
          id: 1,
          name: "Eleanor Pena",
          date: "8 Sep, 2024",
          text: "Working with Voyager Home was an absolute pleasure! They were incredibly professional, knowledgeable, and responsive throughout the entire process.",
          image: "https://randomuser.me/api/portraits/women/68.jpg"
        },
        {
          id: 2,
          name: "Arlene McCoy",
          date: "17 Oct, 2023",
          text: "Moving internationally can be overwhelming, but Voyager Home made the entire process smooth and stress-free. Highly recommended!",
          image: "https://randomuser.me/api/portraits/women/65.jpg"
        },
        {
          id: 3,
          name: "Leslie Alexander",
          date: "21 Sep, 2024",
          text: "From the very beginning, I felt like Voyager Home truly cares about my needs and goals. They went above and beyond to help me find the perfect place.",
          image: "https://randomuser.me/api/portraits/women/66.jpg"
        }
      ]
    };
  }
};
</script>

<template>
  <section class="client-testimonials">
    <h2>What Our Clients Say</h2>

    <div class="testimonial-cards">
      <div
        class="testimonial-card"
        v-for="testimonial in testimonials"
        :key="testimonial.id"
      >
        <div class="client-info">
          <img :src="testimonial.image" :alt="testimonial.name" />
          <div>
            <h3>{{ testimonial.name }}</h3>
            <p>{{ testimonial.date }}</p>
          </div>
        </div>
        <p class="testimonial-text">
          {{ testimonial.text }}
        </p>
      </div>
    </div>
  </section>
</template>

<style>
.client-testimonials {
  padding: 50px;
  background: #fff;
  text-align: center;
}

.client-testimonials h2 {
  font-size: 24px;
  margin-bottom: 30px;
}

.testimonial-cards {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
}

.testimonial-card {
  background: #fff;
  border-radius: 10px;
  padding: 20px;
  width: 280px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  text-align: left;
  display: flex;
  flex-direction: column;
}

.client-info {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
}

.client-info img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
}

.client-info h3 {
  font-size: 16px;
  margin: 0;
}

.client-info p {
  font-size: 12px;
  color: #777;
  margin: 0;
}

.testimonial-text {
  font-size: 14px;
  color: #555;
  line-height: 1.5;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
