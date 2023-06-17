function validación() {
    let promtEdad = prompt("Para darte tu licencia de conducir, necesito saber: cuantos años tienes?");
    let edad = parseInt(promtEdad);
    let confirmar = edad >= 18 && edad <= 49 ? "Puedes conducir" : "No puedes conducir" 
    alert(confirmar)
};
validación();