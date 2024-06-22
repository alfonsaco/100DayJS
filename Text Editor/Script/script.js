const textArea=document.getElementById("areaTexto");

const bold=document.getElementById("bold");

console.log(bold);
bold.addEventListener("click", function() {
    textArea.classList.toggle("negrita");
});