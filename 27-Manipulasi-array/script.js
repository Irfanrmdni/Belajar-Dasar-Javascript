// contoh 1
// 1. menambah data array
var arr = ['a' , 1 , false];
// memanggil semua array
console.log(arr)
// memanggil salah satu array
console.log(arr[0])

// contoh 2
// 1. membuat array
var data = [];
// membuat data/nilai array
data[0] = 'irpan';
data[1] = 'ramdani';
data[2] = 'studio';
// menampilkan semua nilai array
console.log(data)

// jika pada saat mengisi nilai array dan index nya kelewat maka nilai yang kelewat itu akan undefined, contoh:
var a = [];
// membuat data/nilai array
a[0] = 10;
a[1] = 20;
a[2] = 30;
a[3] = 40;
a[5] = 50; // -> contoh index yang kelewat maka ini akan undefined
// memanggil array
console.log(a);

// contoh 3 -> menghapus isi array
// 1. membuat data array
var nama = ['asep' , 'jajang' , 'umar' , 'nela'];
// menghapus nilai array 
nama[1] = undefined; // -> contoh menghapus isi array pada index ke 1
// memanggil array
console.log(nama);

// contoh 4 -> menampilkan array dengan looping
var hobi = ['ngopi' , 'sholawat' , 'sholat' , 'makan'];
// membuat looping
for(var i = 0; i < hobi.length; i++) {
    console.log('hobi ke-'+ i + ' : ' + hobi[i]);
}

// Contoh 5 -> menggunakan method join
var tipeHP = ['samsung' , 'xiaomi' , 'iphone' , 'vivo' , 'oppo' , 'realme'];
// memanggil nilai array dengan menggunakan method join
console.log(tipeHP.join()); // -> ini default nya menggunakan pemisah (,) koma
console.log(tipeHP.join(' - ')); // -> diganti dengan (-)

// contoh 6 -> menggunakan method push / menambah di akhir elemen
tipeHP.push('advan' , 'infinix' ,'lg'); // -> menambahkan nilai/data baru ke array , ini bisa lebih dari satu
// memanggil array
console.log(tipeHP.join(' '));

// contoh 7 -> menggunakan method pop / menghapus di akhir elemen
tipeHP.pop(); // -> menghapus nilai akhir dari array , ini hany bisa satu per satu
tipeHP.pop(); // -> menghapus nilai akhir dari array , ini hany bisa satu per satu
tipeHP.pop(); // -> menghapus nilai akhir dari array , ini hany bisa satu per satu
tipeHP.pop(); // -> menghapus nilai akhir dari array , ini hany bisa satu per satu
// memanggil array
console.log(tipeHP.join(' '));

// contoh 8 -> menggunakan method unshift / menambah di awal elemen
tipeHP.unshift('Asus' , 'Motorola');
// memanggil array
console.log(tipeHP.join(' '));

// contoh 9 -> menggunakan method shift / menambah di awal elemen
tipeHP.shift();
// memanggil array
console.log(tipeHP.join(' '));