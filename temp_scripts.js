

tailwind.config={darkMode:"class",theme:{extend:{colors:{"secondary-fixed-dim":"#00aaff","surface-container-highest":"#141414","surface":"#0a0a0a","error-container":"#93000a","on-tertiary-fixed":"#111111","outline-variant":"#414755","on-secondary":"#00aaff","surface-container":"#111111","primary-fixed-dim":"#00aaff","secondary":"#00aaff","surface-dim":"#0a0a0a","on-tertiary-container":"#292836","secondary-container":"#00aaff","on-error":"#690005","on-surface-variant":"#a0a0a0","tertiary":"#c7c4d6","surface-container-high":"#111111","on-background":"#ffffff","inverse-surface":"#ffffff","on-surface":"#ffffff","surface-container-low":"#111111","surface-tint":"#00aaff","error":"#ffb4ab","primary":"#00aaff","inverse-primary":"#0077cc","on-primary":"#ffffff","primary-container":"#00aaff","on-primary-container":"#ffffff","on-error-container":"#ffdad6","secondary-fixed":"#00aaff","on-secondary-container":"#00aaff","primary-fixed":"#d8e2ff","surface-bright":"#383846","on-tertiary":"#2f2f3d","surface-variant":"#141414","outline":"#8b90a0","tertiary-container":"#918fa0","surface-container-lowest":"#000000","background":"#0a0a0a","tertiary-fixed":"#ffffff"},borderRadius:{DEFAULT:"0.25rem",lg:"0.5rem",xl:"0.75rem",full:"9999px"},fontFamily:{headline:["Manrope"],body:["Inter"],label:["Inter"]}}}}


// ===== PRODUCTS DATA =====
const products = [
  {name:"iPhone 15 Pro Max",brand:"Apple",price:"14,999 MAD",cat:"smartphone",desc:"Titanium naturel, puce A17 Pro ultra-puissante. Le smartphone le plus avancé d'Apple avec un système de caméra Pro révolutionnaire et un écran Super Retina XDR toujours actif.",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-naturaltitanium?wid=800&hei=800&fmt=jpeg&qlt=90",badge:"NOUVEAU",badgeColor:"primary",rating:4.8,reviews:234,specs:{Écran:'6.7" Super Retina XDR',Processeur:'A17 Pro',RAM:'8GB',Stockage:'256GB',Batterie:'4422 mAh','Couleurs disponibles':'Titane Noir, Titane Blanc, Titane Bleu'}},
  {name:"Samsung Galaxy S24 Ultra",brand:"Samsung",price:"12,499 MAD",cat:"smartphone",desc:"Zoom 100x et Galaxy AI intégré. L'appareil photo le plus intelligent with a S Pen intégré et un écran Dynamic AMOLED 2X spectaculaire.",img:"assets/products/s24-ultra.png",badge:"PREMIUM",badgeColor:"secondary",rating:4.7,reviews:189,specs:{Écran:'6.8" Dynamic AMOLED',Processeur:'Snapdragon 8 Gen 3',RAM:'12GB',Stockage:'256GB',Batterie:'5000 mAh','Couleurs disponibles':'Noir, Gris, Bleu'}},
  {name:"iPhone 14",brand:"Apple",price:"8,999 MAD",cat:"smartphone",desc:"Une autonomie record et un écran Retina spectaculaire. Détection des accidents, mode Action pour des vidéos ultra-stables et la puce A15 Bionic ultra-rapide.",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-finish-select-202209-6-1inch-midnight?wid=800&hei=800&fmt=jpeg&qlt=90",badge:"",badgeColor:"",rating:4.5,reviews:312,specs:{Écran:'6.1" Super Retina XDR',Processeur:'A15 Bionic',RAM:'6GB',Stockage:'128GB',Batterie:'3279 mAh','Couleurs disponibles':'Midnight, Starlight, Rouge'}},
  {name:"Xiaomi 14 Pro",brand:"Xiaomi",price:"6,999 MAD",cat:"smartphone",desc:"Performance Leica et design premium. Double caméra co-développée avec Leica pour des photos d'une quality exceptionnelle, écran AMOLED LTPO 120Hz.",img:"https://m.media-amazon.com/images/I/71YmO4V6-AL._AC_SL1500_.jpg",badge:"",badgeColor:"",rating:4.6,reviews:156,specs:{Écran:'6.73" AMOLED 120Hz',Processeur:'Snapdragon 8 Gen 3',RAM:'12GB',Stockage:'256GB',Batterie:'4880 mAh','Couleurs disponibles':'Noir, Blanc, Vert'}},
  {name:"Samsung A55",brand:"Samsung",price:"3,999 MAD",cat:"smartphone",desc:"Le meilleur rapport qualité-prix Samsung. Écran Super AMOLED immersif, résistance à l'eau IP67 et processeur Exynos 1480 fluide.",img:"https://images.samsung.com/is/image/samsung/p6pim/levant/sm-a556bzkamea/gallery/levant-galaxy-a55-5g-sm-a556-sm-a556bzkamea-thumb-540191834?$344_344_PNG$",badge:"HOT",badgeColor:"error",rating:4.3,reviews:278,specs:{Écran:'6.6" Super AMOLED',Processeur:'Exynos 1480',RAM:'8GB',Stockage:'128GB',Batterie:'5000 mAh','Couleurs disponibles':'Bleu, Noir, Lilas'}},
  {name:"MacBook Pro M3",brand:"Apple",price:"18,999 MAD",cat:"laptop",desc:"L'ordinateur portable le plus puissant pour créateurs. Puce M3 Pro avec Neural Engine 16 cœurs, écran Liquid Retina XDR et autonomie record de 22 heures.",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp14-spacegray-select-202310?wid=800&hei=800&fmt=jpeg&qlt=90",badge:"NOUVEAU",badgeColor:"primary",rating:4.9,reviews:145,specs:{Écran:'14.2" Liquid Retina XDR',Processeur:'Apple M3 Pro',RAM:'18GB',Stockage:'512GB SSD',Batterie:'22 heures','Couleurs disponibles':'Argent, Gris Sidéral'}},
  {name:"Dell XPS 15",brand:"Dell",price:"14,499 MAD",cat:"laptop",desc:"Écran OLED InfinityEdge, puissance Intel i7. Design ultra-fin avec un écran 3.5K tactile et un clavier rétroéclairé premium.",img:"https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-15-9530/media-gallery/black/xps-15-9530-t-black-8.psd?fmt=png-alpha&wid=1000&hei=1000",badge:"",badgeColor:"",rating:4.4,reviews:98,specs:{Écran:'15.6" OLED 3.5K',Processeur:'Intel Core i7-13700H',RAM:'16GB',Stockage:'512GB SSD',Batterie:'13 heures','Couleurs disponibles':'Platine, Graphite'}},
  {name:"HP Pavilion Gaming",brand:"HP",price:"8,999 MAD",cat:"laptop",desc:"RTX 3050, parfait pour gaming et création. Écran 144Hz ultra-fluide, clavier rétroéclairé et système de refroidissement avancé.",img:"https://h20386.www2.hp.com/CanadaStore/Html/Merch/Images/c08139556_1750x1285.jpg",badge:"",badgeColor:"",rating:4.2,reviews:167,specs:{Écran:'15.6" FHD 144Hz',Processeur:'Intel Core i5-12500H',RAM:'16GB',Stockage:'512GB SSD',GPU:'RTX 3050','Couleurs disponibles':'Mica Silver'}},
  {name:"Lenovo IdeaPad",brand:"Lenovo",price:"5,499 MAD",cat:"laptop",desc:"Fin, léger et incroyablement polyvalent. Idéal pour le travail et les études avec son autonomie de 10 heures et son écran Full HD anti-reflets.",img:"https://p1-ofp.static.pub/medias/lenovo-laptop-ideapad-5-pro-gen-7-14-amd-hero.6601666e85570081.png",badge:"",badgeColor:"",rating:4.1,reviews:203,specs:{Écran:'15.6" FHD',Processeur:'AMD Ryzen 5 7520U',RAM:'8GB',Stockage:'512GB SSD',Batterie:'10 heures','Couleurs disponibles':'Gris, Bleu Abysse'}}
];

let currentCategory = 'all';
// ===== STATE MANAGEMENT =====
let currentUser = JSON.parse(localStorage.getItem('phonedrshop_user')) || null;
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
let orders = JSON.parse(localStorage.getItem('orders')) || [];
let cart = JSON.parse(localStorage.getItem('cart')) || []; // Load cart from storage

function saveState() {
  localStorage.setItem('phonedrshop_user', JSON.stringify(currentUser));
  localStorage.setItem('favorites', JSON.stringify(favorites));
  localStorage.setItem('orders', JSON.stringify(orders));
  localStorage.setItem('cart', JSON.stringify(cart));
}

// ===== TOAST NOTIFICATIONS =====
function showToast(message, type = 'success', duration = 3000) {
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  
  if (type === 'custom-success') {
    toast.style.backgroundColor = '#111111';
    toast.style.borderColor = '#00aaff';
    toast.style.color = '#ffffff';
    toast.innerHTML = message;
  } else {
    const icon = type === 'success' ? 'check_circle' : 'info';
    toast.innerHTML = `<span class="material-symbols-outlined text-[20px]">${icon}</span> ${message}`;
  }
  
  container.appendChild(toast);
  
  setTimeout(() => {
    toast.classList.add('hide');
    setTimeout(() => {
      if (toast.parentNode === container) container.removeChild(toast);
    }, 300);
  }, duration);
}

// ===== PROFILE & AUTH =====
function toggleProfileDropdown() {
  const dropdown = document.getElementById('profileDropdown');
  dropdown.classList.toggle('show');
  renderProfileDropdown();
}
function renderProfileDropdown() {
  const dropdown = document.getElementById('profileDropdown');
  if(!currentUser) {
    dropdown.innerHTML = `
      <div class="dropdown-item" onclick="openAuth('login')">🔑 Se connecter</div>
      <div class="dropdown-item" onclick="openAuth('register')">✨ S'inscrire</div>
    `;
  } else {
    dropdown.innerHTML = `
      <a href="#/" class="dropdown-item" onclick="document.getElementById('profileDropdown').classList.remove('show')" style="text-decoration:none; display:block;">👤 Mon Profil</a>
      <a href="#/orders" class="dropdown-item" onclick="document.getElementById('profileDropdown').classList.remove('show')" style="text-decoration:none; display:block;">📦 Mes Commandes</a>
      <div class="dropdown-item" onclick="logout()">🚪 Se déconnecter</div>
    `;
  }
}

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
  const dropdown = document.getElementById('profileDropdown');
  const profileBtn = document.getElementById('profileBtn');
  if (dropdown.classList.contains('show') && !dropdown.contains(e.target) && !profileBtn.contains(e.target)) {
    dropdown.classList.remove('show');
  }
});

let authMode = 'login';
function openAuth(mode) {
  document.getElementById('profileDropdown').classList.remove('show');
  authMode = mode;
  updateAuthUI();
  document.getElementById('authModal').classList.add('show');
}
function closeAuth() {
  document.getElementById('authModal').classList.remove('show');
  document.getElementById('authForm').reset();
}
function toggleAuthMode() {
  authMode = authMode === 'login' ? 'register' : 'login';
  updateAuthUI();
}
function updateAuthUI() {
  const title = document.getElementById('authTitle');
  const submitBtn = document.getElementById('authSubmitBtn');
  const switchText = document.getElementById('authSwitchText');
  const switchBtn = document.getElementById('authSwitchBtn');
  const regFieldsName = document.getElementById('registerFieldsName');
  const regFieldsConfirm = document.getElementById('registerFieldsConfirm');
  
  if(authMode === 'login') {
    title.textContent = 'Se connecter';
    submitBtn.textContent = 'Se connecter';
    switchText.textContent = 'Pas encore de compte ?';
    switchBtn.textContent = 'S\'inscrire';
    regFieldsName.classList.add('hidden');
    if (regFieldsConfirm) regFieldsConfirm.classList.add('hidden');
    document.getElementById('authName').removeAttribute('required');
    if (document.getElementById('authConfirmPassword')) document.getElementById('authConfirmPassword').removeAttribute('required');
  } else {
    title.textContent = 'Créer un compte';
    submitBtn.textContent = 'Créer mon compte';
    switchText.textContent = 'Déjà un compte ?';
    switchBtn.textContent = 'Se connecter';
    regFieldsName.classList.remove('hidden');
    if (regFieldsConfirm) regFieldsConfirm.classList.remove('hidden');
    document.getElementById('authName').setAttribute('required', 'true');
    if (document.getElementById('authConfirmPassword')) document.getElementById('authConfirmPassword').setAttribute('required', 'true');
  }
}
function togglePasswordVisibility(id) {
  const input = document.getElementById(id);
  input.type = input.type === 'password' ? 'text' : 'password';
}
function handleAuthSubmit(e) {
  e.preventDefault();
  const email = document.getElementById('authEmail').value;
  
  if(authMode === 'register') {
    const pwd = document.getElementById('authPassword').value;
    const pwdConfirm = document.getElementById('authConfirmPassword').value;
    if (pwd !== pwdConfirm) {
      showToast('Les mots de passe ne correspondent pas', 'error');
      return;
    }
    const name = document.getElementById('authName').value;
    currentUser = { name, email };
    showToast('Compte créé avec succès !', 'success');
  } else {
    currentUser = { name: email.split('@')[0], email };
    showToast('Connexion réussie !', 'success');
  }
  saveState();
  closeAuth();
  renderProfileDropdown();
}
function logout() {
  currentUser = null;
  saveState();
  showToast('Déconnexion réussie', 'info');
  const dropdown = document.getElementById('profileDropdown');
  dropdown.classList.remove('show');
  renderProfileDropdown();
  const ordersPage = document.getElementById('page-orders');
  const favoritesPage = document.getElementById('page-favorites');
  if ((ordersPage && ordersPage.classList.contains('active')) || (favoritesPage && favoritesPage.classList.contains('active'))) {
    navigateTo('accueil');
  }
}

// ===== FAVORITES & ORDERS =====
function toggleFavorite(e, productName) {
  e.stopPropagation();
  if(!currentUser) {
    showToast("Veuillez vous connecter pour ajouter aux favoris", "info");
    openAuth('login');
    return;
  }
  const idx = favorites.indexOf(productName);
  if(idx === -1) {
    favorites.push(productName);
    e.currentTarget.classList.add('is-favorite');
    showToast("Ajouté aux favoris", "success");
  } else {
    favorites.splice(idx, 1);
    e.currentTarget.classList.remove('is-favorite');
    showToast("Retiré des favoris", "info");
  }
  saveState();
  if(document.getElementById('page-favorites').classList.contains('active')) {
    renderFavoritesPage();
  }
}

function renderFavoritesPage() {
  const grid = document.getElementById('favoritesGrid');
  if(!currentUser) {
      grid.innerHTML = `<div class="col-span-full text-center py-20 text-on-surface-variant">Veuillez vous <button onclick="openAuth('login')" class="text-primary font-bold hover:underline">connecter</button> pour voir vos favoris.</div>`;
      return;
  }
  const favProducts = products.filter(p => favorites.includes(p.name));
  if(favProducts.length === 0) {
    grid.innerHTML = `<div class="col-span-full text-center py-20 text-on-surface-variant flex flex-col items-center gap-4"><span class="material-symbols-outlined text-6xl opacity-50">favorite_border</span><p>Vous n'avez pas encore de favoris.</p><a href="#/boutique" class="mt-2 px-6 py-3 bg-primary/10 text-primary rounded-xl font-bold hover:bg-primary/20 transition inline-flex justify-center items-center" style="text-decoration:none;">Explorer la Boutique</a></div>`;
    return;
  }
  
  grid.innerHTML = favProducts.map((p, i) => {
    const idx = products.indexOf(p);
    return `
    <div class="levitation-card glass-card rounded-[2rem] p-6 transition-all duration-500 flex flex-col group h-full relative">
      <div class="favorite-btn is-favorite" onclick="toggleFavorite(event, '${p.name.replace(/'/g, "\\'")}')">
        <span class="material-symbols-outlined">favorite</span>
      </div>
      <div class="relative w-full aspect-square mb-8 image-glow overflow-hidden rounded-2xl bg-surface-container-lowest">
        <img class="w-full h-full object-contain bg-[#0a0a0a] p-5 rounded-xl" alt="${p.name}" src="${p.img}" onerror="this.src='https://via.placeholder.com/400x400/111111/00aaff?text=PhoneDr'"/>
      </div>
      <div class="flex-1">
        <h3 class="text-2xl font-headline font-bold mb-1 group-hover:text-primary transition-colors">${p.name}</h3>
        <div class="mb-4"><span class="text-2xl font-headline font-extrabold text-on-surface">${p.price}</span></div>
      </div>
      <button onclick="openModal(${idx})" class="w-full py-4 rounded-2xl bg-gradient-to-r from-primary to-primary-container text-on-primary font-bold hover:shadow-[0_0_20px_rgba(0,170,255,0.3)] transition-all">Détails</button>
    </div>`;
  }).join('');
}

function renderOrdersPage() {
  const container = document.getElementById('ordersContainer');
  if(!currentUser) {
      container.innerHTML = `<div class="text-center py-20 text-on-surface-variant">Veuillez vous <button onclick="openAuth('login')" class="text-primary font-bold hover:underline">connecter</button> pour voir vos commandes.</div>`;
      return;
  }
  if(orders.length === 0) {
    container.innerHTML = `<div class="text-center py-20 text-on-surface-variant flex flex-col items-center gap-4"><span class="material-symbols-outlined text-6xl opacity-50">receipt_long</span><p>Vous n'avez passé aucune commande.</p></div>`;
    return;
  }
  
  container.innerHTML = orders.map(ord => `
    <div class="glass-card rounded-2xl p-6 border border-white/5 flex flex-col md:flex-row justify-between md:items-center gap-6">
      <div>
        <div class="flex items-center gap-3 mb-2">
          <h3 class="font-bold text-xl">${ord.id}</h3>
          <span class="px-3 py-1 bg-secondary/10 text-secondary text-xs font-bold rounded-full border border-secondary/20">${ord.status}</span>
        </div>
        <p class="text-sm text-slate-400 mb-4">Commandé le ${ord.date}</p>
        <div class="text-sm text-slate-300">
          ${ord.items.join('<br/>')}
        </div>
      </div>
      <div class="md:text-right">
        <p class="text-sm text-slate-400 mb-1">Total</p>
        <p class="font-headline font-black text-2xl text-on-surface">${ord.total.toLocaleString('fr-FR')} MAD</p>
      </div>
    </div>
  `).join('');
}

function updatePriceLabel(val) {
  const label = document.getElementById('boutiquePriceLabel');
  if(label) label.textContent = new Intl.NumberFormat('fr-FR').format(val) + ' MAD';
}

function resetBoutiqueFilters() {
  const inputCatAll = document.querySelector('input[name="boutiqueCat"][value="all"]');
  if (inputCatAll) inputCatAll.checked = true;
  document.querySelectorAll('#boutiqueBrandFilters input[type="checkbox"]').forEach(c => c.checked = false);
  const pFilter = document.getElementById('boutiquePriceFilter');
  if(pFilter) {
    pFilter.value = 25000;
    document.getElementById('boutiquePriceLabel').textContent = '25 000 MAD';
  }
  runBoutiqueFilters();
}

function runBoutiqueFilters() {
  renderProducts();
}

function filterAccessoires(cat) {
  const cards = document.querySelectorAll('.acc-card');
  cards.forEach(card => {
    if (cat === 'all' || card.dataset.category === cat) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
  
  // Highlight active radio
  document.querySelectorAll('input[name="accCat"]').forEach(radio => {
    const box = radio.nextElementSibling;
    const check = box.querySelector('div');
    if (radio.value === cat) {
      radio.checked = true;
      box.className = 'acc-radio-box w-5 h-5 rounded-md border border-[#00aaff] flex items-center justify-center bg-black transition-colors';
      check.className = 'w-2.5 h-2.5 bg-[#00aaff] rounded-sm block';
      box.nextElementSibling.className = 'text-sm font-medium text-white';
    } else {
      box.className = 'acc-radio-box w-5 h-5 rounded-md border border-[#1e1e1e] flex items-center justify-center bg-transparent group-hover:border-[#00aaff] transition-colors';
      check.className = 'w-2.5 h-2.5 bg-[#00aaff] rounded-sm hidden';
      box.nextElementSibling.className = 'text-sm font-medium text-slate-400 group-hover:text-white transition-colors';
    }
  });

  // Highlight active mobile pill
  document.querySelectorAll('.mobile-acc-btn').forEach(btn => {
    if (btn.dataset.cat === cat) {
      btn.className = 'mobile-acc-btn whitespace-nowrap px-5 py-2 rounded-full bg-[#00aaff] text-white text-sm font-bold transition-colors border border-transparent';
    } else {
      btn.className = 'mobile-acc-btn whitespace-nowrap px-5 py-2 rounded-full bg-[#111114] border border-[#333] text-gray-400 text-sm font-medium transition-colors';
    }
  });
}

function renderProducts() {
  const grid = document.getElementById('productGrid');
  if (!grid) return;
  const catFilter = document.querySelector('input[name="boutiqueCat"]:checked')?.value || 'all';
  const brandCheckboxes = Array.from(document.querySelectorAll('#boutiqueBrandFilters input[type="checkbox"]:checked')).map(cb => cb.value);
  const maxPrice = parseInt(document.getElementById('boutiquePriceFilter')?.value || '25000', 10);

  const filtered=products.filter(p=>{
    if(catFilter !== 'all' && p.cat !== catFilter) return false;
    if(brandCheckboxes.length > 0 && !brandCheckboxes.includes(p.brand)) return false;
    const pPriceNum = parseInt(p.price.replace(/[^\d]/g, ''), 10);
    if(pPriceNum > maxPrice) return false;
    return true;
  });

  grid.innerHTML=filtered.map((p,i)=>{
    const idx=products.indexOf(p);
    const isFav = favorites.includes(p.name);
    return `
    <div class="levitation-card glass-card rounded-[2rem] p-6 transition-all duration-500 flex flex-col group h-full relative" data-brand="${p.brand.toLowerCase()}" data-category="${p.cat.toLowerCase()}" data-price="${parseInt(p.price.replace(/[^\d]/g, ''), 10)}">
      <div class="favorite-btn ${isFav ? 'is-favorite' : ''}" onclick="toggleFavorite(event, '${p.name.replace(/'/g, "\\'")}')">
        <span class="material-symbols-outlined">favorite</span>
      </div>
      <div class="relative w-full aspect-square mb-8 image-glow overflow-hidden rounded-2xl bg-surface-container-lowest">
        <img class="w-full h-full object-contain bg-[#0a0a0a] p-5 rounded-xl transition-transform duration-700" alt="${p.name}" src="${p.img}" onerror="this.src='https://via.placeholder.com/400x400/111111/00aaff?text=PhoneDr'"/>
        ${p.badge?`<div class="absolute top-4 left-4"><span class="bg-${p.badgeColor}/20 text-${p.badgeColor} text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full backdrop-blur-md border border-${p.badgeColor}/20">${p.badge}</span></div>`:''}
      </div>
      <div class="flex-1">
        <div class="mobile-brand hidden">${p.brand}</div>
        <h3 class="text-2xl font-headline font-bold mb-1 group-hover:text-primary transition-colors">${p.name}</h3>
        <p class="text-on-surface-variant text-sm mb-6 line-clamp-2">${p.desc}</p>
        <div class="mb-8"><span class="text-3xl font-headline font-extrabold text-on-surface">${p.price}</span></div>
      </div>
      <div class="flex gap-3 mt-auto">
        <button onclick="addToCart(${idx})" class="flex-1 py-4 rounded-2xl border border-primary/30 text-primary font-bold hover:bg-primary/10 transition-all text-sm">Ajouter</button>
        <button onclick="openModal(${idx})" class="flex-1 py-4 rounded-2xl bg-gradient-to-r from-primary to-primary-container text-on-primary font-bold transition-all hover:shadow-[0_0_20px_rgba(0,170,255,0.3)] text-sm">Détails</button>
      </div>
    </div>`;
  }).join('');
}

function filterProducts(cat){
  const catRadio = document.querySelector(`input[name="boutiqueCat"][value="${cat}"]`);
  if(catRadio) catRadio.checked = true;
  runBoutiqueFilters();

  if (event && event.currentTarget && event.currentTarget.classList.contains('filter-btn')) {
    document.querySelectorAll('.filter-btn').forEach(b=>{
      b.className=b.className.replace(/liquid-glass/g,'bg-surface-container-low');
      b.querySelector('span:first-child').className='font-semibold text-on-surface-variant group-hover:text-on-surface';
    });
    event.currentTarget.className=event.currentTarget.className.replace(/bg-surface-container-low/g,'liquid-glass');
    event.currentTarget.querySelector('span:first-child').className='font-semibold text-primary';
  }
}

// ===== SPA NAVIGATION (Hash-based for Localhost/SPA Compatibility) =====
function navigateTo(page) {
  if (window.location.hash === '#' + page) {
    handleRouting();
  } else {
    window.location.hash = page;
  }
}

function updatePageUI(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const pageElem = document.getElementById('page-' + page);
  if (pageElem) pageElem.classList.add('active');
  
  // Desktop nav
  document.querySelectorAll('.nav-link[data-page]').forEach(l => {
    l.classList.remove('active-link');
    l.classList.add('text-slate-300');
  });
  // Update all matching links (desktop and mobile)
  document.querySelectorAll(`.nav-link[data-page="${page}"]`).forEach(link => {
    link.classList.add('active-link');
    link.classList.remove('text-slate-300', 'text-slate-200');
  });
  
  // Mobile nav
  document.querySelectorAll('.mobile-nav-btn').forEach(b => {
    b.classList.remove('active-mobile');
    b.classList.add('text-slate-500');
  });
  const mobileBtn = document.querySelector(`.mobile-nav-btn[data-page="${page}"]`);
  if (mobileBtn) {
    mobileBtn.classList.add('active-mobile');
    mobileBtn.classList.remove('text-slate-500');
  }
  
  // Close mobile menu
  const mobileMenu = document.getElementById('mobileMenu');
  const hamburger = document.getElementById('hamburger');
  if (mobileMenu) mobileMenu.classList.remove('show');
  if (hamburger) hamburger.classList.remove('open');
  
  // Scroll top
  window.scrollTo({ top: 0, behavior: 'smooth' });
  
  // Render sub-pages
  if (page === 'boutique') renderProducts();
  if (page === 'promotions') renderPromos();
  if (page === 'favorites') renderFavoritesPage();
  if (page === 'orders') renderOrdersPage();
  if (page === 'accessoires') if (typeof filterAccessoires === 'function') filterAccessoires('all');
}

function toggleMobileMenu(){
  document.getElementById('mobileMenu').classList.toggle('show');
  document.getElementById('hamburger').classList.toggle('open');
}

// ===== COUNTDOWN TIMER (3 days) =====
const countdownEnd=new Date().getTime()+3*24*60*60*1000;
function updateCountdown(){
  const now=new Date().getTime();
  const diff=countdownEnd-now;
  if(diff<=0)return;
  const d=Math.floor(diff/(1000*60*60*24));
  const h=Math.floor((diff%(1000*60*60*24))/(1000*60*60));
  const m=Math.floor((diff%(1000*60*60))/(1000*60));
  const s=Math.floor((diff%(1000*60))/1000);
  document.getElementById('countdown-days').textContent=String(d).padStart(2,'0');
  document.getElementById('countdown-hours').textContent=String(h).padStart(2,'0');
  document.getElementById('countdown-mins').textContent=String(m).padStart(2,'0');
  document.getElementById('countdown-secs').textContent=String(s).padStart(2,'0');
}
setInterval(updateCountdown,1000);
updateCountdown();

// ===== CONTACT FORM =====
function handleContactForm(e){
  e.preventDefault();
  const name=document.getElementById('contactName').value;
  const phone=document.getElementById('contactPhone').value;
  const msg=document.getElementById('contactMessage').value;
  const waMsg=`Bonjour, je suis ${name} (${phone}). ${msg}`;
  window.open(`https://wa.me/212775382765?text=${encodeURIComponent(waMsg)}`,'_blank');
  document.getElementById('formSuccess').classList.remove('hidden');
  document.getElementById('contactForm').reset();
  setTimeout(()=>document.getElementById('formSuccess').classList.add('hidden'),4000);
}

// ===== PROMO PRODUCTS DATA =====
const promos = [
  {name:"iPhone 14",spec:"128GB • Midnight",old:"8,999 MAD",price:"7,199 MAD",disc:"-20%",rot:"rotate-[-12deg]",img:products[2].img},
  {name:"Samsung Galaxy S24 Ultra",spec:"256GB • Titanium Gray",old:"12,499 MAD",price:"9,999 MAD",disc:"-20%",rot:"rotate-[8deg]",img:products[1].img},
  {name:"MacBook Pro M3",spec:"16\" • 512GB SSD • M3 Pro",old:"18,999 MAD",price:"15,999 MAD",disc:"-16%",rot:"rotate-[-6deg]",img:products[5].img},
  {name:"Xiaomi 14 Pro",spec:"256GB • Leica Optics",old:"6,999 MAD",price:"5,599 MAD",disc:"-20%",rot:"rotate-[10deg]",img:products[3].img},
  {name:"HP Pavilion Gaming",spec:"RTX 3050 • 512GB SSD",old:"8,999 MAD",price:"7,649 MAD",disc:"-15%",rot:"",img:products[7].img}
];
function renderPromos(){
  const g=document.getElementById('promoGrid');if(!g)return;
  const gradients=['from-primary to-secondary','from-secondary to-primary','from-primary/50 to-secondary/50','from-secondary/50 to-primary/50','from-primary to-primary-container'];
  const priceColors=['text-primary','text-secondary','text-primary','text-secondary','text-primary'];
  g.innerHTML=promos.map((p,i)=>{
    const isFav = favorites.includes(p.name);
    return `
  <div class="relative group">
    <div class="absolute -inset-1 bg-gradient-to-r ${gradients[i]} rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
    <div class="relative liquid-glass promo-card rounded-3xl overflow-hidden p-6 h-full flex flex-col border border-white/10 hover:translate-y-[-8px] transition-all duration-500">
      <div class="favorite-btn ${isFav ? 'is-favorite' : ''}" onclick="toggleFavorite(event, '${p.name.replace(/'/g, "\\'")}')">
        <span class="material-symbols-outlined">favorite</span>
      </div>
      <div class="absolute top-6 left-6 z-20 px-4 py-2 bg-error text-on-error font-black rounded-lg shadow-[0_0_20px_rgba(255,180,171,0.5)] ${p.rot} pulse-badge">${p.disc}</div>
      <div class="aspect-square w-full mb-8 overflow-hidden rounded-2xl bg-surface-container-lowest flex items-center justify-center">
        <img alt="${p.name}" class="w-full h-full object-contain bg-[#0a0a0a] p-5 rounded-xl group-hover:scale-110 transition-transform duration-700" src="${p.img}" onerror="this.src='https://via.placeholder.com/400x400/111111/00aaff?text=PhoneDr'"/>
      </div>
      <div class="mt-auto">
        <div class="flex justify-between items-end mb-4">
          <div><h3 class="font-headline text-xl font-bold mb-1 uppercase tracking-tight">${p.name}</h3><p class="text-on-surface-variant text-sm">${p.spec}</p></div>
          <div class="text-right"><p class="text-on-surface-variant text-sm line-through opacity-50">${p.old}</p><p class="font-headline text-2xl font-black ${priceColors[i]}">${p.price}</p></div>
        </div>
        <div class="flex flex-col w-full gap-3 mt-1">
          <a href="https://wa.me/212775382765?text=Bonjour, je suis intéressé par ${encodeURIComponent(p.name)} en promo (${p.disc})" target="_blank" class="flex items-center justify-center gap-2 w-full py-4 bg-surface-container-highest hover:bg-primary hover:text-on-primary rounded-xl transition-all duration-300 font-bold"><span class="material-symbols-outlined">chat</span>Acheter via WhatsApp</a>
          <button onclick="cart.push(promos[${i}]); saveState(); updateCartBadge(); showToast('Produit ajouté au panier', 'success'); event.target.textContent='✓ Ajouté'; setTimeout(() => event.target.textContent='🛒 Ajouter au panier', 1500);" class="flex items-center justify-center gap-2 w-full py-4 bg-[#00aaff] text-white hover:opacity-90 rounded-xl transition-all duration-300 font-bold">🛒 Ajouter au panier</button>
        </div>
      </div>
    </div>
  </div>`;
  }).join('');
}

// ===== CART =====
// cart array is loaded in state management section
document.addEventListener('DOMContentLoaded', () => updateCartBadge());

function updateCartBadge(){
  const badge=document.getElementById('cartBadge');
  if(cart.length>0){badge.textContent=cart.length;badge.classList.remove('hidden')}
  else badge.classList.add('hidden');
}
function addToCart(idx){
  cart.push(products[idx]);
  saveState();
  updateCartBadge();
  showToast("Produit ajouté au panier", "info");
  const btn=event.currentTarget;btn.textContent='✓ Ajouté';btn.classList.add('bg-primary/20');
  setTimeout(()=>{btn.textContent='Ajouter';btn.classList.remove('bg-primary/20')},1500);
}
function addToCartItem(item) {
  cart.push(item);
  saveState();
  updateCartBadge();
  showToast("✅ Produit ajouté au panier!", "custom-success", 2000);
  if(event && event.currentTarget) {
    const btn=event.currentTarget;
    const oldText = btn.innerHTML;
    btn.innerHTML = '✓ Ajouté';
    setTimeout(() => btn.innerHTML = oldText, 1500);
  }
}
function toggleCart(){
  const cartSidebar = document.getElementById('cartSidebar');
  const cartOverlay = document.getElementById('cartOverlay');
  cartSidebar.classList.toggle('show');
  cartOverlay.classList.toggle('show');
  if(cartSidebar.classList.contains('show')) renderCart();
}

function renderCart() {
  const container = document.getElementById('cartItemsContainer');
  const footer = document.getElementById('cartFooter');
  
  if(cart.length === 0) {
    container.innerHTML = `
      <div class="flex flex-col items-center justify-center p-8 text-center gap-4 mt-10">
        <span class="material-symbols-outlined text-6xl text-slate-600" style="font-variation-settings: 'FILL' 0">shopping_cart</span>
        <p class="text-lg text-slate-400 font-semibold">Votre panier est vide</p>
        <a href="#/boutique" class="mt-4 px-6 py-3 bg-primary/10 text-primary rounded-xl font-bold hover:bg-primary/20 transition inline-flex justify-center items-center" style="text-decoration:none;">Voir la Boutique</a>
      </div>`;
    footer.classList.add('hidden');
    footer.classList.remove('flex');
    return;
  }
  
  const grouped = {};
  let total = 0;
  cart.forEach(item => {
    if(!grouped[item.name]) grouped[item.name] = { ...item, qty: 0 };
    grouped[item.name].qty++;
    total += parseInt(item.price.replace(/[^\d]/g, ''));
  });
  
  container.innerHTML = Object.values(grouped).map(item => `
    <div class="flex items-center gap-4 bg-surface-container-lowest p-3 rounded-2xl border border-white/5">
      <div class="w-16 h-16 rounded-xl bg-white/5 p-2 shrink-0">
        <img src="${item.img}" alt="${item.name}" class="w-full h-full object-contain" onerror="this.src='https://via.placeholder.com/400x400/111111/00aaff?text=PhoneDr'" />
      </div>
      <div class="flex-1 min-w-0">
        <h3 class="text-sm font-bold truncate text-white">${item.name}</h3>
        <p class="text-primary font-bold text-sm leading-tight">${item.price}</p>
        <div class="flex items-center gap-3 mt-2">
          <div class="flex items-center bg-surface-container-highest rounded-lg px-1">
            <button onclick="updateCartItemQty('${item.name}', -1)" class="w-7 h-7 flex items-center justify-center hover:bg-white/10 rounded-lg text-slate-300 font-bold">-</button>
            <span class="w-6 text-center text-xs font-bold">${item.qty}</span>
            <button onclick="updateCartItemQty('${item.name}', 1)" class="w-7 h-7 flex items-center justify-center hover:bg-white/10 rounded-lg text-slate-300 font-bold">+</button>
          </div>
          <button onclick="removeCartItem('${item.name}')" class="text-error/80 hover:text-error ml-auto p-1 transition-colors"><span class="material-symbols-outlined text-[18px]">delete</span></button>
        </div>
      </div>
    </div>
  `).join('');
  
  footer.classList.remove('hidden');
  footer.classList.add('flex');
  document.getElementById('cartTotal').textContent = total.toLocaleString('fr-FR') + ' MAD';
}

function updateCartItemQty(name, delta) {
  if (delta > 0) {
    const item = cart.find(p => p.name === name);
    if(item) cart.push({...item});
  } else {
    const i = cart.findIndex(p => p.name === name);
    if(i !== -1) cart.splice(i, 1);
  }
  saveState();
  updateCartBadge();
  renderCart();
}

function removeCartItem(name) {
  cart = cart.filter(p => p.name !== name);
  saveState();
  updateCartBadge();
  renderCart();
}

function checkoutWhatsApp() {
  const grouped = {};
  let total = 0;
  cart.forEach(item => {
    if(!grouped[item.name]) grouped[item.name] = { ...item, qty: 0 };
    grouped[item.name].qty++;
    total += parseInt(item.price.replace(/[^\d]/g, ''));
  });
  
  let msg = "Bonjour PhoneDr Shop 👋\nJe voudrais commander:\n";
  const orderItems = [];
  Object.values(grouped).forEach(item => {
    msg += `- ${item.name} x${item.qty} → ${item.price}\n`;
    orderItems.push(`- ${item.name} x${item.qty}`);
  });
  msg += `\nTOTAL: ${total.toLocaleString('fr-FR')} MAD\nMerci!`;
  
  if (currentUser) {
    const newOrder = {
      id: 'ORD-' + Math.floor(Math.random()*10000),
      date: new Date().toLocaleDateString('fr-FR'),
      total: total,
      items: orderItems,
      status: 'En attente'
    };
    orders.unshift(newOrder);
    saveState();
  }
  
  window.open(`https://wa.me/212775382765?text=${encodeURIComponent(msg)}`, '_blank');
  
  cart = [];
  updateCartBadge();
  toggleCart();
  showToast('Commande validée !', 'success');
}

// ===== SEARCH BAR =====
function toggleSearch() {
  const container = document.getElementById('searchContainer');
  container.classList.toggle('show');
  if(container.classList.contains('show')) {
    setTimeout(()=>document.getElementById('searchInput').focus(),100);
    handleSearch();
  } else {
    document.getElementById('searchInput').value = '';
    document.getElementById('searchResults').classList.remove('show');
  }
}

// Close search on Escape or Outside click
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && document.getElementById('searchContainer').classList.contains('show')) {
    toggleSearch();
  }
});

document.addEventListener('click', (e) => {
  const container = document.getElementById('searchContainer');
  const searchBtn = document.querySelector('button[onclick="toggleSearch()"]');
  if (container.classList.contains('show') && !container.contains(e.target) && !searchBtn.contains(e.target)) {
    toggleSearch();
  }
});

function handleSearch() {
  const query = document.getElementById('searchInput').value.toLowerCase();
  const resultsContainer = document.getElementById('searchResults');
  
  if (!query) {
    resultsContainer.innerHTML = '';
    return;
  }
  
  const results = products.filter(p => 
    p.name.toLowerCase().includes(query) || 
    p.brand.toLowerCase().includes(query) ||
    p.cat.toLowerCase().includes(query)
  );
  
  if(results.length === 0) {
    resultsContainer.innerHTML = `<div class="p-4 text-slate-400 text-center text-xs">Aucun produit trouvé</div>`;
    resultsContainer.classList.add('show');
    return;
  }
  
  resultsContainer.classList.add('show');
  resultsContainer.innerHTML = results.map(item => {
    const idx = products.findIndex(p => p.name === item.name);
    return `
      <div class="flex items-center gap-3 p-3 cursor-pointer hover:bg-white/5 transition-colors border-b border-white/5 last:border-none" onclick="toggleSearch(); openModal(${idx})">
        <div class="w-10 h-10 rounded-lg bg-black p-1 shrink-0">
          <img src="${item.img}" alt="${item.name}" class="w-full h-full object-contain" onerror="this.src='https://via.placeholder.com/400x400/111111/00aaff?text=PhoneDr'" />
        </div>
        <div class="flex flex-col min-w-0">
          <h4 class="text-xs font-bold text-white truncate">${item.name}</h4>
          <span class="text-[10px] text-primary font-bold">${item.price}</span>
        </div>
      </div>
    `;
  }).join('');
}

// ===== PRODUCT DETAIL PAGE =====
let currentDetailIdx=-1;
let detailQty=1;
let previousPage='accueil';

function openModal(idx) {
  const p = products[idx];
  const slug = p.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
  window.location.hash = 'product/' + slug;
}

function updateProductUI(idx) {
  currentDetailIdx = idx;
  detailQty = 1;
  const p = products[idx];
  // Track which page we came from
  const activePage = document.querySelector('.page.active');
  if (activePage && activePage.id !== 'page-product') previousPage = activePage.id.replace('page-', '');
  
  // Show product page
  document.querySelectorAll('.page').forEach(pg => pg.classList.remove('active'));
  document.getElementById('page-product').classList.add('active');
  // Populate
  document.getElementById('detailMainImg').src=p.img;
  document.getElementById('detailMainImg').onerror = function() { this.src='https://via.placeholder.com/400x400/111111/00aaff?text=PhoneDr'; };
  document.getElementById('detailMainImg').alt=p.name;
  document.getElementById('detailBrand').textContent=p.brand;
  document.getElementById('detailName').textContent=p.name;
  document.getElementById('detailPrice').textContent=p.price;
  document.getElementById('detailDesc').textContent=p.desc;
  document.getElementById('detailQty').textContent='1';
  // Specs
  document.getElementById('detailSpecs').innerHTML=Object.entries(p.specs).map(([k,v])=>
    `<div class="spec-row"><span class="text-on-surface-variant text-sm">${k}</span><span class="text-on-surface font-semibold text-sm">${v}</span></div>`
  ).join('');
  // Thumbnails (3 views using same image with different transforms)
  const thumbStyles=['','brightness(1.1) saturate(1.2)','brightness(0.9) contrast(1.1)'];
  const thumbLabels=['Vue principale','Vue de côté','Vue arrière'];
  document.getElementById('detailThumbs').innerHTML=thumbStyles.map((s,i)=>
    `<button onclick="setDetailThumb(${i})" class="thumb-btn rounded-xl bg-surface-container-lowest aspect-square overflow-hidden ${i===0?'active-thumb':''}">
      <img src="${p.img}" alt="${thumbLabels[i]}" class="w-full h-full object-contain p-3 transition-transform duration-300" style="filter:${s};${i===1?'transform:scaleX(-1)':''}${i===2?'transform:scale(0.85)':''}"/>
    </button>`
  ).join('');
  // WhatsApp link
  document.getElementById('detailWhatsApp').href=`https://wa.me/212775382765?text=${encodeURIComponent('Bonjour, je veux commander: '+p.name+' - '+p.price)}`;
  // Scroll top
  window.scrollTo({top:0,behavior:'smooth'});
  // Hide nav highlights
  document.querySelectorAll('.nav-link[data-page]').forEach(l=>{l.classList.remove('active-link');l.classList.add('text-slate-300')});
  document.querySelectorAll('.mobile-nav-btn').forEach(b=>{b.classList.remove('active-mobile');b.classList.add('text-slate-500')});
}

function setDetailThumb(i){
  const thumbs=document.querySelectorAll('.thumb-btn');
  thumbs.forEach(t=>t.classList.remove('active-thumb'));
  thumbs[i].classList.add('active-thumb');
  const img=thumbs[i].querySelector('img');
  document.getElementById('detailMainImg').style.filter=img.style.filter;
  document.getElementById('detailMainImg').style.transform=img.style.transform;
}

function changeQty(d){
  detailQty=Math.max(1,detailQty+d);
  document.getElementById('detailQty').textContent=detailQty;
}

function addToCartDetail(){
  if(currentDetailIdx>=0){
    for(let i=0;i<detailQty;i++) cart.push(products[currentDetailIdx]);
    saveState();
    updateCartBadge();
    showToast("Produit ajouté au panier !", "success");
    const btn=event.currentTarget;
    const orig=btn.innerHTML;
    btn.innerHTML='<span class="material-symbols-outlined">check_circle</span>Ajouté au panier !';
    btn.classList.add('bg-primary/20');
    setTimeout(()=>{btn.innerHTML=orig;btn.classList.remove('bg-primary/20')},2000);
  }
}

function goBackFromProduct() {
  document.getElementById('detailMainImg').style.filter = '';
  document.getElementById('detailMainImg').style.transform = '';
  window.location.hash = previousPage;
}

// ===== ROUTING LOGIC =====
function handleRouting() {
  const hash = window.location.hash;
  let targetPage = 'accueil';
  
  if (hash) {
    let hashPath = hash.slice(1);
    if (hashPath.startsWith('/')) {
      hashPath = hashPath.slice(1);
    }
    
    if (hashPath.startsWith('product/')) {
      const slug = hashPath.split('/')[1];
      const idx = products.findIndex(p => p.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '') === slug);
      if (idx !== -1) {
        updateProductUI(idx);
        return;
      }
    }
    const validPages = ['accueil', 'boutique', 'promotions', 'accessoires', 'contact', 'favorites', 'orders'];
    if (hashPath === '') {
      targetPage = 'accueil';
    } else {
      targetPage = validPages.includes(hashPath) ? hashPath : 'accueil';
    }
  }
  
  updatePageUI(targetPage);
}

window.addEventListener('hashchange', handleRouting);
window.addEventListener('load', handleRouting);

// Keep popstate for generic back button behavior if needed
window.addEventListener('popstate', function(e) {
  if (!window.location.hash) {
    window.location.hash = '#accueil';
  }
});

// Keep old modal functions as no-ops for compatibility
function closeModal(){}
function addToCartFromModal(){}

// Init
// Initial routing is handled by 'load' listener
// products data and promo renders will be called via handleRouting -> updatePageUI


document.addEventListener('DOMContentLoaded', function() {

  // Create dropdown element
  const dropdown = document.createElement('div');
  dropdown.id = 'profile-dropdown';
  dropdown.style.cssText = `
    display: none;
    position: fixed;
    top: 72px;
    right: 24px;
    background: #0f0f13;
    border: 1px solid rgba(0,170,255,0.4);
    border-radius: 14px;
    padding: 8px;
    min-width: 210px;
    box-shadow: 0 8px 32px rgba(0,0,0,0.6);
    z-index: 99999;
    font-family: inherit;
  `;

  const user = localStorage.getItem('phonedrshop_user');

  if (!user) {
    dropdown.innerHTML = `
      <div id="btn-login" style="padding:12px 16px;cursor:pointer;border-radius:8px;color:white;font-size:14px;display:flex;align-items:center;gap:8px;" onmouseover="this.style.background='rgba(0,170,255,0.1)'" onmouseout="this.style.background='transparent'">
        🔑 Se connecter
      </div>
      <div id="btn-register" style="padding:12px 16px;cursor:pointer;border-radius:8px;color:white;font-size:14px;display:flex;align-items:center;gap:8px;" onmouseover="this.style.background='rgba(0,170,255,0.1)'" onmouseout="this.style.background='transparent'">
        ✨ S'inscrire
      </div>
    `;
  } else {
    const userData = JSON.parse(user);
    dropdown.innerHTML = `
      <div style="padding:12px 16px;color:#7bd0ff;font-size:13px;border-bottom:1px solid rgba(255,255,255,0.1);margin-bottom:4px;">
        👋 ${userData.name || 'Mon Compte'}
      </div>
      <div style="padding:12px 16px;cursor:pointer;border-radius:8px;color:white;font-size:14px;" onmouseover="this.style.background='rgba(0,170,255,0.1)'" onmouseout="this.style.background='transparent'">
        👤 Mon Profil
      </div>
      <div style="padding:12px 16px;cursor:pointer;border-radius:8px;color:white;font-size:14px;" onmouseover="this.style.background='rgba(0,170,255,0.1)'" onmouseout="this.style.background='transparent'">
        📦 Mes Commandes
      </div>
      <div id="btn-logout" style="padding:12px 16px;cursor:pointer;border-radius:8px;color:#ff6b6b;font-size:14px;" onmouseover="this.style.background='rgba(255,100,100,0.1)'" onmouseout="this.style.background='transparent'">
        🚪 Se déconnecter
      </div>
    `;
  }

  document.body.appendChild(dropdown);

  // Find profile icon and add click
  const profileIcon = document.querySelector('[href*="compte"], [data-profile], .profile-btn, button:has(.person), a:has(.person)') 
    || Array.from(document.querySelectorAll('button, a')).find(el => el.innerHTML.includes('person') || el.innerHTML.includes('account'));

  if (profileIcon) {
    profileIcon.style.cursor = 'pointer';
    profileIcon.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
    });
  }

  // Close on outside click
  document.addEventListener('click', function(e) {
    if (!dropdown.contains(e.target) && e.target !== profileIcon) {
      dropdown.style.display = 'none';
    }
  });

  // Login modal
  function showModal(type) {
    const modal = document.createElement('div');
    modal.style.cssText = `position:fixed;inset:0;background:rgba(0,0,0,0.75);z-index:999999;display:flex;align-items:center;justify-content:center;`;
    
    modal.innerHTML = type === 'login' ? `
      <div style="background:#0f0f13;border:1px solid rgba(0,170,255,0.3);border-radius:18px;padding:36px;width:380px;position:relative;">
        <button onclick="this.closest('[style*=fixed]').remove()" style="position:absolute;top:14px;right:18px;background:none;border:none;color:white;font-size:20px;cursor:pointer;">✕</button>
        <h2 style="color:white;font-size:22px;margin-bottom:24px;">🔑 Se connecter</h2>
        <input id="login-email" type="email" placeholder="Email" style="width:100%;padding:12px 16px;background:rgba(255,255,255,0.07);border:1px solid rgba(255,255,255,0.15);border-radius:10px;color:white;font-size:14px;margin-bottom:12px;box-sizing:border-box;outline:none;"/>
        <input id="login-pass" type="password" placeholder="Mot de passe" style="width:100%;padding:12px 16px;background:rgba(255,255,255,0.07);border:1px solid rgba(255,255,255,0.15);border-radius:10px;color:white;font-size:14px;margin-bottom:20px;box-sizing:border-box;outline:none;"/>
        <button onclick="
          const email=document.getElementById('login-email').value;
          if(email){localStorage.setItem('phonedrshop_user',JSON.stringify({name:email.split('@')[0],email:email}));location.reload();}
        " style="width:100%;padding:13px;background:linear-gradient(135deg,#0088ff,#00aaff);color:white;border:none;border-radius:10px;font-size:15px;font-weight:600;cursor:pointer;">Se connecter</button>
        <p style="color:#888;text-align:center;margin-top:16px;font-size:13px;">Pas encore de compte ? <span onclick="this.closest('[style*=fixed]').remove();showRegister();" style="color:#00aaff;cursor:pointer;">S'inscrire</span></p>
      </div>
    ` : `
      <div style="background:#0f0f13;border:1px solid rgba(0,170,255,0.3);border-radius:18px;padding:36px;width:380px;position:relative;">
        <button onclick="this.closest('[style*=fixed]').remove()" style="position:absolute;top:14px;right:18px;background:none;border:none;color:white;font-size:20px;cursor:pointer;">✕</button>
        <h2 style="color:white;font-size:22px;margin-bottom:24px;">✨ S'inscrire</h2>
        <input id="reg-name" type="text" placeholder="Nom complet" style="width:100%;padding:12px 16px;background:rgba(255,255,255,0.07);border:1px solid rgba(255,255,255,0.15);border-radius:10px;color:white;font-size:14px;margin-bottom:12px;box-sizing:border-box;outline:none;"/>
        <input id="reg-email" type="email" placeholder="Email" style="width:100%;padding:12px 16px;background:rgba(255,255,255,0.07);border:1px solid rgba(255,255,255,0.15);border-radius:10px;color:white;font-size:14px;margin-bottom:12px;box-sizing:border-box;outline:none;"/>
        <input id="reg-pass" type="password" placeholder="Mot de passe" style="width:100%;padding:12px 16px;background:rgba(255,255,255,0.07);border:1px solid rgba(255,255,255,0.15);border-radius:10px;color:white;font-size:14px;margin-bottom:20px;box-sizing:border-box;outline:none;"/>
        <button onclick="
          const name=document.getElementById('reg-name').value;
          const email=document.getElementById('reg-email').value;
          if(name&&email){localStorage.setItem('phonedrshop_user',JSON.stringify({name:name,email:email}));location.reload();}
        " style="width:100%;padding:13px;background:linear-gradient(135deg,#0088ff,#00aaff);color:white;border:none;border-radius:10px;font-size:15px;font-weight:600;cursor:pointer;">Créer mon compte</button>
      </div>
    `;
    document.body.appendChild(modal);
  }

  window.showRegister = () => showModal('register');

  setTimeout(() => {
    const loginBtn = document.getElementById('btn-login');
    const registerBtn = document.getElementById('btn-register');
    const logoutBtn = document.getElementById('btn-logout');
    if (loginBtn) loginBtn.addEventListener('click', () => { dropdown.style.display='none'; showModal('login'); });
    if (registerBtn) registerBtn.addEventListener('click', () => { dropdown.style.display='none'; showModal('register'); });
    if (logoutBtn) logoutBtn.addEventListener('click', () => { localStorage.removeItem('phonedrshop_user'); location.reload(); });
  }, 100);

});
// ===== HERO CANVAS ANIMATION =====
const canvas = document.getElementById('canvas-bg');
const ctx = canvas.getContext('2d');
let particles = [];

function resize() {
  const hero = document.getElementById('hero');
  canvas.width = hero.offsetWidth;
  canvas.height = hero.offsetHeight;
}
window.addEventListener('resize', resize);
resize();

class Particle {
  constructor() {
    this.init();
  }
  init() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.vx = (Math.random() - 0.5) * 0.5;
    this.vy = (Math.random() - 0.5) * 0.5;
    this.size = Math.random() * 2;
  }
  update() {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
    if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(0, 170, 255, 0.4)';
    ctx.fill();
  }
}

function initParticles() {
  particles = [];
  const count = (canvas.width * canvas.height) / 15000;
  for (let i = 0; i < count; i++) {
    particles.push(new Particle());
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    p.update();
    p.draw();
  });
  
  // Draw connections
  ctx.beginPath();
  ctx.strokeStyle = 'rgba(0, 170, 255, 0.1)';
  ctx.lineWidth = 0.5;
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 150) {
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
      }
    }
  }
  ctx.stroke();
  requestAnimationFrame(animate);
}

resize();
initParticles();
animate();

// Re-init particles on resize
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        resize();
        initParticles();
    }, 250);
});

