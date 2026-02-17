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

export type Achievement = {
  title: string
  organization: string
  year: string
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
  role: "Staff Administrasi & Koordinasi Operasional",
  summary:
    "Profesional administrasi dengan pengalaman lebih dari 3 tahun di industri ritel dan penjualan. Memiliki keahlian kuat dalam manajemen data, laporan keuangan, dan koordinasi operasional. Pengalaman di bidang sales telah mengasah kemampuan komunikasi interpersonal dan orientasi pada target, yang saya kombinasikan dengan ketelitian administratif untuk mendukung efisiensi alur kerja perusahaan",
  contacts: {
    email: "nilawatinew786@gmail.com",
    instagram: "https://www.instagram.com/_nilawtt?utm_source=qr&igsh=ZDJra2NlMjdyY3ls",
    phone: "+6287796301889",
    linkedin: "https://www.linkedin.com/in/nila-wati786",
  },
  skills: [
    {
      category: "Teknis",
      items: [
        "Pengolahan Data",
        "Pelaporan Keuangan Dasar",
        "Manajemen Inventaris",
        "Pengoperasian Sistem POS",
      ],
    },
    {
      category: "Non-Teknis",
      items: [
        "Komunikasi Interpersonal",
        "Manajemen Waktu",
        "Ketelitian dan Akurasi",
        "Pemecahan Masalah",
        "Kolaborasi Tim",
      ],
    },
  ],
  Workexperience: [
    {
      role: "Sales Person",
      company: "PT. Media Group Internasional, Kota Palangka Raya",
      start: "Des 2025",
      end: "Sekarang",
      bullets: [
        "Mencatat dan mengelola transaksi penjualan menggunakan sistem Point-of-Sale (POS) secara akurat sebagai bagian dari administrasi operasional",
        "Bekerja sama dengan tim dalam audit stok barang untuk memastikan kesesuaian dan keakuratan data inventaris",
        "Mendukung kelancaran operasional harian melalui pengelolaan data transaksi, komunikasi pelanggan, dan administrasi layanan",
        "Berkoordinasi dengan tim dalam kegiatan operasional dan promosi, serta melakukan tindak lanjut pelanggan untuk menjaga hubungan dan stabilitas operasional",
      ],
    },
    {
      role: "Staff Administrasi & Operasional",
      company: "Toko Kilometer 20, Kota Palangka Raya",
      start: "Jan 2023",
      end: "Des 2025",
      bullets: [
        "Mengelola transaksi harian/mingguan, laporan utang-piutang, dan menyediakan data akurat untuk keputusan finansial.",
        "Mengoptimalkan alur kerja dari penyediaan, pengecekan, hingga pengiriman barang untuk efisiensi proses.",
        "Menganalisis data stok untuk menjaga ketersediaan produk dan memberi rekomendasi pembelian.",
        "Menangani korespondensi dan pelayanan pelanggan (daring/luring) untuk memastikan kepuasan dan loyalitas.",
      ],
    },
  ] as Experience[],
    Organizationexperience: [
    {
      role: "Bendahara - Senat Mahasiswa Fakultas Ushuluddin Adab dan Dakwah",
      company: "IAIN Palangka Raya",
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
        "Melakukan evaluasi program yang sedang/telah selesai berjalan secara berkala dengan menyusun Laporan Pertanggungjawaban (LPJ) sebagai dasar perbaikan strategis",
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
      degree: "S1 - Institut Agama Islam Negeri Palangka Raya",
      school: "Program Studi Ilmu Al-Quran dan Tafsir",
      start: "2018",
      end: "2022",
    },
    {
      degree: "SMA - SMA Muhammadiyah 1 Palangka Raya",
      school: "Ilmu Pengetahuan Sosial",
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
  achievements: [
    { 
        title: "Certified International Specialist in Data Modelling ", 
        organization: "PASAS Institute", 
        year: "2026" 
    },
    { 
        title: "Juara 2 Tim - Learning Path Data Analytics, Data Engineering, Machine Learning, dan Deep Learning", 
        organization: "KomDigi x DQLab", 
        year: "2025" 
    },
    { 
        title: "Peserta Kompetisi Kaligrafi Kategori Naskah", 
        organization: "MTQ ke-56 Kotawaringin Timur", 
        year: "2019" 
    },
  ] as Achievement[],
  adminprojects: [
    {
      title: "Transformasi Administrasi Data",
      image: "/images/transformasi.jpg",
      alt: "transformasi",
      link: "https://www.linkedin.com/posts/nila-wati786_admin-activity-7408699806723846144-BqVK?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFIgAiIB6l1SQkTA4MT6ICC32jAc7SO21hw",
    },
    {
      title: "Laporan Administrasi Mega Abadi",
      image: "/images/laporan.jpg",
      alt: "Laporan Administrasi Mega Abadi",
      link: "https://www.linkedin.com/posts/nila-wati786_laporan-admin-activity-7406501018177302528-DFr3?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFIgAiIB6l1SQkTA4MT6ICC32jAc7SO21hw",
    },
    {
      title: "Microsoft Excel untuk Pencatatan Keuangan Dasar - Kelas Karir",
      image: "/images/excel.jpg",
      alt: "Excel Keuangan",
      link: "https://www.linkedin.com/posts/nila-wati786_mini-portofolio-activity-7340654058493366273-mM8N?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFIgAiIB6l1SQkTA4MT6ICC32jAc7SO21hw",
    },
  ] as Project[],
  dataprojects: [
    {
      title: "Data Analyst with Excel - Ousean Group",
      image: "/images/final-project-ousean.png",
      alt: "Laporan analisis data peserta magang menggunakan Excel dan visualisasi di PowerPoint",
      link: "https://www.linkedin.com/posts/nila-wati786_analisa-data-activity-7351070489806524418-eGsw?utm_source=share&utm_medium=member_desktop&rcm=ACoAADoZ7oIB21BETzxOr5fzD7OTMxKt_jSYcew",
    },
    {
      title: "Data Visualization with Excel — MySkill",
      image: "/images/data-visualization-myskill.png",
      alt: "Visualisasi data produksi dan pengeluaran ternak dengan Excel",
      link: "https://www.linkedin.com/posts/nila-wati786_data-visualization-using-excel-activity-7346516008997670913-mzgz?utm_source=share&utm_medium=member_desktop&rcm=ACoAADoZ7oIB21BETzxOr5fzD7OTMxKt_jSYcew",
    },
    {    
      title: "Dashboard Penjualan Toko Sinar Surya Tahun 2024",
      image: "/images/dashboard-sinar.jpg",
      alt: "Dashboard",
      link: "https://docs.google.com/spreadsheets/d/1z0vzn2zqNRAJbeMGxzUoCMnrx_yld5cX/edit?usp=sharing&ouid=105377082677061839453&rtpof=true&sd=true",
    },
    {    
      title: " Indonesian Provincial Sentiment Tracker",
      image: "/images/peta.jpg",
      alt: "Peta Indonesia",
      link: "https://www.linkedin.com/posts/nila-wati786_indonesia-sentiment-map-project-activity-7398531235465224192-gHsa?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFIgAiIB6l1SQkTA4MT6ICC32jAc7SO21hw",
    },
    {
      title: "Dashboard Penjualan",
      image: "/images/sales_dashboard.jpg",
      alt: "sales",
      link: "https://www.linkedin.com/posts/nila-wati786_end-to-end-worklow-activity-7397501946632265729-B8Og?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFIgAiIB6l1SQkTA4MT6ICC32jAc7SO21hw",
    },
  ] as Project[],
  visualisasiprojects: [
   {
      title: "Infografis Daya Saing Tenaga Kerja Indonesia",
      image: "/images/tenaga-kerja-indonesia.png",
      alt: "Infografis daya saing tenaga kerja Indonesia di kawasan ASEAN",
      link: "https://www.linkedin.com/posts/nila-wati786_halo-ini-infografis-yang-aku-bikin-pakai-activity-7359858757192835072-4b1y?utm_source=share&utm_medium=member_desktop&rcm=ACoAADoZ7oIB21BETzxOr5fzD7OTMxKt_jSYcew"
    },
    {
      title: "Infografis Etika Digital — Canva Camp",
      image: "/images/etika-digital.png",
      alt: "Infografis Etika Digital: Jadi Pengguna Cerdas di Dunia Maya",
      link: "https://www.linkedin.com/posts/nila-wati786_halooo-ini-adalah-final-project-dari-canva-activity-7347804955061211136-nLbA?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFIgAiIB6l1SQkTA4MT6ICC32jAc7SO21hw",
    },
  ] as Project[],
}