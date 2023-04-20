# Authentication in React

## Authorization

Authorization berfungsi untuk menentukan hak akses atau hak istimewa terhadap sumber daya yang terkait dengan keamanan informasi umum, keamanan komputer, dan kontrol akses pada umumnya. Dengan kata lain, Authorization juga dapat disebut sebagai kebijakan akses yang membatasi akses terhadap sumber daya tertentu agar tidak bisa diakses sembarangan oleh orang lain.

### Contoh Full Authorization:

Full Authorization melibatkan tiga tahap utama yaitu registrasi pengguna, login pengguna, dan mengakses sumber daya. Proses ini memastikan bahwa hanya pengguna yang memiliki hak akses yang diberikan yang dapat mengakses sumber daya yang dilindungi.

User Registrasi: Registrasi pengguna merupakan proses pendaftaran pengguna baru pada sistem. Dalam proses ini, pengguna diminta untuk mengisi data pribadi dan akun untuk memperoleh hak akses yang diberikan pada tahap selanjutnya.

User Login: Login pengguna adalah proses otentikasi dan verifikasi pengguna yang dilakukan oleh sistem dengan cara mengidentifikasi dan mengautentikasi pengguna melalui username dan password yang telah didaftarkan pada tahap registrasi. Tujuannya adalah untuk memastikan bahwa hanya pengguna yang terdaftar yang memiliki hak akses pada sistem.

Access Resource: adalah proses memperoleh hak akses terhadap sumber daya tertentu pada sistem. Akses ini hanya diberikan kepada pengguna yang telah terdaftar dan terotentikasi pada sistem.

Login with React: Login with React adalah proses login pada aplikasi web yang menggunakan library React sebagai framework-nya. Proses ini sama seperti login pada umumnya, yaitu mengidentifikasi dan mengautentikasi pengguna melalui username dan password.

Login Token: Saat pengguna melakukan login, sistem akan memberikan token sebagai tanda bahwa pengguna telah terotentikasi dengan benar. Token ini digunakan untuk validasi akses pada setiap halaman yang dilindungi. Token dapat disimpan pada local storage, global state, atau session storage tergantung pada kebutuhan aplikasi.