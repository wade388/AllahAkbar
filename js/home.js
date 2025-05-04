// إغلاق رسالة الترحيب عند النقر على الزر
document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.getElementById('start-btn');
    const popup = document.querySelector('.welcome-popup');

    if (startBtn && popup) {
        startBtn.addEventListener('click', function () {
            popup.style.display = 'none';
        });
    }

    // إضافة تأثير النقر على الروابط الداخلية
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // تحديد زر القائمة وقائمة التنقل
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.nav-links');

    if (menuIcon && navLinks) {
        // تشغيل وإغلاق قائمة التنقل
        menuIcon.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // إظهار الأقسام عند التمرير
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show-section');
            }
        });
    }, {
        threshold: 0.2
    });

    sections.forEach(section => {
        observer.observe(section);
    });

    // تغيير شريط التنقل عند التمرير لأسفل
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (navbar) {
            if (window.scrollY > 100) {
                navbar.classList.add('transparent');
            } else {
                navbar.classList.remove('transparent');
            }
        }
    });
});
