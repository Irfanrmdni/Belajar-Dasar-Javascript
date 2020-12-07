// pengulangan 
var tanya = true;
while(tanya) {
    // player
    var player = prompt('Pilih: gajah, semut, orang :');

    // computer
    var computer = Math.random(); // random dari 0-1
    // set gajah
    if(computer < 0.34) {
        computer = 'gajah';
    } else if(computer >= 0.34 && computer <= 0.67) {
        computer = 'semut';
    } else {
        computer = 'orang' // jika lebih dari 0.67
    }

    // rules
    var hasil = ''; // untuk menampung hasil rules player vs computer
    if(player == computer) {
        hasil = 'Hasilnya SERI!';
    } else if(player == 'gajah') {
        /* if(computer == 'semut') {
            hasil = 'Computer MENANG!';
        } else {
            hasil = 'Player KALAH!';
        } */

        // dengan menggunakan operator ternary
        hasil = (computer == 'semut') ? 'Computer MENANG' : 'Player KALAH!';

    } else if(player == 'semut') {
        /* if(computer == 'gajah') {
            hasil = 'Player MENANG!';
        } else{
            hasil = 'Computer MENANG!';
        } */

        // dengan menggunakan operator ternary
        hasil = (computer == 'gajah') ? 'Player MENANG!' : 'Computer KALAH!';

    } else if(player == 'orang') {
        /* if(computer == 'semut') {
            hasil = 'Player MENANG!';
        } else{
            hasil = 'Computer MENANG!';
        } */

        // dengan menggunakan operator ternary
        hasil = (computer == 'semut') ? 'Player MENANG!' : 'Computer KALAH!';

    } else{
        hasil = 'Memasukan pilihan yang salah';
    } 

    // menampilkan hasil / output
    alert('Player memilih ' + player + ' dan Computer memilih ' + computer + '\n Maka hasilnya kamu: ' + hasil);

    tanya = confirm('Lagi?...');
}

alert('Terimakasih sudah bermain');