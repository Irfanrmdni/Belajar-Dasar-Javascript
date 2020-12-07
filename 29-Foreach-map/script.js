// tanpa menggunakan forEach
// membuat array
var angka = [1,2,3,4,5,6,7,8];
// memanggil denga looping
for(var i = 0; i < angka.length; i++) {
    console.log(angka[i]);
}

// menggunakan forEach tetapi tidak menggunakan index
// membuat array
var nama = ['agus' , 'asep' , 'dani' , 'jajang'];
// memanggil dengan forEach = untuk setiap
nama.forEach(function(e){ // untuk setiap elemen yang ada dalam nama, ini membuat fungsi ekspresi
    console.log(e); // lakukan fungsi berikut ini
}
);

// menggunakan forEach dengan menggunakan index
// membuat array
var hewan = ['ayam' , 'kucing' , 'anjing' , 'kelinci'];
// membuat forEach
hewan.forEach(function(a,i){
    console.log('nama hewan ' + i + " : " + a)
}
);


// menggunakan Map 
// membuat array
var buah = [1,2,3,4,5,6,7,8,9];
// membuat map
var namaBuah = buah.map(function(e){
    // console.log(e);
    // mengembalikan nilai dari fungsi e
    return e * 2;
}
)
// memanggil fungsi
console.log(namaBuah.join(' - '));

// Menggunakan sort 1
var angkaDua = [1,3,9,6,7,4,2];
console.log('tanpa sort = ' + angkaDua.join(' '));
// membuat sort
angkaDua.sort();
console.log('dengan sort = ' + angkaDua.join(' '));

// menggunakan sort 2
var angkaTiga = [1,9,5,6,2,3,10,19,50,22];
console.log('tanpa sort ' + angkaTiga.join(' '));
// membuat sort dengan function agar angka puluhan nya bisa diurutkan, karena sort ini hanya akan mengurutkan angka pertama saja
// contoh 10 -> ini berarti menjadi 1
angkaTiga.sort(function(a,b){
    return a-b;
})
console.log('dengan sort ' + angkaTiga.join(' '));