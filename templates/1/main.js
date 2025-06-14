// موبایل منو
const menuToggle = document.getElementById('mobileMenu');
const navUl = document.querySelector('.nav ul');
menuToggle && menuToggle.addEventListener('click', () => {
    navUl.classList.toggle('active');
});

// اسلایدر نمونه‌کار
const images = [
    'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1508766206392-8bd5cf550d1d?auto=format&fit=crop&w=600&q=80'
];
let current = 0;
const portfolioImage = document.getElementById('portfolioImage');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function showImage(idx) {
    if (!portfolioImage) return;
    portfolioImage.style.opacity = 0.4;
    setTimeout(() => {
        portfolioImage.src = images[idx];
        portfolioImage.style.opacity = 1;
    }, 150);
}
prevBtn && prevBtn.addEventListener('click', () => {
    current = (current - 1 + images.length) % images.length;
    showImage(current);
});
nextBtn && nextBtn.addEventListener('click', () => {
    current = (current + 1) % images.length;
    showImage(current);
});

// فرم تماس
const contactForm = document.getElementById('contactForm');
const formMsg = document.getElementById('formMsg');
contactForm && contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    formMsg.textContent = "پیام شما با موفقیت ارسال شد! (شبیه‌سازی)";
    formMsg.style.color = "#2196f3";
    contactForm.reset();
    setTimeout(() => formMsg.textContent = "", 5000);
});