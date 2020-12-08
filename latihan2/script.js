var nilai_1 , nilai_2 , nilai_3;
var mutu;
var rata;

nilai_1 = parseInt(prompt('Masukan nilai matematika = '));
nilai_2 = parseInt(prompt('Masukan nilai Fisika = '));
nilai_3 = parseInt(prompt('Masukan nilai Kewirausahaan = '));

rata = (nilai_1 + nilai_2 + nilai_3) / 3;

if(rata >= 90 && rata <= 100) {
    mutu = 'A';
} else if(rata >= 80 && rata <= 89) {
    mutu = 'B';
} else if(rata >= 70 && rata <= 79) {
    mutu = 'C';
} else if(rata >= 60 && rata <= 69) {
    mutu = 'D';
} else {
    mutu = 'E';
}

alert('Nilai rata-rata = ' + rata);

if(mutu == 'A' || mutu == 'B') {
    alert('Status       LULUS');
} else {
    alert('Status       TIDAK LULUS');
}
