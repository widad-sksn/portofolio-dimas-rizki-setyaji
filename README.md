# Portofolio Dimas Rizki Setyaji

Gunakan Node.js versi yang didukung Next.js 16 (20.9+). Jalankan `npm ci` lalu `npm run dev`, dan buka http://localhost:3000. Untuk produksi gunakan `npm run build` lalu `npm start`.

## Font
Letakkan Pricedown sebagai `public/fonts/pricedown.woff2` atau `public/fonts/pricedown.ttf` sebelum membangun situs. Konfigurasi Next menghasilkan modul font lokal dengan path literal yang diperlukan compiler. Jika belum tersedia, judul memakai Anton. Inter dan Anton berasal dari Google Fonts dan disertakan melalui Fontsource agar build tidak memerlukan akses ke server Google.

## Struktur
Beranda berada di `app/page.tsx`. Galeri dan publikasi tersedia pada `/design` dan `/security`. Gambar proyek serta potret berasal dari arsip portofolio. Panorama pesisir merupakan ilustrasi yang dibuat untuk latar beranda.
