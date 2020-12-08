const firstName = 'Yogi';
const lastName = 'Setiawan';
let val;

val = firstName + lastName;
console.log(val);

// Concatenation
val = firstName + ' ' + lastName;
console.log(val);

val = 'My name is ' + firstName + ' and ' + lastName;
console.log(val);

// Append
val = 'Agus ';
val += 'Subagja';
console.log(val);

// Escaping
val = 'That\'s awesome, i can\'t wait it';
console.log(val);

// Length
val = firstName.length;
console.log(val);

// ToUpperCase
val = lastName.toUpperCase();
console.log(val);

// ToLowerCase
val = firstName.toLowerCase();
console.log(val);

// Memanggil huruf di index ke 03 firstname
val = firstName[3];
console.log(val);

// indexof
val = lastName.indexOf('w');
console.log(val);

// charAt
val = firstName.charAt(2);
console.log(val);

// memanggil huruf terakhir dari lastname
val = lastName.charAt(lastName.length-1); // ini dikurangi 1 karena array mulai nya dari 0
console.log(val);

// Substring
val = firstName.substring(0,2); // ini memanggil huruf dari index ke 0 sampai 2
console.log(val);

// Slice
val = lastName.slice(0,7); // ini sama seperti Substring (tetapi ini bisa pakai angka min untuk memanggil index huruf terakhir)
console.log(val);

val = firstName.slice(-2);
console.log(val);

// Split
let tags = 'HTML,CSS,JAVASCRIPT,C++,JAVA,PTYTON'; // ini akan membuat setiap spasi akan turun ke bawah atau akan dipecah menjadi array dan memiliki index
tags = tags.split(',');
console.log(tags);

let hobi = 'Code-Coffee-Cooking-Travel';
hobi = hobi.split('-');
console.log(hobi);

// Replace
let negara = 'Hello i am in australia';
negara = negara.replace('Hello' , 'Hi!..'); // ini akan mengubah kata hello menjadi hi
console.log(negara);

// Includes
val = 'hello my friends i am designer'; 
// ini untuk memberitahu jika kata yang di tulis di includes ada atau sama dengan kata di variabel maka akan menjadi true atau sebaliknya
val = val.includes('my');
console.log(val);