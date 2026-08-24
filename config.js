/*
  AGOENG WONG TOUR
  CONFIG v3.1
  ==========================================
  File utama untuk maintenance data website.

  YANG PALING SERING DIEDIT:
  - WhatsApp
  - Join Agen
  - Social Media
  - QRIS
  - Katalog
  - Hero
  - SEO

  JANGAN memasukkan:
  password, PIN, API key, token rahasia,
  credential provider atau data pembayaran sensitif.
*/

const SITE_CONFIG = {

  // ==============================
  // BRAND
  // ==============================
  brand: {
    name: "AGOENG WONG",
    subName: "TOUR",
    tagline: "Travel • Payment • Digital • Delivery",
    poweredBy: "Powered by Agoeng Wong",

    // MASTER LOGO
    logo: "assets/logo-master.png",

    // ICON TEKNIS
    favicon: "assets/logo-aw-icon-padded.png"
  },


  // ==============================
  // KONTAK
  // ==============================
  contact: {
    whatsapp: "6285600602300",
    displayPhone: "0856 0060 2300",
    hours: "Setiap Hari • 08.00–21.00 WIB"
  },


  // ==============================
  // SEO
  // ==============================
  seo: {
    title: "Agoeng Wong Tour | Travel • Payment • Digital • Delivery",

    description:
      "Agoeng Wong Tour menyediakan layanan travel, tiket, hotel, paket tour, payment, layanan digital dan kebutuhan transaksi melalui kanal resmi.",

    keywords:
      "Agoeng Wong Tour, travel Indonesia, tiket pesawat, tiket kereta, hotel, paket tour, travel online, agen travel, reseller travel, layanan digital",

    author: "Agoeng Wong",

    // Nanti ganti setelah domain final
    siteUrl: "https://contoh-domain-anda.com",

    // Gunakan master logo dulu
    ogImage: "assets/logo-master.png"
  },


  // ==============================
  // ANNOUNCEMENT
  // ==============================
  announcement: {
    enabled: false,
    text: "PROMO TERBARU AGOENG WONG TOUR — Hubungi WhatsApp untuk informasi."
  },


  // ==============================
  // HERO
  // ==============================
  hero: {
    eyebrow: "TRAVEL • PAYMENT • DIGITAL • DELIVERY",

    title:
      "Perjalanan & transaksi digital dalam <span>satu layanan.</span>",

    description:
      "Konsultasikan tiket, hotel, paket tour, layanan digital dan kebutuhan transaksi melalui Agoeng Wong Tour.",

    // Gunakan master logo dulu.
    // Nanti dapat diganti dengan banner resmi.
    image: "assets/logo-master.png",

    visualTitle: "AGOENG WONG TOUR",

    visualSub:
      "Travel • Payment • Digital • Delivery"
  },


  // ==============================
  // LINK UTAMA
  // ==============================
  links: {

    // GANTI dengan link Join Agen resmi
    joinAgent: "#",

    // Jika nanti ada halaman MMBC resmi
    mmbc: "#",

    catalog: "#katalog"
  },


  // ==============================
  // TRUST
  // ==============================
  trust: [
    "Admin WhatsApp",
    "Layanan melalui sistem/provider resmi",
    "Konfirmasi sebelum pembayaran",
    "Informasi layanan transparan"
  ],


  // ==============================
  // STATISTIK
  // ==============================
  stats: [
    ["BISA ORDER", "Melalui WhatsApp"],
    ["BERBAGAI", "Produk & layanan"],
    ["08–21 WIB", "Jam operasional"],
    ["RESMI", "Konfirmasi sebelum bayar"]
  ],


  // ==============================
  // LAYANAN
  // ==============================
  serviceTitle: "Layanan Agoeng Wong Tour",

  serviceDesc:
    "Pilih kebutuhan Anda. Detail harga, ketersediaan dan proses dikonfirmasi sebelum transaksi.",

  services: [

    [
      "✈️",
      "Tiket Pesawat",
      "Domestik & internasional.",
      "Halo, saya ingin cek tiket pesawat."
    ],

    [
      "🚆",
      "Kereta & Whoosh",
      "KAI, Whoosh/KCIC dan layanan kereta.",
      "Halo, saya ingin cek tiket kereta/Whoosh."
    ],

    [
      "🏨",
      "Hotel",
      "Booking hotel sesuai kebutuhan.",
      "Halo, saya ingin cek hotel."
    ],

    [
      "🧳",
      "Paket Tour",
      "Wisata domestik & internasional.",
      "Halo, saya ingin konsultasi paket tour."
    ],

    [
      "💳",
      "Payment & Tagihan",
      "Layanan pembayaran yang tersedia pada sistem.",
      "Halo, saya ingin cek layanan payment/tagihan."
    ],

    [
      "📱",
      "Pulsa & Data",
      "Pulsa, paket data dan top-up yang tersedia.",
      "Halo, saya ingin pulsa/data/top-up."
    ],

    [
      "📦",
      "Kirim Paket",
      "Regular, express, cargo dan layanan yang tersedia.",
      "Halo, saya ingin kirim paket."
    ],

    [
      "🎟️",
      "Voucher & Rekreasi",
      "Voucher, tiket rekreasi dan layanan terkait.",
      "Halo, saya ingin cek voucher/tiket rekreasi."
    ]

  ],


  // ==============================
  // KATALOG
  // ==============================
  catalog: [

    [
      "travel",
      "✈️",
      "Tiket Pesawat",
      "Booking melalui admin/sistem yang tersedia.",
      "Halo, saya ingin pesan tiket pesawat."
    ],

    [
      "travel",
      "🚆",
      "Kereta / Whoosh",
      "Booking melalui admin/sistem yang tersedia.",
      "Halo, saya ingin pesan tiket kereta/Whoosh."
    ],

    [
      "travel",
      "🏨",
      "Hotel",
      "Booking sesuai kebutuhan.",
      "Halo, saya ingin booking hotel."
    ],

    [
      "travel",
      "🧳",
      "Paket Tour",
      "Konsultasi kebutuhan perjalanan.",
      "Halo, saya ingin konsultasi paket tour."
    ],

    [
      "payment",
      "💳",
      "Payment / Tagihan",
      "Cek layanan yang tersedia.",
      "Halo, saya ingin cek layanan payment/tagihan."
    ],

    [
      "payment",
      "📱",
      "Pulsa / Data / Top-up",
      "Order melalui WhatsApp.",
      "Halo, saya ingin pulsa/data/top-up."
    ],

    [
      "delivery",
      "📦",
      "Kirim Paket",
      "Cek tujuan dan layanan.",
      "Halo, saya ingin kirim paket."
    ],

    [
      "payment",
      "▦",
      "QRIS",
      "Gunakan setelah nominal dan instruksi dikonfirmasi.",
      "Halo, saya ingin informasi pembayaran QRIS."
    ]

  ],


  // ==============================
  // CARA ORDER
  // ==============================
  steps: [

    [
      "01",
      "Pilih layanan",
      "Pilih produk dari katalog atau chat admin."
    ],

    [
      "02",
      "Kirim detail",
      "Berikan rute, tanggal, jumlah atau data yang diperlukan."
    ],

    [
      "03",
      "Konfirmasi",
      "Admin mengecek harga, ketersediaan dan instruksi."
    ],

    [
      "04",
      "Bayar & proses",
      "Gunakan metode pembayaran resmi yang diberikan admin/provider."
    ]

  ],


  // ==============================
  // AGEN
  // ==============================
  agent: {

    title:
      "Bangun usaha travel & layanan digital bersama Agoeng Wong Tour.",

    description:
      "Pelajari sistem, produk, pendaftaran dan cara mulai transaksi. Gunakan link pendaftaran resmi setelah informasi dikonfirmasi.",

    badge: "PELUANG AGEN"
  },


  // ==============================
  // QRIS
  // ==============================
  qris: {

    // true = tampil
    // false = sembunyikan
    enabled: true,

    // SEMENTARA menggunakan logo.
    // Nanti ganti dengan QRIS asli.
    image: "assets/qris-agoeng-wong.png",

    merchant: "QRIS RESMI AGOENG WONG TOUR",

    nmid:
      "NMID: ID2025381330518",

    helpTitle:
      "Cara Bayar QRIS",

    helpText:
      "Konfirmasi nominal dan instruksi terlebih dahulu. Gunakan QRIS resmi yang diberikan admin. Simpan bukti pembayaran dan kirim sesuai instruksi admin."
  },


  // ==============================
  // METODE PEMBAYARAN
  // ==============================
  paymentMethods: [

    [
      "🏦",
      "Transfer Bank",
      "Gunakan rekening resmi yang diberikan admin."
    ],

    [
      "👛",
      "E-Wallet",
      "Gunakan hanya kanal yang dikonfirmasi admin."
    ],

    [
      "▦",
      "QRIS",
      "Gunakan QRIS merchant/provider yang benar dan terverifikasi."
    ]

  ],


  // ==============================
  // SOCIAL MEDIA
  // ==============================
  social: [

    [
      "Facebook",
      "fa-brands fa-facebook-f",
      "https://facebook.com/",
      "Akun/Page resmi",
      "#1877F2"
    ],

    [
      "Instagram",
      "fa-brands fa-instagram",
      "https://instagram.com/",
      "Akun resmi",
      "#E4405F"
    ],

    [
      "TikTok",
      "fa-brands fa-tiktok",
      "https://tiktok.com/",
      "Akun resmi",
      "#000000"
    ],

    [
      "YouTube",
      "fa-brands fa-youtube",
      "https://youtube.com/",
      "Channel resmi",
      "#FF0000"
    ],

    [
      "Telegram",
      "fa-brands fa-telegram",
      "https://t.me/",
      "Channel resmi",
      "#229ED9"
    ],

    [
      "Google Business",
      "fa-brands fa-google",
      "https://maps.google.com/",
      "Profil bisnis",
      "#4285F4"
    ]

  ],


  // ==============================
  // FOOTER
  // ==============================
  footer: {

    location: "Indonesia",

    legalNote:
      "Informasi produk, harga, ketersediaan, komisi dan ketentuan mengikuti provider/sistem yang berlaku."
  }

};
