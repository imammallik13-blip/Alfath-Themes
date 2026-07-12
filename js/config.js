// ============================================================
// Konfigurasi Supabase — Alfath Theme Store
// ============================================================
// Ganti dua nilai di bawah ini dengan kredensial project Supabase
// yang sebenarnya (Project Settings -> API).
// ANON_KEY aman dipakai di frontend karena akses publik dibatasi
// lewat Row Level Security (RLS) di sisi Supabase.
//
// Catatan: file ini sengaja pakai variabel global (bukan ES module
// import/export) supaya semua halaman bisa dibuka langsung dengan
// double-click (file://) tanpa perlu local server.
// ============================================================

window.ALFATH_CONFIG = {
  SUPABASE_URL: "https://mebpwlbkfsjfbjzfbtmg.supabase.co",
  SUPABASE_ANON_KEY: "sb_publishable_MepEoioxUJuFb_Cw7vIhVw_107C1aER",

  // Nomor WhatsApp seller, format internasional tanpa "+" atau "0" di depan
  // contoh: 62812xxxxxxx
  SELLER_WHATSAPP_NUMBER: "6281358221794",
};