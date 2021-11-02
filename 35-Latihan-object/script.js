// Membuat object constructor angkot dengan 4 parameter
/* function Angkot(sopir, trayek, penumpang, kas) {
    this.sopir = sopir;
    this.trayek = trayek;
    this.penumpang = penumpang;
    this.kas = kas;

    // membuat function penumpang naik / tambah penumpang
    this.penumpangNaik = function (namaPenumpang) {
        this.penumpang.push(namaPenumpang);
        return this.penumpang;
    }

    // membuat function penumpang turun / hapus penumpang
    this.penumpangTurun = function (namaPenumpang, bayar) {
        // cek penumpang jika penumpang nya masih 0 / kosong
        if (this.penumpang.length === 0) {
            alert('Penumpang masih kosong!');
            return false;
        }

        // telusuri jumlah penumpang
        for (var i = 0; i < this.penumpang.length; i++) {
            // jika penumpang nya pada indeks sama dengan nama penumpang / jika ada penumpang
            if (penumpang[i] === namaPenumpang) {
                // penumpang pada indeks akan bernilai undefined
                penumpang[i] = undefined;
                // menambah kas / membayar
                this.kas += bayar;
                // nilai balik penumpang
                return this.penumpang;
            }
        }
    }
}

// mengisi object Angkot1
var angkot1 = new Angkot('Erick berebet', ['Sarijadi', 'Ciroyom'], [], 0);

// mengisi object Angkot2
var angkot2 = new Angkot('Asep bedog', ['Cicaheum', 'Ledeng'], [], 0); */

// ===========================================================================================================================================================

// membuat object angkot
function Angkot(sopir, trayek, penumpang, kas) {
    this.sopir = sopir;
    this.trayek = trayek;
    this.penumpang = penumpang;
    this.kas = kas;

    this.penumpangNaik = function (namaPenumpang) {
        this.penumpang.push(namaPenumpang);
        return this.penumpang;
    }

    this.penumpangTurun = function (namaPenumpang, bayar) {
        if (this.penumpang.length === 0) {
            alert('Angkot masih kosong!');
            return false;
        }

        for (var i = 0; i < this.penumpang.length; i++) {
            if (this.penumpang[i] == namaPenumpang) {
                this.penumpang[i] = undefined;
                this.kas += bayar;
                return this.penumpang;
            }
        }
    }
};

var angkot1 = new Angkot('dadang', ['sarijadi', 'ciroyom'], [], 0);
var angkot2 = new Angkot('bagas', ['soreang', 'banjaran'], [], 0);
