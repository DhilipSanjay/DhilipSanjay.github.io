// Dark mode toggle
const themeToggle = document.getElementById('theme-toggle');
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        const next = isDark ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
    });
}

// Mobile nav toggle
const navToggle = () => {
    const navicon = document.querySelector('.nav-icon');
    const nav = document.querySelector('.top-navigation-bar');
    const navItems = document.querySelectorAll('.top-navigation-item');

    navicon.addEventListener('click', () => {
        nav.classList.toggle('top-navigation-bar-active');

        navItems.forEach((item, index) => {
            if (item.style.animation) {
                item.style.animation = '';
            } else {
                item.style.animation = `navItemFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });

        navicon.classList.toggle('toggle');
    });
};
navToggle();

// Close mobile nav when a link is clicked
document.querySelectorAll('.top-navigation-item a').forEach(link => {
    link.addEventListener('click', () => {
        const nav = document.querySelector('.top-navigation-bar');
        const navicon = document.querySelector('.nav-icon');
        const navItems = document.querySelectorAll('.top-navigation-item');
        nav.classList.remove('top-navigation-bar-active');
        navicon.classList.remove('toggle');
        navItems.forEach(item => { item.style.animation = ''; });
    });
});

// Carousel
const carouselImgs = document.querySelectorAll('.carousel-img');
const carouselDots = document.querySelectorAll('.carousel-dot');
if (carouselImgs.length > 1) {
    let current = 0;
    const showSlide = (index) => {
        carouselImgs.forEach(img => img.classList.remove('active'));
        carouselDots.forEach(dot => dot.classList.remove('active'));
        carouselImgs[index].classList.add('active');
        carouselDots[index].classList.add('active');
    };
    carouselDots.forEach((dot, i) => {
        dot.addEventListener('click', () => { current = i; showSlide(current); });
    });
    setInterval(() => { current = (current + 1) % carouselImgs.length; showSlide(current); }, 4000);
}

// Fade-in on scroll
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    root: null,
    threshold: 0,
    rootMargin: "0px 0px -80px 0px"
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('appear');
            observer.unobserve(entry.target);
        }
    });
}, appearOptions);

faders.forEach(fader => appearOnScroll.observe(fader));
