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
});

// Crear QR
texto.addEventListener("input", function() {
    qr.innerHTML='';

    new QRCode(qr, {
        text : texto.value,
        width : qr.clientWidth,
        height : qr.clientHeight,
        colorDark : negro.value,
        colorLight : blanco.value,
        correctLevel : QRCode.CorrectLevel.H
    });
});


// Descargar el código QR
document.getElementById("descargar").addEventListener("click", function() {
    const qrCanvas=document.querySelector(".QR canvas");

    if(qrCanvas) {
        // Obtenemos su URL en Base64
        const linkBase64=qrCanvas.toDataURL("image/png");

        const enlaceDescarga=document.createElement("a");
        enlaceDescarga.href=linkBase64;
        enlaceDescarga.download="CodigoQR.png";

        // Creamos el elemento y clickamos en él
        document.body.appendChild(enlaceDescarga);
        enlaceDescarga.click();
        document.body.removeChild(enlaceDescarga);
    }
}); 


// Compartir el QR
document.getElementById("compartir").addEventListener("click", function() {
    const qrCanvas=document.querySelector(".QR canvas");

    if(qrCanvas) {
        // Creamos una función blob asíncrona
        qrCanvas.toBlob(async function(blob) {
            const archivo=new File([blob], "CodigoQR.png", {type: "image/png"});
            // Comprobamos si el navegador puede verificar o no
            if(navigator.canShare && navigator.canShare({files: [archivo]})) {
                try {
                    await navigator.share({
                        files: [archivo],
                        title: "Codigo QR",
                        description: "Este es el código generado"
                    })
                } catch (error) {
                    console.error("Error al compartir", error);
                }
            }
        })
    }
});