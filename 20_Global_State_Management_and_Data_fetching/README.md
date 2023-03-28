### Apa itu Global State Management

adalah cara atau proses untuk memanagement state global yang biasanya digunakan untuk suatu code yang memiliki flow yang cukup kompleks sehingga diperlukan state global yang bisa menyederhanakan proses penulisan code

### Redux

Redux adalah suatu tools yang ada dalam react, untuk memudahkan programmer dalam mengatur global state yang diperlukan aplikasi.

saat yang tepat untuk menggunakan redux adalah 

- ketika banyak state yang perlu digunakan di banyak tempat yang berbeda
- ada state yang sering diubah
- logic state yang cukup kompleks
- codebase yang masif atau besar, dan dikerjakan secara team
- perlu pengecekan berkala saat state diupdate

### Redux Libraries dan Tools

- React - Redux
- Redux Toolkit
- Redux DevTools Extension

### Komponen yang ada di redux

- Actions, digunakan untuk memberi informasi dari aplikasi ke store
- Reducer, javascript function yang berfungsi untuk mengambil initial value dari state, dan action lalu mengembalikan state ke aplikasi
- Store, Objek utama yang menyimpan state pada aplikasi

### Memasang Redux Store pada React

memasang redux store pada react , hanya perlu menginstalnya, lalu membungkuskan provider store ke aplikasi

### Redux Thunk

adalah redux yang berguna untuk membuat action creator dan me return sebagai function bukan action

secara simpel thunk ini adalah logic untuk menjalankan async data atau async dispatch dan conditional dispatch

### Persisted State

fungsi dari persisted state adalah untuk menyimpan state yang sudah diubah kedalam storage sehingga value dari state terbaru tidak menghilang atau masih tetap ada karena tersimpan dalam storage