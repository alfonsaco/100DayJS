const valorRange=document.getElementById("valor-range");
const range=document.getElementById("rango-pass");
const rangoDificultad=document.querySelector(".rango-dificultad");

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
});

