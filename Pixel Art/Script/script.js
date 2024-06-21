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
// Crear el grid
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


// Pintar en el grid
const colores=document.getElementById("input-color");
/* Variable para definir si se ejecuta la función que veremos a continuacion. Si se hace mousedown (click), se pone en true para que se pueda hacer la función de mousemove,
que actua como click al arrastrar. Ahora, al hacer mouseup (dejar de clickar el ratón), se pondrá en false otra vez. */
let arrastrarRaton=false;

const botonPintar=document.getElementById("pintar");
const botonBorrar=document.getElementById("borrar");

botonPintar.addEventListener("click", function() {
    divPintar.addEventListener("mousedown", function(event) {
        if(event.target.classList.contains("pixel")) {
            event.target.style.backgroundColor=colores.value;
        }
        arrastrarRaton=true;
    });
    divPintar.addEventListener("mousemove", function(event) {
        if(arrastrarRaton==true && event.target.classList.contains("pixel")) {
            event.target.style.backgroundColor=colores.value;
        }
    });
    divPintar.addEventListener("mouseup", function() {
        arrastrarRaton=false;
    });
});

botonBorrar.addEventListener("click", function() {
    divPintar.addEventListener("mousedown", function(event) {
        if(event.target.classList.contains("pixel")) {
            event.target.style.backgroundColor='transparent';
        }
        arrastrarRaton=true;
    });
    divPintar.addEventListener("mousemove", function(event) {
        if(arrastrarRaton==true && event.target.classList.contains("pixel")) {
            event.target.style.backgroundColor='transparent';
        }
    });
    divPintar.addEventListener("mouseup", function() {
        arrastrarRaton=false;
    });
});
