
// membuat tanggal dan waktu di javascript

// membuat hari , tanggal dan waktu sekarang
let today;
today = new Date();

console.log(today);
console.log(typeof today); // tipe data nya object

// membuat hari , tanggal dan waktu custom 1
let birthday;
birthday = new Date('02-09-2000');

console.log(birthday);
console.log(typeof birthday); // tipe data nya object

// membuat hari , tanggal dan waktu custom 2
let birthday2;
birthday2 = new Date('January 15 1999');

console.log(birthday2);
console.log(typeof birthday2); // tipe data nya object

// membuat hari , tanggal dan waktu custom 3
let birthday3;
birthday3 = new Date('12/29/1933');

console.log(birthday3);
console.log(typeof birthday3); // tipe data nya object

// mengubah tanggal pada birthday3
birthday3.setDate(10);
console.log(birthday3 + ' Mengubah Tanggal');

// mengubah bulan pada birthday3
birthday3.setMonth(6);
console.log(birthday3 + ' Mengubah Bulan');

// mengubah tahun pada birthday3
birthday3.setFullYear(2010);
console.log(birthday3 + ' Mengubah Tahun\n\n');

// membuat tahun sekarang
let val;
val = today.getFullYear();
console.log(val + ' Tahun');

// membuat bulan sekarang
val = today.getMonth();
console.log(val + ' Bulan');

// membuat hari sekarang
val = today.getDate();
console.log(val + ' Hari');

// membuat jam sekarang
val = today.getHours();
console.log(val + ' Jam');

// membuat menit sekarang
val = today.getMinutes();
console.log(val + ' Menit');

// membuat detik sekarang
val = today.getSeconds();
console.log(val + ' Detik');

// membuat milidetik sekarang
val = today.getUTCMilliseconds();
console.log(val + ' MiliDetik');