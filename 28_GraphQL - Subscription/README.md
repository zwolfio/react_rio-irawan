
## GraphQL Subscription
GraphQL Subscription adalah sebuah fitur pada GraphQL yang memungkinkan klien untuk menerima pembaruan data secara real-time dari server. Untuk menggunakan fitur ini, langkah-langkah yang perlu dilakukan antara lain:

1. Install **`subscriptions-transport-ws`** agar dapat menggunakan koneksi websocket dengan menjalankan perintah **`yarn add @apollo/client subscriptions-transport-ws`**.
2. Import semua modul yang dibutuhkan dan pisahkan antara tautan http dan websocket.
3. Buat **`httpLink`** untuk query dan mutation, dan tambahkan **`wsLink`** untuk subscription. Tambahkan header untuk autentikasi.
4. Tambahkan fungsi **`split`** dan gunakan sebagai tautan ketika membuat client.
5. Untuk menggunakan subscription, dapat dilakukan melalui **`useSubscription`**. Import **`useSubscription`** dari apollo client dan tentukan subscription yang ingin digunakan.
6. Panggil subscription dan konsumsi data yang didapatkan.
7. Alternatifnya, subscription juga dapat dilakukan menggunakan fungsi **`subscribeToMore`** yang memungkinkan eksekusi subscription untuk mendaftar ke bidang tertentu yang disertakan dalam query.