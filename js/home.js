// إغلاق رسالة الترحيب عند النقر على الزر
document.getElementById('start-btn').addEventListener('click', function () {
    document.querySelector('.welcome-popup').style.display = 'none';
});

// إضافة تأثير النقر على الروابط الداخلية
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({});
    });
});

// تحديد زر القائمة وقائمة التنقل
const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');

// تشغيل وإغلاق قائمة التنقل
menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

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
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 100) {  // عند النزول أكثر من 100px
            navbar.classList.add('transparent');  // إضافة الكلاس الذي يجعل الشريط شفافا
        } else {
            navbar.classList.remove('transparent');  // إزالة الكلاس عند العودة إلى أعلى الصفحة
        }
    }
});
