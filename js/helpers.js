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
