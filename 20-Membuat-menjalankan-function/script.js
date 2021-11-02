// function penjumlahanDuaKubus(kubusSatu, kubusDua) {
//     var total; // menghitung total kedua kubus
//     var volumeSatu, volumeDua;

//     volumeSatu = kubusSatu * kubusSatu * kubusSatu;
//     volumeDua = kubusDua * kubusDua * kubusDua;

//     total = volumeSatu + volumeDua;
//     return total; // mengembalikan nilai total
// }


// console.log('total: ' + penjumlahanDuaKubus(2, 2));
// console.log('total: ' + penjumlahanDuaKubus(12, 3));
// console.log('total: ' + penjumlahanDuaKubus(11, 5));

function jumlahVolumeubus(a, b) {
    var volumeA = a * a * a;
    var volumeB = b * b * b;
    var total = volumeA + volumeB;
    return total;
}

console.log(jumlahVolumeubus(8, 3));
console.log(jumlahVolumeubus(12, 4));
console.log(jumlahVolumeubus(22, 2));
console.log(jumlahVolumeubus(3, 5));
console.log(jumlahVolumeubus(121, 2));
console.log(jumlahVolumeubus(42, 91));