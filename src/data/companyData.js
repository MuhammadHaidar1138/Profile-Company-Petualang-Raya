// Seluruh data contoh perusahaan ada di file ini.
// Ubah nilai di sini untuk mengganti isi website tanpa menyentuh komponen.

export const company = {
  name: 'PT Petualang Raya Indonesia',
  shortName: 'Petualang Raya',
  tagline: 'Wisata Alam & Petualangan',
  logo: '/favicon.svg',
  foundedYear: 2012,
}

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Us' },
  { id: 'services', label: 'Services' },
  { id: 'products', label: 'Products' },
  { id: 'contact', label: 'Contact' },
]

export const hero = {
  title: 'PT Petualang Raya Indonesia',
  description:
    'PT Petualang Raya Indonesia menyediakan Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in erat felis. Donec eget nisi lectus. Vivamus dignissim dolor sit amet neque porttitor sollicitudin.',
  primaryCta: { label: 'Hubungi Kami', target: 'contact' },
  secondaryCta: { label: 'Lihat Layanan', target: 'services' },
}

export const about = {
  title: 'Tentang Kami',
  image: '/images/about.svg',
  imageAlt: 'Ilustrasi sekelompok pendaki menyusuri jalur hutan menuju puncak',
  profile: [
    'PT Petualang Raya Indonesia berdiri pada tahun 2012 dari komunitas pecinta alam yang ingin berbagi pengalaman petualangan secara aman dan bertanggung jawab. Kini kami melayani ribuan peserta setiap tahun di berbagai destinasi alam Indonesia. Setiap program dipandu oleh tim bersertifikat dan dirancang dengan standar keselamatan yang ketat. Kami percaya petualangan terbaik adalah yang meninggalkan kesan bagi peserta dan tidak meninggalkan jejak bagi alam.',
  ],
  history: [
    { year: '2012', text: 'Berdiri sebagai penyelenggara trekking dan pendakian di Jawa Barat.' },
    { year: '2016', text: 'Meluncurkan program outbound dan team building untuk perusahaan.' },
    { year: '2020', text: 'Membuka layanan sewa perlengkapan outdoor dan area camping.' },
    { year: '2024', text: 'Melayani lebih dari 20 destinasi dan memulai program penanaman pohon rutin.' },
  ],
  vision:
    'Menjadi penyelenggara wisata alam dan petualangan paling dipercaya di Indonesia yang menginspirasi cinta lingkungan.',
  mission: [
    'Menyediakan pengalaman petualangan yang aman, seru, dan berkesan.',
    'Menerapkan standar keselamatan dan pemandu bersertifikat di setiap program.',
    'Menjaga kelestarian alam melalui prinsip leave no trace dan aksi konservasi.',
    'Memberdayakan masyarakat lokal di sekitar destinasi wisata.',
  ],
}

// Nilai "icon" harus sesuai nama pada src/components/Icon.jsx
export const services = {
  subtitle: 'Layanan Kami',
  title: 'Pengalaman Alam yang Dirancang untuk Setiap Petualang',
  items: [
    {
      id: 1,
      icon: 'mountain',
      title: 'Wisata Alam & Trekking',
      description:
        'Pendakian gunung, jelajah hutan, dan wisata air terjun dengan rute terkurasi dan pemandu berpengalaman.',
    },
    {
      id: 2,
      icon: 'users',
      title: 'Outbound & Team Building',
      description:
        'Program kebersamaan untuk perusahaan, sekolah, dan komunitas dengan permainan yang membangun kerja sama tim.',
    },
    {
      id: 3,
      icon: 'tent',
      title: 'Camping & Glamping',
      description:
        'Area berkemah yang nyaman dengan pilihan tenda standar maupun glamping lengkap dengan fasilitas.',
    },
    {
      id: 4,
      icon: 'leaf',
      title: 'Ekowisata & Konservasi',
      description:
        'Wisata edukatif, penanaman pohon, dan aksi bersih alam yang melibatkan peserta dan warga lokal.',
    },
    {
      id: 5,
      icon: 'backpack',
      title: 'Sewa Perlengkapan Outdoor',
      description:
        'Tenda, carrier, sleeping bag, dan perlengkapan pendakian dalam kondisi terawat dan siap pakai.',
    },
    {
      id: 6,
      icon: 'shield',
      title: 'Pemandu & Keselamatan',
      description:
        'Pemandu bersertifikat, asuransi perjalanan, dan prosedur darurat yang jelas di setiap kegiatan.',
    },
  ],
}

export const products = {
  subtitle: 'Paket & Produk',
  title: 'Pilihan Paket Petualangan Terbaik Kami',
  items: [
    {
      id: 1,
      name: 'Paket Pendakian',
      category: 'Trekking',
      description: 'Pendakian 2 hari 1 malam lengkap dengan pemandu dan porter.',
      image: '/images/product-trekking.svg',
    },
    {
      id: 2,
      name: 'Camping Keluarga',
      category: 'Camping',
      description: 'Berkemah santai bersama keluarga, tenda dan api unggun disediakan.',
      image: '/images/product-camping.svg',
    },
    {
      id: 3,
      name: 'Paket Outbound',
      category: 'Corporate',
      description: 'Team building seharian dengan fasilitator profesional.',
      image: '/images/product-outbound.svg',
    },
    {
      id: 4,
      name: 'Perlengkapan Outdoor',
      category: 'Sewa',
      description: 'Sewa carrier, tenda, dan peralatan masak harian atau mingguan.',
      image: '/images/product-gear.svg',
    },
  ],
}

export const whyChooseUs = {
  subtitle: 'Mengapa Kami',
  title: 'Alasan Petualang Memilih Petualang Raya',
  items: [
    {
      id: 1,
      icon: 'shield',
      title: 'Keselamatan Utama',
      description: 'Prosedur keselamatan, peralatan standar, dan asuransi di setiap perjalanan.',
    },
    {
      id: 2,
      icon: 'compass',
      title: 'Pemandu Berpengalaman',
      description: 'Pemandu bersertifikat yang hafal medan dan siap membantu peserta pemula.',
    },
    {
      id: 3,
      icon: 'leaf',
      title: 'Peduli Lingkungan',
      description: 'Menerapkan prinsip leave no trace dan program penanaman pohon rutin.',
    },
    {
      id: 4,
      icon: 'tag',
      title: 'Harga Transparan',
      description: 'Rincian biaya yang jelas tanpa biaya tersembunyi.',
    },
  ],
}

export const statistics = [
  { id: 1, value: '12+', label: 'Tahun Pengalaman' },
  { id: 2, value: '8.500+', label: 'Petualang Terlayani' },
  { id: 3, value: '250+', label: 'Program Outbound' },
]

export const contact = {
  subtitle: 'Hubungi Kami',
  title: 'Rencanakan Petualangan Anda Bersama Kami',
  description:
    'Ceritakan rencana perjalanan Anda. Tim kami siap membantu menyusun paket dan penawaran dalam 1x24 jam kerja.',
  address: 'Jl. Raya Puncak No. 21, Cisarua, Bogor, Jawa Barat 16750',
  email: 'info@petualangraya.co.id',
  phone: '+62 251 555 0123',
  whatsappNumber: '6281234567890', // format internasional tanpa tanda + atau spasi
  whatsappLabel: '+62 812 3456 7890',
  hours: 'Setiap hari, 07.00 - 20.00 WIB',
}

export const footer = {
  description:
    'Penyelenggara wisata alam, pendakian, camping, dan outbound yang aman dan ramah lingkungan sejak 2012.',
  copyright: `© ${new Date().getFullYear()} PT Petualang Raya Indonesia. Seluruh hak dilindungi.`,
}
