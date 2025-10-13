export type Experience = {
  role: string
  company: string
  location?: string
  start: string
  end: string
  bullets: string[]
}

export type Education = {
  degree: string
  school: string
  field?: string
  start?: string
  end?: string
}

export type Certification = {
  title: string
  date: string
}

export type Project = {
  title: string
  summary: string
  impact: string
  image?: string
  alt?: string
}

export const cvData = {
  name: "Nila Wati",
  role: "Karyawan Administrasi & Operasional Toko",
  summary:
    "Profesional administrasi yang terorganisir, teliti, dan mandiri dengan pengalaman 2+ tahun mendukung kelancaran operasional bisnis. Terampil dalam entri data, pembukuan dasar, pelaporan, serta manajemen inventaris. Menguasai Microsoft Excel dan pengarsipan digital untuk mendukung pengambilan keputusan yang akurat.",
  contacts: {
    email: "nilawatinew786@gmail.com",
    phone: "0877-9630-1889",
    linkedin: "https://www.linkedin.com/in/nila-wati786",
  },
  skills: [
    {
      category: "Administrasi & Perangkat Lunak",
      items: [
        "Entri Data & Pengolahan Data",
        "Pembukuan & Pelaporan Keuangan Dasar",
        "Manajemen Inventaris & Pengarsipan Digital",
        "Microsoft Office (Excel, Word, PowerPoint)",
        "Canva",
      ],
    },
    {
      category: "Interpersonal",
      items: [
        "Komunikasi Efektif & Kerja Sama Tim",
        "Manajemen Waktu & Pemecahan Masalah",
        "Fleksibilitas & Kolaborasi",
      ],
    },
  ],
  experience: [
    {
      role: "Karyawan Administrasi dan Operasional Toko",
      company: "Toko Kilometer 20, Kota Palangka Raya",
      start: "2023",
      end: "Sekarang",
      bullets: [
        "Mengelola transaksi harian/mingguan, laporan utang-piutang, dan menyediakan data akurat untuk keputusan finansial.",
        "Mengoptimalkan alur kerja dari penyediaan, pengecekan, hingga pengiriman barang untuk efisiensi proses.",
        "Menganalisis data stok untuk menjaga ketersediaan produk dan memberi rekomendasi pembelian.",
        "Menangani korespondensi dan pelayanan pelanggan (daring/luring) untuk memastikan kepuasan dan loyalitas.",
      ],
    },
  ] as Experience[],
  education: [
    {
      degree: "S1 - Program Studi Ilmu Al-Quran dan Tafsir",
      school: "Institut Agama Islam Negeri Palangka Raya",
      start: "2018",
      end: "2022",
    },
    {
      degree: "SMA - Ilmu Pengetahuan Sosial",
      school: "SMA Muhammadiyah 1 Palangka Raya",
      start: "2015",
      end: "2018",
    },
  ] as Education[],
  certifications: [
    { title: "Diklat Nasional: Mengenal Coding dan AI untuk Pembelajaran", date: "Juli 2025" },
    { title: "Kelas Karir: Microsoft Excel untuk Pencatatan Keuangan Dasar", date: "Juli 2025" },
    { title: "DQLab Academy: Bootcamp Data Analyst with Excel Batch 18", date: "Sedang Berjalan" },
    { title: "Kelas Karir: Pelatihan Excel Admin Perkantoran", date: "September 2025" },
  ] as Certification[],
  projects: [
    {
      title: "Optimasi Alur Operasional & Stok",
      summary:
        "Menyusun ulang alur pengecekan dan pengiriman barang, serta analisis stok untuk mengurangi kehabisan barang.",
      impact: "Peningkatan efisiensi dan akurasi proses operasional.",
      image: "/alur-operasional-inventaris-diagram.jpg",
      alt: "Diagram alur operasional dan manajemen stok",
    },
    {
      title: "Dashboard Laporan Utang-Piutang (Excel)",
      summary: "Membangun template dan ringkasan mingguan menggunakan pivot & grafik untuk monitoring keuangan dasar.",
      impact: "Transparansi dan kecepatan pelaporan meningkat.",
      image: "images/excel.jpg",
      alt: "Dashboard Excel untuk laporan utang-piutang dengan grafik",
    },
    {
      title: "Standarisasi Korespondensi Pelanggan",
      summary: "Menyusun panduan balasan dan pelacakan keluhan untuk konsistensi layanan daring maupun luring.",
      impact: "Kepuasan pelanggan dan retensi meningkat.",
      image: "/template-korespondensi-pelanggan-email.jpg",
      alt: "Template standar korespondensi pelanggan",
    },
  ] as Project[],
}
