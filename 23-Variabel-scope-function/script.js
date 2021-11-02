
// contoh
/* var i = 2;

if (i % 2 == 0) {
    var genap = true; // -> block scope
} if (genap) {
    console.log('bilangan genap');
} */


// contoh 1
// global scope / windows scope
// var a = 2;  // ini adalah program yang bisa digunakan dimanapun di dalam program kita, karena ini berada di paling luar object browser kita

// contoh 2
// ketika kita membuat variabel di dalam scope function ini maka ini variabel nya hanya berlaku untuk function itu saja
/* function test() { // ini block scope
    var b = 2;
} // ini block scope

console.log(b); */ // ini akan error karena b tidak dikenal, ini disebut function scope karena variabel b hanya berlaku di function */

// contoh 3
// ini akan memanggil yang var a = 3; karena dalam pemanggilan console nya berada di dalam scope function
// var a = 2;   //-> disebut name conflict
// function tes() {
//     var a = 3;  //-> disebut name conflict
//     console.log(a);
// }

// tes();

// contoh 4
// ini akan memanggil yang var a =2; karena dalam pemanggilan console nya berada di luar function
/* var a = 2;   // -> disebut name conflict
function tes() {
    var a = 3;  // -> disebut name conflict
}

tes();
console.log(a); */

// contoh 5
/* var a = 2;

function tes() {
    a = 100;  // ini akan menimpa variabel global a , karena didalam function tidak ada variabel a
}
tes();
console.log(a); */ // akan menghasilkan output 100

// contoh 6
// dan diluar juga tidak ada tipe data, maka function secara otomatis akan membuatkan tipe data var a
// otomatis dibuatkan var a;

/* function tes() {
    a = 500;  -> ini tidak ada tipe data
}
tes();
console.log(a); */

// contoh 7 
// ini akan memangil yang function,
/*
var a = 9;

function tes(a) {
    console.log(a);
}

tes(100); -> akan menghasilkan output 100 dari function */

// contoh 8
/* var a = 9;

function tes(a) {
    console.log(a);
}

tes(100); -> akan menghasilkan output dari function
console.log(a); -> akan menghasilkan output 9 dari variabel global */


// memanggil variabel global. didalam variabel / blok lokal. yang terjadi variabel yang di lokal akan diabaikan
// karena dalam pemanggilan nya memakai window. itu sama saja dengan global
/* var a = 10;

function tes() {
    var a = 5;
    console.log(window.a);
}

tes(); */

// yang terjadi ini akan mengabil nilai 5. karena a yang ada di dalam blok lokal nya tidak ada variabel. 
// dan a akan mencari variabel yang ada di luar.  
/* var a = 10;

function tes() {
    a = 5;
}

tes();
console.log(a); */

// yang terjadi adalah. yang pemanggilan function tes(4) akan menghasilkan output 4. sedangkan yang console(a) akan menghasilkan output 2.
// karna parameter a itu berlaku hanya untuk lokal saja 
/* var a = 2;

function tes(a) {
    console.log(a);
}

tes(4);
console.log(a); */

// yang terjadi adalah function tes(a) dan console(a) yang ada diluar. akan mengambil nilai dari variabel global yaitu var = a2;
// karna parameter a itu hanya berlaku untuk lokal saja. atau didalam function saja
var a = 2;

function tes(a) {
    console.log(a);
}

tes(a);
console.log(a);