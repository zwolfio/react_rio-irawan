### Apa itu Router?

router merupakan modul yang berfungsi melakukan proses navigasi pada SPA (single Page Application)

### Apa itu Multipage App, dan Singlepage App?

- Multipage application (MPA) adalah jenis web yang perlu memuat ulang semua halaman setiap ada interaksi
- Singlepage application (SPA) adalah jenis web yag hanya memuat 1 kali saat web pertama kali dibuka

### Keunggulan & Kekurangan SPA

- Keunggulan SPA :
    - waktu loading cepat , hanya lambat saat pertama kali web di buka atau di akses
    - tidak ada query tambahan ke server
    - cepat dan responsif
    - meningkatkan user experience
- Kekurangan SPA :
    - tidak bagus dalam SEO
    - berat saat baru diakses
    - kurang aman
    - kurang kompatibilitas browser

### Keunggulan & Kekurangan MPA

- Kekurangan MPA :
    - loading lebih lama
    - perlu mengintegrasikan frontend dan backend
    - sering maintenance
    - lebih sering mengalami masalah peforma
- Keunggulan MPA :
    - SEO lebih mudah di optimasi
    - memudahkan saat modifikasi halaman
    - dapat menggunakan fitur analisis yang bisa terintegrasi langsung dengan web
    

### Cara menginstal react router

```jsx
npm install react-router-dom --save
```

### Browser Router

digunakan sebagai router yang menggunakan API history HTML 5, sehingga bisa mensinkronkan UI dengan URL

### Route

Digunakan sebagai penunjuk atau pengarah jalannya website

### Switch

digunakan untuk membungkus kumpulan route, fungsinya kurang lebih sama dengan switchcase.

### Exact

berfungsi memastikan hanya akan merender komponen yang memiliki path yang cocok, jika tidak ada maka akan merender component NotFound

### Link

digunakan untuk berpindah antar halaman

### Apa itu Param URL?

Parameter URL adalah suatu patameter dengan nilai dinamis di URL page

### Perbedaan Link dan Redirect

- Link :
    - Fleksibel di kondisi apapun
    - Memberikan history baru
    - sifat seperti anchor (<a>) pada html
- Redirect
    - Lebih sering digunakan saat error
    - mereplace history
    - hanya bereaksi pada 1 kondisi

### Hook Routing

- useHistory, berfungsi memberi akses ke riwayat, yang dapat digunakan untuk navigasi. Contoh : length,go,goBack,goForward,dll
- useParams berfungsi untuk mengembalikan nilai dari parameter di URL
- useRouteMatch berfungsi untuk mendapatkan akses data ke suatu URL , atau mencocokan URL saat ini dengan <Route>