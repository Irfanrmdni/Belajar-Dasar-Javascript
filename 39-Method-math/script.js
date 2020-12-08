let angka;

// Nilai PI
angka = Math.PI;
console.log(angka);

// Nilai konstan E
angka = Math.E;
console.log(angka);

// Nilai round -> pembulatan angka menjadi decimal misalnya 3.6 -> menjadi 4
angka = Math.round(3.7);
console.log(angka);

// Nilai ceil -> pembulatan angka menjadi decimal meskipun angka koma nya lebih kecil misalnya 2.1 -> menjadi 2
angka = Math.ceil(2.1);
console.log(angka);

// Nilai floor -> menjadikan angka decimal meskipun angka itu ada koma nya misalnya 6.2 -> menjadi 6
angka = Math.floor(6.2);
console.log(angka);

// Nilai sqrt -> menghitung akar kuadrat misalnya 64 -> menjadi 8
angka = Math.sqrt(64);
console.log(angka);

// Nilai absolute -> menjadikan angka minus menjadi positif misalnya -129 -> menjadi 129
angka = Math.abs(-129);
console.log(angka);

// Nilai pow -> memangkatkan nilai misalnya 10 pangkat 2 -> menjadi 100
angka = Math.pow(10,2);
console.log(angka);

// Nilai min -> untuk mencari nilai terendah
angka = Math.min(2,29,84,61,7,100,64);
console.log(angka);

// Nilai min -> untuk mencari nilai terbesar
angka = Math.max(2,29,84,61,7,1290,64);
console.log(angka);

// Nilai randaom -> menghasilkan nilai random
angka = Math.floor(Math.random()*50+1); // menghasilkan angka random decimal di bawah 50
console.log(angka);