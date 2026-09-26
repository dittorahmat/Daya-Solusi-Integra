## Context

Saat ini perayap web seperti Googlebot dapat mengindeks tautan berakhiran slash. Pada sisi client, kita telah membuat routing SPA toleran terhadap hal tersebut, namun dari sisi arsitektur HTTP, pengalihan 301 Moved Permanently di level server Express (`server.ts`) diperlukan untuk menghapus variasi URL sekunder dari memori indeks mesin pencari.

Selain itu, berkas kunci verifikasi IndexNow `public/d51n739r4c01d1nd3xn0wk3y202609.txt` sudah tersedia di repositori dan tercatat di `robots.txt`, namun belum ada mekanisme pengiriman aktif (*active push*) otomatis saat proses build dilakukan.

## Goals / Non-Goals

**Goals:**
- Menambahkan middleware 301 redirect di `server.ts` sebelum handler rute SPA dijalankan.
- Mengirimkan daftar URL kanonikal secara otomatis ke endpoint IndexNow di `scripts/generate-static-routes.ts`.
- Memastikan kegagalan jaringan saat IndexNow ping (misal saat offline development) tidak membatalkan atau mematahkan build (`try/catch` aman).

**Non-Goals:**
- Mengubah struktur rute URL yang ada atau mengganti kunci IndexNow yang sudah terdaftar.

## Decisions

### 1. Middleware Express 301 Redirect
```typescript
app.use((req, res, next) => {
  if (req.method === 'GET' && req.path.length > 1 && req.path.endsWith('/')) {
    const query = req.url.slice(req.path.length);
    const cleanPath = req.path.replace(/\/+$/, '');
    return res.redirect(301, cleanPath + query);
  }
  next();
});
```
- **Rasional**: Ringan, dieksekusi sebelum file statis atau fallback SPA, dan mempertahankan query string jika ada.

### 2. Async IndexNow Push di Build Script
- Mengumpulkan seluruh URL dari `allRoutes` dan daftar blog.
- Memanggil `fetch("https://api.indexnow.org/indexnow", { method: "POST", ... })`.
- Dibungkus dalam blok `try/catch` dengan timeout wajar agar tidak menghambat CI/CD.

## Risks / Trade-offs

- **[Risk] Jaringan offline saat build**:
  → *Mitigasi*: Menangkap error secara graceful dengan `console.warn` dan melanjutkan proses tanpa error exit code.
