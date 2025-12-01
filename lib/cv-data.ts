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
  image?: string
  alt?: string
  link?: string
}

export const cvData = {
  name: "Nila Wati",
  role: "Karyawan Administrasi & Operasional Toko",
  summary:
    "Profesional administrasi dan operasional toko dengan pengalaman tiga tahun. Berfokus pada manajemen data yang akurat dan implementasi alur kerja efisien untuk mendukung kelancaran seluruh operasional bisnis di lingkungan ritel",
  contacts: {
    email: "nilawatinew786@gmail.com",
    instagram: "https://www.instagram.com/_nilawtt?utm_source=qr&igsh=ZDJra2NlMjdyY3ls",
    phone: "0877-9630-1889",
    linkedin: "https://www.linkedin.com/in/nila-wati786",
    WordPress: "https://nilamenulis.home.blog/",
  },
  skills: [
    {
      category: "Teknis",
      items: [
        "Entri Data",
        "Pengolahan Data",
        "Pelaporan Keuangan Dasar",
        "Manajemen Inventaris",
        "Pengarsipan Digital",
        "Microsoft Office - Excel, Word, PowerPoint",
        "Canva",
      ],
    },
    {
      category: "Non-Teknis",
      items: [
        "Kerja Sama Tim",
        "Manajemen Waktu",
        "Pemecahan Masalah",
        "Fleksibilitas",
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
    {
      role: "Bendahara - Senat Mahasiswa Fakultas Ushuluddin Adab dan Dakwah",
      compan: "IAIN Palangka Raya",
      start: "2020",
      end: "2021",
      bullets: [
        "Mengelola dan mengontrol seluruh Arus Kas organisasi, memastikan transparansi dan akuntabilitas keuangan harian",
        "Merancang, memonitor, dan mengawasi pelaksanaan Anggaran Tahunan Senat Mahasiswa (Rencana Anggaran Biaya/RAB) secara efisien",
        "Menyusun Laporan Keuangan (LPJ Keuangan) yang akurat dan komprehensif secara periodik sebagai bentuk pertanggungjawaban kepada Fakultas dan anggota Senat",
      ],
    },
    {
      role: "Divisi Pendidikan - Himpunan Mahasiswa Program Studi Ilmu Al-Quran dan Tasir",
      company: "IAIN Palangka Raya",
      start: "2019",
      end: "2020",
      bullets: [
        "Merancang dan melaksanakan Program Edukatif seperti kajian atau Halaqah berbasis Ilmu Al-Qur'an dan Tafsir",
        "Mengkoordinasikan Sumber Daya Akademik seperti dosen atau pakar dan memfasilitasi kebutuhan Mentoring/Peer-Teaching untuk peningkatan kompetensi anggota",
        "Melakukan Evaluasi Efektivitas Program secara berkala seperti menyusun Laporan Pertanggungjawaban (LPJ) sebagai dasar perbaikan strategis",
      ],
    },
    {
      role: "Sekretaris - Himpunan Mahasiswa Jurusan Ilmu Al-Quran dan Tasir",
      company: "IAIN Palangka Raya",
      start: "2018",
      end: "2019",
      bullets: [
        "Mengelola Sistem E-Arsip Digital terpusat serta bertanggung jawab atas notulensi rapat dan kerahasiaan data",
        "Menangani seluruh Korespondensi Resmi organisasi dan memastikan kepatuhan administrasi terhadap Standard Operating Procedure (SOP)",
        "Bertugas sebagai koordinator komunikasi dan dukungan operasional pimpinan",
      ],
    }
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
      title: "Data Analyst with Excel - Ousean Group",
      summary:
        "Melakukan pembersihan data peserta magang, pengolahan data dengan menganalisis statistik deskriptif, visualisasi data dan penyajian laporan",
      image: "/images/final-project-ousean.png",
      alt: "Laporan analisis data peserta magang menggunakan Excel dan visualisasi di PowerPoint",
      link: "https://www.linkedin.com/posts/nila-wati786_analisa-data-activity-7351070489806524418-eGsw?utm_source=share&utm_medium=member_desktop&rcm=ACoAADoZ7oIB21BETzxOr5fzD7OTMxKt_jSYcew",
    },
    {
      title: "Data Visualization with Excel — MySkill",
      summary:
        "Memvisualisasikan data untuk menampilkan data produksi dan pengeluaran ternak secara informatif",
      image: "/images/data-visualization-myskill.png",
      alt: "Visualisasi data produksi dan pengeluaran ternak dengan Excel",
      link: "https://www.linkedin.com/posts/nila-wati786_data-visualization-using-excel-activity-7346516008997670913-mzgz?utm_source=share&utm_medium=member_desktop&rcm=ACoAADoZ7oIB21BETzxOr5fzD7OTMxKt_jSYcew",
    },    
    {
      title: "Infografis Daya Saing Tenaga Kerja Indonesia",
      summary: "Membuat infografis menggunakan Canva dengan penerapan prinsip desain untuk menampilkan perbandingan daya saing tenaga kerja Indonesia di ASEAN",
      image: "/images/tenaga-kerja-indonesia.png",
      alt: "Infografis daya saing tenaga kerja Indonesia di kawasan ASEAN",
      link: "https://www.linkedin.com/posts/nila-wati786_halo-ini-infografis-yang-aku-bikin-pakai-activity-7359858757192835072-4b1y?utm_source=share&utm_medium=member_desktop&rcm=ACoAADoZ7oIB21BETzxOr5fzD7OTMxKt_jSYcew"
    },
    {
      title: "Infografis Etika Digital — Canva Camp",
      summary:
        "Final project dari Canva Camp berupa infografis bertema etika digital",
      alt: "Infografis Etika Digital: Jadi Pengguna Cerdas di Dunia Maya",
      link: "https://www.linkedin.com/posts/nila-wati786_halooo-ini-adalah-final-project-dari-canva-activity-7347804955061211136-nLbA?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFIgAiIB6l1SQkTA4MT6ICC32jAc7SO21hw",
    },
    {
      title: "Dashboard Penjualan Toko Sinar Surya Tahun 2024",
      summary:
        "Dashboard ini bertujuan untuk mendemonstrasikan data-data transaksi jual-beli dapat diubah menjadi wawasan penting dalam pengambilan keputusan usaha",
      image: "/images/dashboard-sinar.jpg",
      alt: "Dashboard",
      link: "https://docs.google.com/spreadsheets/d/1z0vzn2zqNRAJbeMGxzUoCMnrx_yld5cX/edit?usp=sharing&ouid=105377082677061839453&rtpof=true&sd=true",
    },  
     {
      title: "Video Pegawai Toko - Artificial Intelligence",
      summary:
        "Video ini menggambarkan pekerjaan saya sehari-hari sebagai pegawai yang dibuat menggunakan video generatif AI.",
      image: "/images/generatif-AI.jpg",
      alt: "Generatif",
      link: "https://www.linkedin.com/posts/nila-wati786_baru-coba-membuat-video-menggunakan-ai-untuk-activity-7395339114277007360-m3WT?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFIgAiIB6l1SQkTA4MT6ICC32jAc7SO21hw",
    }  
  ] as Project[],
}
