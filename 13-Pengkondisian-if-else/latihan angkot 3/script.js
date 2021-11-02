var jumlahAngkot = 10;
var angkotBeroperasi = 6;
var noAngkot;

for (noAngkot = 1; noAngkot <= jumlahAngkot; noAngkot++) {

    if (noAngkot <= angkotBeroperasi) {
        console.log('Angkot No. ' + noAngkot + ' berjalan dengan baik');
    } else {
        console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi');
    }
}