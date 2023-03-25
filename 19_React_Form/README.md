### Penggunaan Form

seperti pada umumnya form biasa digunakan untuk menghandle atau menerima inputan dari user, contohnya saat login, saat mengisi data, dll. biasanya form ini digunakan untuk mengambil suatu informasi yang dibutuhkan oleh website dari apa yang di inputkan oleh user

### Macam - macam form

- Form “< input >” digunakan untuk menerima input singkat
- Form “< textarea >” digunakan untuk inputan yang lebih panjang
- Form “< select >” digunakan untuk pilihan yang sudah ditentukan biasanya berupa pilihan yang hanya bisa dipilih salah satu dari pilihan yang sudah tersedia
- Form “< Radio Button >” digunakan untuk memilih salah satu pilihan
- Form “< Checkbox >” digunakan untuk memilih lebih dari satu pilihan

Masih banyak lagi berbagai macam inputan atau berbagai macam form yang ada di react, tapi form yang paling umum digunakan adalah form yang sudah disebutkan.

### Controlled Component

adalah semua element yang bisa dikontrol dengan menggunakan perintah atau method yang tujuannya untuk mengatur apa yang akan menjadi input pengguna, cara menyimpan, event yang akan dijalankan , dan lain lain.

### Uncontrolled Component

adalah kebalikan atau alternatif dari Controlled Component, dimana data form akan di tangani oleh DOM , kita bisa menggunakan ref untuk mendapatkan nilai form dari DO

### Basic Validation

- Kenapa Validation diperlukan?
    - mendapatkan input data yang sesuai format yang telah ditentukan programmer
    - melindungi akun dan data pengguna
    - mengamankan sistem/aplikasi
- Tipe Validasi
    - Client-side validation, validasi yang dilakukan saat browser menampilkan interface aplikasi, fungsinya untuk memastikan agar input yang diinputkan user sesuai dengan kebutuhan sistem. Validasi ini terbagi menjadi 2 bagian, Built-in form validation, yaitu menggunakan fitur dari HTML 5 secara langsung, dan JS Validation, membuat validasi sendiri menggunakan javascript dengan beberapa kostumisasi.
    - Server-side validation, validasi berdasarkan server, server memvalidasi data kembali sebelum akhirnya di simpan kedalam database