const piedra = "Piedra " + '\u{1FAA8}';
const papel = "Papel " + '\u{1F4C4}';
const tijera = "Tijera " + '\u{2702}';

function game (jugador, pc){
    const mensaje = "Estas son tus opciones: " + piedra + "  " + papel + "  " + tijera;
    const advertencia = "RECUERDA: Solamente puedes escribir la palabra, NO EL EMOJI."
    const comienzaGame = "Comienza el juego"
    
    alert(mensaje + advertencia);
    alert(comienzaGame)
    
    jugador = prompt("Tú eliges: ")
    pc = alert("pc eligió " + piedra)
    if (jugador === piedra && pc === piedra) {
        alert("ganaste")
    } else {
        alert("Perdiste")
    }
}

game();