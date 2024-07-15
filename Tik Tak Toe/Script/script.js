const tableroHTML=document.getElementById("container");
const turno=document.querySelector(".turno");
let opcion=0;
let ficha=['O','X'];

let juego=[0,1,2,3,4,5,6,7,8];
    
console.log(juego);

turno.innerHTML='TURNO: '+ficha[opcion];

tableroHTML.addEventListener("click", function(event) {
    juego[event.target.getAttribute("data-pos")]=opcion;
    resultado(juego);

    if(event.target.innerHTML == '') {
        if(opcion==0) {
            event.target.innerHTML='O';
            opcion=1;
        } else {
            event.target.innerHTML='X';
            opcion=0;
        }
    }
    turno.innerHTML='TURNO: '+ficha[opcion];

    console.log(event.target.getAttribute("data-pos"));
});

function resultado(juego) {
    // Filas
    if(juego[0]==juego[1] && juego[0]==juego[2]) {
        victoria(juego[1],ficha);
    } else if(juego[3]==juego[4] && juego[3]==juego[5]) {
        victoria(juego[4],ficha);
    } else if(juego[6]==juego[7] && juego[6]==juego[8]) {
        victoria(juego[6],ficha);
    // Columnas
    } else if(juego[1]==juego[4] && juego[1]==juego[7]) {
        victoria(juego[1],ficha);
    } else if(juego[0]==juego[3] && juego[0]==juego[6]) {
        victoria(juego[0],ficha);
    } else if(juego[2]==juego[5] && juego[2]==juego[8]) {
        victoria(juego[2],ficha);
    // Diagonal
    } else if(juego[0]==juego[4] && juego[0]==juego[8]) {
        victoria(juego[0],ficha);
    } else if(juego[2]==juego[4] && juego[2]==juego[6]) {
        victoria(juego[2],ficha);
    } else {
        empate();
    }
}


const reset=document.getElementById("reset");
const mensaje=document.querySelector(".message");
const texto=document.querySelector(".message p")

function empate() {
    mensaje.classList.add("activar-mensaje");
    texto.textContent='EMPATE';
}

function victoria(jug,ficha) {
    mensaje.classList.add("activar-mensaje");
    texto.textContent='EL GANADOR ES EL JUGADOR '+ficha[jug];
}

// Resetear el juego
reset.addEventListener("click", function() {
    juego=['','','','','','','','',''];
    opcion=0;
    document.querySelectorAll("#container > div").forEach(e => e.innerHTML='');
    mensaje.classList.remove("activar-mensaje");
});