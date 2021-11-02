// pengulangan
// var tanya = true;
// while(tanya) {
//     // player
//     var player = prompt('Pilih: gajah, semut, orang :');

//     // computer
//     var computer = Math.random(); // random dari 0-1
//     // set gajah
//     if(computer < 0.34) {
//         computer = 'gajah';
//     } else if(computer >= 0.34 && computer <= 0.67) {
//         computer = 'semut';
//     } else {
//         computer = 'orang' // jika lebih dari 0.67
//     }

//     // rules
//     var hasil = ''; // untuk menampung hasil rules player vs computer
//     if(player == computer) {
//         hasil = 'Hasilnya SERI!';
//     } else if(player == 'gajah') {
//         /* if(computer == 'semut') {
//             hasil = 'Computer MENANG!';
//         } else {
//             hasil = 'Player KALAH!';
//         } */

//         // dengan menggunakan operator ternary
//         hasil = (computer == 'semut') ? 'Computer MENANG' : 'Player KALAH!';

//     } else if(player == 'semut') {
//         /* if(computer == 'gajah') {
//             hasil = 'Player MENANG!';
//         } else{
//             hasil = 'Computer MENANG!';
//         } */

//         // dengan menggunakan operator ternary
//         hasil = (computer == 'gajah') ? 'Player MENANG!' : 'Computer KALAH!';

//     } else if(player == 'orang') {
//         /* if(computer == 'semut') {
//             hasil = 'Player MENANG!';
//         } else{
//             hasil = 'Computer MENANG!';
//         } */

//         // dengan menggunakan operator ternary
//         hasil = (computer == 'semut') ? 'Player MENANG!' : 'Computer KALAH!';

//     } else{
//         hasil = 'Memasukan pilihan yang salah';
//     } 

//     // menampilkan hasil / output
//     alert('Player memilih ' + player + ' dan Computer memilih ' + computer + '\n Maka hasilnya kamu: ' + hasil);

//     tanya = confirm('Lagi?...');
// }

// alert('Terimakasih sudah bermain');



// menentukan rules games
/* var hasil = '';
var ulangi = true;

alert('selamat datang di games suwit jawa :)');
while (ulangi) {
    // input pilihan player
    var player = prompt('Masukan pilihan kamu: gajah | semut | manusia');

    // input pilihan computer
    var computer = Math.random();

    if (computer < 0.34) {
        computer = 'gajah';
    } else if (computer >= 0.34 && computer < 0.67) {
        computer = 'manusia';
    } else {
        computer = 'semut';
    }

    if (player == computer) {
        hasil = 'Hasilnya SERI!';
    } else if (player == 'gajah') {
        hasil = (computer = 'manusia') ? 'kamu menang!' : 'kamu Kalah!';
    } else if (player == 'manusia') {
        hasil = (computer == 'gajah') ? 'kamu kalah' : 'kamu menang';
    } else if (player == 'semut') {
        hasil = (computer == 'manusia') ? 'kamu kalah' : 'kamu menang';
    } else {
        hasil = 'Mohon masukan pilihan yang benar';
    }

    alert(`kamu memilih ${player} dan computer memilih ${computer} \nhasilnya : ${hasil}`);

    ulangi = confirm('Apakah kamu ingin bermain lagi ?');
}

alert('Terimakasih sudah bermain :)'); */


var lagi = true;

while (lagi) {

    alert('Tebak angka dari 1 - 10!\nKamu punya 3 kesempatan.');

    var angka = Math.round(Math.random() * 10);

    for (var i = 3; i > 0; i--) {
        var inputan = prompt('Masukkan Angka tebakan!');
        var kesempatan = i - 1;

        if (inputan == '') {
            alert('Yang anda masukkan bukan angka');
            i = 0;
        } else if (inputan == null) {
            i = 0;
        } else {
            if (inputan == angka) {
                alert('Anda BENAR!\nAngka yang dicari adalah ' + angka);
                i = 0;
            } else if (inputan < angka) {
                if (kesempatan == 0) {
                    alert('Anda GAGAL!\nAngka yang dicari adalah ' + angka);
                } else {
                    alert('Terlalu RENDAH!\nAyo masih ada ' + kesempatan + ' kesempatan');
                }
            } else if (inputan > angka) {
                if (kesempatan == 0) {
                    alert('Anda GAGAL!\nAngka yang dicari adalah ' + angka);
                } else {
                    alert('Terlalu TINGGI!\nAyo masih ada ' + kesempatan + ' kesempatan');
                }
            } else {
                alert('Yang anda masukkan bukan angka');
                i = 0;
            }
        }
    }
    lagi = confirm('Main lagi?');
}
alert('Terima kasih.');


