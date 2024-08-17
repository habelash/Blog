document.addEventListener('DOMContentLoaded', function() {
 const slides = document.querySelectorAll('.slide');
 const totalSlides = slides.length;
 let currentSlide = 0;

 // Function to show current slide
 function showSlide(index) {
     // Hide all slides
     slides.forEach(slide => {
         slide.style.display = 'none';
     });

     // Display current slide
     slides[index].style.display = 'flex';
 }

 // Function to move to next slide
 function nextSlide() {
     currentSlide = (currentSlide + 1) % totalSlides;
     showSlide(currentSlide);
 }

 // Function to move to previous slide
 function prevSlide() {
     currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
     showSlide(currentSlide);
 }

 // Show initial slide
 showSlide(currentSlide);

 // Automatic slideshow
 setInterval(nextSlide, 5000); // Change slide every 5 seconds

 // Event listeners for navigation buttons
 const prevBtn = document.getElementById('prevBtn');
 const nextBtn = document.getElementById('nextBtn');

 prevBtn.addEventListener('click', prevSlide);
 nextBtn.addEventListener('click', nextSlide);
});
