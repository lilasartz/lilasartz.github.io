/* =========================================================
   LILASARTZ — datos y comportamiento
   ========================================================= */

// ---- Ilustraciones SVG reutilizables por categoría (placeholders artesanales) ----
const illustrations = {
  cuadro1: `<svg viewBox="0 0 200 200"><rect width="200" height="200" fill="#EFE3F8"/>
    <path d="M0 150 L60 90 L100 130 L140 70 L200 140 L200 200 L0 200Z" fill="#8B5FBF"/>
    <path d="M0 170 L50 130 L90 160 L130 110 L200 165 L200 200 L0 200Z" fill="#6E3F8F"/>
    <circle cx="150" cy="40" r="20" fill="#C79A3E"/></svg>`,
  cuadro2: `<svg viewBox="0 0 200 200"><rect width="200" height="200" fill="#F3EAF9"/>
    <path d="M0 120 Q100 40 200 120 Q100 100 0 120Z" fill="#C46B4E"/>
    <path d="M0 150 Q100 90 200 150 L200 200 L0 200Z" fill="#4A2C63"/></svg>`,
  cuadro3: `<svg viewBox="0 0 200 200"><rect width="200" height="200" fill="#EADFF6"/>
    <circle cx="100" cy="90" r="55" fill="none" stroke="#6E3F8F" stroke-width="10"/>
    <circle cx="100" cy="90" r="14" fill="#C79A3E"/>
    <path d="M40 160 Q100 140 160 160" stroke="#8B5FBF" stroke-width="6" fill="none"/></svg>`,
  sombrero1: `<svg viewBox="0 0 200 200"><rect width="200" height="200" fill="#F6EFE0"/>
    <ellipse cx="100" cy="130" rx="85" ry="18" fill="#D8C08A"/>
    <path d="M60 130 Q100 40 140 130Z" fill="#EAD9A8"/>
    <rect x="60" y="118" width="80" height="12" fill="#4A2C63"/></svg>`,
  sombrero2: `<svg viewBox="0 0 200 200"><rect width="200" height="200" fill="#F1E7F7"/>
    <ellipse cx="100" cy="135" rx="80" ry="16" fill="#C9B27C"/>
    <path d="M65 135 Q100 55 135 135Z" fill="#DCC793"/>
    <rect x="65" y="122" width="70" height="10" fill="#C46B4E"/></svg>`,
  llavero1: `<svg viewBox="0 0 200 200"><rect width="200" height="200" fill="#EFE3F8"/>
    <circle cx="100" cy="60" r="26" fill="none" stroke="#4A2C63" stroke-width="8"/>
    <path d="M100 86 L100 150" stroke="#4A2C63" stroke-width="6"/>
    <path d="M75 130 Q100 110 125 130 Q100 165 75 130Z" fill="#C79A3E"/></svg>`,
  llavero2: `<svg viewBox="0 0 200 200"><rect width="200" height="200" fill="#F3EAF9"/>
    <circle cx="100" cy="55" r="24" fill="none" stroke="#6E3F8F" stroke-width="8"/>
    <path d="M100 79 L100 120" stroke="#6E3F8F" stroke-width="6"/>
    <rect x="70" y="120" width="60" height="45" rx="8" fill="#8B5FBF"/></svg>`,
  ropa1: `<svg viewBox="0 0 200 200"><rect width="200" height="200" fill="#F1E7F7"/>
    <path d="M70 40 L100 55 L130 40 L150 65 L135 80 L130 170 L70 170 L65 80 L50 65Z" fill="#C46B4E"/>
    <circle cx="100" cy="90" r="6" fill="#F6EFE0"/><circle cx="100" cy="115" r="6" fill="#F6EFE0"/></svg>`,
  ropa2: `<svg viewBox="0 0 200 200"><rect width="200" height="200" fill="#EFE3F8"/>
    <path d="M75 35 L100 50 L125 35 L145 60 L130 75 L128 170 L72 170 L70 75 L55 60Z" fill="#6E3F8F"/>
    <path d="M85 90 L115 90 M85 110 L115 110" stroke="#C79A3E" stroke-width="4"/></svg>`,
  escultura1: `<svg viewBox="0 0 200 200"><rect width="200" height="200" fill="#F3EAF9"/>
    <path d="M100 30 Q60 70 70 110 Q75 150 100 170 Q125 150 130 110 Q140 70 100 30Z" fill="#8B5FBF"/>
    <rect x="80" y="170" width="40" height="14" fill="#4A2C63"/></svg>`,
  escultura2: `<svg viewBox="0 0 200 200"><rect width="200" height="200" fill="#EADFF6"/>
    <path d="M60 170 L80 60 L100 100 L120 50 L140 170Z" fill="#C46B4E"/>
    <rect x="55" y="170" width="90" height="12" fill="#4A2C63"/></svg>`,
};

// ---- Catálogo de productos de ejemplo ----
const products = [
  { id:1, category:"cuadros", title:"Atardecer en Boquete", desc:"Óleo sobre lienzo inspirado en las montañas de Chiriquí, pinceladas gruesas y paleta cálida.", price:145, img: illustrations.cuadro1 },
  { id:2, category:"cuadros", title:"Mar en Calma", desc:"Acrílico texturizado con espátula, tonos azules y dorados, listo para colgar.", price:120, img: illustrations.cuadro2 },
  { id:3, category:"cuadros", title:"Retrato Abstracto", desc:"Composición abstracta en violetas y dorado, pieza única firmada por la artista.", price:180, img: illustrations.cuadro3 },
  { id:4, category:"sombreros", title:"Sombrero Panamá Clásico", desc:"Tejido a mano con fibra de paja toquilla, ala media, cinta en tono tierra.", price:65, img: illustrations.sombrero1 },
  { id:5, category:"sombrero", title:"Sombrero Bohemio de Paja", desc:"Ala ancha tejida a mano, ideal para playa y días de sol.", price:48, img: illustrations.sombrero2 },
  { id:6, category:"llaveros", title:"Llavero Tucán", desc:"Tallado en madera reciclada y pintado a mano, pieza pequeña llena de color.", price:12, img: illustrations.llavero1 },
  { id:7, category:"llaveros", title:"Llavero Molas", desc:"Bordado inspirado en las molas guna, tela y cuero genuino.", price:15, img: illustrations.llavero2 },
  { id:8, category:"ropa", title:"Blusa Bordada a Mano", desc:"Algodón suave con bordado floral hecho a mano, corte holgado.", price:58, img: illustrations.ropa1 },
  { id:9, category:"ropa", title:"Chaqueta Pintada Artesanal", desc:"Denim reciclado pintado a mano con motivos florales únicos.", price:95, img: illustrations.ropa2 },
  { id:10, category:"esculturas", title:"Escultura Colibrí en Madera", desc:"Talla en madera de balsa, acabado natural, base incluida.", price:135, img: illustrations.escultura1 },
  { id:11, category:"esculturas", title:"Figura de Barro Ancestral", desc:"Cerámica moldeada a mano siguiendo técnicas ancestrales, pieza decorativa.", price:110, img: illustrations.escultura2 },
];
// corrige categoría singular usada arriba por consistencia
products.forEach(p => { if(p.category === "sombrero") p.category = "sombreros"; });

// ---- Estado del carrito (en memoria) ----
let cart = [];

// ---- Render de catálogo ----
const grid = document.getElementById("productGrid");

function renderProducts(filter = "todos"){
  grid.innerHTML = "";
  const list = filter === "todos" ? products : products.filter(p => p.category === filter);
  list.forEach(p => {
    const card = document.createElement("article");
    card.className = "product-card";
    card.innerHTML = `
      <span class="tape"></span>
      <div class="card-image">${p.img}</div>
      <span class="card-category">${categoryLabel(p.category)}</span>
      <h3 class="card-title">${p.title}</h3>
      <p class="card-desc">${p.desc}</p>
      <div class="card-bottom">
        <span class="price-tag">$${p.price}</span>
        <button class="card-add" data-id="${p.id}" aria-label="Añadir al carrito">+</button>
      </div>
    `;
    // abrir modal al hacer clic en la tarjeta (excepto el botón +)
    card.addEventListener("click", (e) => {
      if(e.target.closest(".card-add")) return;
      openModal(p.id);
    });
    grid.appendChild(card);
  });

  // botones de "añadir" directos desde la tarjeta
  grid.querySelectorAll(".card-add").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      addToCart(parseInt(btn.dataset.id), 1);
      showToast("Añadido al carrito 🌸");
    });
  });
}

function categoryLabel(cat){
  const labels = { cuadros:"Cuadro", sombreros:"Sombrero", llaveros:"Llavero", ropa:"Ropa decorativa", esculturas:"Escultura" };
  return labels[cat] || cat;
}

// ---- Filtros ----
document.getElementById("filters").addEventListener("click", (e) => {
  const btn = e.target.closest(".filter-pill");
  if(!btn) return;
  document.querySelectorAll(".filter-pill").forEach(p => p.classList.remove("active"));
  btn.classList.add("active");
  renderProducts(btn.dataset.filter);
});

// ---- Modal de producto ----
const modalOverlay = document.getElementById("modalOverlay");
const modalContent = document.getElementById("modalContent");
let modalQty = 1;

function openModal(id){
  const p = products.find(x => x.id === id);
  if(!p) return;
  modalQty = 1;
  modalContent.innerHTML = `
    <div class="card-image">${p.img}</div>
    <div>
      <span class="card-category">${categoryLabel(p.category)}</span>
      <h3>${p.title}</h3>
      <p class="card-desc">${p.desc}</p>
      <span class="price-tag">$${p.price}</span>
      <div class="modal-qty">
        <button id="qtyMinus">−</button>
        <span id="qtyValue">1</span>
        <button id="qtyPlus">+</button>
      </div>
      <button class="btn-primary full" id="modalAddBtn">Añadir al carrito</button>
    </div>
  `;
  modalOverlay.classList.add("open");

  document.getElementById("qtyMinus").addEventListener("click", () => {
    modalQty = Math.max(1, modalQty - 1);
    document.getElementById("qtyValue").textContent = modalQty;
  });
  document.getElementById("qtyPlus").addEventListener("click", () => {
    modalQty += 1;
    document.getElementById("qtyValue").textContent = modalQty;
  });
  document.getElementById("modalAddBtn").addEventListener("click", () => {
    addToCart(p.id, modalQty);
    closeModal();
    showToast("Añadido al carrito 🌸");
  });
}
function closeModal(){ modalOverlay.classList.remove("open"); }
document.getElementById("modalClose").addEventListener("click", closeModal);
modalOverlay.addEventListener("click", (e) => { if(e.target === modalOverlay) closeModal(); });

// ---- Carrito ----
const cartDrawer = document.getElementById("cartDrawer");
const cartOverlay = document.getElementById("cartOverlay");
const cartItemsEl = document.getElementById("cartItems");
const cartCountEl = document.getElementById("cartCount");
const cartTotalEl = document.getElementById("cartTotal");

function addToCart(id, qty){
  const existing = cart.find(i => i.id === id);
  if(existing){ existing.qty += qty; }
  else { cart.push({ id, qty }); }
  renderCart();
}

function changeQty(id, delta){
  const item = cart.find(i => i.id === id);
  if(!item) return;
  item.qty += delta;
  if(item.qty <= 0){ cart = cart.filter(i => i.id !== id); }
  renderCart();
}

function removeFromCart(id){
  cart = cart.filter(i => i.id !== id);
  renderCart();
}

function renderCart(){
  const totalItems = cart.reduce((sum, i) => sum + i.qty, 0);
  cartCountEl.textContent = totalItems;

  if(cart.length === 0){
    cartItemsEl.innerHTML = `<p class="cart-empty">Tu carrito está vacío todavía.</p>`;
    cartTotalEl.textContent = "$0.00";
    return;
  }

  let total = 0;
  cartItemsEl.innerHTML = cart.map(item => {
    const p = products.find(x => x.id === item.id);
    const subtotal = p.price * item.qty;
    total += subtotal;
    return `
      <div class="cart-item">
        <div class="mini-thumb">${p.img}</div>
        <div class="cart-item-info">
          <h5>${p.title}</h5>
          <div class="qty-row">
            <button data-action="minus" data-id="${p.id}">−</button>
            <span>${item.qty}</span>
            <button data-action="plus" data-id="${p.id}">+</button>
            <span>· $${subtotal.toFixed(2)}</span>
          </div>
          <button class="cart-item-remove" data-action="remove" data-id="${p.id}">Quitar</button>
        </div>
      </div>
    `;
  }).join("");
  cartTotalEl.textContent = `$${total.toFixed(2)}`;
}

cartItemsEl.addEventListener("click", (e) => {
  const btn = e.target.closest("button[data-action]");
  if(!btn) return;
  const id = parseInt(btn.dataset.id);
  const action = btn.dataset.action;
  if(action === "plus") changeQty(id, 1);
  if(action === "minus") changeQty(id, -1);
  if(action === "remove") removeFromCart(id);
});

function openCart(){ cartDrawer.classList.add("open"); cartOverlay.classList.add("open"); }
function closeCart(){ cartDrawer.classList.remove("open"); cartOverlay.classList.remove("open"); }
document.getElementById("cartToggle").addEventListener("click", openCart);
document.getElementById("cartClose").addEventListener("click", closeCart);
cartOverlay.addEventListener("click", closeCart);

document.getElementById("checkoutBtn").addEventListener("click", () => {
  if(cart.length === 0){ showToast("Tu carrito está vacío"); return; }
  showToast("¡Gracias por tu compra! Te contactaremos pronto 🌸");
  cart = [];
  renderCart();
  closeCart();
});

// ---- Menú móvil ----
const hamburger = document.getElementById("hamburger");
const mainNav = document.getElementById("mainNav");
hamburger.addEventListener("click", () => mainNav.classList.toggle("open"));
mainNav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => mainNav.classList.remove("open")));

// ---- Toast ----
let toastTimer;
function showToast(msg){
  const toast = document.getElementById("toast");
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
}

// ---- Newsletter (demo) ----
document.getElementById("newsletterForm").addEventListener("submit", (e) => {
  e.preventDefault();
  showToast("¡Gracias por suscribirte! 🌸");
  e.target.reset();
});

// ---- Init ----
renderProducts();
renderCart();
