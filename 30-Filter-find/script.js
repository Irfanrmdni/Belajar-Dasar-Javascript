

// filter
var angka = [2,16,9,3,7,22,18,8,4,5];
// mencari angla 22 di array angka
var angka2 = angka.filter(function(x){
    return x == 22; // ini artinya kita akan mencari apakah x itu sama dengan 22 kalau ada / x itu ada yang nilainya 22
}
)

console.log(angka2); // kalau ada maka tampilkan angka2 dan ini nilainya akan menjadi bentuk array 

// filter 2
var angka3 = angka.filter(function(z){
    return z > 5; // mencari nilai array di angka yang lebih dari 5
}
)

console.log(angka3.join(' '));

// find 1
var angka4 = angka.find(function(p){
    return p > 5; // mencari nilai array di angka yang lebih dari 5
}
)

console.log(angka4); // ini akan menampilkan satu saja nilai dari array angka
