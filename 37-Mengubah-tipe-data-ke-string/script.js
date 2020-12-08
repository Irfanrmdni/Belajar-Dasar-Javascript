
// mengubah tipe data ke string

// number to string
let angka;
angka = 10;
console.log(angka);
console.log(typeof angka + ' <- Sebelum');

angka = String(10);
console.log(angka);
console.log(typeof angka + ' <- Sesudah\n\n');

// boolean to string
angka = true;
console.log(angka);
console.log(typeof angka + ' <- Sebelum');

angka = String(true);
console.log(angka);
console.log(typeof angka + ' <- Sesudah\n\n');

// date to string
angka = String(new Date());
console.log(angka);
console.log(typeof angka + ' <- Sesudah\n\n');

// array to string
angka = [1,2,3,4,5];
console.log(angka);
console.log(typeof angka + ' <- Sebelum');

angka = String([1,2,3,4,5]);
console.log(angka);
console.log(typeof angka + ' <- Sesudah\n\n');

// dengan toString
angka = (20).toString();
console.log(angka);
console.log(typeof angka + ' <- Sesudah\n\n');