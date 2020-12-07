//Membuat variabel jumlah angkot sebanyak 10
var jumlahAngkot = 10;
//Membuat variabel angkot yang beroperasi sebanyak 6
var angkotBeroperasi = 6;

//Membuat variabel noAngkot dan melakukan pengulangan dari 1 sampai jumlahAngkot (10)
for(var noAngkot = 1; noAngkot <= jumlahAngkot; noAngkot++) {
    //Pengkondisian : jika noAngkot nya lebih kecil sama dengan angkotBeroperasi (6) dan noAngkot nya tidak sama dengan 5
    if(noAngkot <= angkotBeroperasi && noAngkot !== 5) {
        //Maka akan menjalankan console ini
        console.log('Angkot No. ' + noAngkot + ' berjalan dengan baik');

      //Pengkondisian : sebaliknya jika noAngkot nya sama dengan 8 atau noAngkot nya 10 atau noAngkot nya 5
    } else if (noAngkot == 8 || noAngkot == 10 || noAngkot == 5) {
        //Maka akan menjalankan console ini
        console.log('Angkot No. ' + noAngkot + ' sedang lembur');

      //Pengkondisian : Sebaliknya atau tidak dari semua yang di atas itu 
    } else {
        //Maka akan menjalankan console ini
        console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi');
    }
}