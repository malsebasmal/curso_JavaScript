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

//Tipos de variables:
    //En JavaScript tenemos 3 formas de declarar variables, estas son:
        // VAR
            //La forma de declarar variables con la keyword var* es de la época de ECMAScript 5 (JavaScript), durante el primer JavaScript. Sin embargo el primer JavaScript resulto ser un total fracaso ya que presentaba muchos errores y bugs. La keyword var* es de esa época, es por eso mismo que esta también presenta ciertos errores de sintaxis o algunos bugs.
            //2 errores/cosas extrañas/bugs que tiene la manera de declarar nuestras variables con var* son:

                //Utilizar una variable sin haberla declarado antes:
                    console.log(hola)
                    var hola = "hola mundo"
                    //El que nos deje hacer esta clase de cosas es algo bastante preocupante, ya que se nos podrían dar bastantes bugs o errores al momento de ejecutar nuestro código.
                //SCOPES
                    //En var*, al momento de nosotros declarar una variable dentro de un if*, podemos utilizar esa variable fuera del if*. Esto es algo que tarde o temprano hará que nuestro código tenga bastantes errores o no sea muy fácil de leer.
        
        // LET
            //La forma de declarar variables con la keyword let* se creo a partir de los problemas que daba su antecesora (var*). let* salió a la luz en el ECMAScript 6, con unas reglas completamente distintas y para REMPLAZAR de manera definitiva a var*.
                //Cosas que la let*:
                    
                    //Utilizar la variable sin haberla declara antes:
                        //El utilizar las variables sin haberlas declara antes, era algo bastante contraproducente. Esto con let* se ha corregido:
                            let frase = "hola mundo"
                            console.log(frase)
                    //SCOPES
                        //En let*, si nosotros tenemos un if* y dentro de este, declaramos una variable, únicamente podremos utilizarlo dentro de esos corchetes del if*.

        // CONST 
            //La forma de declarar variables con la keyword const* es "la mejor forma de declarar nuestras variables". Lo que hace a const especial es que al momento de nosotros declarar una variable con el operador =, ya no podremos nuevamente colocar otro =. Ejm:
                const x = 11;
                x = 2;
                //Lo recomendable es utilizar const, ya que como este no nos permitirá cambiar lo que hay dentro de esta.
