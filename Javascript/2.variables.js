//Variables
    //Cuando nosotros queremos guardar valores en memoria* tenemos que utilizar las variables*. Las variables digamos que son la representación de algún lugar en memoria donde nosotros guardaremos un valor. Ejm:

        var nombre_de_la_variable = "tipo de valor que queremos guardar en memoria";
        
        // var = Es una keyword* que le dirá a JavaScript que deseamos declarar una variable a continuación.
        // nombre_de_la_variable = Seguidamente le pondremos un nombre a nuestra variable. Puede ser nombres, juegos_móvil, teléfono, etc.
        // "tipo de valor" = Por último ponemos el tipo de valor que deseamos guardar en nuestra variable que seguidamente se guardará en memoria.

        // = : El = sirve para poder decirle a JavaScript cual es el tipo de valor que queremos guardar en nuestra variable.
        // ; : El ; sirve para decirle a JavaScript que terminamos una sentencia. (buenas prácticas)

    //Nosotros al momento de nosotros generar/escribir una variable, en esta se presentan 2 estado:
        //Declarar un variable:
            var deportes;
                //En esta etapa de generar nuestra variable; lo que sucede es que nosotros le estamos diciendo a JavaScript que nos reserve* un espacio en memoria que se llame (en este caso) deportes*, luego ya le colocaré un valor*
        //Inicializar
            deportes = "futbol"
            deportes = "rugby"
            deportes = "ciclismo"
                //En esta etapa de generar nuestra variable; lo que sucede es que después de haberle dicho a JavaScript que nos reservase* un espacio en memoria (sin ningún valor en ese momento), ya podemos llamar a la variable y declarar el tipo de valor que queremos guardar en ella.

    //Ejemplos:
        //Ejemplos con valores primitivos:
            var edad = 40;
            var nombre = "Antonio";
            var validación = true;
            var indefinido = undefined;

            edad
            nombre
            validación
            indefinido

        //Ejemplos con valores tipo objeto:
            //Arrays
                var edades
                edades = [30, 32, 40, 43];
                edades

                var nombres
                nombres = ["sebastian", "pepe", "jose"];
                nombres

                var decision = [true, false]
                decision

            //Objeto
                var persona
                persona = {
                    edad_persona: [30, 32, 33],
                    nombre_persona: ["Antonio", "Sebastian", "Joaquin"],
                    sexo_persona: ["M", "F"],
                    dni_persona: [true, false]
                };
                persona


                var perro = {
                    nombre_perro: "max",
                    edad_perro: 7,
                    controles_perro: true
                }
                perro

                //Cabe recalcar varias cosas en la sintaxis* en la declaración de las variables tipo object*:
                    // , : para nosotros poder ingresar variables (una seguida de la otra), debemos utilizar la --> , <-- ya que esta misma le dirá a JavaScript que queremos seguir escribiendo/declarando características a nuestro objeto. Para dar por terminada nuestra sentencia, simplemente en la ultima característica de nuestro objeto, ya NO escribimos la --> , <-- 

                    // línea a línea : Nuestras características de nuestro objeto deben de ser escritas 1 línea por cada característica que tenga nuestro objeto. (Son buenas prácticas)
