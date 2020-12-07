
// membuat object

// cara 1 - dengan object function declaration
function object_1 () {
    console.log('hello world! dengan object function declaration');
}
// memanggil object function declaration
object_1();


// cara 2 - dengan object literal
var object_2 = {};
// membuat method
object_2.nama = function() {
    console.log('hello world! dengan object literal');
}
// memanggil object literal
object_2.nama();


// cara 3 - dengan object constructor
function object_3 () {
    console.log('hello world! dengan object constructor');
}
// memanggil object constructor
new object_3();


// Konsep This -> object global atau sama dengan window
// This adalah sebuah keyword spesial yang secara otomatis itu didefinisikan pada setiap function


// 1. This mengembalikan object global pada function declaration
function object_4 () {
    console.log(this);
    console.log('hello world! dengan object function declaration dan menggunakan this mengembalikan object global');
}
// memanggil object function declaration 1
object_4();
// memanggil object function declaration 2 , ini sama saja 
// this.object_4();

// 2. This mengembalikan object yang bersangkutan
var object_5 = {nama : 'irpan' , umur : 20};
// membuat method
object_5.halo = function() {
    console.log(this);
    console.log('hello world! dengan object literal dan this mengembalikan object yang bersangkutan');
}
// memanggil object literal
object_5.halo();

// 3. This mengembalikan object global sama seperti function declaration
function object_6 () {
    console.log(this);
    console.log('hello world! dengan object constructor this mengembalikan object global');
}
// memanggil object constructor dan ini mengembalikan object yang baru dibuat
// new object_6();

// memanggil object constructor dan ini mengembalikan object window
// object_6();

// memanggil object constructor dan ini mengembalikan object yang baru dibuat yaitu object_7
var object_7 = new object_6();
