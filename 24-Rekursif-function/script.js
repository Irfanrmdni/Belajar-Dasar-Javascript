
// tanpa menggunakan base case
/* function angka(n) {
    console.log(n);

    return angka(n-1); // ini akan membuat infinite loop karena tidak ada base case atau kondisi akhir dari rekursif yang menghasilkan nilai
}

angka(10) */

// dengan menggunakan base case
/* function angka(n) {
    if( n == 0) {
        return; // agar pengulangan berhenti dengan memakai return
    }

    console.log(n);
    angka(n-1);
}

angka(10); */

// menghitung faktorial
function faktorial(n) {
    if(n === 0) {
        return 1; // jika n nya sudah mencapai angka 0 maka akan dikembalikan dengan angka 1
    }
    console.log(n);
    return n * faktorial(n-1);
}

console.log(faktorial(5));