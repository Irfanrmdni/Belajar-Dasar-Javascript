// alert('Mulai!');

// contoh pengulangan for 
/* for (var i = 0; i < 5; i++) {
    alert('hallo');
}

alert('selesai'); */

// Contoh pengkondisian If
// var angka = prompt('Masukan angka : ');

// if(angka % 2 === 0) {
//     alert(angka + ' adalah bilangan genap');
// } else {
//     alert(angka + ' adalah bilangan ganjil');
// }

// alert('Selesai!');

var angka = prompt('masukan angka : ');

if (angka % 2 === 0) {
    alert(angka + ' adalah bilangan genap');
    document.write(angka + ' GENAP');
} else {
    alert(angka + ' adalah bilangan ganjil');
    document.write(angka + ' GANJIL');
}