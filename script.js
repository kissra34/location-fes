// Animation للترحيب: إخفاء الرسالة بعد 3 ثوانٍ
window.addEventListener('load', function() {
    setTimeout(function() {
        const welcome = document.getElementById('welcomeAnimation');
        welcome.style.animation = 'fadeOut 1s ease-in-out';
        setTimeout(() => {
            welcome.style.display = 'none';
        }, 1000);
    }, 3000);
});

// نموذج الحجز
document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const carType = document.getElementById('carType').value;
    const days = document.getElementById('days').value;
    
    if (name && email && carType && days) {
        document.getElementById('confirmation').classList.remove('d-none');
        // هنا يمكن إضافة كود لإرسال البيانات إلى الخادم
        console.log(`حجز: ${name}, ${email}, ${carType}, ${days} أيام`);
    }
});

// إضافة fadeOut للـ CSS
const style = document.createElement('style');
style.innerHTML = `
@keyframes fadeOut {
    from { opacity: 1; }
    to { opacity: 0; }
}
`;
document.head.appendChild(style);
