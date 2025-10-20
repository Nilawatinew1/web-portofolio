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
      title: "Pra-Hackathon Data Analytics",
      summary: "Pada tahap ini, peserta akan diberikan tantangan atau tugas khusus yang menguji pemahaman dan kemampuan praktis mereka berdasarkan materi pelatihan yang telah diikuti. Tujuan Pra-hackathon adalah memastikan peserta memiliki kesiapan teknis dan kreativitas dalam mengaplikasikan ilmu yang telah dipelajari selama pelatihan sebelum memasuki kegiatan Hackathon.",
      impact: "Sedang Berjalan.",
      image: "images/pra hackaton.jpg",
      alt: "Foto Pra Hackaton",
      link: "https://github.com/nilawati/pra-hackathon-analytics",
    },
    {
      title: "Final Project Ousean Group — Data Analyst with Excel",
      summary:
        "Menyelesaikan final project dari Ousean Group dengan menganalisis data peserta magang. Proses mencakup data cleaning (duplikasi, format tanggal, kapitalisasi), analisis statistik deskriptif dengan Excel (COUNTIF, PivotTable), hingga visualisasi data dan penyajian laporan di PowerPoint dan Canva.",
      impact:
        "Meningkatkan keterampilan analisis data, pembuatan insight visual, dan komunikasi.",
      image: "/images/final-project-ousean.png",
      alt: "Laporan analisis data peserta magang menggunakan Excel dan visualisasi di PowerPoint",
      link: "https://www.linkedin.com/posts/nila-wati786_analisa-data-activity-7351070489806524418-eGsw?utm_source=share&utm_medium=member_desktop&rcm=ACoAADoZ7oIB21BETzxOr5fzD7OTMxKt_jSYcew",
    },
    {
      title: "Mini Task: Data Visualization with Excel — MySkill",
      summary:
        "Mengerjakan mini task MySkill tentang visualisasi data menggunakan Microsoft Excel. Membuat berbagai jenis chart seperti column, line, pie, dan combo axis untuk menampilkan data produksi dan pengeluaran ternak secara informatif dan mudah dipahami.",
      impact:
        "Meningkatkan kemampuan membaca, menganalisis, dan menyajikan data secara efisien melalui visualisasi yang menarik.",
      image: "/images/data-visualization-myskill.png",
      alt: "Visualisasi data produksi dan pengeluaran ternak dengan Excel",
      link: "https://www.linkedin.com/posts/nila-wati786_data-visualization-using-excel-activity-7346516008997670913-mzgz?utm_source=share&utm_medium=member_desktop&rcm=ACoAADoZ7oIB21BETzxOr5fzD7OTMxKt_jSYcew",
    },    
    {
      title: "Booklet Webinar: Tafsir dan Hadits Nusantara",
      summary:
        "Mendesain booklet webinar antarbangsa yang membahas tafsir, hadis, dan pemikiran Islam kontemporer di era digital. Menyoroti tema integrasi ilmu, verifikasi hadis di media sosial, dan tantangan digitalisasi studi Islam.",
      impact:
        "Memperluas wawasan lintas disiplin antara teologi, sosial, dan teknologi.",
      image: "/images/tafsir-hadits-nusantara.png",
      alt: "Desain booklet webinar Tafsir dan Hadits Nusantara",
      link: "https://www.linkedin.com/posts/nila-wati786_ringkasan-activity-7347255494803169281-3GHL?utm_source=share&utm_medium=member_desktop&rcm=ACoAADoZ7oIB21BETzxOr5fzD7OTMxKt_jSYcew",
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
      link: "https://www.canva.com/",
    }
      
  ] as Project[],
}
