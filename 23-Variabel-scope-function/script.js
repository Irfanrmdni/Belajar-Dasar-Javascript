/* 
// contoh 
var i = 2;

if(i % 2 == 0) {
    var genap = true; -> block scope
} if(genap) {
    console.log('bilangan genap');
} */

// contoh 1
// global scope / windows scope
/* var a = 2; */ // ini adalah program yang bisa digunakan dimanapun di dalam program kita, karena ini berada di paling luar object browser kita

// contoh 2
// ketika kita membuat variabel di dalam scope function ini maka ini variabel nya hanya berlaku untuk function itu saja
/* function test () { // ini block scope
    var b = 2;
} // ini block scope

console.log(b); // ini akan error karena b tidak dikenal, ini disebut function scope karena variabel b hanya berlaku di function */

// contoh 3
// ini akan memanggil yang var a = 3; karena dalam pemanggilan console nya berada di dalam scope function
var a = 2;   //-> disebut name conflict
function tes() {
    var a = 3;  //-> disebut name conflict
    console.log(a);
} 

tes();
// contoh 4
// ini akan memanggil yang var a =2; karena dalam pemanggilan console nya berada di luar function
/* var a = 2;   -> disebut name conflict
function tes() {
    var a = 3;  -> disebut name conflict
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
