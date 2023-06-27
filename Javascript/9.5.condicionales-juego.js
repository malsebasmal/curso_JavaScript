//if-else sin el método
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

//if-else con el método "" 
    function game(pc, jugador) {
    //opciones
        const opciones = {
            piedra: "piedra",
            papel: "papel",
            tijera: "tijera",   
        };

        alert("Tus opciones son:");
        alert(opciones.papel + " " + opciones.tijera + " " + opciones.piedra);

        jugador = prompt("Tu escoges?");
        alert("Jugador escogió: " + jugador);

        pc = [opciones.papel, opciones.piedra, opciones.tijera][Math.floor(Math.random() * 3)];
        alert("PC escogió " + pc);
        
        if (jugador === opciones.papel && pc === opciones.piedra) {
            alert("Ganaste!")
        } else if (jugador === opciones.tijera && pc === opciones.papel) {
            alert("Ganaste!")
        } else if (jugador === opciones.piedra && pc === opciones.tijera) {
            alert("Ganaste!")
        } else {
            alert("Perdiste")
        }
    }
    game();

//if-else con este método extraño de chat gpt
    function game(pc, jugador) {
    //opciones
    const opciones = {
        piedra: "piedra",
        papel: "papel",
        tijera: "tijera",
        papel_piedra: "Ganaste!",
        tijera_papel: "Ganaste!",
        piedra_tijera: "Ganaste!",
    };

    alert("Tus opciones son:");
    alert(opciones.papel + " " + opciones.tijera + " " + opciones.piedra);

    jugador = prompt("Tu escoges?");
    alert("Jugador escogió: " + jugador);

    pc = [opciones.papel, opciones.piedra, opciones.tijera][Math.floor(Math.random() * 3)];
    alert("PC escogió " + pc);

    const opcionGanadora = jugador + '_' + pc;
    
    if (opcionGanadora in opciones) {
        alert(opciones[opcionGanadora]);
    } else {
        alert("Perdiste");
    }
    //Explicación
        //in es un operador en JavaScript que se utiliza para comprobar si una propiedad determinada existe en un objeto. Retorna true si la propiedad existe y false si no existe.

        //En el código mencionado, opcionGanadora in opciones utiliza el operador in para verificar si la variable opcionGanadora es una propiedad del objeto opciones.

        //Por otro lado, opciones[opcionGanadora] es una forma de acceder al valor asociado a una propiedad específica en el objeto opciones. Utilizando esta sintaxis, se obtiene el valor correspondiente a la propiedad opcionGanadora en el objeto opciones. En este caso, se espera que el valor asociado sea un mensaje de victoria.

        //En resumen:

            //in es un operador utilizado para verificar la existencia de una propiedad en un objeto.
            //opciones[opcionGanadora] es una forma de acceder al valor asociado a una propiedad específica en un objeto utilizando la sintaxis de acceso a propiedades.
    }
    game();
    





//swtich que SI FUNCIONA sin método
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

        switch (true) {
            case jugador === papel && pc === piedra:
            case jugador === tijera && pc === papel:
            case jugador === piedra && pc === tijera:
                alert("Ganaste!");
                break;
            default:
                alert("Perdiste");
        }
    }
    game();

//switch junto al método de "" pero con distintas case*
    function game(pc, jugador) {
        //opciones
        const opciones = {
            piedra: "piedra",
            papel: "papel",
            tijera: "tijera",
        };

        alert("Tus opciones son:");
        alert(opciones.papel + " " + opciones.tijera + " " + opciones.piedra);

        jugador = prompt("Tu escoges?");
        alert("Jugador escogió: " + jugador);

        pc = [opciones.papel, opciones.piedra, opciones.tijera][Math.floor(Math.random() * 3)];
        alert("PC escogió " + pc);

        switch (true) {
            case jugador === opciones.papel && pc === opciones.piedra:
            case jugador === opciones.tijera && pc === opciones.papel:
            case jugador === opciones.piedra && pc === opciones.tijera:
                alert("Ganaste!");
                break;
            default:
                alert("Perdiste");
        }
    }
    game();

//switch junto al método de "" y todo en un solo case*
    function game(pc, jugador) {
        //opciones
        const opciones = {
            piedra: "piedra",
            papel: "papel",
            tijera: "tijera",
        };

        alert("Tus opciones son:");
        alert(opciones.papel + " " + opciones.tijera + " " + opciones.piedra);

        jugador = prompt("Tu escoges?");
        alert("Jugador escogió: " + jugador);

        pc = [opciones.papel, opciones.piedra, opciones.tijera][Math.floor(Math.random() * 3)];
        alert("PC escogió " + pc);

        switch (true) {
            case (jugador === opciones.papel && pc === opciones.piedra) ||
                (jugador === opciones.tijera && pc === opciones.papel) ||
                (jugador === opciones.piedra && pc === opciones.tijera):
                alert("Ganaste!");
                break;
            default:
                alert("Perdiste");
        }
    }
    game();