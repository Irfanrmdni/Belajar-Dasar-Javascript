// jumlah penumpang angkot
// var jml_penumpang = [];

// penumpang naik / menambah penumpang
/*
    2 parameter
    1. nama penumpang
    2. array penumpang

    rules
    - jika angkot kosong , penumpang naik duduk di kursi pertama
    - penumpang berikutnya duduk dikursi selanjutnya secara berurutan
    - jika ada kursi kosong (karena penumpang turun) , penumpang yang naik berikutnya duduk di kursi kosong terlebih dahulu
    - asumsi kursi tidak akan penuh dan akan bertambah terus jika ada penumpang naik
    - nama penumpang tidak boleh sama untuk menghindari kebingungan ketika nanti penumpang turun
*/
/* var tambah_penumpang = function(namaPenumpang , jml_penumpang){
    // jika angkot nya kosong
    if (jml_penumpang.length == 0) {
        // menambah jumlah penumpang
        jml_penumpang.push(namaPenumpang);
        // kembalikan isi array dan keluar dari function
        return jml_penumpang;
    } else {
        // telusuri seluruh kursi di awal
        for(var i = 0; i < jml_penumpang.length; i++) {
            // jika ada kursi kosong
            if(jml_penumpang[i] == undefined) {
                // tambah penumpang di kursi tersebut
                jml_penumpang[i] = namaPenumpang;
                // kembalikan isi array dan keluar dari function
                return jml_penumpang;
            }
            // jika sudah ada nama yang sama
            else if(jml_penumpang[i] == namaPenumpang) {
                // tampilkan pesan kesalahan
                console.log(namaPenumpang + ' sudah ada di dalam angkot');
                // kembalikan isi array dan keluar dari function
                return jml_penumpang;
            }
            // jika seluruh kursi terisi
            else if(i == jml_penumpang.length - 1) {
                // tambah penumpang di akhir array
                jml_penumpang.push(namaPenumpang);
                // kembalikan isi array dan keluar dari function
                return jml_penumpang;
            }
        }
    }

}; */

// penumpang turun / menghapus penumpang
/*
    2 parameter
    1. nama penumpang
    2. array penumpang

    rules
    - jika angkot kosong , tampilkan pesan bahwa angkot kosong
    - jika ada penumpang yang namanya sesuai , hapus nama penumpang pada array dengan memberi nilai undefined
    - jika tidak ada penumpang yang namanya sesuai , tampilkan pesan kesalahannya
*/
/* var hapus_penumpang = function(namaPenumpang , jml_penumpang){
    // jika angkot kosong
    if(jml_penumpang.length == 0) {
        // tampilkan pesan bahwa angkot kosong
        console.log('Angkot belum ada penumpang');
        // kembalikan isi array dan keluar dari function
        return jml_penumpang;
    } else {
        // telusuri seluruh kursi di awal
        for(var i = 0; i < jml_penumpang.length; i++) {
            // jika ada nama penumpang yang sesuai
            if(jml_penumpang[i] == namaPenumpang) {
                // hapus penumpang dengan mengubah namanya menjadi undefined
                jml_penumpang[i] = undefined;
                // kembalikan isi array dan keluar dari function
                return jml_penumpang;
            }
            // jika seluruh kursi terisi
            else if(i == jml_penumpang.length - 1) {
                // tampilkan pesan kesalahannya
                console.log(namaPenumpang + ' tidak ada di dalam angkot');
                // kembalikan isi array dan keluar dari function
                return jml_penumpang;
            }
        }
    }
}; */

// ==========================================================================================================================================================
// penumpang naik / menambah penumpang
/*
    2 parameter
    1. nama penumpang
    2. array penumpang

    rules
    - jika angkot kosong , penumpang naik duduk di kursi pertama
    - penumpang berikutnya duduk dikursi selanjutnya secara berurutan
    - jika ada kursi kosong (karena penumpang turun) , penumpang yang naik berikutnya duduk di kursi kosong terlebih dahulu
    - asumsi kursi tidak akan penuh dan akan bertambah terus jika ada penumpang naik
    - nama penumpang tidak boleh sama untuk menghindari kebingungan ketika nanti penumpang turun
*/

// jumlah penumpang angkot
var penumpang = [];

var tambahPenumpang = function (namaPenumpang, penumpang) {
    if (penumpang.length == 0) {
        penumpang.push(namaPenumpang);
        return penumpang;
    } else {
        for (var i = 0; i < penumpang.length; i++) {
            if (penumpang[i] == undefined) {
                penumpang[i] = namaPenumpang;
                return penumpang;
            } else if (penumpang[i] == namaPenumpang) {
                console.log('nama penumpang ' + namaPenumpang + ' sudah ada di dalam angkot!');
                return penumpang;
            } else if (i == penumpang.length - 1) {
                penumpang.push(namaPenumpang);
                return penumpang;
            }
        }
    }
};

var hapusPenumpang = function (namaPenumpang, penumpang) {
    if (penumpang.length == 0) {
        console.log('angkot masih kosong!');
        return penumpang;
    } else {
        for (var i = 0; i < penumpang.length; i++) {
            if (namaPenumpang == penumpang[i]) {
                penumpang[i] = undefined;
                return penumpang;
            } else if (i == penumpang.length - 1) {
                console.log(namaPenumpang + ' tidak ada di dalam angkot');
                return penumpang;
            }
        }
    }
}
