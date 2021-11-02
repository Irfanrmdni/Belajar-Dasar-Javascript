// Membuat variabel
var totalHarga = 0;
var jumlahBarang;
var diskon;
var barang = [jumlahBarang];
var hargaBarang = 0;
var ulangi = true;

while (ulangi) {

    // Input jumlah barang dan dimasukan ke variabel jumlah barang
    jumlahBarang = parseInt(prompt('Masukan jumlah barang yang dibeli: '));

    // pengulangan untuk barang yang telah di input jumlah nya
    for (var i = 1; i <= jumlahBarang; i++) {
        // input harga barang sampai ke jumlah barang dan dimasukan ke variabel barang[i]
        barang[i] = parseInt(prompt('Masukan harga barang ke-' + i + ' : '));
    }

    // pengulangan untuk menjumlahkan total harga barang
    for (var i = 1; i <= jumlahBarang; i++) {
        // menampung nilai/hasil barang[i] ke hargaBarang
        hargaBarang = hargaBarang + barang[i];
    }

    // menampilkan total harga barang 
    alert('Total harga barang : ' + hargaBarang);

    // kondisi 
    if (hargaBarang >= 50000 && hargaBarang <= 100000) {
        // diskon
        diskon = hargaBarang * 0.25;
        alert('Anda mendapatkan diskon 25% -' + diskon);
        // total harga seluruhnya
        totalHarga = hargaBarang - diskon;
        // menampilkan total harga seluruhnya
        alert('Total yang harus dibayar : ' + totalHarga);
    } else if (hargaBarang >= 100000 && hargaBarang <= 300000) {
        // diskon
        diskon = hargaBarang * 0.4;
        alert('Anda mendapatkan diskon 40% -' + diskon);
        // total harga seluruhnya
        totalHarga = hargaBarang - diskon;
        // menampilkan total harga seluruhnya
        alert('Total yang harus dibayar : ' + totalHarga);
    } else if (hargaBarang >= 300000) {
        // diskon
        diskon = hargaBarang * 0.5;
        alert('Anda mendapatkan diskon 50% -' + diskon);
        // total harga seluruhnya
        totalHarga = hargaBarang - diskon;
        // menampilkan total harga seluruhnya
        alert('Total yang harus dibayar : ' + totalHarga);
    } else {
        alert('Anda tidak mendapatkan diskon\n' + 'Total yang harus dibayar : ' + hargaBarang);
    }

    ulangi = confirm('Mengulang ?...');

}