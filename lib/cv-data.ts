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
    { title: "DQLab Academy: Bootcamp Data Analyst with Excel Batch 18", date: "Sedang Berjalan" },
    { title: "Digital Talent Scholarship: Practical Real Business Application for Business Intelligence Analyst", date: "September 2025" },
    { title: "Kelas Karir: Pelatihan Excel Admin Perkantoran", date: "September 2025" },
    { title: "Digital Talent Scholarship: Fundamental of Data Analyst", date: "Agustus 2025" },
    { title: "Universiti Kebangsaan Malaysia (UKM): Webinar Antarbangsa Ulama Nusantar ke 5", date: "Juli 2025" },
    { title: "MySkill: Data Visualization with Microsoft Excel", date: "Juli 2025" },
    { title: "Kelas Karir: Microsoft Excel untuk Pencatatan Keuangan Dasar", date: "Juli 2025" },
    { title: "Dicoding Indonesia: AI Praktis untuk Produktivitas", date: "Juni 2025" },
  ] as Certification[],
  projects: [
    {
      title: "Optimasi Alur Operasional & Stok",
      summary:
        "Menyusun ulang alur pengecekan dan pengiriman barang, serta analisis stok untuk mengurangi kehabisan barang.",
      impact: "Peningkatan efisiensi dan akurasi proses operasional.",
      image: "/images/optimasi.png",
      alt: "Diagram alur operasional dan manajemen stok",
    },
    {
      title: "Dashboard Laporan Utang-Piutang (Excel)",
      summary: "Membangun template dan ringkasan mingguan menggunakan pivot & grafik untuk monitoring keuangan dasar.",
      impact: "Transparansi dan kecepatan pelaporan meningkat.",
      image: "images/dashboard.jpg",
      alt: "Dashboard Excel untuk laporan utang-piutang dengan grafik",
    },
    {
      title: "Standarisasi Korespondensi Pelanggan",
      summary: "Menyusun panduan balasan dan pelacakan keluhan untuk konsistensi layanan daring maupun luring.",
      impact: "Kepuasan pelanggan dan retensi meningkat.",
      image: "images/layanan.jpg",
      alt: "Template standar korespondensi pelanggan",
    },
    {
      title: "Pra-Hackathon Data Analytics",
      summary: "Pada tahap ini, peserta akan diberikan tantangan atau tugas khusus yang menguji pemahaman dan kemampuan praktis mereka berdasarkan materi pelatihan yang telah diikuti. Tujuan Pra-hackathon adalah memastikan peserta memiliki kesiapan teknis dan kreativitas dalam mengaplikasikan ilmu yang telah dipelajari selama pelatihan sebelum memasuki kegiatan Hackathon.",
      impact: "Sedang Berjalan.",
      image: "images/pra hackaton.jpg",
      alt: "Foto Pra Hackaton",
    },
  ] as Project[],
}
