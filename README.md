# Company Profile - React + Vite + JSX

Website company profile **single-page** (scroll dari Home sampai Footer) untuk **PT Petualang Raya Indonesia** (wisata alam, pendakian, camping, dan outbound) dengan tema hijau-putih bernuansa alam.
Dibuat dengan React, Vite, JSX, dan CSS biasa. Tanpa TypeScript, tanpa React Router, dan tanpa fitur login/autentikasi - seluruh konten bersifat publik.

## Kebutuhan

- Node.js 18 atau lebih baru
- npm

## Instalasi dan Menjalankan

```bash
# 1. Ekstrak company-profile.zip, lalu masuk ke foldernya
cd company-profile

# 2. Pasang dependency
npm install

# 3. Jalankan development server
npm run dev
```

Buka alamat yang muncul di terminal (biasanya http://localhost:5173).

Perintah lain:

```bash
npm run build     # build produksi ke folder dist/
npm run preview   # lihat hasil build secara lokal
```

## Struktur Folder

```text
company-profile/
├── public/
│   ├── images/              # gambar statis (hero-bg, hero, about, produk, placeholder)
│   └── favicon.svg
├── src/
│   ├── components/          # komponen reusable (Navbar, Footer, ServiceCard, ...)
│   ├── layouts/MainLayout.jsx   # navbar + konten + footer
│   ├── pages/Home.jsx           # menyusun semua section
│   ├── sections/                # satu file per section di halaman
│   ├── data/companyData.js      # SEMUA data contoh perusahaan
│   ├── styles/                  # file CSS
│   ├── App.jsx
│   └── main.jsx                 # entry point
├── index.html
├── package.json
└── vite.config.js
```

## Cara Mengubah Konten

Semua teks, layanan, produk, statistik, dan kontak ada di `src/data/companyData.js`.

| Yang ingin diubah | Lokasi |
| --- | --- |
| Nama perusahaan, tagline, logo | objek `company` |
| Menu navbar | array `navLinks` (nilai `id` harus sama dengan `id` section) |
| Headline dan tombol CTA hero | objek `hero` |
| Profil, sejarah, visi, misi | objek `about` |
| Layanan | `services.items` |
| Produk | `products.items` |
| Keunggulan | `whyChooseUs.items` |
| Statistik | array `statistics` |
| Alamat, email, telepon, WhatsApp | objek `contact` |

Nilai `icon` pada layanan dan keunggulan harus salah satu nama di `src/components/Icon.jsx`
(`mountain`, `tent`, `leaf`, `backpack`, `compass`, `users`, `shield`, `tag`, `clock`, `building`, `home`, `truck`, `clipboard`, `road`, `wrench`).

### Mengganti warna

Buka `src/styles/global.css` dan ubah variabel di blok `:root`:

```css
--color-primary: #14452f;      /* hijau tua (warna utama) */
--color-accent: #2f8f5b;       /* hijau daun */
--color-accent-light: #9ad9b4; /* hijau muda untuk latar gelap */
```

### Mengganti background hero (faded)

Gambar latar hero adalah `public/images/hero-bg.svg`. Ganti dengan foto alam Anda (disarankan lebar minimal 1600px)
dengan mengubah path pada `.hero::before` di `src/styles/home.css`. Efek memudar diatur oleh gradasi putih pada
`.hero::after`; kecilkan angka `0.95 / 0.8 / 0.3` agar gambar lebih terlihat, atau besarkan agar lebih pudar.

### Mengganti gambar

1. Letakkan gambar baru (JPG, PNG, WebP, atau SVG) di `public/images/`.
2. Ubah path-nya di `companyData.js`, misalnya `image: '/images/proyek-gedung.jpg'`.
3. Gambar bawaan berupa ilustrasi SVG bertema alam. Ganti dengan foto asli perusahaan Anda untuk tampilan terbaik.
   Jika file gambar gagal dimuat, `placeholder.svg` akan tampil otomatis.

### Mengganti logo

Ganti file `public/favicon.svg` atau ubah `company.logo` ke path logo Anda sendiri.

### Formulir kontak

Formulir tidak memakai backend. Saat dikirim, pesan dibuka di WhatsApp ke nomor `contact.whatsappNumber`
(format internasional tanpa tanda `+`, contoh `6281234567890`).

## Checklist Verifikasi

- [ ] `npm install` selesai tanpa error
- [ ] `npm run dev` berjalan dan halaman tampil
- [ ] Klik menu About Us, Services, Products, Contact: halaman scroll mulus dan judul section tidak tertutup navbar
- [ ] Menu aktif di navbar berubah saat halaman di-scroll
- [ ] Tombol CTA di hero mengarah ke Contact dan Services
- [ ] Di layar sempit (lebar 375px), menu hamburger membuka/menutup dan tidak ada scroll horizontal
- [ ] Background hero tampak memudar dan teks tetap mudah dibaca
- [ ] Semua gambar tampil
- [ ] Formulir kontak membuka WhatsApp dengan pesan yang sudah terisi
- [ ] `npm run build` berhasil
