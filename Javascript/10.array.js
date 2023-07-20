//Array
    //El array tiene 2 partes/elementos principales.
        //Indice = La enumeración de los cuantos elementos tenemos dentro de nuestro array
        //Elementos = Los valores/elementos que tenemos dentro de nuestro array.    
    //El array (como ya vimos cuando tocamos los tipos de datos*) es un tipo de dato objeto*. Es decir que nosotros podremos guardar multiples valores de distintos tipos, o valores con tipos iguales. Ejemplo:
        let semanaDiasTrabajo = [
            "lunes", "martes", "miércoles", "jueves", "viernes"
        ];
            //Es lo mismo que hacer:
                //let semanaDiasTrabajo = ["lunes", "martes", "miércoles", "jueves", "viernes"];
                //También se puede poner otros arrays* dentro de nuestro arrays*, ejemplo:
                    let bolsa_DeCompras = [
                        //comida para humanos
                        "manzanas",
                        "peras",
                        "plátanos",
                        "arroz",
                        //comida de perros
                        [
                            "ricoKan",
                            "ricoKen",
                            [
                                //cantidad de comida de perros
                                4,
                                2,
                                true
                            ]
                        ]
                    ]
                        //Como pueden ver tenemos dentro de un array, más arrays, que contienen más tipos de valores.
        //Sabemos que al llamar nuestra variable, también estaremos llamando los valores/valor que tenga esta misma dentro suya, pero para llamar unicamente a un valor en específico de nuestro array, se haría de la siguiente manera:
            //Mandamos a llamar nuestra variable (en este caso en consola)
            console.log(bolsa_DeCompras[3]) //recordando que en un array/programación se empieza a contar desde el 0.           
                //Para mandar a llamar un array que esta dentro de nuestro array principal y queremos escoger un elemento específico, se hace así:
                    console.log(bolsa_DeCompras[4][0]) 
        //También si es que queremos saber cuantos valores tiene nuestro array, podemos hacer lo siguiente:
                console.log(bolsa_DeCompras.length) //Este comando lo que hará será imprimirnos en la consola (en este caso) la cantidad de valores que tiene nuestro array.
        //Si nosotros queremos meter dentro de nuestro array un elemento de "última hora", o mejor dicho, para agregar un valor más a nuestro array, se hace así:
            console.log(bolsa_DeCompras.push("pepinos")) //Esta es una forma de meter nuevos valores a nuestro array, pero también existe otra forma la cual es con un variable a parte, se hace así:
                let meterMasValores = bolsa_DeCompras.push("pepinos-de-otra-forma")
        //Para quitar elementos de nuestro array, se hace de la siguiente manera:
            let quitarValores = bolsa_DeCompras.pop(3)
        //Como sabemos, con el .push, agregamos más valores, sin embargo estos se van hasta el último. Para nosotros agregar más valores a nuestro array pero que vayan al principio*, podemos utilizar el .unshift*, se hace de la siguiente manera:
            let meterMasValoresPrincipio = bolsa_DeCompras.unshift("presidente de los estados unidos")
        //Asu vez, para borrar el elemento del principio (ya que con pop, unicamente se elimina nuestro ÚLTIMO elemento), se hace de la siguiente manera:
            let quitarMasValoresPrincipio = bolsa_DeCompras.shift()
        //Supongamos que unicamente sabemos el nombre del valor* que esta dentro de nuestro array*, ese ese caso, en vez de buscarlo mediante la vista, o directamente en el array, podemos hacerlo con un .indexOf*, se hace de la siguiente manera:
            let buscarValor = bolsa_DeCompras.indexOf("martes") //dentro de los paréntesis, ponemos el nombre/valor de nuestro elemento.
        
        typeof bolsa_DeCompras //sirve para saber que tipo de valor es o contiene nuestra variable o valor.

    //Más cosas que podemos hacer con los arrays:
        //Crearemos un array de ejemplo con objetos literales dentro de este:
            const viveres = [
                {nombre: "manzana", precio: 15},
                {nombre: "pera", precio: 16},
                {nombre: "platano", precio: 10},
                {nombre: "mango", precio: 25},
                {nombre: "uvas", precio: 25},
                {nombre: "pan", precio: 17},
                {nombre: "keke", precio: 19}
            ];
            //

            //Filtrar cosas dentro de un array:
                //.filter
                    let viveresFiltrados = viveres.filter(function(vivere) {
                        return vivere.precio <= 10
                    });
                    console.log(viveresFiltrados)
                        //Cabe recalcar que con el .filter nuestro array principal NO SE MODIFICA. El .filter crea otro array donde colocará lo que estamos filtrando.
            //Buscar dentro de un array:
                //.find
                    let viveresBuscar = viveres.find(function(buscar){
                        return buscar.nombre == "manzana"
                    });
                    console.log(viveresBuscar);
                        //.find (a comparación de .filter) no crea un nuevo array donde coloca nuestros elementos buscados, si no que ÚNICAMENTE DEVUELVE EL PRIMER VALOR que cumpla la condición.
            //Buscar la POSICIÓN de un valor en nuestro array:
                //.findIndex
                    let viveresPosicion = viveres.findIndex(function(posicion){
                        return posicion.nombre === "manzana"
                    })
                        //El .findIndex (a comparación de indexOf) busca dentro del mismo array u otros valor de tipo objeto, cosa que con el indexOf no se puede hacer, ya que únicamente permite buscar con valores primitivos. El .findIndex (al igual que .find) ÚNICAMENTE DEVUELVE EL PRIMER VALOR que cumpla con la condición.
            //Rellenar/Cambiar TODOS los valores de un array:
                //.fill
                    let viveresRellenar = viveres.fill("hola")
                    console.log(viveresRellenar)
                        //El .fill cambia TODOS los elementos dentro de nuestro array. Sin embargo solamente cambia por valores primitivos, si quisiéramos hacerlo por un valor de tipo objeto, tendríamos que crear un objeto que sea con el que utilizaremos el fill.
                            let relleno = {nombre: "pan", precio: 12}
            //Verificar
                //.every || .some
                    //.every
                        //El .every únicamente devolverá true* cuando TODOS los valores del array cumplan la condición indicada, de lo contrario, votará false*
                            let viveresConfirmacionEvery = viveres.every(confirmacion => confirmacion.precio <= 10)
                            console.log(viveresConfirmacionEvery)
                                //En este caso estamos diciendo que TODOS los valores en precio* tienen que ser mayores a 10 para que la condición se cumpla. Podríamos hacer otro ejemplo donde verifique si todos los valores son de tipo number
                                    viveresConfirmacionEvery = viveres.every(confirmacion => typeof confirmacion.precio === 'number')
                    //.some
                        //El .some (al contrario que el .every) podrá devolver el true* si es que como MÍNIMO UN VALOR cumple con la condición indicada.
                            let viveresConfirmacionSome = viveres.some(confirmacion => confirmacion.nombre === "manzana")
                            console.log(viveresConfirmacionSome)
                                //En este caso nos devolvería true*, ya que la condición si se cumple en un de los elementos del array. 
            //Modificar y guardar en otro array
                //.map
                    let viveresModificarGuardar = viveres.map(modificador => modificador.nombre)