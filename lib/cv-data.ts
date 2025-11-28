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
  link?: string
}

export const cvData = {
  name: "Nila Wati",
  role: "Karyawan Administrasi & Operasional Toko",
  summary:
    "Profesional administrasi yang terorganisir, teliti, dan mandiri dengan pengalaman 3 tahun dalam mendukung kelancaran berbagai tugas administrasi dan operasional bisnis",
  contacts: {
    email: "nilawatinew786@gmail.com",
    instagram: "https://www.instagram.com/_nilawtt?utm_source=qr&igsh=ZDJra2NlMjdyY3ls",
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
      start: "Januari 2023",
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
      degree: "S1 - Institut Agama Islam Negeri Palangka Raya",
      school: "Ilmu Al-Quran dan Tasir",
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
  projects: [
    {
      title: "Cleaning Data - Ousean Group",
      summary:
        "Menyelesaikan final project dari Ousean Group dengan menganalisis data peserta magang. Proses mencakup data cleaning (duplikasi, format tanggal, kapitalisasi), analisis statistik deskriptif dengan Excel (COUNTIF, PivotTable), hingga visualisasi data dan penyajian laporan di PowerPoint dan Canva.",
      impact:
        "Meningkatkan keterampilan analisis data, pembuatan insight visual, dan komunikasi.",
      image: "/images/final-project-ousean.png",
      alt: "Laporan analisis data peserta magang menggunakan Excel dan visualisasi di PowerPoint",
      link: "https://www.linkedin.com/posts/nila-wati786_analisa-data-activity-7351070489806524418-eGsw?utm_source=share&utm_medium=member_desktop&rcm=ACoAADoZ7oIB21BETzxOr5fzD7OTMxKt_jSYcew",
    },
    {
      title: "Data Visualization with Excel — MySkill",
      summary:
        "Mengerjakan mini task MySkill tentang visualisasi data menggunakan Microsoft Excel. Membuat berbagai jenis chart seperti column, line, pie, dan combo axis untuk menampilkan data produksi dan pengeluaran ternak secara informatif dan mudah dipahami.",
      impact:
        "Meningkatkan kemampuan membaca, menganalisis, dan menyajikan data secara efisien melalui visualisasi yang menarik.",
      image: "/images/data-visualization-myskill.png",
      alt: "Visualisasi data produksi dan pengeluaran ternak dengan Excel",
      link: "https://www.linkedin.com/posts/nila-wati786_data-visualization-using-excel-activity-7346516008997670913-mzgz?utm_source=share&utm_medium=member_desktop&rcm=ACoAADoZ7oIB21BETzxOr5fzD7OTMxKt_jSYcew",
    },    
    {
      title: "Infografis Daya Saing Tenaga Kerja Indonesia",
      summary: "Membuat infografis menggunakan Canva dengan penerapan prinsip desain visual. Visualisasi datanya diolah dari Excel untuk menampilkan perbandingan daya saing tenaga kerja Indonesia di ASEAN.",
      impact: "Meningkatkan pemahaman publik melalui penyajian data yang menarik dan informatif.",
      image: "/images/tenaga-kerja-indonesia.png",
      alt: "Infografis daya saing tenaga kerja Indonesia di kawasan ASEAN",
      link: "https://www.linkedin.com/posts/nila-wati786_halo-ini-infografis-yang-aku-bikin-pakai-activity-7359858757192835072-4b1y?utm_source=share&utm_medium=member_desktop&rcm=ACoAADoZ7oIB21BETzxOr5fzD7OTMxKt_jSYcew"
    },
    {
      title: "Infografis Etika Digital — Canva Camp",
      summary:
        "Final project dari Canva Camp berupa infografis bertema etika digital yang menekankan pentingnya komunikasi sopan, menghargai hak cipta, dan menjaga privasi di dunia maya.",
      impact:
        "Meningkatkan kesadaran akan etika berinternet dan tanggung jawab digital melalui desain visual yang edukatif.",
      image: "/images/etika-digital.png",
      alt: "Infografis Etika Digital: Jadi Pengguna Cerdas di Dunia Maya",
      link: "https://www.linkedin.com/posts/nila-wati786_halooo-ini-adalah-final-project-dari-canva-activity-7347804955061211136-nLbA?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFIgAiIB6l1SQkTA4MT6ICC32jAc7SO21hw",
    },
    {
      title: "Dashboard Penjualan Toko Sinar Surya Tahun 2024",
      summary:
        "Dashboard yang dibuat sepenuhnya dengan Microsot Excel untuk mendemonstrasikan bagaimana data mentah dapat diubah menjadi wawasan yang jelas untuk pengambilan keputusan usaha kecil.",
      impact:
        "Kemampuan untuk menyajikan data yang kompleks secara visual dan ringkas, memungkinkan pemilik bisnis (yang mungkin non-teknis) membuat keputusan yang lebih baik dengan cepat.",
      image: "/images/dashboard-sinar.jpg",
      alt: "Dashboard",
      link: "https://www.linkedin.com/posts/nila-wati786_end-to-end-worklow-activity-7397501946632265729-B8Og?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFIgAiIB6l1SQkTA4MT6ICC32jAc7SO21hw",
    },  
     {
      title: "Video Pegawai Toko - Artificial Intelligence",
      summary:
        "Video ini menggambarkan pekerjaan saya sehari-hari yang dibuat menggunakan video generatif AI.",
      impact:
        "Proyek ini menunjukkan adaptif dan mahir menggunakan alat AI untuk menghasilkan konten visual berkualitas tinggi.",
      image: "/images/generatif-AI.jpg",
      alt: "Generatif",
      link: "https://www.linkedin.com/posts/nila-wati786_baru-coba-membuat-video-menggunakan-ai-untuk-activity-7395339114277007360-m3WT?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFIgAiIB6l1SQkTA4MT6ICC32jAc7SO21hw",
    }  
  ] as Project[],
}
