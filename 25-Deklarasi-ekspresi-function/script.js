

// function deklarasi

// di definisikan dulu, nah ini akan berjalan normal
function tampilPesan(nama) {
    alert('halo ' + nama);
}

// baru dipanggil
tampilPesan(agus);


// di panggil dulu baru di definisikan , nah ini akan berjalan normal
tampilPesan(agus);

// baru di definisikan 
function tampilPesan(nama) {
    alert('halo ' + nama);
}


// function ekspresi

// di definisikan dulu baru di panggil, ini akan berjalan normal
var tampilPesan = function(nama) {
    alert('halo ' + nama);
}

// baru dipanggil
tampilPesan(agus);


// dipanggil dulu baru di definisikan , nah ini akan tidak berjalan atau error
tampilPesan(agus);

// di definisikan 
var tampilPesan = function(nama) {
    alert('halo ' + nama);
}
