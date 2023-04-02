### Apa itu React Testing?

React Testing adalah proses untuk memastikan bahwa test assertions dan kode tetap benar sepanjang masa aplikasi. Test assertion berupa ekspresi boolean yang akan mengembalikan nilai true jika tidak ada bug pada kode.

## Manfaat Testing:

- Testing membantu meningkatkan kepercayaan diri dalam mengubah bagian aplikasi dengan coverage yang baik.
- Testing dapat mengurangi jumlah bug pada aplikasi.

## Kategori Testing:

- Kategori testing pertama adalah rendering component trees di dalam environment tes yang sudah disederhanakan dan ditegaskan pada keluarannya.
- Kategori testing kedua adalah menjalankan aplikasi secara lengkap di dalam environment peramban asli, yang biasa dikenal dengan "end-to-end".

## Pertimbangan Memilih Perkakas untuk Testing:

- Pertimbangan pertama adalah kecepatan iterasi vs environment yang realistis.
- Pertimbangan kedua adalah seberapa banyak mock yang digunakan dalam testing.

## Rekomendasi Alat-alat untuk Testing:

- Jest adalah test runner pada JavaScript yang memungkinkan pengaksesan DOM melalui jsdom.
- React testing library adalah seperangkat helper yang memungkinkan pengujian komponen pada React tanpa terlalu bergantung pada detail implementasinya.

## Cara Menginstall:

- Ketika menggunakan Create-react-app, Jest dan React testing library sudah terinstall secara default.
- Ketika menggunakan custom React setup, Jest dan React testing library harus diinstall dan disetup secara manual.