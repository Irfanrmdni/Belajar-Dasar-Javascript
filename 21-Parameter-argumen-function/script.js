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
/* function kurang () {
    return arguments;
}

var coba = kurang(10,20,5,'hello',true);
console.log(coba); */

// jika tidak memakai arguments akan repot ketika memiliki parameter banyak contoh:
/* function jumlah (a, b, c, d, e) {
    return a + b + c + d + e;
}

var coba = jumlah(10,5,3,22,51);
console.log(coba); */

// contoh 5 membuat arguments
function tambah() {
    var hasil = 0;
    // membuat pengulangan untuk membuat panjang arguments nya
    for(var i = 0; i < arguments.length; i++) {
        hasil = hasil + arguments[i];
    }
    // mengembalikan nilai hasil
    return hasil;
}

var coba = tambah(10,5,22);
console.log(coba);

