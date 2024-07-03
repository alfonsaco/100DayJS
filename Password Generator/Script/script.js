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


    let cadena='';
    let arrayFinal=[];
    let lowercase=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let random=0;

    if(!opciones[0].hasAttribute("checked")) {
        arrayFinal=[...lowercase];
        console.log(arrayFinal);
    }

    for (let i=0; i<range.value; i++) {
        random=Math.round(Math.random()*arrayFinal.length);
        cadena+=arrayFinal[random];
    }


    boton.addEventListener("click", function() {
        inputPass.value=cadena;
    });
});