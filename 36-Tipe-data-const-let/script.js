
// tipe data const

// contoh 01 dengan menggunakan nilai int
// const angka = 120;

// mengubah nilai number
// angka = 50; 
// -> ini akan error karena const tidak bisa di ubah nilai nya

// console.log(angka);

// contoh 02 dengan menggunakan nilai string
// const nama = 'irpan ramdani';

// mengubah nilai string
// nama = 'juli';
// -> ini akan error karena const tidak bisa di ubah nilai nya

// console.log(nama);

// contoh 03 dengan menggunakan object
// const alamat = {
//     jalan: 'sarijadi',
//     kecamatan: 'sukasari',
//     kelurahan: 'sarijadi',
// }

// mengubah isi / properti dari object alamat
// alamat.jalan = 'Cimareme';
// alamat.kecamatan = 'Cibarengkok';
// -> ini bisa dilakukan atau tidak akan error karena yang di ubah adalah isinya / properti nya bukan nama const nya (alamat)

// console.log(alamat);

// contoh 04 dengan menggunakan array
// const ganjil = [1, 3, 5, 7, 9];

// mengubah isi / nilai index array
// ganjil[0] = 49;
// ganjil[2] = 99;
// ganjil.push(19);
// -> ini bisa dilakukan atau tidak akan error karena yang di ubah adalah isinya / properti nya bukan nama const nya (ganjil)

// console.log(ganjil.join('-'));

// const helo;
// console.log(helo);
// -> ini tidak bisa dilakukan atau error karena const itu harus mempunyai nilai atau const itu tidak bisa undefined (tidak memiliki nilai)

//==================================================================================================================================

// Tipe data Let

// contoh 1
// let genap = 14022;

// console.log(genap);

// contoh 2
// let namaHewan = 'Gajah';

// let namaHewan = 'Kangguru';
// -> ini tidak bisa dilakukan atau error karena dengan menggunakan let kita tidak bisa membuat 2 variabel dengan nama yang sama

// console.log(namaHewan);

// ===========================================================================================================================================================

// var vs let vs const 

// 1. var

// ini akan berjalan normal
// var i = 10;
// console.log(i);

// ini akan menghasilkan undefined karna variabel nya dibuat di akhir
// console.log(i);
// var i = 10;

// ini akan menghasilkan nilai 0 sampai 10 karna setelah for nya ada pemanggilan i. dimana var i itu bisa diakses diluar for 
// for (var i = 0; i < 10; i++) {
//     console.log(i);
// }
// console.log(i);

// 2. let

// ini akan berjalan normal
// let i = 10;
// console.log(i);

// ini akan menghasilkan error karna variabel nya dibuat di akhir
// console.log(i);
// let i = 10;

// ini akan menghasilkan 0 sampai 9 dan akan error karna memanggil variabel i diluar scope akan error. ini terjadi karna menggunakan let 
// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }
// console.log(i);

