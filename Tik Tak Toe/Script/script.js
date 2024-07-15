const tablero=document.getElementById("container");
const turno=document.querySelector(".turno");
let opcion=0;
let ficha=['O','X'];

turno.innerHTML='TURNO: '+ficha[opcion];

tablero.addEventListener("click", function(event) {
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
});