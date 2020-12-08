
// program menjumlahkan 2 buah matriks

// membuat varibael baris dan kolom
var baris;
var kolom;

// Input baris dan kolom
baris = parseInt(prompt('Masukan jumlah Baris = '));
kolom = parseInt(prompt('Masukan jumlah Kolom = '));

// membuat varibael array 2D untuk matriks A
var bilangan = [[baris],[kolom]];

// membuat inputan array 2D untuk matriks A
for(var i = 1; i <= baris; i++) {
    for(var j = 1; j <= kolom; j++) {
        bilangan[[i],[j]] = parseInt(prompt('Masukan matriks A di posisi ' + i + ',' + j + " = "));
    }
}

// membuat varibael array 2D untuk matriks B
var bilangan2 = [[baris],[kolom]];

// membuat inputan array 2D untuk matriks B
for(var i = 1; i <= baris; i++) {
    for(var j = 1; j <= kolom; j++) {
        bilangan2[[i],[j]] = parseInt(prompt('Masukan matriks B di posisi ' + i + ',' + j + " = "));
    }
}

// menampilkan matriks A
for(var i = 1; i <= baris; i++) {
    for(var j = 1; j <= kolom; j++) {
        console.log('Matriks A = ' + bilangan[[i],[j]]);
    }
    console.log('\n');
}

// menampilkan matriks B
for(var i = 1; i <= baris; i++) {
    for(var j = 1; j <= kolom; j++) {
        console.log('Matriks B = ' + bilangan2[[i],[j]]);
    }
    console.log('\n');
}

// penjumlahan matriks A dan B
var bilangan_3 = [[baris],[kolom]];
for(var i = 1; i <= baris; i++) {
    for(var j = 1; j <= kolom; j++) {
        bilangan_3[[i],[j]] = bilangan[[i],[j]] + bilangan2[[i],[j]];
        console.log('Hasil penjumlahan A + B = ' + bilangan_3[[i],[j]]);
    }
    console.log('\n');
}
