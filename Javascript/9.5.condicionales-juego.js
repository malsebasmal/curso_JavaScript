function game(pc, jugador) {
    //opciones
    const piedra = "piedra";
    const papel = "papel";
    const tijera = "tijera";

    alert("Tus opciones son:");
    alert("piedra " + "papel " + "tijera");

    jugador = prompt("Tu escoges?");
    alert("Jugador escogió: " + jugador);

    pc = [piedra, papel, tijera][Math.floor(Math.random() * 3)];
    alert("PC escogió " + pc);
    
    if (jugador === papel && pc === piedra) {
        alert("Ganaste!")
    } else if (jugador === tijera && pc === papel) {
        alert("Ganaste!")
    } else if (jugador === piedra && pc === tijera) {
        alert("Ganaste!")
    } else {
        alert("Perdiste")
    }
}

game();