
// alert('selamat datang :)');
// var angka = prompt('Masukan angka: ');

// if (angka % 2 === 0) {
//     alert(angka + ' adalah bilangan genap');
// } else if (angka % 2 === 1) {
//     alert(angka + ' adalah bilangan ganjil');
// } else {
//     alert('Masukan hanya angka saja bukan huruf');
// }

// alert('terimakasih :)');

var noAngkot;
var jmlAngkot = 10;
var angkotBeroperasi = 6;

for (noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
    if (noAngkot <= angkotBeroperasi) {
        console.log(`Angkot No. ${noAngkot} sedang beroperasi dengan baik`);
    } else {
        console.log(`Angkot No. ${noAngkot} sedang tidak beroperasi`);
    }
}
