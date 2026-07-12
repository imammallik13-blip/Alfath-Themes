// ============================================================
// Data contoh — Alfath Theme Store
// ============================================================
// Dipakai di semua halaman sebagai fallback kalau Supabase belum
// dikonfigurasi (js/config.js masih placeholder), supaya tiap
// halaman bisa di-preview sebelum project Supabase asli siap.
// Structure-nya mengikuti skema tabel `themes` di Supabase.
// ============================================================

window.ALFATH_SAMPLE_THEMES = [
  {
    id: "sample-1",
    name: "Senja Ungu Aesthetic",
    category: "Paket Lengkap",
    thumbnail_url: "https://images.unsplash.com/photo-1499346030926-9a72daac6c63?w=600&h=450&fit=crop",
    preview_images: [
      "https://images.unsplash.com/photo-1499346030926-9a72daac6c63?w=600&h=450&fit=crop",
      "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=600&h=450&fit=crop",
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&h=450&fit=crop"
    ],
    price: 25000,
    rating: 4.9,
    purchase_count: 128,
    package_items: ["Wallpaper", "Font", "Set Ikon"],
    description: "Nuansa senja ungu lembut buat WA kamu makin estetik. Cocok dipakai sehari-hari, ringan, dan gampang dipasang."
  },
  {
    id: "sample-2",
    name: "Minimalis Pastel",
    category: "Wallpaper",
    thumbnail_url: "https://images.unsplash.com/photo-1533158307587-828f0a76ef46?w=600&h=450&fit=crop",
    preview_images: [
      "https://images.unsplash.com/photo-1533158307587-828f0a76ef46?w=600&h=450&fit=crop",
      "https://images.unsplash.com/photo-1497436072909-f5e4be1713d1?w=600&h=450&fit=crop"
    ],
    price: 12000,
    rating: 4.7,
    purchase_count: 342,
    package_items: ["Wallpaper"],
    description: "Wallpaper minimalis warna pastel, simpel tapi tetap manis dipandang."
  },
  {
    id: "sample-3",
    name: "Dreamy Cloud Pack",
    category: "Paket Lengkap",
    thumbnail_url: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=600&h=450&fit=crop",
    preview_images: [
      "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=600&h=450&fit=crop",
      "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=600&h=450&fit=crop",
      "https://images.unsplash.com/photo-1520869309377-30e5fc8d20f2?w=600&h=450&fit=crop",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=450&fit=crop"
    ],
    price: 30000,
    rating: 5.0,
    purchase_count: 76,
    package_items: ["Wallpaper", "Font", "Set Ikon", "Bubble Chat"],
    description: "Paket lengkap tema awan dreamy — dari wallpaper sampai bubble chat custom, satu paket langsung jadi."
  },
  {
    id: "sample-4",
    name: "Font Elegan Serif",
    category: "Font",
    thumbnail_url: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?w=600&h=450&fit=crop",
    price: 8000,
    rating: 4.6,
    purchase_count: 210,
    package_items: ["Font"],
    description: "Font serif elegan buat tampilan chat WA kamu lebih formal dan rapi."
  },
  {
    id: "sample-5",
    name: "Ikon Line Art Pastel",
    category: "Ikon",
    thumbnail_url: "https://images.unsplash.com/photo-1618172193622-ae2d025f4032?w=600&h=450&fit=crop",
    preview_images: [
      "https://images.unsplash.com/photo-1618172193622-ae2d025f4032?w=600&h=450&fit=crop",
      "https://images.unsplash.com/photo-1550684376-efcbd6e3f031?w=600&h=450&fit=crop"
    ],
    price: 10000,
    rating: 4.8,
    purchase_count: 95,
    package_items: ["Set Ikon"],
    description: "Set ikon line art bergaya pastel, konsisten di semua menu WhatsApp."
  },
  {
    id: "sample-6",
    name: "Retro Sunset Pack",
    category: "Paket Lengkap",
    thumbnail_url: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=600&h=450&fit=crop",
    preview_images: [
      "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=600&h=450&fit=crop",
      "https://images.unsplash.com/photo-1502472584811-0a2f2feb8968?w=600&h=450&fit=crop",
      "https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?w=600&h=450&fit=crop"
    ],
    price: 27000,
    rating: 4.9,
    purchase_count: 63,
    package_items: ["Wallpaper", "Font", "Set Ikon"],
    description: "Vibes retro sunset era 90-an, buat kamu yang suka tampilan nostalgia."
  }
];