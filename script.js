// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // No language switching needed
});

// Smooth scrolling for navigation links
document.querySelectorAll('.navbar-nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        // Close mobile menu after clicking
        const navMenu = document.getElementById('nav-menu');
        const hamburger = document.getElementById('hamburger');
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe sections for animation
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Add animate class styles via JS for dynamic addition
const style = document.createElement('style');
style.textContent = `
    .animate {
        animation: fadeInUp 1s ease-out forwards;
    }
`;
document.head.appendChild(style);

// Particle effect for hero background (simple)
function createParticles() {
    const hero = document.querySelector('.hero');
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        hero.appendChild(particle);
    }
}

createParticles();

// CSS for particles
const particleStyle = document.createElement('style');
particleStyle.textContent = `
    .particle {
        position: absolute;
        width: 2px;
        height: 2px;
        background: rgba(255, 255, 255, 0.5);
        border-radius: 50%;
        animation: floatParticle infinite linear;
        pointer-events: none;
    }
    @keyframes floatParticle {
        0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
        10% { opacity: 1; }
        90% { opacity: 1; }
        100% { transform: translateY(-100px) rotate(360deg); opacity: 0; }
    }
`;
document.head.appendChild(particleStyle);

// Form submission handling (optional enhancement)
document.querySelector('form').addEventListener('submit', function(e) {
    // You can add custom validation or loading state here
    const btn = this.querySelector('.btn');
    btn.textContent = 'Enviando...';
    btn.disabled = true;
    // In a real scenario, handle the response
    setTimeout(() => {
        btn.textContent = 'Enviar Mensaje';
        btn.disabled = false;
        alert('Mensaje enviado exitosamente!');
    }, 2000);
});