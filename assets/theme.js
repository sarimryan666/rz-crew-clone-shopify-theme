// RZ CREW CLONE - Interactive Theme JS
document.addEventListener('DOMContentLoaded', () => {
  const drawer = document.getElementById('CartDrawer');
  const toggleBtn = document.getElementById('CartDrawerToggle');
  const closeBtn = document.getElementById('CartDrawerClose');

  if (toggleBtn && drawer) {
    toggleBtn.addEventListener('click', () => drawer.classList.remove('hidden'));
  }
  if (closeBtn && drawer) {
    closeBtn.addEventListener('click', () => drawer.classList.add('hidden'));
  }

  const cartBadges = document.querySelectorAll('.cart-btn__badge');
  const cartCountSpan = document.getElementById('CartCount');
  let cartCount = 0;

  document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      cartCount++;
      cartBadges.forEach(b => b.textContent = cartCount);
      if (cartCountSpan) cartCountSpan.textContent = cartCount;
      if (drawer) drawer.classList.remove('hidden');
    });
  });
});
