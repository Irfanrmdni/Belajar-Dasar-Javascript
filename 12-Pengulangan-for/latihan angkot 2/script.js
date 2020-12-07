var jumlahAngkot = 10;
var angkotBeroperasi = 5;
var noAngkot = 1;

while(noAngkot <= angkotBeroperasi) {
    console.log('Angkot No. ' + noAngkot + ' berjalan dengan baik');
    noAngkot++;
}

for(noAngkot = angkotBeroperasi + 1; noAngkot <= jumlahAngkot; noAngkot++) {
    console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi');
}