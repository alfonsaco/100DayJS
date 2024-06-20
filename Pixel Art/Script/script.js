const rangeAncho=document.querySelector(".anchuraGrid");
const textoAncho=document.getElementById("contAncho");


textoAncho.addEventListener("input", function() {
    textoAncho.textContent=rangeAncho.value;
})