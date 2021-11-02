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

/* var aa = '';
var bb = '';
var cc = '';
var dd = '';
var ee = '';
var ff = '';
var gg = '';

// loop 1
console.log('loop 1');
for (var a = 1; a <= 10; a++) {
    aa += '*';
    console.log(aa);
}

// loop 2
console.log('loop 2');
for (var b = 1; b <= 10; b++) {
    for (var c = 1; c <= b; c++) {
        bb += '*';
    }
    bb += '\n';
}
console.log(bb);

// loop 3
console.log('loop 3');
for (var d = 10; d >= 1; d--) {
    console.log(cc + d);
}

// loop 4
console.log('loop 4');
for (var e = 10; e >= 1; e--) {
    for (var f = 1; f <= e; f++) {
        dd += '-';
    }
    for (var g = e; g <= 10; g++) {
        dd += '*';
    }

    dd += '\n';
}
console.log(dd);

// loop 5
console.log('loop 5');
for (var h = 1; h <= 10; h++) {
    for (var l = 1; l <= h; l++) {
        ee += '-';
    }
    for (var n = 10; n >= h; n--) {
        ee += '*';
    }

    ee += '\n';
}
console.log(ee);

// loop 6
console.log('loop 6');
for (var o = 1; o <= 10; o++) {
    for (var q = 10; q >= o; q--) {
        ff += '-';
    }
    for (var r = 1; r <= o; r++) {
        ff += '*';
    }

    ff += '\n';
}
console.log(ff);

// loop 7
console.log('loop 7');
for (var i = 1; i <= 10; i++) {
    for (var j = 10; j >= i; j--) {
        gg += '-';
    }
    for (var k = 1; k <= (2 * i - 1); k++) {
        gg += '*';
    }
    gg += '\n';
}
console.log(gg); */


var s = '';

// for (var i = 0; i < 5; i++) {
//     s += ' * ';
// }
// console.log(s);

// for (var i = 0; i < 5; i++) {
//     s += ' * ';
//     s += '\n';
// }
// console.log(s);

// for (var i = 0; i < 5; i++) {
//     for (var j = 0; j < 5; j++) {
//         s += ' * ';
//     }
//     s += '\n';
// }
// console.log(s);

// for (var i = 0; i < 10; i++) {
//     for (var j = 0; j <= i; j++) {
//         s += ' *';
//     }
//     s += '\n';
// }
// console.log(s);

// for (var i = 10; i > 0; i--) {
//     for (var j = 0; j < i; j++) {
//         s += ' *';
//     }
//     s += '\n';
// }
// console.log(s);


//latihan1 (segitiga terbalik)
// var f = '';
// for (var i = 10; i > 0; i--) {
//     for (var j = 10; j > i; j--) {
//         f += ' ';
//     }
//     for (var k = 0; k < i; k++) {
//         f += '*';
//     }
//     f += '\n';
// }
// console.log(f);

//latihan2 (gabungan dua segitiga)
// var a = '';
// for (var i = 10; i > 0; i--) {
//     for (var j = 10; j >= i; j--) {
//         a += '*';
//     }
//     a += '\n';
// }
// for (var k = 9; k > 0; k--) {
//     for (var m = 0; m < k; m++) {
//         a += '*';
//     }
//     a += '\n';
// }
// console.log(a);

//latihan3 (segitiga sama kaki)
// var s = '';
// for (var i = 5; i > 0; i--) {
//     for (var j = 1; j < i; j++) {
//         s += ' ';
//     }
//     for (var k = 5; k > j; k--) {
//         s += '*';
//     }
//     for (var l = 5; l >= k; l--) {
//         s += '*';
//     }
//     s += '\n';
// }
// console.log(s);

//latihan4 (belah ketupat)
// var x = '';
// for (var i = 10; i > 0; i--) {
//     for (var j = 1; j < i; j++) {
//         x += ' ';
//     }
//     for (var k = 10; k > j; k--) {
//         x += '*';
//     }
//     for (var l = 10; l >= k; l--) {
//         x += '*';
//     }
//     x += '\n';
// }
// for (var m = 9; m > 0; m--) {
//     for (var n = 10; n > m; n--) {
//         x += ' ';
//     }
//     for (var o = 0; o < m; o++) {
//         x += '*';
//     }
//     for (var p = 1; p < o; p++) {
//         x += '*';
//     }
//     x += '\n';
// }
// console.log(x);

//Latihan5 (papan catur)
// var y = '';
// for (var i = 10; i > 0; i--) {
//     for (var j = 5; j > 0; j--) {
//         if (i % 2 == 0) {
//             y += '# ';
//         } else {
//             y += ' #';
//         }
//     }
//     y += '\n';
// }
// console.log(y);

// pola 1
var pola1 = '';

for (var i = 1; i <= 5; i++) {
    pola1 += '*';
}
console.log('pola 1\n' + pola1);


// pola 2
var pola2 = '';

for (var i = 1; i <= 5; i++) {
    pola2 += '*\n';
}

console.log('pola2\n' + pola2);

// pola 3
var pola3 = '';

for (var i = 1; i <= 5; i++) {
    for (var j = 1; j <= 5; j++) {
        pola3 += '*';
    }
    pola3 += '\n';
}
console.log('pola3\n' + pola3);

// pola 4
var pola4 = '';

for (var i = 1; i <= 5; i++) {
    for (var j = 1; j <= i; j++) {
        pola4 += '*';
    }

    pola4 += '\n';
}

console.log('pola4\n' + pola4);

// pola 5
var pola5 = '';

for (var i = 1; i <= 5; i++) {
    for (var j = 5; j >= i; j--) {
        pola5 += '*';
    }
    pola5 += '\n';
}

console.log('pola5\n' + pola5);

// pola 6
var pola6 = '';

for (var i = 1; i <= 5; i++) {
    for (var j = 1; j <= i; j++) {
        pola6 += ' ';
    }
    for (var k = 5; k >= i; k--) {
        pola6 += '*';
    }

    pola6 += '\n';
}

console.log('pola6\n' + pola6);

// pola 7
var pola7 = '';

for (var i = 1; i <= 5; i++) {
    for (var j = 5; j >= i; j--) {
        pola7 += ' ';
    }
    for (var k = 1; k <= i; k++) {
        pola7 += '*';
    }

    pola7 += '\n';
}

console.log('pola7\n' + pola7);

// pola 8
var pola8 = '';

for (var i = 1; i <= 5; i++) {
    for (var j = 5; j >= i; j--) {
        pola8 += ' ';
    }
    for (var k = 1; k <= i; k++) {
        pola8 += '*';
    }
    for (var n = 1; n <= j; n++) {
        pola8 += '*';
    }
    pola8 += '\n';
}

console.log('pola8\n' + pola8);

// pola 9
var pola9 = '';

for (var i = 1; i <= 5; i++) {
    for (var j = 1; j <= i; j++) {
        pola9 += ' ';
    }
    for (var k = 5; k >= i; k--) {
        pola9 += '*';
    }
    for (var n = 5; n >= j; n--) {
        pola9 += '*';
    }
    pola9 += '\n';
}

console.log('pola9\n' + pola9);

// pola 10
var pola10 = '';
for (var i = 1; i <= 4; i++) {
    for (var j = 5; j >= i; j--) {
        pola10 += ' ';
    }
    for (var k = 1; k <= i; k++) {
        pola10 += '*';
    }
    for (var n = 1; n <= j; n++) {
        pola10 += '*';
    }
    pola10 += '\n';
}
for (var i = 1; i <= 5; i++) {
    for (var j = 1; j <= i; j++) {
        pola10 += ' ';
    }
    for (var k = 5; k >= i; k--) {
        pola10 += '*';
    }
    for (var n = 5; n >= j; n--) {
        pola10 += '*';
    }
    pola10 += '\n';
}
console.log('pola10\n' + pola10);