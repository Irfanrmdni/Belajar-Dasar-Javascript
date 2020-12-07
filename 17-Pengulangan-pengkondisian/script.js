/* var tampil = '';
var tampil2 = '';
var tampil3 = '';

//contoh loop 1
for(var i = 0; i < 10; i++) {
    //tampil = tampil + '*';

    //membuat loop lagi, ini berarti setiap pengulangan pertama dari var i akan menghasilkan pengulangan kedua / nilai kedua
    for(var j = 0; j < 5; j++) {
        tampil += '*';
    }
    //setelah melakukan pengulangan kedua maka akan membuat baris baru
    tampil += '\n';
}
//mencetak hasil dari pengulangan pertama - akhir
console.log(tampil);

//contoh loop 2
for(var x = 0; x < 10; x++) {
    for(var z = 0; z < x; z++) {
        tampil2 += '*';
    }
    tampil2 += '\n';
}
console.log(tampil2);

//contoh loop 3
for(var a = 10; a > 0; a--) {
    for(var b = 0; b < a; b++) {
        tampil3 += '*';
    }
    tampil3 += '\n';
}
console.log(tampil3);

 */

var aa = '';
var bb = '';
var cc = '';
var dd = '';
var ee = '';
var ff = '';
var gg = '';

// loop 1
console.log('loop 1');
for(var a = 1; a <= 10; a++) {
    aa += '*';
    console.log(aa);
} 

// loop 2
console.log('loop 2');
for(var b = 1; b <= 10; b++) {
    for(var c = 1; c <= b; c++) {
        bb += '*';
    }
    bb += '\n';
}
console.log(bb); 

// loop 3
console.log('loop 3');
for(var d = 10; d >= 1; d--) {
    console.log(cc + d);
} 

// loop 4
console.log('loop 4');
for(var e = 10; e >= 1; e--) {
    for(var f = 1; f <= e; f++) {
        dd += '-';
    }
        for(var g = e; g <= 10; g++) {
            dd += '*';
        }

    dd += '\n';
}
console.log(dd); 

// loop 5
console.log('loop 5');
for(var h = 1; h <= 10; h++) {
    for(var l = 1; l <= h; l++) {
        ee += '-';
    }
        for(var n = 10; n >= h; n--) {
            ee += '*';
        }

    ee += '\n';
}
console.log(ee); 

// loop 6
console.log('loop 6');
for(var o = 1; o <= 10; o++) {
    for(var q = 10; q >= o; q--) {
        ff += '-';
    }
    for(var r = 1; r <= o; r++) {
        ff += '*';
    }

    ff += '\n';
}
console.log(ff); 

// loop 7
console.log('loop 7');
for(var i = 1; i <= 10; i++) {
    for(var j = 10; j >= i; j--) {
        gg += '-';
    }
    for(var k = 1; k <= (2*i-1); k++) {
        gg += '*';
    }
    gg += '\n';
}
console.log(gg);