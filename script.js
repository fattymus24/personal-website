// Smooth scrolling for navigation links
const links = document.querySelectorAll('nav a');

links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// Gallery Image Zoom
const galleryImages = document.querySelectorAll('.gallery img');

galleryImages.forEach(image => {

    image.addEventListener('click', function() {

        const overlay = document.createElement('div');
        overlay.classList.add('overlay');

        const img = document.createElement('img');
        img.src = this.src;

        overlay.appendChild(img);

        document.body.appendChild(overlay);

        overlay.addEventListener('click', () => {
            overlay.remove();
        });

    });

});


// Fade-in Animation on Scroll
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

sections.forEach(section=>{
    section.classList.add("hidden");
    observer.observe(section);
});


// Contact Form
const form = document.querySelector("form");

form.addEventListener("submit",function(e){

    e.preventDefault();

    alert("Thank you for your message! I will get back to you soon.");

    form.reset();

});