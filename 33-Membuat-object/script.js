// Membuat Object

// 1. Object literal
// var mahasiswa = {
//     nama: 'irpan ramdani', // (nama disebut key nya) , ('irpan ramdani' disebut nilai nya) -> dinamakan properti tipe data string
//     nim: 2113191069,
//     email: 'irfanrmdni209@gmail.com',
//     jurusan: 'teknik informatika'
// }

// memanggil object literal
// console.log(mahasiswa);

// 2. Function declaration
// function objectBuah(nama, rasa, warna, khasiat) {
//     // membuat object data buah
//     var buah = {};
//     // membuat key dari var buah dan di simpan ke function nama
//     buah.namaBuah = nama;
//     // membuat key dari var buah dan di simpan ke function rasa
//     buah.rasaBuah = rasa;
//     // membuat key dari var buah dan di simpan ke function warna
//     buah.warnaBuah = warna;
//     // membuat key dari var buah dan di simpan ke function khasiat
//     buah.khasiatBuah = khasiat;

//     return buah;
// }


// mengisi object buah
// var buah_1 = objectBuah('Semongko', 'Manis', 'Merah', 'Vitamin A');

// memanggil object buah 1
// console.log(buah_1);

// 3. Constructor function (keyword new)
// function NamaBinatang(nama, makanan, jenis, warna) {
//     // membuat object
//     // var this = {}; dengan menggunakan this ini sama saja dengan kita membuat seperti objectBuah
//     this.nama = nama;
//     this.makananBinatang = makanan;
//     this.jenisBinatang = jenis;
//     this.warnaBinatang = warna;
//     // return this;
// }

// mengisi object nama binatang
// dengan tidak menggunakan new maka kita membuat function declaration yang harus ada var nya dan return nya seperti objectBuah
// var binatang = new NamaBinatang('Gajah', 'Rumput', 'Karnivora', 'Abu-abu');

// memanggil object binatang_1
// console.log(binatang);





// 1. object literal
var mhs_1 = {
    nama: 'udin',
    nim: '1402214022',
    email: 'udinajah@gmail.com',
    jurusan: 'Teknik kimia'
};

var mhs_2 = {
    nama: 'rika',
    nim: '1402214022',
    email: 'udinajah@gmail.com',
    jurusan: 'Teknik bidan'
};

// 2. function declaration
function buatObjectMhs(nama, nim, email, jurusan) {
    var mhs = {
        nama: nama,
        nim: nim,
        email: email,
        jurusan: jurusan
    };

    return mhs;
}

var mhs_3 = buatObjectMhs('anisa', '1401114011', 'anisa@gmail.com', 'Teknik mesin');
var mhs_4 = buatObjectMhs('fitri', '1401114011', 'fitri@gmail.com', 'Teknik elektro');

// 3. constructor
function Mahasiswa(nama, nim, email, jurusan) {
    // this ini sama aja dengan var this = {};
    this.nama = nama;
    this.nim = nim;
    this.email = email;
    this.jurusan = jurusan;
    // return this;
}

var mhs_5 = new Mahasiswa('nabila', '14001400', 'nabila@gmail.com', 'multimedia');
var mhs_6 = new Mahasiswa('kiki', '14001400', 'kiki@gmail.com', 'multimedia');

