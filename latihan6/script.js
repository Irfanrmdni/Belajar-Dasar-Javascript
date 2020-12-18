// // // // // event click

// // // // // 1.method
// // // // const h2 = document.getElementsByTagName('h1')[0];

// // // // // function eventH2() {
// // // // //     // h2.classList.add('gaya');
// // // // //     h2.classList.toggle('gaya');
// // // // // }

// // // // // h2.onclick = eventH2;

// // // // h2.addEventListener('click', function () {
// // // //     h2.classList.toggle('gaya');
// // // // });

// // // // child
// // // // const h1 = document.querySelector('.b h1');
// // // // h1.addEventListener('click', function () {
// // // //     h1.style.backgroundColor = 'lightblue';
// // // // });
// // // // h1.addEventListener('click', function () {
// // // //     h1.style.color = 'white';
// // // // });

// // // // const h3 = document.getElementsByTagName('h3')[0];
// // // // h3.onclick = function () {
// // // //     h3.style.backgroundColor = 'lightblue';
// // // // }
// // // // h3.onclick = function () {
// // // //     h3.style.color = 'white';
// // // // }

// // // // h1.addEventListener('click', function () {
// // // //     const pBaru = document.createElement('p');
// // // //     const isi = document.createTextNode(prompt('masukan kata : '));
// // // //     pBaru.appendChild(isi);
// // // //     pBaru.classList.add('gaya');
// // // //     const p = document.querySelector('.b p');

// // // //     p.appendChild(pBaru);
// // // // });

// // // const tombol = document.getElementsByTagName('button')[0];

// // // tombol.addEventListener('click', function () {
// // //     document.body.classList.toggle('warna');
// // //     document.body.style.transition = '0.4s ease-in-out';
// // // });

// // // const tombol2 = document.createElement('button');
// // // const isi = document.createTextNode('Chanes Random Color');
// // // tombol2.appendChild(isi);
// // // tombol2.setAttribute('type', 'submit');

// // // tombol.after(tombol2);
// // // tombol2.addEventListener('click', function () {
// // //     const r = Math.floor(Math.random() * 175 + 1);
// // //     const g = Math.floor(Math.random() * 175 + 1);
// // //     const b = Math.floor(Math.random() * 175 + 1);

// // //     document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
// // // });

// // // const r = document.querySelector('.b input[name=r]');
// // // const g = document.querySelector('.b input[name=g]');
// // // const b = document.querySelector('.b input[name=b]');
// // // r.addEventListener('input', function () {
// // //     const red = r.value;
// // //     const green = g.value;
// // //     const blue = b.value;

// // //     document.body.style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
// // // });
// // // g.addEventListener('input', function () {
// // //     const red = r.value;
// // //     const green = g.value;
// // //     const blue = b.value;

// // //     document.body.style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
// // // });
// // // b.addEventListener('input', function () {
// // //     const red = r.value;
// // //     const green = g.value;
// // //     const blue = b.value;

// // //     document.body.style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
// // // });

// // // const waktu = new Date().getTime();
// // // console.log(waktu);

// // let i = 0;


// // function putar() {
// //     const waktuMulai = new Date().getTime();
// //     const angka = innerHTML = Math.floor(Math.random() * 100 + 1);

// //     setInterval(function () {
// //         if (new Date().getTime() - waktuMulai > 1000) {
// //             clearInterval;
// //             return;
// //         }

// //         if (i == angka.length) {
// //             i = 0;
// //         }

// //     }, 1000);

// // }


// // const kotak = document.querySelector('.kotak');
// // const tombol = document.querySelector('button');
// // tombol.addEventListener('click', function () {
// //     // const angka = document.createElement('p');
// //     // const isi = document.createTextNode(Math.floor(Math.random() * 100 + 1));
// //     // angka.appendChild(isi);
// //     putar();
// //     kotak.innerHTML = Math.floor(Math.random() * 100 + 1);


// // });

// const kotak = document.querySelectorAll('.kotak');
// kotak.forEach(function (e) {
//     e.addEventListener('click', function (elemen) {

//         elemen.target.style.display = 'none';
//     });
// });

const close = document.querySelectorAll('.close');
close.forEach(function (e) {
    e.addEventListener('click', function (elemen) {
        elemen.target.parentElement.style.display = 'none';
        elemen.stopPropagation();
    });
});

const card = document.querySelectorAll('.card');
card.forEach(function (e) {
    e.addEventListener('click', function () {
        alert('ok');
    });
});