
// tipe data const

// contoh 01 dengan menggunakan nilai int
const angka = 120;

// mengubah nilai number
// number = 50; 
// -> ini akan error karena const tidak bisa di ubah nilai nya

console.log(angka);

// contoh 02 dengan menggunakan nilai string
const nama = 'irpan ramdani';

// mengubah nilai string
// nama = 'juli';
// -> ini akan error karena const tidak bisa di ubah nilai nya

console.log(nama);

// contoh 03 dengan menggunakan object
const alamat = {
    jalan: 'sarijadi',
    kecamatan: 'sukasari',
    kelurahan: 'sarijadi',
}

// mengubah isi / properti dari object alamat
// alamat.jalan = 'Cimareme';
// alamat.kecamatan = 'Cibarengkok';
// -> ini bisa dilakukan atau tidak akan error karena yang di ubah adalah isinya / properti nya bukan nama const nya (alamat)

console.log(alamat);

// contoh 04 dengan menggunakan array
const ganjil = [1,3,5,7,9];

// mengubah isi / nilai index array
// ganjil[0] = 49;
// ganjil[2] = 99;
// ganjil.push(19);
// -> ini bisa dilakukan atau tidak akan error karena yang di ubah adalah isinya / properti nya bukan nama const nya (ganjil)

console.log(ganjil.join('-'));

// const helo;
// console.log(helo);
// -> ini tidak bisa dilakukan atau error karena const itu harus mempunyai nilai atau const itu tidak bisa undefined (tidak memiliki nilai)

//==================================================================================================================================

// Tipe data Let

// contoh 1
let genap = 14022;

console.log(genap);

// contoh 2
let namaHewan = 'Gajah';

// let namaHewan = 'Kangguru';
// -> ini tidak bisa dilakukan atau error karena dengan menggunakan let kita tidak bisa membuat 2 variabel dengan nama yang sama

console.log(namaHewan);

