const nama = 'Jojon Indriani';
const umur = 41;
const hobi = 'Merakit Bom';
const pekerjaan = 'Memasak';

let html;

// dengan ES5
/* html = '<ul>'+
    '<li>Nama : ' + nama + '</li>' +
    '<li>Umur : ' + umur + '</li>' +
    '<li>Hobi : ' + hobi + '</li>' +
    '<li>Pekerjaan : ' + pekerjaan + '</li>' +
'</ul>';  */

// dengan ES6 -> memakai simbol `
html = `<ul>
    <li>Nama: ${nama}</li>
    <li>Umur: ${umur}</li>
    <li>Hobi: ${hobi}</li>
    <li>Pekerjaan: ${pekerjaan}</li>
    <li>${umur >= 40 ? 'Umur sudah tua' : 'Umur masih muda'}</li>
</ul>`;

// Memanggil output 
document.body.innerHTML = html;