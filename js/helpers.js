// ============================================================
// Helper functions bersama — Alfath Theme Store
// ============================================================
// Global script (bukan module) supaya semua halaman bisa dibuka
// langsung lewat file:// tanpa local server.
// ============================================================

window.formatRupiah = function (value) {
  return "Rp" + Number(value || 0).toLocaleString("id-ID");
};

window.formatRating = function (value) {
  return Number(value || 0).toFixed(1);
};

window.escapeHtml = function (str) {
  const div = document.createElement("div");
  div.textContent = str ?? "";
  return div.innerHTML;
};

window.escapeAttr = function (str) {
  return String(str ?? "").replace(/"/g, "&quot;");
};

// Mencari tema contoh berdasarkan id — dipakai halaman Checkout
// saat Supabase belum dikonfigurasi.
window.findSampleThemeById = function (id) {
  return (window.ALFATH_SAMPLE_THEMES || []).find((t) => String(t.id) === String(id)) || null;
};

// ============================================================
// Varian tema — setiap tema sekarang bisa punya beberapa varian
// (mis. beda versi aplikasi WA / beda gaya emoji) dengan harga
// dan galeri foto masing-masing.
//
// Struktur theme.variants: [{ id, label, price, preview_images[] }]
// ============================================================

// Selalu mengembalikan array (aman walau data lama/rusak).
window.getThemeVariants = function (theme) {
  return theme && Array.isArray(theme.variants) ? theme.variants : [];
};

// Varian dengan harga termurah — dipakai sebagai default pilihan.
window.getCheapestVariant = function (theme) {
  const variants = window.getThemeVariants(theme);
  if (!variants.length) return null;
  return variants.reduce(
    (min, v) => (Number(v.price) < Number(min.price) ? v : min),
    variants[0]
  );
};

// Cari varian spesifik berdasarkan id. Kalau tidak ketemu / id kosong,
// fallback ke varian termurah supaya link lama tetap jalan.
window.findVariantById = function (theme, variantId) {
  const variants = window.getThemeVariants(theme);
  const found = variants.find((v) => String(v.id) === String(variantId));
  return found || window.getCheapestVariant(theme);
};

// Harga termurah dari semua varian — dipakai buat label "Mulai Rp..."
window.getMinPrice = function (theme) {
  const variants = window.getThemeVariants(theme);
  if (!variants.length) return 0;
  return Math.min(...variants.map((v) => Number(v.price) || 0));
};

// Harga tertinggi — dipakai kalau perlu nampilin rentang harga.
window.getMaxPrice = function (theme) {
  const variants = window.getThemeVariants(theme);
  if (!variants.length) return 0;
  return Math.max(...variants.map((v) => Number(v.price) || 0));
};

// Rata-rata harga varian — dipakai buat estimasi omzet di dashboard
// karena purchase_count masih digabung per tema (bukan per varian).
window.getAveragePrice = function (theme) {
  const variants = window.getThemeVariants(theme);
  if (!variants.length) return 0;
  const total = variants.reduce((sum, v) => sum + (Number(v.price) || 0), 0);
  return total / variants.length;
};

// Galeri foto buat sebuah varian, dengan fallback ke thumbnail tema
// kalau variannya sendiri belum punya foto.
window.getVariantImages = function (theme, variant) {
  if (variant && Array.isArray(variant.preview_images) && variant.preview_images.length) {
    return variant.preview_images;
  }
  if (theme && theme.thumbnail_url) return [theme.thumbnail_url];
  return [];
};

// Label ringkas rentang harga, mis. "Rp20.000" atau "Rp20.000 – Rp25.000"
window.formatPriceRange = function (theme) {
  const min = window.getMinPrice(theme);
  const max = window.getMaxPrice(theme);
  if (min === max) return window.formatRupiah(min);
  return `${window.formatRupiah(min)} – ${window.formatRupiah(max)}`;
};
