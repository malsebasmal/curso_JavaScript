//Funciones
    //Las funciones son un conjunto de sentencias* que nosotros podremos utilizar para generar ciertas acciones* con los valores que anteriormente guardamos en las variables*.
    //En otras palabras. Las funciones son bloques de código vacíos; al nosotros meter variables* con valores* dentro de la función, podemos generar instrucciones u otras cosas, las cuales únicamente* se ejecutarán cuando nosotros llamemos* a esa función y de esa manera nos devolverá "algo".

    //Tipos de funciones:
        //Declarativas
            //Las funciones declarativas, son en su totalidad una función "pura" por decirlo de alguna manera, así:
                function saludo() {
                    return "hola mundo";
                };
                saludo();

        //Expresión/Anónimas*
            //Las funciones de expresión o también llamadas funciones anónimas, son funciones sin un nombre*, ya que el "nombre" que llegan a tener es gracias a que las funciones anónimas van dentro* de una variable*, así:
                let numero_suerte = function() {
                    return 11
                };

                numero_suerte();
                //En este caso nosotros estaríamos llamando a la variable* numero_suerte(), que si bien se invoca al igual que una función (osea con los 2 ()*), en sí es una variable*, donde el tipo de dato que esta guardando es de tipo función.


        //PARA QUE SIRVE LA KEYWORD RETURN*        
            //la keyword return* sirve para retornar un valor de nuestra función. Nos retorna algo de nuestra función.
                //La manera correcta de usar return*, es guardando lo que nos va retornar en una variable, así:
                function saludo() {
                    return "hola amig@s"
                };
                let frase = saludo();
                saludo();
                alert(frase);
                    //Para entender por que nos imprimió en pantalla la variable frase* si esta variable no tiene ningún valor que diga "hola mundo"... Esta tan fácil como comprender que:
                        //El valor que nosotros estamos pidiendo que return* a nuestra function*, lo hemos almacenado dentro de una variable llamada frase*.
                        //No es lo mismo poner un alert(saludo()), ya que aquí unicamente estaríamos imprimiendo en pantalla nuestra función, más no guardando esta misma en algún sitio en memoria.

        //PARA QUE SIRVEN LOS PARÁMETROS
            //los parámetro digamos que son la manera de identificar valores que tenemos dentro de nuestra función. Aquí un ejemplo:
                function suma() {
                    return x + y
                };
                //Dentro de esta función llamada suma*, estamos sumando x + y, sin embargo estos 2 valores ya mencionados, en ningún momento los hemos declarado, es decir que no los hemos guardado en ninguna variable dentro de nuestra función, ni por fuera de ella; eso hace que nuestra función no entienda de donde vienen esos valores colocados. La manera que nosotros tenemos para guardar nuestros valores en nuestra función son con los ya mencionados parámetros. Así:
                    function suma(x,y) {
                        return x + y
                    };
                    const resultado_const = suma(5 + 15);
                    alert(resultado_const);
                    //En este caso estaríamos declarando dentro de nuestra función unas "variables" que son parámetros* en realidad, los cuales son --> x,y <--, seguido a esto, dentro de nuestra variable donde guardaremos el return* de nuestra función pondremos los números que queremos sumar. Aunque también podemos poner valores por defecto a nuestros parámetros
                        function suma(x = 5, y = 15) {
                            return x + y
                        };
                        let resultado_let = suma();
                        alert(resultado_let);
                        //En este caso unicamente sería necesario llamar a nuestra función, ya que la suma la hará con los valores por defecto que tienen nuestros parámetros.

        //QUE ES EL HOISTING
            //El hoisting es https://www.youtube.com/watch?v=uI6o97A4IrI

    //Ejm de los 2 tipos de variables:
        //Declarativas
            function saludo(saludar) {
                return saludar
            };
            alert(saludo("buenos días"));
            //En este caso estamos "invocando" a la función saludo(), que está dentro de un alert() donde este anterior nos va imprimir en pantalla nuestra función. Dentro de nuestro parámetro saludar* añadiremos cualquier tipo de valor en el momento donde llamemos a la función.
            //Si bien el código anterior cumple nuestra la acción pedida, tiene varios fallo de lógica. Por ejemplo, nuestro return* que le estamos pidiendo a nuestra función, no se esta guardando en ningún lado (es decir lo que nos va a devolver la función, el resultado). Para corregirlo tendría que ser así:
                function saludo(saludar = "buenos días") {
                    return saludar
                };
                const recibido = saludo();
                alert(recibido);
                //Las correcciones que hemos hecho han sido:
                    //Hemos guardado dentro del parámetro saludar* un string* que tiene la cadena de texto "buenos días"*.
                    //Hemos guardado el return* (resultado) de nuestra función en una una variable tipo const* con el nombre recibido*.
                    //Hemos mandado a imprimir el return* (resultado) de nuestra función guardada en la variable recibido*.

                function saludar_alumnos(frase) {
                    return `Buenos días ${frase}`
                };
                alert(saludar_alumnos("jose"));
                //Supongamos que nosotros tenemos que nosotros tenemos una lista de 50 alumnos, sería algo bastante tedioso estar escribiendo la misma cadena de texto para todos "buenos días "nombre del alumno"...
                //Para evitar todo ese texto innecesario, podemos crear una plantilla de texto*.
                    //Plantillas de texto* `${}`
                        //Al utilizar ${} dentro de una cadena de texto delimitada por comillas invertidas (`), puedes insertar expresiones JavaScript dentro de la cadena de texto. Estas expresiones se evaluarán y se sustituirán por su valor correspondiente en tiempo de ejecución.
                        const nombre = "Juan";
                        const edad = 30;
                        const mensaje = `Hola, mi nombre es ${nombre} y tengo ${edad} años.`;
                        console.log(mensaje);
                        //En el ejemplo anterior, la cadena de texto se define utilizando comillas invertidas (``). Dentro de la cadena, ${nombre} y ${edad} son expresiones que se evalúan y se sustituyen por sus respectivos valores. El resultado será: "Hola, mi nombre es Juan y tengo 30 años.".
        //Anónimas
            //