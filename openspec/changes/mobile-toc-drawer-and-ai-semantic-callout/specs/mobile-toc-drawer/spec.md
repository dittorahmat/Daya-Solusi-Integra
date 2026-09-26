# mobile-toc-drawer Specification

## Purpose
Menyediakan pengalaman navigasi cepat (quick-jump) bagi pembaca artikel blog di perangkat ponsel melalui tombol mengambang yang memicu laci atau bottom-sheet daftar isi, sehingga pembaca tidak perlu menggulir jauh ke atas untuk berpindah sub-bab.

## Requirements

### Requirement 1: Mobile Floating Trigger Button
- Sistem harus menampilkan tombol floating pill di pojok kanan bawah layar hanya pada tampilan seluler (`lg:hidden fixed bottom-6 right-6 z-40`).
- Tombol harus memiliki ikon navigasi yang jelas (misalnya `ListOrdered` atau `BookOpen`), teks ringkas seperti "Daftar Isi", dan bayangan kontras yang tegas di atas kanvas gelap.
- Tombol hanya muncul ketika artikel sedang dibaca (`currentSlug` aktif dan `headings.length > 0`).

### Requirement 2: Interactive Bottom-Sheet Modal
- Mengetuk tombol pemicu harus membuka laci atau modal bottom-sheet yang berisi daftar heading H2 lengkap dari artikel.
- Modal harus memiliki backdrop transparan gelap (`bg-slate-950/80 backdrop-blur-sm`) yang menutup laci saat disentuh.
- Modal harus menampilkan header dengan judul "Daftar Isi Artikel" dan tombol tutup (`X`).
- Setiap item heading dalam daftar harus berupa tombol yang ketika ditekan akan:
  1. Menutup modal bottom-sheet.
  2. Menggulir layar secara halus (`scrollIntoView({ behavior: 'smooth' })`) menuju elemen heading target dengan offset yang nyaman.
- Menyorot sub-bab yang sedang aktif saat ini (`activeId`) dengan aksen warna BUMN Gold atau latar slate yang lebih terang.
