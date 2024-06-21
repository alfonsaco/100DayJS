// Fucniones para juntar los input range con el texto
const rangeAncho=document.querySelector(".anchuraGrid");
const textoAncho=document.getElementById("contAncho");

let anchura=0;
rangeAncho.addEventListener("input", function() {
    if(rangeAncho.value < 10) {
        textoAncho.textContent="0"+rangeAncho.value;
        anchura=rangeAncho.value;
    } else {
        textoAncho.textContent=rangeAncho.value;
        anchura=rangeAncho.value;
    }
});

const rangeAltura=document.querySelector(".alturaGrid");
const textoAlto=document.getElementById("contAlto");

let altura=0;
rangeAltura.addEventListener("input", function() {
    if(rangeAltura.value < 10) {
        textoAlto.textContent="0"+rangeAltura.value;
        altura=rangeAltura.value;
    } else {
        textoAlto.textContent=rangeAltura.value;
        altura=rangeAltura.value;
    }
});


// Botones
const crearGrid=document.getElementById("crear-grid");

// Div donde se insertarán las casillas
const divPintar=document.getElementById("div-pintar");

crearGrid.addEventListener("click", function() {
    divPintar.innerHTML="";
    divPintar.style.display='grid';
    divPintar.style.gridTemplateColumns='repeat('+anchura+',15px)';
    for (let i=0; i<anchura; i++) {
        divPintar.innerHTML+="<div class=\"pixel\"></div>";
        for (let e=1; e<altura; e++) {
            divPintar.innerHTML+="<div class=\"pixel\"></div>";
        }
    }
});

const borrarGrid=document.getElementById("borrar-grid");
borrarGrid.addEventListener("click", function() {
    divPintar.innerHTML="";
});