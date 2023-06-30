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
        //Como sabemos, con el .pop, agregamos más valores, sin embargo estos se van hasta el último. Para nosotros agregar más valores a nuestro array pero que vayan al principio*, podemos utilizar el .unshift*, se hace de la siguiente manera:
            let meterMasValoresPrincipio = bolsa_DeCompras.unshift("presidente de los estados unidos")
        //Asu vez, para borrar el elemento del principio (ya que con pop, unicamente se elimina nuestro ÚLTIMO elemento), se hace de la siguiente manera:
            let quitarMasValoresPrincipio = bolsa_DeCompras.shift()
        //Supongamos que unicamente sabemos el nombre del valor* que esta dentro de nuestro array*, ese ese caso, en vez de buscarlo mediante la vista, o directamente en el array, podemos hacerlo con un .indexOf*, se hace de la siguiente manera:
            let buscarValor = bolsa_DeCompras.indexOf("martes") //dentro de los paréntesis, ponemos el nombre/valor de nuestro elemento.
        
        typeof bolsa_DeCompras //sirve para saber que tipo de valor es o contiene nuestra variable o valor.