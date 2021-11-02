
// mengubah tipe data ke number

// string to number
let angka;
angka = '14022';
console.log(angka);
console.log(typeof angka + ' <- Sebelum');

angka = Number('14022');
console.log(angka);
console.log(typeof angka + ' <- Sesudah\n\n');

angka = Number('18.459'); // akan menjadi angka decimal 
console.log(angka.toFixed());
console.log(typeof angka + ' <- Sesudah\n\n');

angka = Number('18.4532'); // akan menjadi angka float/double/koma
console.log(angka.toFixed(2)); // ini akan mengambil angka dibelakang koma sebanyak 2
console.log(typeof angka + ' <- Sesudah\n\n');

// boolean to number
angka = true;
console.log(angka);
console.log(typeof angka + ' <- Sebelum');

angka = Number(true);
console.log(angka);
console.log(typeof angka + ' <- Sesudah\n\n');

// string huruf to number
angka = Number('hello'); // akan menghasilkan nilai NaN
console.log(angka);
console.log(typeof angka + ' <- Sesudah\n\n');

// string to number parseInt
angka = '25.873';
console.log(angka);
console.log(typeof angka + ' <- Sebelum');

angka = parseInt(25.873);
console.log(angka);
console.log(typeof angka + ' <- Sesudah');

// string to number parseFloat
angka = parseFloat(25.873);
console.log(angka);
console.log(typeof angka + ' <- Sesudah\n\n');

// menjumlahkan string dengan angka
let angka_1 = String(10);
let angka_2 = 20;

let hasil;

hasil = angka_1 + angka_2;
console.log(hasil);
console.log(typeof hasil + ' <- Menjumlahkan string dengan angka\n\n');

// mengubah hasil nya menjadi number , (tetapi tetap hasilnya tidak berubah hanya tipe data hasil nya akan menjadi number)
hasil = Number(angka_1 + angka_2);
console.log(hasil);
console.log(typeof hasil + ' <- Menjumlahkan string dengan angka\n\n');
