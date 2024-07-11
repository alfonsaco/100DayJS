// 24 de normal
// cada 4 letras, 1 más

// Select
const select=document.querySelector(".select");
const option=document.getElementsByTagName("option");
// QR
const qr=document.querySelector(".QR");
// Colores
const negro=document.querySelector(".negro");
const blanco=document.querySelector(".blanco");

const texto=document.getElementById("texto");


// Tamaños del QR
select.addEventListener("change", function() {
    if(option[0].selected) {
        qr.style.width='35%';
        qr.style.height='35%';
    } else if(option[1].selected) {
        qr.style.width='40%';
        qr.style.height='40%';
    }  if(option[2].selected) {
        qr.style.width='45%';
        qr.style.height='45%';
    } else if(option[3].selected) {
        qr.style.width='50%';
        qr.style.height='50%';
    } else if(option[4].selected) {
        qr.style.width='55%';
        qr.style.height='55%';
    } else if(option[5].selected) {
        qr.style.width='60%';
        qr.style.height='60%';
    } else if(option[6].selected) {
        qr.style.width='70%';
        qr.style.height='70%';
    } else if(option[7].selected) {
        qr.style.width='80%';
        qr.style.height='80%';
    } else if(option[8].selected) {
        qr.style.width='90%';
        qr.style.height='90%';
    } else if(option[9].selected) {
        qr.style.width='100%';
        qr.style.height='100%';
    }


    console.log(negro.value);
    console.log(blanco.value);
});


texto.addEventListener("input", function() {
    qr.innerHTML='';

    new QRCode(qr, {
        text : texto.value,
        width : 128,
        height : 128,
        colorDark : negro.value,
        colorLigth : blanco.value,
        correctLevel : QRCode.CorrectLevel.H
    });
});