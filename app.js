const brandNames = [
    { name: "Vitabiotics", img: "images/vitabiotics.jpeg" },
    { name: "Seven Seas", img: "images/seven seas.jpeg" },
    { name: "Haliborange", img: "images/haliborage.jpeg" },
    { name: "Centrum", img: "images/centrum.jpeg" },
    { name: "biogaia", img: "images/biogaia.jpeg" },
    { name: "bioglan", img: "images/bioglan.jpeg" },
    { name: "holland", img: "images/holland.jpeg" },
    { name: "salus", img: "images/salus.jpeg" },
    { name: "valupak", img: "images/valupak.jpeg" },
    { name: "cetaphil", img: "images/cetaphil.jpeg" },
    { name: "listerine", img: "images/listerine.jpeg" },
    { name: "Eucerin", img: "images/eucerin.jpeg" },
    { name: "Neutrogena", img: "images/nutrogena.jpeg" },
    { name: "Olay", img: "images/olay.jpeg" },
    { name: "Aveeno", img: "images/aveeno.jpeg" },
    { name: "Vaseline", img: "images/vaseline.jpeg" },
    { name:"bioderma", img:"images/bioderma.jpeg" },
    { name:"nivea", img:"images/nivea.jpeg" },  
     { name:"cerave", img:"images/cerave.jpeg" },  
       { name:"garnier", img:"images/garnier.jpeg" },  
         { name:"loreal", img:"images/loreal.jpeg" },  
    
];

// Dynamically add brand tiles
const brandGrid = document.getElementById('brandGrid');

if (brandGrid) {
    brandNames.forEach(brand => {
        const tile = document.createElement('div');
        tile.className = 'brand-tile';

        const img = document.createElement('img');
        img.src = brand.img;
        img.alt = brand.name;

        tile.appendChild(img);   // Only image added
        brandGrid.appendChild(tile);

    });
}

// Form submission handler
const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');

if (form && status) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        status.textContent = 'Submitting...';
        status.className = 'form-status';

        // Mock submission
        setTimeout(() => {
            status.textContent = "Success! We'll get back to you.";
            status.className = 'form-status success';
            form.reset();
        }, 1000);
    });
}
/* ================= NAV ACTIVE COLOR ================= */

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
  link.addEventListener("click", function() {
    navLinks.forEach(l => l.classList.remove("active"));
    this.classList.add("active");
  });
});

/* ================= HEADER SCROLL EFFECT ================= */

window.addEventListener("scroll", function() {
  const header = document.querySelector("header");
  header.classList.toggle("scrolled", window.scrollY > 50);
});
