// ============================================================
// ⚙️  KONFIGURASI UTAMA — Edit bagian ini sesuai data Anda
// ============================================================

// Ganti dengan nomor WhatsApp Anda (format 62xxx tanpa + atau spasi)
export const WHATSAPP_NUMBER = "6281908957181";

// Nama toko
export const STORE_NAME = "Aneka Peyek Enak Alami Toko Listinawati";

// Alamat toko
export const STORE_ADDRESS = "Jl. Benda I No.50, RT.5/RW.1, Ciganjur, Kec. Jagakarsa, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12630";

// Jam operasional
export const STORE_HOURS = {
  weekday: "Senin – Minggu: 07.00 – 21.00",
  weekend: "",
};

// Link embed Google Maps (ambil dari Google Maps > Share > Embed a map > salin src-nya)
export const MAPS_EMBED_URL = "https://maps.google.com/maps?q=-6.328494617759238,106.80789877514995&hl=id&z=15&output=embed";

// ============================================================
// 🛒  DATA PRODUK
// ============================================================
export const products = [
  {
    id: 1,
    name: "Peyek Kacang",
    category: "Peyek",
    emoji: "🥜",
    price: "Rp 15.000",
    weight: "250gr",
    description: "Peyek kacang gurih renyah dengan taburan kacang tanah pilihan yang melimpah. Digoreng sempurna dengan resep warisan turun-temurun.",
    image: "/peyek_kacang_1777367607879.png",
    badge: "Terlaris",
    badgeColor: "#e67e22",
    highlights: ["Kacang pilihan", "Bumbu rempah asli", "Renyah tahan lama"],
  },
  {
    id: 2,
    name: "Peyek Ikan Teri",
    category: "Peyek",
    emoji: "🐟",
    price: "Rp 18.000",
    weight: "200gr",
    description: "Perpaduan sempurna antara ikan teri medan segar dengan adonan tepung berbumbu. Gurih asin yang bikin ketagihan di setiap gigitan.",
    image: "/peyek_teri_1777367626219.png",
    badge: "Favorit",
    badgeColor: "#2980b9",
    highlights: ["Teri medan asli", "Gurih alami", "Tanpa pengawet"],
  },
  {
    id: 3,
    name: "Peyek Udang Rebon",
    category: "Peyek",
    emoji: "🦐",
    price: "Rp 20.000",
    weight: "200gr",
    description: "Cita rasa istimewa dari udang rebon pilihan yang memberikan sensasi gurih dan renyah. Cocok sebagai teman makan atau camilan sore.",
    image: "/peyek_rebon_1777367644272.png",
    badge: "Premium",
    badgeColor: "#8e44ad",
    highlights: ["Udang rebon segar", "Aroma menggugah", "Tekstur sempurna"],
  },
  {
    id: 4,
    name: "Peyek Kacang Ijo",
    category: "Peyek",
    emoji: "🟢",
    price: "Rp 16.000",
    weight: "200gr",
    description: "Inovasi peyek dengan kacang hijau yang renyah dan sehat. Rasa gurih yang khas dan beda dari yang lain.",
    image: "/peyek_kacang_ijo_1777367660642.png",
    badge: "Baru",
    badgeColor: "#27ae60",
    highlights: ["Kacang ijo pilihan", "Lebih sehat", "Renyah alami"],
  },
  {
    id: 5,
    name: "Keripik Pisang Manis",
    category: "Keripik Pisang",
    emoji: "🍌",
    price: "Rp 15.000",
    weight: "250gr",
    description: "Keripik pisang dengan balutan gula manis yang karamelnya pas. Sangat renyah dan cocok untuk teman minum teh.",
    image: "/keripik_pisang_manis_1777367687248.png",
    badge: "Manis Legit",
    badgeColor: "#f39c12",
    highlights: ["Pisang pilihan", "Manis pas", "Potongan tipis"],
  },
  {
    id: 6,
    name: "Keripik Pisang Asin",
    category: "Keripik Pisang",
    emoji: "🍌",
    price: "Rp 15.000",
    weight: "250gr",
    description: "Keripik pisang gurih dengan taburan bumbu rahasia. Cocok untuk Anda yang suka ngemil gurih-gurih.",
    image: "/keripik_pisang_asin_1777367706101.png",
    badge: "Gurih",
    badgeColor: "#f1c40f",
    highlights: ["Renyah banget", "Bumbu meresap", "Bikin nagih"],
  },
  {
    id: 8,
    name: "Keripik Pisang Original",
    category: "Keripik Pisang",
    emoji: "🍌",
    price: "Rp 15.000",
    weight: "250gr",
    description: "Keripik pisang original dengan rasa asli pisang yang manis alami. Tanpa tambahan gula atau garam, sangat cocok untuk camilan sehat Anda sehari-hari.",
    image: "/keripik_pisang_ori_1777367722517.png",
    badge: "Original",
    badgeColor: "#16a085",
    highlights: ["Rasa asli pisang", "Tanpa perasa", "Sehat & renyah"],
  },
  {
    id: 7,
    name: "Keripik Singkong Asin",
    category: "Keripik Singkong",
    emoji: "🍠",
    price: "Rp 12.000",
    weight: "250gr",
    description: "Keripik singkong tipis dan renyah dengan taburan bumbu asin gurih. Teman setia nonton TV atau kerja.",
    image: "/keripik_singkong_1777367742749.png",
    badge: "Klasik",
    badgeColor: "#d35400",
    highlights: ["Singkong pilihan", "Irisan tipis", "Super renyah"],
  }
];

// ============================================================
// ✨  KEUNGGULAN PRODUK
// ============================================================
export const features = [
  { icon: "🏡", title: "Produksi Rumahan", desc: "Dibuat dengan cinta dan kebersihan terjaga di dapur rumah kami" },
  { icon: "🌿", title: "Bahan Alami", desc: "Tanpa pengawet, pewarna buatan, atau MSG berlebihan" },
  { icon: "✅", title: "Higenis & Aman", desc: "Dikemas rapi dan bersih, siap kirim ke seluruh penjuru kota" },
  { icon: "🚀", title: "Pengiriman Cepat", desc: "Kirim via GoSend & GrabExpress, sampai di hari yang sama" },
  { icon: "💝", title: "Bisa Custom Pesanan", desc: "Tersedia kemasan hampers & paket spesial untuk acara Anda" },
  { icon: "⭐", title: "Kualitas Terjamin", desc: "Sudah dipercaya ribuan pelanggan setia sejak tahun 2010" },
];

// ============================================================
// 💬  TESTIMONI
// ============================================================
export const testimonials = [
  { name: "Budi Santoso", city: "Jakarta Selatan", text: "Peyek paling enak yang pernah saya coba! Renyahnya awet sampai seminggu, pas banget buat oleh-oleh.", rating: 5 },
  { name: "Siti Rahayu", city: "Depok", text: "Sudah langganan setahun lebih, kualitasnya selalu konsisten. Rekomen banget buat yang suka camilan tradisional.", rating: 5 },
  { name: "Ahmad Fauzi", city: "Bekasi", text: "Pesan via WhatsApp responsif banget, langsung diproses. Packaging rapi dan aman sampai tujuan.", rating: 5 },
];
