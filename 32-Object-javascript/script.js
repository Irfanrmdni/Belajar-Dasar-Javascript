

// contoh 01 tanpa object
// membuat variabel
// var namaMhs = 'irpan';
// var umur = 20;
// var lulus = true;
// var ipSemester = [2.70, 3.20, 3.50, 3.75, 2.90, 3.50, 2.75, 3.90];

// // menghitung nilai IPK
// function ipkSemester (ipSemester) {
//     var total = 0;

//     for(var i = 0; i < ipSemester.length; i++) {
//         total += ipSemester[i];
//     }

//     return total / ipSemester.length;
// }
// // menampilkan hasil
// console.log('tanpa array ' + ipkSemester(ipSemester));

// // contoh 02 dengan array , tanpa object
// // membuat variabel
// var mahasiswa = ['irpan' , true , [2.70 , 3.20 , 3.50 , 3.75 , 2.90 , 3.50 , 2.75 , 3.90]];

// // menghitung nilai IPK
// function ipkSemester (ipSemester) {
//     var total = 0;

//     for(var i = 0; i < ipSemester.length; i++) {
//         total += ipSemester[i];
//     }

//     return total / ipSemester.length;
// }
// // menampilkan hasil
// console.log('dengan array ' + ipkSemester(mahasiswa[2]));

// // contoh 03 dengan object literal
// // membuat object literal
// var mahasiswa = {
//     nama: 'nabila',
//     lulus: true,
//     ipSemester: [2.70, 3.20, 3.50, 3.75, 2.90, 3.50, 2.75, 3.90],
//     // membuat function 
//     ipkSemester: function () {
//         var total = 0;
//         var ips = this.ipSemester;
//         for (var i = 0; i < ips.length; i++) {
//             total += ips[i];
//         }

//         return total / ips.length;
//     }
// }

// // // memanggil object literal
// console.log('dengan object ' + mahasiswa.ipkSemester());

// // contoh 04 object literal bersarang
/* var identitas = {
    nama: 'Irpan',
    jenisKelamin: 'Pria',
    umur: 20,
    // membuat alamat object
    alamat: {
        jalan: 'Cijerokaso no.60 sarijadi kota bandung',
        kota: 'Kota Bandung',
        provinsi: 'Jawa barat'
    }
}

console.log(identitas);
console.log(identitas.jenisKelamin);
console.log(identitas.alamat); */

var mhs = {
    nama: 'zihan nur',
    umur: 22,
    ips: [3.28, 2.90, 3.45, 2.99, 3.20],
    alamat: {
        jalan: 'jl.cijerokaso no.60',
        kota: 'bandung',
        provinsi: 'jawa barat'
    }
};
