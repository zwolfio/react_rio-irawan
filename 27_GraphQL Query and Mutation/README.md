## GraphQL Query dan Mutation

- Query dan Mutasi pada GraphQL adalah operasi yang digunakan untuk mengambil atau memodifikasi data pada server.
- Untuk melakukan Query pada client menggunakan Apollo, kita dapat mengimpor useQuery dari Apollo Client, dan menuliskan query kita sendiri atau menyalin dari Hasura Console.
- Untuk mengambil data awal dengan melakukan Query pada server, kita dapat menggunakan useQuery di bagian atas kode kita.
- Untuk menggunakan data yang telah diambil dari server dalam kode JSX kita, perlu diingat bahwa pada request pertama, data mungkin masih kosong sehingga perlu menggunakan optional chaining untuk menghindari kesalahan.
- Untuk melakukan Mutasi dengan Apollo Client, kita dapat mengimpor useMutation hooks dari Apollo Client dan mendefinisikan mutasi yang akan dilakukan.
- Untuk melakukan Mutasi untuk memasukkan data dengan Apollo Client, kita dapat menggunakan useMutation dan mendefinisikan handler mutasi (insertTodo), lalu menggunakannya.
- Untuk melakukan Mutasi untuk memperbarui data dengan Apollo Client, kita dapat mendefinisikan query pembaruan, membuat handler mutasi untuk memperbarui data, dan memanggil query pembaruan tersebut.
- Untuk melakukan Mutasi untuk menghapus data dengan Apollo Client, kita dapat mendefinisikan query penghapusan, membuat handler mutasi untuk menghapus data, dan memanggil query penghapusan tersebut.