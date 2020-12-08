/*
    Input User Jumlah Barang
	Input User Harga Barang
	Total Harga Barang
	Discount
	Jika Total Pembelian barang diatas Rp.80.000
	User Mendapatkan Souvenir Payung
	Jika Total Pembelian barang dibawah Rp.70.000
	User Mendapatkan Souvenir Piring
	int total2;
	float discount;
	int barang;
    */

    var jumlah;
    var harga = 0;
    var total = 0;
    var diskon;
    var barang = [];
    var ulangi = true;
    while(ulangi) {

    jumlah = parseInt(prompt('Masukan jumlah barang : '));
    
    for(var i = 1; i <= jumlah; i++) {
        barang[i] = parseInt(prompt('Masukan harga barang ke-' + i +' = '));
    }
    
    for(var i = 1; i <= jumlah; i++) {
        harga = harga + barang[i];
    }

    alert('Harga barang yang dibeli : ' + harga);

    if(harga >= 400000) {
        diskon = harga * 0.45;
        total = harga - diskon;
        alert('Discount 45% -' + diskon + '\nTotal yang harus anda bayar = ' + total);
        alert('Selamat anda mendapatkan souvenir Speaker');
    } else if(harga >= 300000 && harga <= 390000) {
        diskon = harga * 0.35;
        total = harga - diskon;
        alert('Discount 35% -' + diskon + '\nTotal yang harus anda bayar = ' + total);
        alert('Selamat anda mendapatkan souvenir payung');
    } else if(harga >= 200000 && harga <= 290000) {
        diskon = harga * 0.30;
        total = harga - diskon;
        alert('Discount 30% -' + diskon + '\nTotal yang harus anda bayar = ' + total);
        alert('Selamat anda mendapatkan souvenir piring');
    } else if(harga >= 150000 && harga <= 190000) {
        diskon = harga * 0.20;
        total = harga - diskon;
        alert('Discount 20% -' + diskon + '\nTotal yang harus anda bayar = ' + total);
        alert('Selamat anda mendapatkan souvenir gelas');
    } else {
        diskon = harga * 0.0;
        total = harga - diskon;
        alert('Total yang harus anda bayar = ' + total);
        alert('Anda tidak mendapatkan discount...\nAyo belanja lagi...');
    }

    ulangi = confirm('Belanja lagi ? ...');
}