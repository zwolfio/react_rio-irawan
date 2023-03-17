### Apa itu State?

state adalah data dari component yang tidak bisa diakses dari component lain, jadi data state ini bersifat private

### Sifat state

- Bisa dimodifikasi
- terjadi re-render saat dimodifikasi
- asynchronous
- didalam class

### Perbedaan props dan state

props hanya bisa dibaca dan tidak bisa dimodifikasi, sedangkan state bisa di modifikasi secara asynchronous

### Apa itu stateful dan stateless?

- Stateful component adalah component yang menggunakan state yang dibuat dengan class, kelebihannya memiliki lifecycle
- stateless component adalah component yang tidak menggunakan state atau biasanya hanya menggunakan props , dan dibuat dengan function, kelebihannya code lebih rapi dan ringkas

### Perbedaan stateful dan stateless

- stateless dapat dengan mudah digunakan kembali, sedangkan stateful karena berisi logic tertentu maka sulit untuk digunakan kembali atau kurang fleksibel
- stateless tidak melakukan data fetching atau pengambilan data, sedangkan statefull melakukan data fetching
- stateless kurang interaktif, statefull lebih interaktif
- stateless berinteraksi dengan parent component , stateful bisa meneruskan status dan data ke child

### Apa itu Event Handling?

adalah suatu method untuk merespon sebuah event yang diberikan pengguna pada komponen

### Contoh Event

- Clipboard event
- form event (onChange, onSubmit)
- mouse event (onClick, onDoubleClick, onMouseOver)
- Generic Events (onError, onLoad)