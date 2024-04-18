const testimonials = [
    {
      image:
      "https://images.pexels.com/photos/207983/pexels-photo-207983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      content:"Menyala abangkuh!",
      author: "Bima Ardhiansyah",
      rating: 1,
    },
    {
      image:
      "https://images.pexels.com/photos/21282102/pexels-photo-21282102/free-photo-of-bunga.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", 
      content: "Semoga hari harimu bahagia!",
      author: "Bima Ardhiansyah",
      rating: 2,
    },
    {
      image:
      "https://images.pexels.com/photos/3612885/pexels-photo-3612885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      content:"Semoga beruntung!",
      author: "Bima ardhiansyah",
      rating: 2,
    },
    {
      image:
      "https://images.pexels.com/photos/16129432/pexels-photo-16129432/free-photo-of-hutan-pohon-pedesaan-duduk.jpeg?auto=compress&cs=tinysrgb&w=400",
      content: "saluar biasa kawan!",
      author: "Bima Ardhiansyah",
      rating: 3,
    },
  ];
  
  function allTestimonial() {
    if (!testimonials.length) {
      return (document.getElementById("testimonials").innerHTML =
        `<h1>Data not found!</h1>`);
    }
  
    const testimonialHTML = testimonials.map((testimonial) => {
      return `<div class="testimonial">
                  <img src="${testimonial.image}" class="profile-testimonial" />
                  <p class="quote">"${testimonial.content}"</p>
                  <p class="author">- ${testimonial.author}</p>
              </div>`;
    });
  
    document.getElementById("testimonials").innerHTML = testimonialHTML.join("");
  }
  
  function filterTestimonial(rating) {
    
    const filteredTestimonial = testimonials.filter(
      (testimonial) => testimonial.rating == rating
    );
  
    if (!filteredTestimonial.length) {
      return (document.getElementById("testimonials").innerHTML =
        `<h1>Data not found!</h1>`);
    }
  
    const testimonialHTML = filteredTestimonial.map((testimonial) => {
      return `<div class="testimonial">
                      <img src="${testimonial.image}" class="profile-testimonial" />
                      <p class="quote">"${testimonial.content}"</p>
                      <p class="author">- ${testimonial.author}</p>
                  </div>`;
    });
  
    document.getElementById("testimonials").innerHTML = testimonialHTML.join("");
  }
  
  allTestimonial();