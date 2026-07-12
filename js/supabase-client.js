// ============================================================
// Supabase Client — shared script
// ============================================================
// Load-order yang dibutuhkan di setiap halaman HTML (di <head>
// atau sebelum tag </body>), berurutan:
//   1. <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
//   2. <script src="js/config.js"></script>
//   3. <script src="js/supabase-client.js"></script>
// Setelah itu window.getSupabaseClient() & window.isSupabaseConfigured()
// bisa dipanggil dari script halaman.
// ============================================================

(function () {
  let client = null;

  window.getSupabaseClient = function () {
    if (client) return client;

    if (!window.supabase) {
      throw new Error(
        "Supabase library belum termuat. Pastikan <script src='https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2'> ada sebelum js/supabase-client.js."
      );
    }
    if (!window.ALFATH_CONFIG) {
      throw new Error(
        "js/config.js belum dimuat. Pastikan urutan <script> benar di HTML."
      );
    }

    const { SUPABASE_URL, SUPABASE_ANON_KEY } = window.ALFATH_CONFIG;
    client = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    return client;
  };

  window.isSupabaseConfigured = function () {
    if (!window.ALFATH_CONFIG) return false;
    const { SUPABASE_URL, SUPABASE_ANON_KEY } = window.ALFATH_CONFIG;
    return (
      SUPABASE_URL !== "https://YOUR_PROJECT_REF.supabase.co" &&
      SUPABASE_ANON_KEY !== "YOUR_ANON_PUBLIC_KEY"
    );
  };
})();