

// method array splice 1
var namaBuah = ['anggur' , 'apel' , 'jeruk' , 'melon'];
// menyisipkan elemen array
namaBuah.splice(2, 0, 'mangga' , 'kiwi'); // -> menyisipkan di index ke 2 , tidak ada yang dihapus , menambahkan elemen sebanyak 2
// memanggil semua nilai array
console.log(namaBuah.join(' - '));

// method array splice 2
namaBuah.splice(4,1); // -> menyisipkan di index ke 4 dan dihapus sebanyak 1
// memanggil semua nilai array
console.log(namaBuah.join(' - '));

// method array slice 1
// slice(index awal, index akhir)
var namaHewan = ['kucing' , 'ayam' , 'sapi' , 'gajah' , 'harimau'];
// memanggil semua nilai array
console.log(namaHewan.join(' - '));

// mengiris / mengambil / slice mulai dari index ke 2 - 5
var namaHewanDua = namaHewan.slice(2,5);
// memanggil semua nilai array
console.log(namaHewanDua.join(' - '));
