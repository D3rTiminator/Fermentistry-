
function addToCart(name, price) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push({ name, price });
  localStorage.setItem('cart', JSON.stringify(cart));
  renderCart();
}

function renderCart() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const cartDiv = document.getElementById('cart');
  if (!cartDiv) return;
  if (cart.length === 0) {
    cartDiv.innerHTML = '<p class="text-gray-600">Noch keine Produkte im Warenkorb.</p>';
    return;
  }
  let html = '<ul class="list-disc pl-6">';
  cart.forEach(item => {
    html += `<li>${item.name} – €${item.price.toFixed(2)}</li>`;
  });
  html += '</ul>';
  cartDiv.innerHTML = html;
}

function subscribeNewsletter() {
  const email = document.getElementById('newsletter-email').value;
  const message = document.getElementById('newsletter-message');
  if (email.includes('@')) {
    message.textContent = 'Vielen Dank für deine Anmeldung!';
  } else {
    message.textContent = 'Bitte gib eine gültige E-Mail-Adresse ein.';
  }
}

function submitAbo(e) {
  e.preventDefault();
  const name = document.getElementById('abo-name').value;
  const email = document.getElementById('abo-email').value;
  const type = document.getElementById('abo-type').value;
  const msg = document.getElementById('abo-message');
  msg.textContent = `Vielen Dank, ${name}! Dein ${type}-Abo ist eingegangen.`;
}

window.onload = renderCart;
