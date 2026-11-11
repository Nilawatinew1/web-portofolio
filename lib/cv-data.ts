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
  summary:
    "Digital Skills Enthusiast",
  contacts: {
    email: "nilawatinew786@gmail.com",
    linkedin: "https://www.linkedin.com/in/nila-wati786",
    tiktok: "https://www.tiktok.com/@_nilawtt",
  },
  certifications: [
    { title: "DQLab Academy: Bootcamp Data Analyst with Excel Batch 18 (Sedang Berjalan)",
      worksheetLink: "https://docs.google.com/spreadsheets/d/1iKxiJ4i7QhvwZSFnwmpgFIYv_OtgVHjn/edit?usp=drive_link&ouid=105377082677061839453&rtpof=true&sd=true",
    },
    { title: "Harisenin.com: Analyze Like a Pro (Juli 2025)",
      worksheetLink: "https://docs.google.com/spreadsheets/d/1NvfXSAYWjqpDZVXwYwSbuBS0S9BgCYQC/edit?usp=drive_link&ouid=105377082677061839453&rtpof=true&sd=true",
    },
    { title: "Kelas Karir: Pelatihan Excel Admin Perkantoran (September 2025)",
      worksheetLink: "#",
    },
    { title: "Digital Talent Scholarship: Fundamental of Data Analyst (Agustus 2025)",
      worksheetLink: "https://docs.google.com/presentation/d/17DdEj2Xf2UVeBYVKBFYrjNss1SQjGCMo/edit?usp=sharing&ouid=105377082677061839453&rtpof=true&sd=true",
    },
    { title: "Kelas Karir: Microsoft Excel untuk Pencatatan Keuangan Dasar (Juli 2025)",
      worksheetLink: "https://docs.google.com/spreadsheets/d/13mASoHe38aJlNd8inVrDHvSpSyGWkFM2/edit?usp=drive_link&ouid=105377082677061839453&rtpof=true&sd=true",
    },
    { title: "MySkill: Data Visualization Using Excel (Agustus 2025)",
      worksheetLink: "#",
    },
    { title: "Ousean Group: Data Analist dengan Microsoft Excel (Oktober 2025)",
      worksheetLink: "https://docs.google.com/spreadsheets/d/1WjrjuEpQHLRVoSOHraAGa07SWk51J1_L/edit?usp=sharing&ouid=105377082677061839453&rtpof=true&sd=true",
    },
    { title: "Harisenin.com: Bootcamp Kilat Staff Administrasi: Dasar Administrasi Perkantoran (Juli 2025)",
      worksheetLink: "#",
      },
    { title: "CanvaCamp (Agustus 2025)",
      worksheetLink: "https://drive.google.com/file/d/1CX0fq6syM_B6pqbgc0LaTjyIUGVuyRix/view?usp=drive_link",
      },
    { title: "RevoU: Excel for Data Analyst (Juni 2025)",
      worksheetLink: "https://docs.google.com/document/d/1S6rzuWR8VF5LJkqf4Sb2knJE7Xrp8Kyt/edit?usp=drive_link&ouid=105377082677061839453&rtpof=true&sd=true",
    },  
  ] as Certification[],
  achievements: [
    { 
        title: "Certified International Specialist in Data Modelling ",
        organization: "PASAS Institute",
        year: "2026",
        achievementLink: "https://drive.google.com/file/d/11d-CxMMgEb6wAdFBoe_QMTcqQxk0bXTr/view?usp=drive_link",
    },
    { 
        title: "Juara 2 Tim - Learning Path Data Analytics, Data Engineering, Machine Learning, dan Deep Learning",
        organization: "KomDigi x DQLab",
        year: "2025",
        achievementLink: "https://drive.google.com/file/d/1fXYwcvIKbeir3WnSdyl-Az1L3r-IqtWi/view?usp=drive_link",
    },
    { 
        title: "Peserta Kompetisi Kaligrafi Kategori Naskah",
        organization: "MTQ ke-56 Kotawaringin Timur",
        year: "2019",
        achievementLink: "https://drive.google.com/file/d/1ClGC7DO3WuHwhaP-0_BzxdU_l2ma22SP/view?usp=sharing",
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
      title: "Microsoft Excel untuk Pencatatan Keuangan Dasar",
      image: "/images/excel.jpg",
      alt: "Excel Keuangan",
      link: "https://www.linkedin.com/posts/nila-wati786_mini-portofolio-activity-7340654058493366273-mM8N?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFIgAiIB6l1SQkTA4MT6ICC32jAc7SO21hw",
    },
  ] as Project[],
  dataprojects: [
    {
      title: "Dashboard Performa Sales Person dan Preferensi Pelanggan",
      image: "/images/salesperson.jpg",
      alt: "sales",
      link: "https://www.linkedin.com/posts/nila-wati786_berikut-adalah-dashboard-yang-bersumber-dari-activity-7435222277467713536-T2L9?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFIgAiIB6l1SQkTA4MT6ICC32jAc7SO21hw",
    },
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
      title: "Indonesian Provincial Webs-Sentiment Tracker",
      image: "/images/peta.jpg",
      alt: "Peta Indonesia",
      link: "https://www.linkedin.com/posts/nila-wati786_indonesia-sentiment-map-project-activity-7398531235465224192-gHsa?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFIgAiIB6l1SQkTA4MT6ICC32jAc7SO21hw",
    },
    {
      title: "Dashboard Penjualan (End to End Workflow)",
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
      {
      title: "Video Generate Iklan Dark Coffe",
      image: "/images/dark.jpg",
      alt: "dark coffe",
      link: "https://www.linkedin.com/posts/nila-wati786_sudah-akhir-tahun-jalanan-mulai-sepi-mungkin-activity-7406864358577823744-pi13?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFIgAiIB6l1SQkTA4MT6ICC32jAc7SO21hw"
    },
    {
      title: "Video Generate Penjaga Toko ATK",
      image: "/images/generatif-AI.jpg",
      alt: "Daily",
      link: "https://www.linkedin.com/posts/nila-wati786_baru-coba-membuat-video-menggunakan-ai-untuk-activity-7395339114277007360-m3WT?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFIgAiIB6l1SQkTA4MT6ICC32jAc7SO21hw"
    },
  ] as Project[],
}