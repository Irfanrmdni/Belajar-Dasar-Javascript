// tanpa menggunakan forEach
// membuat array
// var angka = [1, 2, 3, 4, 5, 6, 7, 8];
// memanggil denga looping
// for (var i = 0; i < angka.length; i++) {
//     console.log(angka[i]);
// }

// menggunakan forEach tetapi tidak menggunakan index
// membuat array
// var nama = ['agus', 'asep', 'dani', 'jajang'];
// // memanggil dengan forEach = untuk setiap
// nama.forEach(function (e) { // untuk setiap elemen yang ada dalam nama, ini membuat fungsi ekspresi
//     console.log(e); // lakukan fungsi berikut ini
// }
// );

// menggunakan forEach dengan menggunakan index
// membuat array
// var hewan = ['ayam' , 'kucing' , 'anjing' , 'kelinci'];
// // membuat forEach
// hewan.forEach(function(a,i){
//     console.log('nama hewan ' + i + " : " + a)
// }
// );


// // menggunakan Map 
// // membuat array
// var buah = [1,2,3,4,5,6,7,8,9];
// // membuat map
// var namaBuah = buah.map(function(e){
//     // console.log(e);
//     // mengembalikan nilai dari fungsi e
//     return e * 2;
// }
// )
// // memanggil fungsi
// console.log(namaBuah.join(' - '));

// // Menggunakan sort 1
// var angkaDua = [1,3,9,6,7,4,2];
// console.log('tanpa sort = ' + angkaDua.join(' '));
// // membuat sort
// angkaDua.sort();
// console.log('dengan sort = ' + angkaDua.join(' '));

// // menggunakan sort 2
// var angkaTiga = [1,9,5,6,2,3,10,19,50,22];
// console.log('tanpa sort ' + angkaTiga.join(' '));
// // membuat sort dengan function agar angka puluhan nya bisa diurutkan, karena sort ini hanya akan mengurutkan angka pertama saja
// // contoh 10 -> ini berarti menjadi 1
// angkaTiga.sort(function(a,b){
//     return a-b;
// })
// console.log('dengan sort ' + angkaTiga.join(' '));


// forEach

// var angka = [1, 2, 3, 4, 5, 6, 7, 8];

// menggunakan function ekspresi
// var output = function (e) {
//     console.log(e);
// }

// angka.forEach(output);

// angka.forEach(function (e) {
//     console.log(e);
// })

// var mahasiswa = ['agus', 'nisa', 'fitri', 'zihan'];

// menggunakan function declaration
// function output(elemen) {
//     console.log(elemen);
// }

// dengan menggunakan index
// function output(elemen, index) {
//     console.log(`mahasiswa ke ${index + 1} adalah ${elemen}`);
// }

// mahasiswa.forEach(output);


// map

// var angka = [1, 3, 9, 6, 2, 4, 7, 5];

// var angka2 = angka.map(function (e) {
//     return e;
// })

// console.log(angka2.join('-'));

// sort
// var angka = [1, 3, 9, 6, 2, 4, 7, 5];

// console.log('sebelum di sort\t' + angka.join(' - '));
// angka.sort();
// console.log('setelah di sort\t' + angka.join(' - '));

var angka = [1, 3, 22, 9, 6, 90, 2, 4, 7, 5, 15];

// angka puluhan nya tidak akan terurut
// angka.sort();

// solusi agar angka puluhan nya dapat terurut
console.log(angka.join(' - '));
angka.sort(function (a1, a2) {
    return a1 - a2;
})
console.log(angka.join(' - '));
console.log(angka.reverse().join(' - '));


// Array objek dapat diurutkan dengan membandingkan nilai salah satu propertinya.
var items = [
    { name: 'Edward', value: 21 },
    { name: 'Sharpe', value: 37 },
    { name: 'And', value: 45 },
    { name: 'The', value: -12 },
    { name: 'Magnetic', value: 13 },
    { name: 'Zeros', value: 37 }
];

// sort by value
// var sortValue = items.sort(function (a, b) {
//     return a.value - b.value;
// });

// console.log(sortValue);

// sort by name
var nameSort = items.sort(function (a, b) {
    var nameA = a.name.toUpperCase(); // ignore upper and lowercase
    var nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
        return -1;
    }
    if (nameA > nameB) {
        return 1;
    }

    // names must be equal
    return 0;
});

console.log(nameSort);