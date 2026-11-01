// Sumber: resume Canva "Adam Wahyu Hariyadi ATS"
// Teks yang beda per bahasa ditulis { id, en }; sisanya dipakai kedua bahasa.

// path gambar di public/ harus ikut base URL (/resume/ di GitHub Pages)
export const asset = (path) => import.meta.env.BASE_URL + path

export const ui = {
  sections: [
    ['top', { id: 'Intro', en: 'Intro' }],
    ['profil', { id: 'Profil', en: 'Profile' }],
    ['pengalaman', { id: 'Pengalaman', en: 'Experience' }],
    ['penelitian', { id: 'Penelitian', en: 'Research' }],
    ['proyek', { id: 'Proyek', en: 'Projects' }],
    ['keahlian', { id: 'Keahlian', en: 'Skills' }],
    ['pendidikan', { id: 'Pendidikan', en: 'Education' }],
    ['kontak', { id: 'Kontak', en: 'Contact' }],
  ],
  title: { id: 'Adam Wahyu Hariyadi, Full-Stack Developer', en: 'Adam Wahyu Hariyadi, Full-Stack Developer' },
  skip: { id: 'Lewati ke konten', en: 'Skip to content' },
  photoAlt: { id: 'Adam Wahyu Hariyadi memakai kemeja hitam dan dasi putih', en: 'Adam Wahyu Hariyadi wearing a black shirt and white tie' },
  hint: { id: 'Scroll untuk memutar', en: 'Scroll to play' },
  experience: { id: 'Pengalaman kerja', en: 'Work experience' },
  projects: { id: 'Proyek & aktivitas', en: 'Projects & activities' },
  projectsIntro: {
    id: 'Yang saya bangun di luar jam kerja, dari aplikasi desktop sampai motion graphic.',
    en: 'What I build outside work hours, from desktop apps to motion graphics.',
  },
  research: { id: 'Penelitian selama kuliah', en: 'Research during university' },
  education: { id: 'Pendidikan', en: 'Education' },
  training: { id: 'Sertifikasi & pelatihan', en: 'Certification & training' },
  nav: { id: 'Navigasi section', en: 'Section navigation' },
  home: { id: 'Kembali ke atas', en: 'Back to top' },
  toLight: { id: 'Ganti ke tema terang', en: 'Switch to light theme' },
  toDark: { id: 'Ganti ke tema gelap', en: 'Switch to dark theme' },
  viewCert: { id: 'Lihat sertifikat', en: 'View certificate' },
  linkLabel: {
    repo: { id: 'Repo GitHub', en: 'GitHub repo' },
    site: { id: 'Buka situs', en: 'Open site' },
    video: { id: 'Tonton di YouTube', en: 'Watch on YouTube' },
  },
  switchLang: { id: 'Switch to English', en: 'Ganti ke Bahasa Indonesia' },
}

export const sections = ui.sections
export const sectionLabel = (id) => sections.find(([key]) => key === id)[1]

export const profile = {
  name: ['Adam Wahyu', 'Hariyadi'],
  role: 'Full-Stack Developer',
  email: 'adamdesign19@gmail.com',
  location: 'Kota Tangerang, Banten',
  country: 'Indonesia',
  summary: {
    id: 'Mahasiswa semester 7 S1 Teknologi Informasi di Universitas Utpadaka Swastika. Saya membangun aplikasi web, desktop, dan REST API dengan Laravel, PHP, React.js, Next.js, Golang, dan Docker, dari analisis kebutuhan sampai deployment di server Linux dan pengujian.',
    en: 'Seventh-semester Information Technology student at Universitas Utpadaka Swastika. I build web and desktop apps and REST APIs with Laravel, PHP, React.js, Next.js, Golang, and Docker, from requirements analysis through Linux server deployment and testing.',
  },
  summary2: {
    id: 'Sebelum menulis kode, saya belajar desain grafis dan motion di Photoshop, Illustrator, dan After Effects. Dua latar itu sekarang bertemu: saya peduli pada sistem yang rapi di belakang dan antarmuka yang enak dipakai di depan.',
    en: 'Before writing code, I learned graphic and motion design in Photoshop, Illustrator, and After Effects. Both backgrounds meet in my work now: I care about a clean system behind the scenes and an interface that feels good to use.',
  },
  summary3: {
    id: 'Sehari-hari saya bekerja bersama AI agent seperti Claude Code. Saya yang memegang kemudi: menentukan arah, memecah masalah jadi tugas yang jelas, dan meninjau setiap perubahan sebelum masuk. Agent mempercepat eksekusi, saya menjaga kualitas dan keputusan teknisnya.',
    en: 'Day to day, I work with AI agents like Claude Code. I stay at the wheel: I set the direction, break problems into clear tasks, and review every change before it lands. The agent speeds up execution; I own the quality and the technical decisions.',
  },
}

export const jobs = [
  {
    role: 'Full-Stack Developer',
    company: 'PT Intitek Presisi Integrasi',
    type: { id: 'Penuh waktu, onsite', en: 'Full-time, onsite' },
    period: { id: 'Okt 2026 – sekarang', en: 'Oct 2026 – present' },
    year: '2026',
    points: {
      id: [
        'Mengembangkan dan memelihara aplikasi web, desktop, dan mobile untuk sistem penimbangan dengan Golang, JavaScript, PHP, Tauri, dan Electron.',
        'Melakukan deployment dan konfigurasi aplikasi di server Ubuntu Linux.',
        'Menyusun dokumentasi teknis dan panduan pengguna aplikasi.',
        'Menguji aplikasi untuk memastikan fungsionalitas dan stabilitas.',
      ],
      en: [
        'Develop and maintain web, desktop, and mobile apps for weighing systems using Golang, JavaScript, PHP, Tauri, and Electron.',
        'Deploy and configure applications on Ubuntu Linux servers.',
        'Write technical documentation and user guides.',
        'Test applications to make sure they work correctly and stay stable.',
      ],
    },
  },
  {
    role: 'Full-Stack Software Developer',
    company: 'Yayasan Widya Anindya',
    type: { id: 'Magang, onsite', en: 'Internship, onsite' },
    period: { id: 'Jul 2025 – Jul 2026', en: 'Jul 2025 – Jul 2026' },
    year: '2025',
    points: {
      id: [
        'Mengembangkan software internal dari analisis kebutuhan, perancangan sistem, hingga implementasi dan pengujian.',
        'Mengimplementasikan autentikasi Single Sign-On (SSO) untuk aplikasi internal.',
        'Membangun dan mengelola REST API beserta autentikasinya untuk komunikasi antar layanan dan integrasi pihak ketiga.',
        'Memakai Laravel sebagai framework backend utama: modul, manajemen database, validasi data, dan middleware.',
        'Menyiapkan Docker untuk lingkungan development dan production yang konsisten.',
        'Membangun frontend responsif dengan React.js untuk desktop, tablet, dan ponsel.',
      ],
      en: [
        'Built internal software end to end: requirements analysis, system design, implementation, and testing.',
        'Implemented Single Sign-On (SSO) authentication for internal applications.',
        'Built and maintained authenticated REST APIs for service-to-service communication and third-party integrations.',
        'Used Laravel as the main backend framework: modules, database management, data validation, and middleware.',
        'Set up Docker for consistent development and production environments.',
        'Built responsive React.js frontends for desktop, tablet, and phone.',
      ],
    },
  },
  {
    role: 'Graphic Designer',
    company: 'PT Mega Pilar Mas',
    type: { id: 'Magang, onsite', en: 'Internship, onsite' },
    period: { id: 'Feb 2022 – Mei 2022', en: 'Feb 2022 – May 2022' },
    year: '2022',
    points: {
      id: [
        'Membuat dan menganalisis konsep poster sandal berdasarkan minat anak muda.',
        'Merancang katalog sandal sesuai mutu dan standar perusahaan.',
        'Membuat poster dan katalog produk untuk kebutuhan promosi.',
      ],
      en: [
        'Created and evaluated sandal poster concepts based on what young customers respond to.',
        'Designed sandal catalogs to the company’s quality standards.',
        'Produced posters and product catalogs for promotions.',
      ],
    },
  },
]

// big: proyek dengan cakupan paling luas, tampil lebih lebar di track horizontal
export const projects = [
  {
    name: 'Clumsee',
    tag: 'AI Screen Assistant',
    date: { id: 'Okt 2026', en: 'Oct 2026' },
    stack: 'Electron, React, TypeScript, Tailwind CSS',
    link: { href: 'https://github.com/adamwahyuh/clumsee', kind: 'repo' },
    big: true,
    text: {
      id: 'Aplikasi desktop lintas platform: pilih area layar, dapat jawaban AI di panel samping. Terhubung ke API Claude, OpenAI, dan Gemini, dengan OCR Tesseract.js, pemindai QR, render Markdown dan LaTeX, multibahasa, serta auto-update lewat GitHub Actions.',
      en: 'Cross-platform desktop app: select an area of the screen and get an AI answer in a side panel. Connects to the Claude, OpenAI, and Gemini APIs, with Tesseract.js OCR, a QR scanner, Markdown and LaTeX rendering, multiple languages, and auto-updates through GitHub Actions.',
    },
  },
  {
    name: 'Clumdf',
    tag: 'PDF Toolkit',
    date: { id: 'Okt 2026', en: 'Oct 2026' },
    stack: 'Tauri, Rust, React, TypeScript',
    link: { href: 'https://github.com/adamwahyuh/clumdf', kind: 'repo' },
    big: true,
    text: {
      id: 'Gabung, pisah, atur halaman, kompres, konversi gambar dan Markdown ke PDF, OCR, password, tanda tangan, dan watermark. Core engine PDF ditulis di Rust lengkap dengan unit test; antarmuka React, shadcn/ui, Zustand, dan pdf.js.',
      en: 'Merge, split, reorder pages, compress, convert images and Markdown to PDF, OCR, passwords, signatures, and watermarks. The PDF engine is written in Rust with unit tests; the interface uses React, shadcn/ui, Zustand, and pdf.js.',
    },
  },
  {
    name: 'Melodizh',
    tag: { id: 'Belajar lewat lagu', en: 'Learning through songs' },
    date: { id: 'Okt 2026', en: 'Oct 2026' },
    stack: 'ASP.NET Core, EF Core, SQLite, React',
    big: true,
    text: {
      id: 'Platform belajar dengan pemutar YouTube, lirik tersinkron, latihan melengkapi lirik, level, dan pencapaian. REST API untuk autentikasi, kelas dan siswa, peringkat, pertemanan, dan pengumuman.',
      en: 'Learning platform with a YouTube player, synced lyrics, fill-in-the-lyrics exercises, levels, and achievements. REST API for authentication, classes and students, leaderboards, friends, and announcements.',
    },
  },
  {
    name: 'Birthday',
    tag: { id: 'Website ucapan interaktif', en: 'Interactive greeting site' },
    date: 'Sep 2026',
    stack: 'React, TypeScript, Tailwind CSS, Framer Motion',
    link: { href: 'https://adamwahyuh.github.io/ours/', kind: 'site' },
    text: {
      id: 'Animasi amplop, galeri foto, pemutar musik, dan video. Di-deploy ke GitHub Pages.',
      en: 'Envelope animation, photo gallery, music player, and video. Deployed to GitHub Pages.',
    },
  },
  {
    name: { id: 'Company profile toko komputer', en: 'Computer store company profile' },
    tag: 'Web developer',
    date: 'Jun 2025',
    stack: 'Laravel',
    text: {
      id: 'Website company profile dengan dashboard CMS untuk mengelola konten, serta rancangan database yang efisien.',
      en: 'Company profile website with a CMS dashboard for managing content and an efficient database design.',
    },
  },
  {
    name: 'Terralytics',
    tag: { id: 'Workshop Web Design, front-end developer', en: 'Web Design Workshop, front-end developer' },
    date: 'Sep 2025',
    stack: 'Next.js, Tailwind CSS, Vercel',
    link: { href: 'https://terralytics.utpas.id', kind: 'site' },
    text: {
      id: 'Static website hasil kerja tim: menerjemahkan desain UI/UX menjadi halaman, lalu deploy di Vercel.',
      en: 'Static website built as a team: turned UI/UX designs into pages, then deployed on Vercel.',
    },
  },
  {
    name: 'mucydr',
    tag: { id: 'Unduh audio/video YouTube', en: 'YouTube audio/video downloader' },
    date: '2025',
    stack: 'C++, yt-dlp',
    link: { href: 'https://github.com/adamwahyuh/mucydr', kind: 'repo' },
    text: {
      id: 'CLI tool modular dengan pemrosesan argumen dan opsi penyimpanan khusus.',
      en: 'Modular CLI tool with argument parsing and custom save options.',
    },
  },
  {
    name: { id: 'Bumper kelulusan', en: 'Graduation bumper' },
    tag: 'Animator, Nawasena',
    date: '2023',
    stack: 'Adobe After Effects',
    link: { href: 'https://www.youtube.com/watch?v=R3sLYJo4jSI', kind: 'video' },
    text: {
      id: 'Intro dan bumper video acara kelulusan, dengan transisi dan efek visual antar scene, bersama tim produksi.',
      en: 'Intro and bumper videos for a graduation event, with transitions and visual effects between scenes, made with the production team.',
    },
  },
]

export const skills = [
  [{ id: 'Bahasa', en: 'Languages' }, ['PHP', 'JavaScript/TypeScript', 'Golang', 'C++', 'C#', 'Python']],
  ['Framework', ['Laravel', 'React.js', 'Next.js', 'Alpine.js', 'Tailwind CSS', 'Tauri', 'Electron', 'Flutter']],
  ['Backend & DevOps', ['REST API', 'SSO', 'Docker', 'Ubuntu Server', 'Vercel']],
  [{ id: 'AI agent', en: 'AI agents' }, ['Claude Code',]],
  [{ id: 'Sistem operasi', en: 'Operating systems' }, ['Linux', 'macOS', 'Windows']],
  [{ id: 'Desain & motion', en: 'Design & motion' }, ['Photoshop', 'Illustrator', 'After Effects', 'Figma', 'Blender']],
  [
    { id: 'Cara kerja', en: 'How I work' },
    {
      id: ['Komunikasi', 'Problem solving', 'Kerja tim', 'Teliti', 'Adaptif'],
      en: ['Communication', 'Problem solving', 'Teamwork', 'Detail-oriented', 'Adaptable'],
    },
  ],
]

export const education = [
  { title: { id: 'S1 Teknologi Informasi', en: 'B.Sc. Information Technology' }, place: 'Universitas Utpadaka Swastika', period: '2023 – 2027' },
  { title: { id: 'SMK, Jurusan Multimedia', en: 'Vocational High School, Multimedia' }, place: 'SMK Bhakti Anindya', period: '2020 – 2023' },
]

export const research = [
  {
    title: 'Penelitian Model & Prototype SIM-PPM',
    role: { id: 'Universitas Utpadaka Swastika', en: 'Universitas Utpadaka Swastika' },
    image: { src: asset('images/penelitian/lppm.webp'), width: 1600, height: 1041 },
    alt: {
      id: 'Tangkapan layar rapat daring FGD Pengelolaan Penelitian, Adam di tengah baris atas',
      en: 'Screenshot of the online research management focus group, Adam in the top-middle tile',
    },
  },
  {
    title: 'Pengembangan dan Implementasi Jaringan Internet Intra Kementerian JIK untuk Mendukung Transformasi Digital di Lingkungan Kemendikdasmen',
    role: { id: 'Anggota tim peneliti, Universitas Utpadaka Swastika', en: 'Research team member, Universitas Utpadaka Swastika' },
    image: { src: asset('images/penelitian/jaringan.webp'), width: 640, height: 1139 },
    alt: {
      id: 'Banner penelitian UTPAS yang mencantumkan judul penelitian dan Adam Wahyu Hariyadi sebagai anggota',
      en: 'UTPAS research banner listing the project title and Adam Wahyu Hariyadi as a team member',
    },
  },
]

// tanpa period = tanggal belum diketahui, sengaja dikosongkan
export const training = [
  { title: 'Junior Graphic Designer', place: { id: 'Lembaga Sertifikasi Profesi (LSP)', en: 'Professional Certification Agency (LSP)' }, period: 'Mar 2023' },
  {
    title: 'Creative Training, BFI Finance Fair 2024',
    place: 'PT BFI Finance Indonesia Tbk',
    period: { id: 'Okt 2024', en: 'Oct 2024' },
    image: { src: asset('images/certs/bfi.webp'), thumb: asset('images/certs/bfi-thumb.webp'), width: 720, height: 505 }, // thumb 720px, klik = versi penuh
  },
  { title: { id: 'Pelatihan Teller', en: 'Teller training' }, place: 'PT Bank Central Asia Tbk (BCA)', period: 'Jul 2026' },
  {
    title: 'Responsive Web Design',
    place: 'freeCodeCamp',
    url: 'https://www.freecodecamp.org/certification/adammmmmmm/responsive-web-design',
  },
]
