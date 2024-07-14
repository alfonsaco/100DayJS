setInterval(() => {

  navigator.getBattery().then(function (battery) {
    const contenedor=document.getElementById("bateria");
    const porcentaje=document.querySelector(".porcentaje");
    let nivelBateria=battery.level*100;
    
    // Contenedor de batería
    contenedor.style.height=nivelBateria+'%';
    porcentaje.innerHTML=nivelBateria+'%';

    if(nivelBateria == 100) {
      contenedor.classList.add("bateria-completa");
      contenedor.classList.remove("bateria-casi-completa");
      contenedor.classList.remove("bateria-mitad");
      contenedor.classList.remove("bateria-baja");
    } else if(nivelBateria>=75 && nivelBateria<100) {
      contenedor.classList.add("bateria-casi-completa");
      contenedor.classList.remove("bateria-completa");
      contenedor.classList.remove("bateria-mitad");
      contenedor.classList.remove("bateria-baja");
    } else if(nivelBateria>=50 && nivelBateria<75) {
      contenedor.classList.add("bateria-mitad");
      contenedor.classList.remove("bateria-casi-completa");
      contenedor.classList.remove("bateria-completa");
      contenedor.classList.remove("bateria-baja");
    } else if(nivelBateria<50) {
      contenedor.classList.add("bateria-baja");
      contenedor.classList.remove("bateria-mitad");
      contenedor.classList.remove("bateria-casi-completa");
      contenedor.classList.remove("bateria-completa");
    }

    // Estado
    const lowBatt=document.getElementById("low-charge");
    const fullBatt=document.getElementById("battery-full");
    const inCharge=document.getElementById("charging");

    if(battery.charging) {
      inCharge.style.display='block';
      fullBatt.style.display='none';
      lowBatt.style.display='none';
    } else {
      if(nivelBateria==100) {
        inCharge.style.display='none';
        fullBatt.style.display='block';
        lowBatt.style.display='none';
      } else {
        inCharge.style.display='none';
        fullBatt.style.display='none';
        lowBatt.style.display='block';
      }
    }
  });
}, 5000);