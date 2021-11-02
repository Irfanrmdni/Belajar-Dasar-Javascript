// membuat fungsi penjumlahan
/* function tambah(a, b) {
    return a + b;
}

// membuat function perkalian
function kali(a, b) {
    return a * b;
} */

// contoh 1
/* var a = parseInt(prompt('Masukan angka pertama: '));
var b = parseInt(prompt('Masukan angka kedua: '));
var total = tambah(a,b);

alert(total); */

// contoh 2
/* var a = parseInt(prompt('Masukan angka pertama: '));
var b = parseInt(prompt('Masukan angka kedua: '));
var total = tambah(a*2,b*2); // -> kita bisa juga membuat argumen seperti ini

alert(total); */

// contoh 3
/* var hasil = kali(tambah(2,4) , tambah(9,2));
alert(hasil); */

// contoh 4 
// variabel yang tipenya array untuk menampung parameter yang banyak
// function kurang() {
//     return arguments;
// }

// var coba = kurang(10, 20, 5, 'hello', true);
// console.log(coba);

// jika tidak memakai arguments akan repot ketika memiliki parameter banyak contoh:
/* function jumlah (a, b, c, d, e) {
    return a + b + c + d + e;
}

var coba = jumlah(10,5,3,22,51);
console.log(coba); */

// contoh 5 membuat arguments
// function tambah() {
//     var hasil = 0;
//     // membuat pengulangan untuk membuat panjang arguments nya
//     for (var i = 0; i < arguments.length; i++) {
//         hasil = hasil + arguments[i];
//     }
//     // mengembalikan nilai hasil
//     return hasil;
// }

// var coba = tambah(10, 5, 22);
// console.log(coba);


// function tambah(nilaiSatu, nilaiDua) {
//     return nilaiSatu + nilaiDua;
// }

// mengisi arguments yang isinya itu function
// function kali(nilaiSatu, nilaiDua) {
//     return nilaiSatu * nilaiDua;
// }

// var a = parseInt(prompt('masukan nilai pertama : '));
// var b = parseInt(prompt('masukan nilai kedua : '));
// arguments 1 - 
// var hasil = tambah(a, b);
// arguments 2
// var hasil = tambah(a * 2, b * 2);
// arguments 3
// var hasil = kali(tambah(2, 5), tambah(3, 2));

// alert(hasil);

// arguments adalah sebuah variabel khusus yang tipe datanya array. yang isi nilai nya akan dikirimkan pada saat function di panggil
// ini bermanfaat ketika function nya punya banyak parameter. ketika menggunakan arguments maka tidak perlu memakai parameters
function tambah() {
    var hasil = 0;

    // looping untuk mendapatkan isi dari array arguments nya. jadi ketika user mengisi nilai argument berapapun.
    // maka secara otomatis arguments nya akan mengikuti berapa banyak nilai yang di isi user
    for (var i = 0; i < arguments.length; i++) {
        hasil += arguments[i];
    }

    return hasil;
}


// memanggil function dan mengisi argument
var hasil = tambah(2, 3, 4);
console.log(hasil);

