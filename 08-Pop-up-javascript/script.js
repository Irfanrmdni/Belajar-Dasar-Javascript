// alert('Selamat datang irpan ramdani');

// prompt('Masukan nama anda: ');

// membuat prompt agar nilai inputan nya bisa di tampung di variabel
// var nama = prompt('Masukan nama lengkap :');

// output dari inputan prompt yang disimpan ke alert
// alert('nama yang anda masukan ' + nama);

// output dari inputan prompt yang disimpan ke confirm
// confirm(nama);

// output dari inputan prompt yang disimpan ke console
// console.log(nama);

// confirm('Kamu yakin gak sama aku? ');

// contoh 01 - output untuk konfirmasi jika ditekan ok akan muncul true dan jika ditekan cancel akan false
// var konfirmasi = confirm('Kamu yakin gak sama aku? ');
// alert(konfirmasi);

// contoh 02 dengan IF - output untuk konfirmasi jika ditekan ok akan muncul true dan jika ditekan cancel akan false
/* var konfir = confirm('Login untuk masuk ke akun ini!');

if (konfir === true) {
    alert('Login berhasil!');
} else {
    alert('Login gagal!');
} */

// Contoh program sederhana dengan menggabungkan alert prompt dan confirm

// alert('Selamat datang..');

// var lanjut = true;

// while(lanjut) {

//     var nama = prompt('Masukan nama lengkap anda: ');
//     alert('Halo..' + nama);

//     lanjut = confirm('ingin melanjutkan?...');
// }

// alert('terimakasih...');

alert('selamat datang :)');
var x = true

while (x) {
    var nama = prompt('masukan nama : ');

    alert('halo ' + nama);
    x = confirm('lagi gak ?');
}

alert('terimakasih');