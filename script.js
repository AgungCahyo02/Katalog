/* ==========================================================================
   SPERILAP - Toko Komponen & Sparepart Laptop Original
   Interactive Client Script (Modern Vanilla JS - Light/Dark Theme & Smart Search)
   ========================================================================== */

/* ===== Data Produk Komponen Laptop ===== */
const products = [
  {
    id: 1,
    name: "RAM DDR3L 4GB SODIMM 1600MHz",
    cat: "RAM",
    brand: "Kingston",
    price: 185000,
    stock: 20,
    rating: 4.6,
    sold: 210,
    img: "ram-ddr3.jpg",
    feature: "Low Voltage",
    tags: ["DDR3L 1600MHz", "1.35V Hemat Daya"],
    desc: "RAM hemat daya untuk laptop generasi Intel Gen 3–Gen 5 yang memakai socket SODIMM DDR3L. Suhu kerja rendah dan stabil untuk pemakaian harian.",
    specs: ["Kapasitas 4GB", "DDR3L SODIMM 204-pin", "Frekuensi 1600MHz (PC3L-12800)", "Tegangan 1.35V (Kompatibel 1.5V)", "Garansi Lifetime Terbatas"]
  },
  {
    id: 2,
    name: "RAM DDR4 8GB SODIMM FURY Impact 3200MHz",
    cat: "RAM",
    brand: "Kingston",
    price: 395000,
    old: 450000,
    stock: 25,
    rating: 4.8,
    sold: 340,
    img: "ram-ddr4.jpg",
    feature: "Best Seller",
    tags: ["DDR4 3200MHz", "CL20 Plug N Play"],
    desc: "Upgrade instan untuk laptop multitasking berat, editing video, dan gaming. Otomatis overclocking pada profil XMP tanpa perlu setting BIOS.",
    specs: ["Kapasitas 8GB", "DDR4 SODIMM 260-pin", "Frekuensi 3200MHz (PC4-25600)", "Tegangan 1.2V", "Garansi Lifetime Resmi Distributor"]
  },
  {
    id: 3,
    name: "RAM DDR5 16GB SODIMM FURY Impact 4800MHz",
    cat: "RAM",
    brand: "Kingston",
    price: 915000,
    stock: 12,
    rating: 4.9,
    sold: 140,
    img: "ram-ddr5.jpg",
    feature: "Next-Gen",
    tags: ["DDR5 4800MHz", "On-Die ECC"],
    desc: "Memori DDR5 generasi terbaru untuk laptop prosesor Intel Core Gen 12+ dan AMD Ryzen 6000+. Bandwidth 50% lebih kencang dibanding DDR4.",
    specs: ["Kapasitas 16GB (Single Module)", "DDR5 SODIMM 262-pin", "Frekuensi 4800MHz", "On-Die ECC untuk stabilitas ekstra", "Tegangan efisien 1.1V"]
  },
  {
    id: 4,
    name: "SSD Crucial MX500 2TB SATA 2.5\"",
    cat: "Penyimpanan",
    brand: "Crucial",
    price: 2350000,
    old: 2600000,
    stock: 8,
    rating: 4.8,
    sold: 96,
    img: "ssd-crucial.jpg",
    feature: "Garansi 5 Thn",
    tags: ["SATA III 2.5\"", "560 MB/s Read"],
    desc: "Kapasitas penyimpanan raksasa 2000GB dengan controller Micron 3D NAND. Solusi terbaik menghidupkan kembali laptop lama yang masih memakai HDD lemot.",
    specs: ["Kapasitas 2TB (2.000GB)", "Form Factor 2.5 inci (Tebal 7mm)", "Kecepatan Baca 560MB/s, Tulis 510MB/s", "Ketahanan TBW tinggi", "Garansi Resmi 5 Tahun"]
  },
  {
    id: 5,
    name: "SSD Kingston KC3000 1TB NVMe PCIe 4.0",
    cat: "Penyimpanan",
    brand: "Kingston",
    price: 1650000,
    stock: 10,
    rating: 4.9,
    sold: 120,
    img: "ssd-kingston.jpg",
    feature: "PCIe 4.0 Super",
    tags: ["M.2 2280 NVMe", "7.000 MB/s Read"],
    desc: "Performa PCIe Gen 4x4 teratas untuk render 3D, gaming kelas AAA, dan booting instan. Dilengkapi graphene aluminium heatspreader tipis.",
    specs: ["Kapasitas 1TB", "M.2 2280 PCIe 4.0 NVMe", "Kecepatan Baca hingga 7.000MB/s, Tulis 6.000MB/s", "Controller Phison E18", "Garansi Resmi 5 Tahun"]
  },
  {
    id: 6,
    name: "SSD Samsung NVMe M.2 1TB",
    cat: "Penyimpanan",
    brand: "Samsung",
    price: 1590000,
    old: 1750000,
    stock: 14,
    rating: 4.9,
    sold: 180,
    img: "ssd-samsung.jpg",
    feature: "Original Samsung",
    tags: ["Samsung V-NAND", "M.2 PCIe NVMe"],
    desc: "Solid State Drive teruji dari Samsung dengan performa konsisten dan tahan lama. Sangat awet dan stabil untuk workstation.",
    specs: ["Kapasitas 1TB", "M.2 2280 NVMe Interface", "Dukungan Samsung Magician Software", "Efisiensi daya optimal untuk baterai laptop", "Garansi Resmi Distributor"]
  },
  {
    id: 7,
    name: "Baterai Laptop HP HT03XL Original Grade",
    cat: "Baterai & Charger",
    brand: "AolsteCell",
    price: 385000,
    stock: 9,
    rating: 4.5,
    sold: 95,
    img: "baterai-hp.jpg",
    feature: "Grade A+ Cell",
    tags: ["Li-ion 41.04Wh", "Seri HT03XL"],
    desc: "Baterai pengganti untuk seri laptop HP Pavilion 14, 15, HP 240 G7, HP 245 G7. Menggunakan sel baterai Li-ion Grade A dengan sirkuit proteksi arus.",
    specs: ["Tipe Sel: Lithium-ion", "Kapasitas 41.04Wh / 11.55V", "Kompatibel kode: HT03XL, HSTNN-UB7J, L11119-855", "Sirkuit Overcharge & Short Protection", "Garansi 6 Bulan Ganti Baru"]
  },
  {
    id: 8,
    name: "Charger Laptop Universal 65W 19V",
    cat: "Baterai & Charger",
    brand: "Universal",
    price: 175000,
    stock: 40,
    rating: 4.5,
    sold: 420,
    img: "charger.jpg",
    feature: "Proteksi Stabil",
    tags: ["Output 19V 3.42A", "Kabel Tebal 1.5m"],
    desc: "Adaptor charger laptop pengganti berkualitas tinggi dengan filter anti-noise dan kabel tembaga murni tahan panas. Colokan standar jack bundar.",
    specs: ["Input: AC 100–240V ~ 50/60Hz", "Output: DC 19V – 3.42A (Maks 65W)", "Kabel panjang 1.5 meter dengan velcro tie", "Proteksi lonjakan voltase & overheat", "Garansi 3 Bulan"]
  },
  {
    id: 9,
    name: "Thermal Grease 30g High Performance",
    cat: "Pendingin",
    brand: "Thermal Grease",
    price: 65000,
    old: 80000,
    stock: 50,
    rating: 4.7,
    sold: 430,
    img: "thermal-paste.jpg",
    feature: "High Thermal",
    tags: ["Isi 30 Gram", "Non-Konduktif", "Pasta Termal"],
    desc: "Pasta pendingin untuk prosesor (CPU) dan grafis (GPU) laptop. Membantu menurunkan suhu hingga 5°–12°C saat servis berkala tanpa risiko korsleting.",
    specs: ["Isi tabung 30 gram (bisa untuk 20–30x pemakaian)", "Konduktivitas termal > 1.93 W/m-k", "Tidak menghantarkan arus listrik (100% aman)", "Kemasan suntik presisi dengan spatula oles"]
  }
];

/* ===== Konfigurasi & State Toko ===== */
const WA_PHONE = "6281234567890";
const FREE_SHIP = 500000;
const SHIP = 20000;

const $ = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);
const rp = n => new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(n);
const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const byId = id => products.find(p => p.id === id);

let cart = {};
try { cart = JSON.parse(localStorage.getItem("sp_cart_v3")) || {}; } catch (e) {}
const save = () => { try { localStorage.setItem("sp_cart_v3", JSON.stringify(cart)); } catch (e) {} };

const state = {
  cat: "Semua",
  q: "",
  sort: "populer"
};

const cats = ["Semua", ...new Set(products.map(p => p.cat))];

/* ===== Dark / Light Mode System ===== */
const getSavedTheme = () => { try { return localStorage.getItem("sp_theme"); } catch (e) { return null; } };

function initTheme() {
  const saved = getSavedTheme();
  const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  const currentTheme = saved || (prefersDark ? "dark" : "light");
  applyTheme(currentTheme, false);

  // Pantau perubahan mode sistem jika pengguna belum memilih preferensi eksplisit
  if (window.matchMedia) {
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", e => {
      if (!getSavedTheme()) {
        applyTheme(e.matches ? "dark" : "light", false);
      }
    });
  }
}

function applyTheme(theme, showNotice = true) {
  document.documentElement.setAttribute("data-theme", theme);
  // Simpan hanya jika pengguna memilih sendiri lewat tombol tema
  if (showNotice) { try { localStorage.setItem("sp_theme", theme); } catch (e) {} }
  
  const themeToggle = $("#themeToggle");
  if (themeToggle) {
    themeToggle.setAttribute("title", theme === "dark" ? "Beralih ke Mode Terang" : "Beralih ke Mode Gelap");
    themeToggle.setAttribute("aria-label", theme === "dark" ? "Beralih ke Mode Terang" : "Beralih ke Mode Gelap");
  }

  if (showNotice) {
    toast(theme === "dark" ? "Mode Gelap aktif" : "Mode Terang aktif", theme === "dark" ? "🌙" : "☀️");
  }
}

function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme") || "light";
  const target = current === "dark" ? "light" : "dark";
  applyTheme(target, true);
}

/* ===== Toast Notification ===== */
let toastTimer;
function toast(msg, icon = "✓") {
  const t = $("#toast");
  if (!t) return;
  t.innerHTML = `<span>${icon}</span> <span>${msg}</span>`;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 2200);
}

/* ===== Sinkronisasi UI Tag Cari Cepat ===== */
function updateShortcutTagsUI() {
  const query = state.q.trim().toLowerCase();
  $$(".shortcut-tag").forEach(tag => {
    const term = (tag.dataset.search || "").toLowerCase();
    if (query && (query === term || query.includes(term))) {
      tag.classList.add("active");
    } else {
      tag.classList.remove("active");
    }
  });
}

/* ===== Filter & Toolbar ===== */
function renderFilters() {
  const container = $("#filters");
  if (!container) return;

  container.innerHTML = cats.map(c => {
    const count = c === "Semua" ? products.length : products.filter(p => p.cat === c).length;
    return `<button class="chip ${c === state.cat ? "on" : ""}" data-cat="${esc(c)}" type="button">
      <span>${esc(c)}</span>
      <span class="chip-count">${count}</span>
    </button>`;
  }).join("");
}

/* ===== Grid Katalog Produk & Algoritma Pencarian Cerdas ===== */
function renderGrid() {
  const grid = $("#grid");
  const info = $("#info");
  const resetBtn = $("#resetFilterBtn");
  const clearBtn = $("#clearSearch");
  if (!grid) return;

  const q = state.q.trim().toLowerCase();

  // Tampilkan/sembunyikan tombol clear search
  if (clearBtn) clearBtn.hidden = !state.q;

  // Filter produk dengan pencarian kata kunci yang akurat & batas kata utuh (word boundary)
  let list = products.filter(p => {
    // 1. Filter Kategori
    const matchCat = (state.cat === "Semua" || p.cat === state.cat);
    if (!matchCat) return false;

    // 2. Jika tidak ada kata kunci pencarian, lolos
    if (!q) return true;

    // Pecah kata kunci menjadi beberapa token kata (contoh: "ram 8gb" -> ["ram", "8gb"])
    const tokens = q.split(/\s+/).filter(Boolean);
    const primaryText = `${p.name} ${p.brand} ${p.cat} ${p.tags.join(" ")}`.toLowerCase();
    const secondaryText = `${p.desc} ${p.specs.join(" ")}`.toLowerCase();

    return tokens.every(token => {
      const escaped = token.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const wordRegex = new RegExp("\\b" + escaped, "i");

      // Cek pada teks utama (nama, brand, tags) dengan batasan kata
      if (wordRegex.test(primaryText)) {
        if (token === "baterai") return p.name.toLowerCase().includes("baterai");
        if (token === "charger") return p.name.toLowerCase().includes("charger");
        return true;
      }

      // Cek kecocokan nama kategori persis
      if (p.cat.toLowerCase() === token) return true;

      // Cek pada deskripsi & spesifikasi detail (hindari kecocokan semu untuk kata kategori kunci)
      const coreKeywords = ["ram", "ssd", "baterai", "charger", "pasta"];
      if (!coreKeywords.includes(token)) {
        if (wordRegex.test(secondaryText)) return true;
      }

      return false;
    });
  });

  // Urutkan produk
  const sorts = {
    populer: (a, b) => b.sold - a.sold,
    murah: (a, b) => a.price - b.price,
    mahal: (a, b) => b.price - a.price,
    rating: (a, b) => b.rating - a.rating
  };
  list.sort(sorts[state.sort] || sorts.populer);

  // Status info & tombol reset
  if (info) {
    if (q) {
      info.textContent = `Menampilkan ${list.length} produk untuk "${state.q}"`;
    } else if (state.cat !== "Semua") {
      info.textContent = `Menampilkan ${list.length} produk dalam kategori "${state.cat}"`;
    } else {
      info.textContent = `Menampilkan ${list.length} komponen laptop original`;
    }
  }

  if (resetBtn) {
    resetBtn.hidden = (state.cat === "Semua" && !q);
  }

  // Perbarui status aktif pada tombol Cari Cepat
  updateShortcutTagsUI();

  // Render HTML Cards
  if (!list.length) {
    grid.innerHTML = `
      <div class="empty">
        <div class="empty-icon">🔍</div>
        <h4>Komponen tidak ditemukan</h4>
        <p>Tidak ada produk yang cocok dengan pencarian "<b>${esc(state.q)}</b>"${state.cat !== "Semua" ? ` pada kategori ${esc(state.cat)}` : ""}. Coba kata kunci lain atau reset filter.</p>
        <button class="btn btn-outline" data-reset-all type="button">Lihat Semua Komponen</button>
      </div>`;
    return;
  }

  grid.innerHTML = list.map(p => {
    const disc = p.old ? Math.round((1 - p.price / p.old) * 100) : 0;
    const isOutOfStock = p.stock <= 0;

    return `
      <article class="card">
        <button class="thumb" data-view="${p.id}" type="button" aria-label="Lihat detail ${esc(p.name)}">
          <img src="images/${p.img}" alt="${esc(p.name)}" loading="lazy" onerror="if(!this.dataset.retry){this.dataset.retry=1;this.src='${p.img}';}">
          <div class="card-badges">
            ${disc ? `<span class="tag-discount">Hemat ${disc}%</span>` : ""}
            ${p.feature ? `<span class="tag-feature">${esc(p.feature)}</span>` : ""}
          </div>
        </button>

        <div class="card-body">
          <div class="card-brand-row">
            <span class="brand">${esc(p.brand)}</span>
            <span class="stock-pill ${isOutOfStock ? "out" : ""}">${isOutOfStock ? "Habis" : "Stok " + p.stock}</span>
          </div>

          <h3 class="card-title" data-view="${p.id}">${esc(p.name)}</h3>

          <div class="spec-snippet">
            ${p.tags.map(t => `<span class="spec-chip">${esc(t)}</span>`).join("")}
          </div>

          <div class="card-meta">
            <span class="rating-star">★ ${p.rating}</span>
            <span class="sold-text">(${p.sold} terjual)</span>
          </div>

          <div class="price-block">
            <span class="price-main">${rp(p.price)}</span>
            ${p.old ? `<span class="price-old">${rp(p.old)}</span>` : ""}
          </div>

          <div class="card-actions">
            <button class="btn btn-detail" data-view="${p.id}" type="button">Detail</button>
            <button class="btn btn-add" data-add="${p.id}" type="button" ${isOutOfStock ? "disabled" : ""}>
              ${isOutOfStock ? "Habis" : "+ Keranjang"}
            </button>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

/* ===== Manajemen Keranjang Belanja ===== */
function cartLines() {
  return Object.entries(cart)
    .map(([id, qty]) => ({ p: byId(+id), qty }))
    .filter(line => line.p && line.qty > 0);
}

function totals() {
  const sub = cartLines().reduce((sum, line) => sum + line.p.price * line.qty, 0);
  const ship = sub === 0 ? 0 : sub >= FREE_SHIP ? 0 : SHIP;
  return { sub, ship, total: sub + ship };
}

function animateCartBadge() {
  const badges = $$(".badge");
  badges.forEach(b => {
    b.classList.remove("bump");
    void b.offsetWidth; // trigger reflow
    b.classList.add("bump");
    setTimeout(() => b.classList.remove("bump"), 250);
  });
}

function addToCart(id, n = 1) {
  const p = byId(id);
  const cur = cart[id] || 0;
  if (!p || !p.stock) return;

  if (cur + n > p.stock) {
    return toast(`Stok ${p.name} hanya tersisa ${p.stock}`, "⚠️");
  }

  cart[id] = cur + n;
  save();
  renderCart();
  animateCartBadge();
  toast(`${p.name} ditambahkan`);
}

function setQty(id, qty) {
  const p = byId(id);
  if (qty <= 0) {
    delete cart[id];
  } else if (p && qty > p.stock) {
    return toast(`Stok hanya tersisa ${p.stock}`, "⚠️");
  } else {
    cart[id] = qty;
  }
  save();
  renderCart();
}

function renderCart() {
  const lines = cartLines();
  const totalQty = lines.reduce((sum, line) => sum + line.qty, 0);
  const t = totals();

  // Header badges & labels
  const cartCountEl = $("#cartCount");
  const drawerBadge = $("#drawerBadge");
  const mcbCount = $("#mcbCount");
  const mcbTotal = $("#mcbTotal");
  const mobileCartBar = $("#mobileCartBar");

  if (cartCountEl) cartCountEl.textContent = totalQty;
  if (drawerBadge) drawerBadge.textContent = `${totalQty} item`;

  // Free shipping progress bar
  const freeShipText = $("#freeShipText");
  const freeShipBar = $("#freeShipBar");
  if (freeShipText && freeShipBar) {
    const percent = Math.min(100, Math.round((t.sub / FREE_SHIP) * 100));
    freeShipBar.style.width = percent + "%";
    if (t.sub >= FREE_SHIP) {
      freeShipText.innerHTML = `🎉 <b>Selamat!</b> Pesananmu mendapatkan <b>Bebas Ongkir</b>`;
    } else {
      const remaining = FREE_SHIP - t.sub;
      freeShipText.innerHTML = `Belanja <b>${rp(remaining)}</b> lagi untuk <b>Bebas Ongkir</b>`;
    }
  }

  // Floating mobile bar
  if (mobileCartBar) {
    if (lines.length > 0) {
      mobileCartBar.hidden = false;
      if (mcbCount) mcbCount.textContent = `${totalQty} barang di keranjang`;
      if (mcbTotal) mcbTotal.textContent = rp(t.total);
    } else {
      mobileCartBar.hidden = true;
    }
  }

  // Cart Items List
  const itemsContainer = $("#cartItems");
  if (itemsContainer) {
    if (!lines.length) {
      itemsContainer.innerHTML = `
        <div class="empty" style="padding:40px 16px; margin-top:20px">
          <div class="empty-icon">🛒</div>
          <h4>Keranjang Belanja Kosong</h4>
          <p>Belum ada komponen laptop yang kamu pilih. Temukan RAM, SSD, atau baterai yang pas!</p>
          <button class="btn btn-primary" data-close type="button">Mulai Belanja</button>
        </div>`;
    } else {
      itemsContainer.innerHTML = lines.map(({ p, qty }) => `
        <div class="cart-item">
          <div class="cart-item-img">
            <img src="images/${p.img}" alt="${esc(p.name)}" onerror="if(!this.dataset.retry){this.dataset.retry=1;this.src='${p.img}';}">
          </div>
          <div class="cart-item-info">
            <h4>${esc(p.name)}</h4>
            <div class="cart-unit-price">${rp(p.price)} / unit</div>
            <div class="cart-actions-row">
              <div class="qty-control">
                <button data-dec="${p.id}" type="button" aria-label="Kurangi jumlah">−</button>
                <span>${qty}</span>
                <button data-inc="${p.id}" type="button" aria-label="Tambah jumlah">+</button>
              </div>
              <button class="btn-remove" data-rm="${p.id}" type="button">Hapus</button>
            </div>
          </div>
          <div class="cart-item-total">${rp(p.price * qty)}</div>
        </div>
      `).join("");
    }
  }

  // Cart Foot
  const footContainer = $("#cartFoot");
  if (footContainer) {
    if (!lines.length) {
      footContainer.innerHTML = "";
    } else {
      footContainer.innerHTML = `
        <div class="sum-row">
          <span>Subtotal (${totalQty} barang)</span>
          <span>${rp(t.sub)}</span>
        </div>
        <div class="sum-row">
          <span>Ongkos Kirim</span>
          <span>${t.ship === 0 ? '<b style="color:var(--emerald)">Gratis</b>' : rp(t.ship)}</span>
        </div>
        <div class="sum-row total-row">
          <span>Total Pembayaran</span>
          <span>${rp(t.total)}</span>
        </div>
        <div class="drawer-checkout-actions">
          <button class="btn btn-primary full" data-checkout type="button">
            Lanjut ke Pembayaran (${rp(t.total)})
          </button>
          <button class="btn btn-whatsapp full" data-wa-checkout type="button">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
            Pesan Cepat via WhatsApp
          </button>
        </div>
      `;
    }
  }
}

function openDrawer(open) {
  const drawer = $("#drawer");
  const backdrop = $("#backdrop");
  if (!drawer || !backdrop) return;

  drawer.classList.toggle("open", open);
  drawer.setAttribute("aria-hidden", !open);
  backdrop.hidden = !open;
  document.body.style.overflow = open ? "hidden" : "";
}

/* ===== Modal (Detail Produk & Checkout) ===== */
function openModal(html) {
  const modal = $("#modal");
  const modalBody = $("#modalBody");
  if (!modal || !modalBody) return;

  modalBody.innerHTML = html;
  modal.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const modal = $("#modal");
  if (!modal) return;
  modal.hidden = true;
  document.body.style.overflow = "";
}

function showProduct(id) {
  const p = byId(id);
  if (!p) return;

  const isOutOfStock = p.stock <= 0;
  const waUrl = `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(`Halo Sperilap, saya ingin konsultasi apakah ${p.name} cocok untuk laptop saya.`)}`;

  openModal(`
    <div class="detail-layout">
      <div class="detail-gallery">
        <img src="images/${p.img}" alt="${esc(p.name)}" onerror="if(!this.dataset.retry){this.dataset.retry=1;this.src='${p.img}';}">
      </div>

      <div class="detail-content">
        <div class="detail-badge-row">
          <span class="detail-cat">${esc(p.brand)} · ${esc(p.cat)}</span>
          <span class="stock-pill ${isOutOfStock ? "out" : ""}">${isOutOfStock ? "Stok Habis" : "Stok Ready (" + p.stock + ")"}</span>
        </div>

        <h2 class="detail-title">${esc(p.name)}</h2>
        <div class="detail-meta">★ ${p.rating} · ${p.sold} terjual · 100% Original</div>

        <p class="detail-desc">${esc(p.desc)}</p>

        <div class="detail-specs-box">
          <h4>Spesifikasi Komponen</h4>
          <ul>
            ${p.specs.map(s => `<li>${esc(s)}</li>`).join("")}
          </ul>
        </div>

        <div class="detail-price-row">
          <span class="detail-price">${rp(p.price)}</span>
          ${p.old ? `<span class="detail-old-price">${rp(p.old)}</span>` : ""}
        </div>

        <div class="detail-actions">
          <button class="btn btn-primary" data-add="${p.id}" type="button" ${isOutOfStock ? "disabled" : ""}>
            ${isOutOfStock ? "Stok Habis" : "Tambah ke Keranjang"}
          </button>
          <a href="${waUrl}" target="_blank" rel="noopener" class="btn btn-outline" style="text-align:center">
            Tanya Kompatibilitas
          </a>
        </div>
      </div>
    </div>
  `);
}

function showCheckout() {
  const lines = cartLines();
  if (!lines.length) return toast("Keranjang belanja masih kosong", "⚠️");

  const t = totals();
  openDrawer(false);

  openModal(`
    <div class="checkout-wrap">
      <h2>Selesaikan Pesanan</h2>
      <p class="checkout-subtitle">Isi data pengiriman untuk memproses pengiriman sparepart laptopmu.</p>

      <details class="order-summary-box" open>
        <summary>
          <span>Ringkasan Pesanan (${lines.length} produk)</span>
          <b>${rp(t.total)}</b>
        </summary>
        <div class="order-summary-list">
          ${lines.map(({ p, qty }) => `
            <div class="order-summary-item">
              <span>${esc(p.name)} x ${qty}</span>
              <span>${rp(p.price * qty)}</span>
            </div>
          `).join("")}
          <div class="order-summary-item" style="border-top:1px dashed var(--border-subtle); padding-top:6px; margin-top:4px">
            <span>Ongkir</span>
            <span>${t.ship === 0 ? "Bebas Ongkir" : rp(t.ship)}</span>
          </div>
        </div>
      </details>

      <form id="checkoutForm" class="form-grid">
        <div class="form-group">
          <label for="fName">Nama Lengkap Penerima</label>
          <input id="fName" name="nama" required minlength="3" placeholder="Contoh: Budi Santoso" autocomplete="name">
        </div>

        <div class="form-group">
          <label for="fHp">Nomor WhatsApp Aktif</label>
          <input id="fHp" name="hp" type="tel" required pattern="[0-9+ ]{9,16}" placeholder="08123456789" autocomplete="tel">
          <span class="form-note">Konfirmasi resi dan status garansi akan dikirim via WA.</span>
        </div>

        <div class="form-group">
          <label for="fAlamat">Alamat Lengkap Pengiriman</label>
          <textarea id="fAlamat" name="alamat" rows="3" required minlength="10" placeholder="Nama Jalan, No. Rumah, RT/RW, Kelurahan, Kecamatan, Kota &amp; Kode Pos"></textarea>
        </div>

        <div class="form-group">
          <label for="fBayar">Metode Pembayaran</label>
          <select id="fBayar" name="bayar">
            <option value="Transfer BCA">Transfer Bank BCA</option>
            <option value="Transfer Mandiri">Transfer Bank Mandiri</option>
            <option value="Transfer BRI">Transfer Bank BRI</option>
            <option value="QRIS Instant">QRIS (Gopay, OVO, Dana, ShopeePay)</option>
            <option value="COD">COD (Bayar Tunai di Tempat saat Sampai)</option>
          </select>
        </div>

        <button class="btn btn-primary full" type="submit" style="margin-top:8px">
          Konfirmasi &amp; Buat Pesanan (${rp(t.total)})
        </button>
      </form>
    </div>
  `);
}

function sendWhatsAppOrder() {
  const lines = cartLines();
  if (!lines.length) return toast("Keranjang kosong", "⚠️");
  const t = totals();

  let msg = `*Halo Sperilap, saya mau pesan komponen berikut:*\n\n`;
  lines.forEach(({ p, qty }, i) => {
    msg += `${i + 1}. ${p.name} (${qty}x) = ${rp(p.price * qty)}\n`;
  });
  msg += `\n*Subtotal:* ${rp(t.sub)}`;
  msg += `\n*Ongkir:* ${t.ship === 0 ? "Bebas Ongkir" : rp(t.ship)}`;
  msg += `\n*Total Tagihan:* ${rp(t.total)}`;
  msg += `\n\nMohon info ketersediaan stok & nomor rekening pembayaran. Terima kasih!`;

  window.open(`https://wa.me/${WA_PHONE}?text=${encodeURIComponent(msg)}`, "_blank");
}

function placeOrder(form) {
  const d = Object.fromEntries(new FormData(form));
  const t = totals();
  const orderNo = "SP-" + Date.now().toString().slice(-7);
  const lines = cartLines();

  // Update stok lokal
  lines.forEach(({ p, qty }) => {
    p.stock = Math.max(0, p.stock - qty);
  });

  // Kosongkan keranjang
  cart = {};
  save();
  renderCart();
  renderGrid();

  // Pesan WhatsApp konfirmasi
  let waMsg = `*Konfirmasi Pesanan Baru #${orderNo}*\n`;
  waMsg += `Nama: ${d.nama}\n`;
  waMsg += `Alamat: ${d.alamat}\n`;
  waMsg += `Metode Bayar: ${d.bayar}\n\n`;
  waMsg += `*Produk:*\n`;
  lines.forEach(({ p, qty }) => {
    waMsg += `- ${p.name} (${qty}x)\n`;
  });
  waMsg += `\n*Total:* ${rp(t.total)}`;

  const waLink = `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(waMsg)}`;

  openModal(`
    <div class="order-success-box">
      <div class="success-badge">✓</div>
      <h2>Pesanan Berhasil Dibuat!</h2>
      <div class="order-code">Nomor Pesanan: ${orderNo}</div>
      <p class="success-meta">
        Terima kasih, <b>${esc(d.nama)}</b>. Pesananmu telah terdaftar dengan metode <b>${esc(d.bayar)}</b>.<br>
        Tim Sperilap akan segera memproses pengecekan fisik komponen dan mengemas paket dengan bubble wrap aman.
      </p>

      <div class="success-actions">
        <a href="${waLink}" target="_blank" rel="noopener" class="btn btn-whatsapp">
          Konfirmasi Cepat via WhatsApp
        </a>
        <button class="btn btn-outline" data-close type="button">
          Kembali ke Katalog
        </button>
      </div>
    </div>
  `);
}

/* ===== Event Listeners ===== */
document.addEventListener("DOMContentLoaded", () => {
  // Inisialisasi tema tampilan (Dark / Light)
  initTheme();

  // Tombol Toggle Tema
  const themeToggle = $("#themeToggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", toggleTheme);
  }

  // Sticky Header Scroll Shadow & Scroll To Top
  window.addEventListener("scroll", () => {
    const topbar = $("#topbar");
    const scrollTopBtn = $("#scrollTopBtn");
    const scrolled = window.scrollY > 20;

    if (topbar) topbar.classList.toggle("scrolled", scrolled);
    if (scrollTopBtn) scrollTopBtn.hidden = window.scrollY < 300;
  }, { passive: true });

  // Scroll to Top Click
  const scrollTopBtn = $("#scrollTopBtn");
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Delegasi Event Klik
  document.addEventListener("click", e => {
    const getEl = selector => e.target.closest(selector);
    let el;

    // Filter Kategori Chips
    if ((el = getEl("[data-cat]"))) {
      state.cat = el.dataset.cat;
      renderFilters();
      renderGrid();
    }
    // Navigasi Kategori dari Footer
    else if ((el = getEl("[data-cat-nav]"))) {
      state.cat = el.dataset.catNav;
      state.q = "";
      const searchInput = $("#search");
      if (searchInput) searchInput.value = "";
      renderFilters();
      renderGrid();
      $("#katalog")?.scrollIntoView({ behavior: "smooth" });
    }
    // Tombol Pintasan "Cari Cepat" (Dengan toggle on/off & pembersihan filter silang)
    else if ((el = getEl("[data-search]"))) {
      const term = el.dataset.search.trim();
      const searchInput = $("#search");

      // Jika tombol yang sama diklik lagi saat sudah aktif, matikan pencarian (toggle off)
      if (state.q.toLowerCase() === term.toLowerCase()) {
        state.q = "";
        if (searchInput) searchInput.value = "";
      } else {
        state.q = term;
        state.cat = "Semua"; // Reset kategori agar tidak menyaring silang produk
        if (searchInput) searchInput.value = term;
      }

      renderFilters();
      renderGrid();
      $("#katalog")?.scrollIntoView({ behavior: "smooth" });
    }
    // Tombol Reset Semua Filter
    else if (getEl("[data-reset-all]") || getEl("#resetFilterBtn")) {
      state.cat = "Semua";
      state.q = "";
      const searchInput = $("#search");
      if (searchInput) searchInput.value = "";
      renderFilters();
      renderGrid();
    }
    // Tombol Bersihkan Input Pencarian (✕)
    else if (getEl("#clearSearch")) {
      state.q = "";
      const searchInput = $("#search");
      if (searchInput) {
        searchInput.value = "";
        searchInput.focus();
      }
      renderGrid();
    }
    // Aksi Kartu Produk & Keranjang
    else if ((el = getEl("[data-view]"))) {
      showProduct(+el.dataset.view);
    } else if ((el = getEl("[data-add]"))) {
      addToCart(+el.dataset.add);
    } else if ((el = getEl("[data-inc]"))) {
      setQty(+el.dataset.inc, (cart[el.dataset.inc] || 0) + 1);
    } else if ((el = getEl("[data-dec]"))) {
      setQty(+el.dataset.dec, (cart[el.dataset.dec] || 0) - 1);
    } else if ((el = getEl("[data-rm]"))) {
      setQty(+el.dataset.rm, 0);
    } else if (getEl("[data-checkout]")) {
      showCheckout();
    } else if (getEl("[data-wa-checkout]")) {
      sendWhatsAppOrder();
    } else if (getEl("[data-close]")) {
      closeModal();
      openDrawer(false);
    } else if (e.target.id === "modal") {
      closeModal();
    } else if (e.target.id === "backdrop") {
      openDrawer(false);
    } else if (getEl("#cartBtn") || getEl("#mcbBtn")) {
      openDrawer(true);
    }
  });

  // Pencarian Manual & Pengurutan
  const searchInput = $("#search");
  if (searchInput) {
    searchInput.addEventListener("input", e => {
      state.q = e.target.value;
      renderGrid();
    });
  }

  const sortSelect = $("#sort");
  if (sortSelect) {
    sortSelect.addEventListener("change", e => {
      state.sort = e.target.value;
      renderGrid();
    });
  }

  // Submit Checkout Form
  document.addEventListener("submit", e => {
    if (e.target.id === "checkoutForm") {
      e.preventDefault();
      placeOrder(e.target);
    }
  });

  // Tombol Keyboard Escape
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      closeModal();
      openDrawer(false);
    }
  });

  // Inisialisasi awal render katalog & keranjang
  renderFilters();
  renderGrid();
  renderCart();
});