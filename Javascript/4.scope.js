//Scope
    //El scope* no es más que el alcance que puede llegar a tener una variable dentro de lo que estamos programando. 
    //En otras palabras, es saber que variables se encuentran delimitadas a poder utilizarlas.
        //Existen 2 tipos de SCOPE*:
            //Scope GLOBAL
                //El scope global* es lo que engloba "todo", y el "todo" no es más que un lugar donde nosotros almacenaremos nuestras variables que deseemos.
                    let nombre = "Antonio"
                    function saludar(saludo = "buenos días") {
                        return saludo + nombre
                    }
                    alert(saludar())
                    //En este ejemplo, nosotros hemos declarado una variable fuera de saludar(), esta variable creada por fuera (la cual se llama nombre*) la podemos llegar a utilizar, ya es una variable que esta dentro del scope global.
                    //Todo lo que se almacena en el scope global* puede ser utilizado sin ningún tipo de problema, ya el alcance de los valores, variables, etc, que guardemos en este, será de alcance GLOBAL.

            //Scope LOCAL
                //El scope local* a diferencia del ya mencionado antes. Este tan solo tiene un alcance más limitado. Dentro de este scope (espacio) local, únicamente podemos utilizar valores, datos, etc, que estén dentro de nuestra función o bloque de código.
                    let juego = "Clash royal"
                    function jugar (decisión = "si juego") {
                        return decisión
                    }
                    alert(decisión)
                    //En este ejemplo, nosotros estamos llamando a una variable de nombre decisión*, la cual se encuentra dentro de jugar(). Se "supone" que tendría que salir el mensaje "si juego", no?.
                    //Pues NO SUCEDERÁ. Esto se debe a que hemos mandado a imprimir una variable*, la cual esta dentro de una función; es decir, dentro de un SCOPE LOCAL.
                    //Entonces:
                        //Podemos mandar a llamar cualquier cosa que este dentro del SCOPE GLOBAL*, PERO, NO PODEMOS mandar a llamar algo que este dentro de un SCOPE LOCAL*
                        //Si es que queremos saber como podría imprimirnos el contenido de nuestra variable decisión, es tan simple como:
                            let juego = "Clash royal"
                            function jugar (decisión = "si juego") {
                                return juego + decisión
                                alert()
                            };
                            
                            jugar();