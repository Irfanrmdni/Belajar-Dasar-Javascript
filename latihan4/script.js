
var jumlah;
var bilangan_1=0;
var bilangan_2=0;
var bilangan_3=0;
var bilangan_4=0;
var bilangan_5=0;

jumlah = parseInt(prompt('Masukan jumlah = '));

var bilangan = [jumlah];

for(var i = 1; i <= jumlah; i++) {
    bilangan[i] = parseInt(prompt('Masukan bilangan ke-' + i + ' = '));

    if(bilangan[i] >= 0 && bilangan[i] <= 20) {
        bilangan_1++;

    } if(bilangan[i] >= 20 && bilangan[i] <= 40) {
        bilangan_2++;

    } if(bilangan[i] >= 40 && bilangan[i] <= 60) {
        bilangan_3++;

    } if(bilangan[i] >= 60 && bilangam[i] <= 80) {
        bilangan_4++;

    } if(bilangan[i] >= 80 && bilangan[i] <= 100) {
        bilangan_5++;

    } 
}

alert('Jumlah bilangan >0 dan <= 20 adalah = ' + bilangan_1);
alert('Jumlah bilangan >20 dan <= 40 adalah = ' + bilangan_2);
alert('Jumlah bilangan >40 dan <= 60 adalah = ' + bilangan_3);
alert('Jumlah bilangan >60 dan <= 80 adalah = ' + bilangan_4);
alert('Jumlah bilangan >80 dan <= 100 adalah = ' + bilangan_5);