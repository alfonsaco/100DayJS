// Constantes del range
const valorRange=document.getElementById("valor-range");
const range=document.getElementById("rango-pass");
const rangoDificultad=document.querySelector(".rango-dificultad");
// Constantes contraseña
const inputPass=document.getElementById("password");
const boton=document.querySelector("button");
const opciones=document.querySelectorAll("[type=\"checkbox\"");

// Función para que esté activada la fácil por defecto
document.addEventListener("DOMContentLoaded", function() {
    rangoDificultad.classList.add("facil");
});

range.addEventListener("input", function() {
    // Color de la barra de dificultad
    valorRange.textContent=range.value;
    if(range.value <= 6) {
        rangoDificultad.classList.remove("dificil","medio");
        rangoDificultad.classList.add("facil");
    } else if(range.value > 6 && range.value <= 15) {
        rangoDificultad.classList.remove("dificil","facil");
        rangoDificultad.classList.add("medio");
    } else if(range.value > 15) {
        rangoDificultad.classList.remove("medio","facil");
        rangoDificultad.classList.add("dificil");
    }

    // Manejador de eventos para crear la contraseña
    boton.addEventListener("click", function() {
        let cadena='';
        let arrayFinal=[];
        let lowercase=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
        let numbers=['0','1','2','3','4','5','6','7','8','9'];
        let uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        let spaces=[' ',' ',' ',' ',' '];
        let random=0;
    
        if(opciones[0].hasAttribute("checked")) {
            arrayFinal+=[...lowercase];
        }
        if(opciones[1].hasAttribute("checked")) {
            arrayFinal+=[...numbers];
        }
        if(opciones[3].hasAttribute("checked")) {
            arrayFinal+=[...uppercase];
        }
        if(opciones[5].hasAttribute("checked")) {
            arrayFinal+=[...spaces];
        }
    
        for (let i=0; i<range.value; i++) {
            random=Math.round(Math.random()*arrayFinal.length);
            cadena+=arrayFinal[random];
        }
        console.log(arrayFinal);
        inputPass.value=cadena;
    });
});