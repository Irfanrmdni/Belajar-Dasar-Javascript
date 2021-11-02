// ==========================================================================================================================================================

// mehtod array

// 1. concat : metode yang digunakan untuk menggabungkan dua atau lebih array.
// Metode ini tidak mengubah array yang ada, tetapi mengembalikan array baru.

// A.
/* const angka1 = [1, 3, 5];
const angka2 = [2, 4, 6];

const angka3 = angka1.concat(angka2); */

// B.
/* const angka1 = [1, 3, 5];
const angka2 = [2, 4, 6];
const angka3 = [7, 8, 9];

const angka4 = angka1.concat(angka2, angka3);

console.log(angka4); */

// ==========================================================================================================================================================

// 2. fill : Metode perubahan semua elemen dalam array untuk nilai statis, dari indeks awal (default 0)
// untuk indeks akhir (default array.length). Ini mengembalikan array yang dimodifikasi.
// numbers.fill(nilai, indexAwal , indexAkhir)

// A.
// const angka1 = [1, 2, 3, 4, 5];

// angka1.fill(0, 2, 5);

// console.log(angka1);

// B.
// function Numbers(n) {
//     return Array(n).fill(0).map(function (value, index) {
//         return index + 1;
//     })
// }

// console.log(Numbers(10));

// ==========================================================================================================================================================

// 3. every : Metode tes apakah semua elemen dalam array lulus uji dilaksanakan oleh fungsi yang disediakan. Ini mengembalikan nilai Boolean
// A. menghasilkan True
/* const numbers = [1, 2, 3, 4, 5];

const res = numbers.every(bilPositif);

function bilPositif(angka) {
    return angka > 0;
}

console.log(res);
 */

// B. menghasilkan false karna ada nilai minus
/* const numbers = [-2, -1, 1, 2, 3, 4, 5];

const res = numbers.every(bilPositif);

function bilPositif(angka) {
    return angka > 0;
}

console.log(res); */

// C. menghasilkan true karna object nya sama semua
/* const person = [
    {
        name: 'irpan'
    },
    {
        name: 'maya'
    },
    {
        name: 'fitri'
    }
];

const res = person.every(function (person) {
    return person.name !== undefined;
});

console.log(res); */

// D. menghasilkan false karna ada 1 object yang tidak sama nama nya
/* const person = [
    {
        name: 'irpan'
    },
    {
        name: 'maya'
    },
    {
        surname: 'fitri'
    }
];

const res = person.every(function (person) {
    return person.name !== undefined;
});

console.log(res); */

// ==========================================================================================================================================================

// 4. indexOf : method mengetahui index dari elemen array atau
// mengembalikan indeks pertama di mana elemen tertentu dapat ditemukan dalam array, atau -1 jika tidak hadir.

// A.
// const names = ['fitri', 'irfan', 'anisa', 'agus'];

// const idx = names.indexOf('irfan');

// console.log('index ke : ' + idx);

// B. akan menghasilkan sad.. karna tidak ada maya di array names
/* const names = ['fitri', 'irfan', 'anisa', 'agus',];

const idx = names.indexOf('maya');

if (idx > -1) {
    console.log('ya we have maya');
} else {
    console.log('sad...');
} */

// C. akan menghasilkan ya we have maya karna ada maya di array names
/* const names = ['fitri', 'irfan', 'anisa', 'agus', 'maya'];

const idx = names.indexOf('maya');

if (idx > -1) {
    console.log('ya we have maya');
} else {
    console.log('sad...');
} */

// ==========================================================================================================================================================

// 5. lastIndexOf() : Metode mengembalikan indeks terakhir di mana elemen tertentu dapat ditemukan dalam array,
// atau -1 jika tidak hadir. Array dicari mundur, mulai dari fromIndex.

// A. akan menghasilkan 4 karna yg diambil yang paling terakhir
/* const names = ['fitri', 'irfan', 'anisa', 'maya', 'irfan', 'agus'];

const idx = names.lastIndexOf('irfan');

console.log(idx);
 */

// ==========================================================================================================================================================

// 6. reduce : adalah mengembalikan jumlah semua elemen dalam array.
// reduce berjalan melalui elemen demi elemen array, pada setiap langkah menambahkan nilai array saat ini ke hasil dari langkah sebelumnya 
// (hasil ini adalah jumlah berjalan dari semua langkah sebelumnya) — hingga tidak ada lagi elemen untuk ditambahkan.

// A.
/* const numbers = [1, 2, 3, 4, 5];

const total = numbers.reduce(jumlah);

function jumlah(accumulator, value) {
    return accumulator + value;
}

console.log(total); */

// B.
/* const numbers = [1, 22, 10, 4, 5];

const max = numbers.reduce(callback, -Infinity);

function callback(accumulator, value) {
    if (accumulator > value) {
        return accumulator;
    } else {
        return value;
    }
}

console.log(max); */

// C.
/* const store = [
    {
        product: 'laptop',
        value: 1000,
        count: 3
    },
    {
        product: 'desktop',
        value: 1500,
        count: 4
    },
    {
        product: 'mobile',
        value: 500,
        count: 10
    }
];

const totalValueStore = store.reduce((acc, item) => acc + (item.value * item.count), 0);

console.log(totalValueStore); */

// ==========================================================================================================================================================

// 7. includes : Metode menentukan apakah sebuah array mencakup nilai tertentu antara entri nya, kembali trueatau falseyang sesuai.

// A. akan menghasilkan true karna apple ada di array fruits
/* var fruits = ['apple', 'grape', 'mango'];

var res = fruits.includes('apple');

console.log(res); */

// B. akan menghasilkan false karna strawberry tidak ada di array fruits
/* var fruits = ['apple', 'grape', 'mango'];

var res = fruits.includes('strawberry');

console.log(res); */

// C. akan menghasilkan oh no.. karna strawberry tidak ada di array fruits
var fruits = ['apple', 'grape', 'mango'];

var res = fruits.includes('strawberry');

if (res) {
    console.log('yes strawberry');
} else {
    console.log('oh no..');
}