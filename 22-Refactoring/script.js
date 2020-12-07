
// tanpa refactoring
/* function penjumlahanDuaKubus(kubusSatu, kubusDua) {
    var total; // menghitung total kedua kubus
    var volumeSatu, volumeDua;

    volumeSatu = kubusSatu * kubusSatu * kubusSatu;
    volumeDua = kubusDua * kubusDua * kubusDua;

    total = volumeSatu + volumeDua;
    return total; // mengembalikan nilai total
}


console.log('total: ' + penjumlahanDuaKubus(6,9));
console.log('total: ' + penjumlahanDuaKubus(12,3));
console.log('total: ' + penjumlahanDuaKubus(11,5)); */

// dengan refactoring
function penjumlahanDuaKubus(kubusSatu, kubusDua) {
    return kubusSatu * kubusSatu * kubusSatu + kubusDua * kubusDua * kubusDua;
}


console.log('total: ' + penjumlahanDuaKubus(6,9));
console.log('total: ' + penjumlahanDuaKubus(12,3));
console.log('total: ' + penjumlahanDuaKubus(11,5));