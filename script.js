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

// ===== Supabase: جلب المنتجات =====
const SUPABASE_URL = "https://glpxbnpmooufywgphcvd.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_9OxZkH66PdDF0SFfFOS1nQ_xq5yLb1R";

async function loadProducts() {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/products?select=*`, {
    headers: {
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
    },
  });

  const products = await res.json();

  const container = document.getElementById("products");
  if (!container) return;

  container.innerHTML = "";

  products.forEach(p => {
    const div = document.createElement("div");
    div.innerHTML = `
      <h3>${p.name}</h3>
      <p>${p.description || ""}</p>
      <strong>${p.price}</strong>
      <hr/>
    `;
    container.appendChild(div);
  });
}

document.addEventListener("DOMContentLoaded", loadProducts);
