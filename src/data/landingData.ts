import { ChapterSample, MoodOption, NikmatItem } from "../types";

export const PRODUCT_NAME = "Portal 1000 Nikmat Allah";
export const BRAND_NAME = "SmartBook.ID";
export const BRAND_SUBTITLE = "Penerbit & Pengembang Media Edukasi Islami Digital";
export const POSITIONING = "Sistem Muhasabah & Jurnal Syukur Digital Terpadu";

export const NORMAL_PRICE = "Rp149.000";
export const CURRENT_PRICE = "Rp89.000";
export const RAW_PRICE = 89000;

export const CHECKOUT_URL = "https://smartbook.myscalev.com/cart-portal-1000-nikmat-allah";
export const WHATSAPP_NUMBER = "6282227771941";
export const WHATSAPP_DISPLAY = "0822-2777-1941";
export const WHATSAPP_ACCESS_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Assalamu'alaikum Admin SmartBook.ID, saya sudah melakukan pembayaran namun belum menerima link akses Portal 1000 Nikmat Allah. Mohon bantuannya.")}`;
export const WHATSAPP_HELP_URL = WHATSAPP_ACCESS_URL;
export const WHATSAPP_SUPPORT_URL = WHATSAPP_ACCESS_URL;

export const SMARTBOOK_LOGO_URL = "https://i.ibb.co.com/7xR4c70n/Chat-GPT-Image-Jan-9-2026-07-13-06-AM.png";

// Portal Menu Screenshots
export const DASHBOARD_MOBILE_IMAGE_URL = "https://smartbook.id/k_image_1000_nkmt/1menudashbord1000nikmatallah.png";
export const PODCAST_AUDIO_IMAGE_URL = "https://smartbook.id/k_image_1000_nkmt/2menupadcastaudio1000nikmatallah.png";
export const MATERI_EBOOK_IMAGE_URL = "https://smartbook.id/k_image_1000_nkmt/3menumateriebook1000nikmatallah.png";
export const SLIDE_PRESENTASI_IMAGE_URL = "https://smartbook.id/k_image_1000_nkmt/4menuslidepresentasi1000nikmatallah.png";
export const WORKSHEET_DIGITAL_IMAGE_URL = "https://smartbook.id/k_image_1000_nkmt/5menuworksheetdigital1000nikmatallah.png";
export const WORKSHEET_PRINTABLE_IMAGE_URL = "https://smartbook.id/k_image_1000_nkmt/6menuworksheetprintable(50bab)1000nikmatallah.png";
export const TEMAN_MUHASABAH_AI_IMAGE_URL = "https://smartbook.id/k_image_1000_nkmt/7menutemanmuhasabah1000nikmatallah.png";

export interface PortalMenuItem {
  id: string;
  num: string;
  title: string;
  shortTitle: string;
  benefit: string;
  icon: string;
  badge: string;
  url: string;
  path: string;
}

export const PORTAL_MENU_GALLERY: PortalMenuItem[] = [
  {
    id: "dashboard",
    num: "1",
    title: "Dashboard",
    shortTitle: "Dashboard",
    benefit: "Semua menu tersusun dalam satu tempat.",
    icon: "Smartphone",
    badge: "Beranda Utama",
    url: DASHBOARD_MOBILE_IMAGE_URL,
    path: "app.smartbook.id/dashboard"
  },
  {
    id: "ebook",
    num: "2",
    title: "Materi Kajian",
    shortTitle: "Materi Kajian",
    benefit: "Pembahasan terstruktur yang dapat dipilih berdasarkan tema refleksi.",
    icon: "BookOpen",
    badge: "50 Bab Refleksi",
    url: MATERI_EBOOK_IMAGE_URL,
    path: "app.smartbook.id/materi-kajian"
  },
  {
    id: "podcast",
    num: "3",
    title: "Podcast Audio",
    shortTitle: "Podcast Audio",
    benefit: "Pilihan format audio untuk pengguna yang lebih nyaman mendengarkan.",
    icon: "Headphones",
    badge: "50 Audio Bab",
    url: PODCAST_AUDIO_IMAGE_URL,
    path: "app.smartbook.id/podcast-audio"
  },
  {
    id: "worksheet-digital",
    num: "4",
    title: "Worksheet Digital",
    shortTitle: "Worksheet Digital",
    benefit: "Membantu menuliskan hasil refleksi secara langsung.",
    icon: "Edit3",
    badge: "Isi Langsung",
    url: WORKSHEET_DIGITAL_IMAGE_URL,
    path: "app.smartbook.id/worksheet-digital"
  },
  {
    id: "worksheet-printable",
    num: "5",
    title: "Printable",
    shortTitle: "Printable",
    benefit: "Untuk pengguna yang lebih nyaman menulis dengan tangan.",
    icon: "Printer",
    badge: "Format Cetak A4",
    url: WORKSHEET_PRINTABLE_IMAGE_URL,
    path: "app.smartbook.id/worksheet-printable"
  },
  {
    id: "katalog",
    num: "6",
    title: "Katalog",
    shortTitle: "Katalog",
    benefit: "Membantu melihat kembali nikmat kecil yang sering dianggap biasa.",
    icon: "Layers",
    badge: "1000+ Nikmat",
    url: SLIDE_PRESENTASI_IMAGE_URL,
    path: "app.smartbook.id/katalog-nikmat"
  },
  {
    id: "teman-muhasabah",
    num: "7",
    title: "AI Teman Muhasabah",
    shortTitle: "AI Muhasabah",
    benefit: "Membantu eksplorasi pertanyaan refleksi, doa, ayat, dan topik terkait.",
    icon: "Bot",
    badge: "Asisten Refleksi",
    url: TEMAN_MUHASABAH_AI_IMAGE_URL,
    path: "app.smartbook.id/teman-muhasabah-ai"
  }
];

export const PROBLEM_CARDS = [
  {
    id: 1,
    lead: "Sehat terasa biasa...",
    twist: "sampai tubuh mulai sakit.",
    icon: "HeartPulse",
    tag: "Kesehatan",
  },
  {
    id: 2,
    lead: "Kehadiran orang tua dan keluarga terasa biasa...",
    twist: "sampai waktu bersama semakin sedikit.",
    icon: "Users",
    tag: "Keluarga",
  },
  {
    id: 3,
    lead: "Waktu terasa panjang...",
    twist: "sampai kita sadar hari-hari berlalu begitu cepat.",
    icon: "Clock",
    tag: "Waktu",
  },
  {
    id: 4,
    lead: "Apa yang kita miliki terasa kurang...",
    twist: "sampai kita melihat kembali betapa banyak yang sebenarnya masih ada.",
    icon: "Compass",
    tag: "Rezeki",
  },
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: "1",
    label: "BUKA",
    description: "Buka portal kapan pun Anda ingin memulai.",
    icon: "Smartphone",
  },
  {
    step: "2",
    label: "PILIH",
    description: "Pilih satu pembahasan yang paling dekat dengan keadaan Anda.",
    icon: "Compass",
  },
  {
    step: "3",
    label: "BACA ATAU DENGARKAN",
    description: "Gunakan format yang paling nyaman.",
    icon: "Headphones",
  },
  {
    step: "4",
    label: "RENUNGKAN",
    description: "Hubungkan pembahasan dengan kehidupan Anda hari ini.",
    icon: "Sparkles",
  },
  {
    step: "5",
    label: "TULISKAN",
    description: "Catat melalui worksheet atau jurnal, lalu lanjutkan lagi ketika siap.",
    icon: "Edit3",
  },
];

export const CORE_BENEFITS = [
  {
    title: "50 Bab Kajian Terstruktur",
    description: "Membantu merenungkan berbagai sisi nikmat dalam kehidupan.",
    icon: "BookOpen",
    badge: "50 Bab Kajian",
  },
  {
    title: "50 Podcast Audio",
    description: "Untuk pengguna yang lebih nyaman mendengarkan.",
    icon: "Headphones",
    badge: "50 Podcast Audio",
  },
  {
    title: "Worksheet Muhasabah Digital",
    description: "Membantu mengubah refleksi menjadi catatan personal.",
    icon: "Edit3",
    badge: "Worksheet Digital",
  },
  {
    title: "Printable Jurnal A4",
    description: "Untuk pengguna yang lebih nyaman menulis dengan tangan.",
    icon: "Printer",
    badge: "Printable Jurnal A4",
  },
  {
    title: "Katalog 1000+ Nikmat Allah",
    description: "Membantu melihat kembali nikmat kecil yang sering dianggap biasa.",
    icon: "Layers",
    badge: "Katalog 1000+ Nikmat",
  },
  {
    title: "AI Teman Muhasabah",
    description: "Membantu eksplorasi pertanyaan refleksi, doa, ayat, dan topik terkait.",
    icon: "Bot",
    badge: "AI Teman Muhasabah",
  },
];

export const EFFORT_REDUCTION_ITEMS = [
  "Materi untuk dibaca",
  "Audio untuk didengarkan",
  "Pertanyaan untuk direnungkan",
  "Jurnal untuk ditulis",
  "Worksheet muhasabah",
  "Daftar inspirasi nikmat",
  "Cara menyimpan semuanya agar mudah dibuka kembali",
];

export const OFFER_CHECKLIST = [
  "Portal 1000 Nikmat Allah",
  "50 Bab Kajian & 50 Audio Refleksi",
  "Worksheet Digital & Printable Jurnal",
  "Katalog 1000+ Nikmat Allah",
  "AI Teman Muhasabah",
  "Akses penuh digital",
  "Tanpa biaya bulanan",
];

export interface ProductVisualProofItem {
  id: string;
  title: string;
  caption: string;
  url: string;
  badge: string;
}

export const PRODUCT_VISUAL_PROOF_ITEMS: ProductVisualProofItem[] = [
  {
    id: "materi-kajian",
    title: "Materi Kajian",
    caption: "Pembahasan terstruktur yang dapat dipilih berdasarkan tema refleksi.",
    url: MATERI_EBOOK_IMAGE_URL,
    badge: "50 Bab Refleksi",
  },
  {
    id: "worksheet-digital",
    title: "Worksheet Digital",
    caption: "Media untuk menuliskan refleksi secara lebih terarah.",
    url: WORKSHEET_DIGITAL_IMAGE_URL,
    badge: "Format Digital",
  },
  {
    id: "ai-teman-muhasabah",
    title: "AI Teman Muhasabah",
    caption: "Alat bantu eksplorasi pertanyaan refleksi, doa, ayat, dan topik terkait.",
    url: TEMAN_MUHASABAH_AI_IMAGE_URL,
    badge: "Eksplorasi Tematik",
  },
  {
    id: "podcast-audio",
    title: "Podcast Audio",
    caption: "Pilihan format audio untuk pengguna yang lebih nyaman mendengarkan.",
    url: PODCAST_AUDIO_IMAGE_URL,
    badge: "50 Audio Bab",
  },
  {
    id: "worksheet-printable",
    title: "Printable Jurnal A4",
    caption: "Format siap cetak untuk pengguna yang lebih nyaman menulis dengan tangan.",
    url: WORKSHEET_PRINTABLE_IMAGE_URL,
    badge: "Siap Cetak",
  },
  {
    id: "dashboard",
    title: "Dashboard Terpadu",
    caption: "Semua menu tersusun dalam satu tempat agar mudah dibuka kembali.",
    url: DASHBOARD_MOBILE_IMAGE_URL,
    badge: "Sistem Terpadu",
  },
];

export const PRODUCT_FIT_POINTS = [
  "Merasa hari-hari berjalan begitu cepat.",
  "Ingin belajar lebih menyadari nikmat yang selama ini dianggap biasa.",
  "Ingin mulai jurnal syukur tetapi bingung harus memulainya.",
  "Lebih suka pembelajaran yang singkat dan ringan.",
  "Ingin bisa memilih antara membaca atau mendengarkan.",
  "Sibuk dan hanya punya beberapa menit.",
  "Ingin memiliki satu portal yang dapat dibuka kembali kapan saja.",
];

export const TRANSPARENCY_NOT = [
  "Bukan aplikasi terapi.",
  "Bukan pengganti dokter atau psikolog.",
  "Bukan pengganti ustaz atau sumber fatwa.",
  "Tidak menjanjikan kehidupan tanpa ujian.",
];

export const ACTIVATION_STEPS = [
  {
    step: "1",
    title: "Klik Ambil Akses",
    description: "Masuk ke checkout resmi.",
  },
  {
    step: "2",
    title: "Selesaikan Pembayaran",
    description: "Isi data dan pilih metode pembayaran.",
  },
  {
    step: "3",
    title: "Ikuti Panduan Aktivasi",
    description: "Ikuti petunjuk akses yang dikirimkan setelah pembayaran.",
  },
];

export const FAQS = [
  {
    question: "Berapa harga akses?",
    answer: "Harga normal Rp149.000. Selama masa peluncuran, akses tersedia seharga Rp89.000.",
  },
  {
    question: "Apakah ada biaya bulanan?",
    answer: "Tidak. Pembayaran dilakukan satu kali.",
  },
  {
    question: "Apakah produk fisik?",
    answer: "Tidak. Produk berbentuk digital.",
  },
  {
    question: "Apakah perlu instal aplikasi?",
    answer: "Tidak. Portal dapat dibuka melalui browser pada perangkat yang kompatibel.",
  },
  {
    question: "Apakah bisa digunakan dari HP?",
    answer: "Ya. Portal dirancang agar dapat digunakan dari HP.",
  },
  {
    question: "Apakah materi harus berurutan?",
    answer: "Tidak. Anda bisa memilih pembahasan yang paling relevan dengan kondisi atau tema refleksi yang ingin dilakukan.",
  },
  {
    question: "Berapa lama waktu yang dibutuhkan?",
    answer: "Tidak ada durasi wajib. Untuk penggunaan sederhana, Anda bisa meluangkan sekitar 5–10 menit.",
  },
  {
    question: "Apakah akses berlaku selamanya?",
    answer: "Akses diberikan sesuai ketentuan pembelian Portal 1000 Nikmat Allah.",
  },
  {
    question: "Apakah AI memberikan fatwa?",
    answer: "Tidak. AI digunakan sebagai alat bantu eksplorasi dan refleksi, bukan sebagai sumber fatwa.",
  },
  {
    question: "Bagaimana jika belum menerima link akses setelah pembayaran?",
    answer: "Link akses dan panduan aktivasi dikirim otomatis ke email Anda setelah pembayaran terverifikasi. Jika Anda belum menerima link atau email tidak masuk di kotak masuk/spam, silakan hubungi WhatsApp admin di 0822-2777-1941 untuk pengiriman link akses langsung.",
  },
];
