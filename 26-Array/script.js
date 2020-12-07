
// tanpa array
var hari1 = 'senin';
var hari2 = 'selasa';
var hari3 = 'rabu';
var hari4 = 'kamis';
var hari5 = 'jumat';
var hari6 = 'sabtu';
var hari7 = 'minggu';

// dengan array
var hari = ['senin' , 'selasa' , 'rabu' , 'kamis' , 'jumat' , 'sabtu' , 'minggu'];

// memanggil array
console.log(hari[2]);

// mengganti index array
hari[2] = 'sawal';

// memanggil array
console.log('rabu diganti jadi ' + hari[2] + '\n\n');

// memanggil semua nilai array dengan loop
for(var i = 0; i <= hari.length; i++) {
    console.log(hari[i]);
}

// membuat fungsi
var myArr = function () {
    console.log('hello world!');
}

// menyimpan fungsi di dalam array
var myArr2 = ['tes' , 200 , false , myArr];

// array 2D
var array2d = [10, 20 , 30 , ['tes' , 'tes2' , 'test3']];

// memanggil array 2d
console.log(array2d[3][2]);