

let val;

// menampilkan ukuran height halaman website
val = window.outerHeight;
console.log(val + ' Height');

// menampilkan ukuran width halaman website
val = window.outerWidth;

console.log(val + ' Width');

// menampilkan lokasi 
val = window.location;
console.log(val);

// menampilkan history
val = window.history.go(1); // ini artinya maju ke halaman selanjutnya sebanyak 1
console.log(val);
