// var angka = parseInt(prompt('Masukan angka: '));
//Parseint adalah untuk mengubah nilai apapun menjadi tipe data int

//contoh dengan if
/* if (angka === 1) {
    alert('anda memasukan angka 1');
} else if (angka === 2) {
    alert('anda memasukan angka 2');
}
else if (angka === 3) {
    alert('anda memasukan angka 3');
} else {
    alert('angka yang anda masukan salah');
} */

//contoh dengan switch
/* switch (angka) {
    case 1:
        alert('anda memasukan angka 1');
        break;
    case 2:
        alert('anda memasukan angka 2');
        break;
    case 3:
        alert('anda memasukan angka 3');
        break;
    default:
        alert('angka yang anda masukan salah');
        break;
} */

//contoh program sederhana
var item = prompt('Masukan makanan / minuman: \n (cth: nasi, susu, lauk, hamburger, softdrink)');

// cara pertama
switch (item) {
    case 'nasi':
        alert('Makanan / minuman yang anda masukan SEHAT');
        break;
    case 'susu':
        alert('Makanan / minuman yang anda masukan SEHAT');
        break;
    case 'lauk':
        alert('Makanan / minuman yang anda masukan SEHAT');
        break;
    case 'hamburger':
        alert('Makanan / minuman yang anda masukan TIDAK SEHAT');
        break;
    case 'softdrink':
        alert('Makanan / minuman yang anda masukan TIDAK SEHAT');
        break;
    default:
        alert('Masukan makanan / minuman yang ada di contoh');
        break;
}

// cara kedua -> jadi ketika nasi susu dan lauk nya memiliki nilai yang sama maka nasi dan susu nilai nya bisa di hilangkan
//               dan akan menjalankan nilai yang lauk setelah itu break
/* switch(item) {
    case 'nasi':
    case 'susu':
    case 'lauk':
        alert('Makanan / minuman yang anda masukan SEHAT');
        break;
    case 'hamburger':
    case 'softdrink':
        alert('Makanan / minuman yang anda masukan TIDAK SEHAT');
        break;
    default :
    alert('Masukan makanan / minuman yang ada di contoh');
    break;
} */