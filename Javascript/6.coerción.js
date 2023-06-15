//Coerción
    //La coerción en JavaScript, no es más que la transformación de cierto valores. Hagamos una función para poder comprenderlo más claro..
        function operaciones(x,y) {
            const sumar = x + y;
            const restar = x - y;
            const multiplicar = x * y;
            const dividir = x / y; 
            return //variable que queremos que nos retorne
        };
        const resultado = operaciones (valor, valor) ;
        alert(resultado);
        //A la función llamada operaciones*, le hemos definido 2 parámetros que son x,Y*. Dentro de la función tenemos variables las cuales tienen distintos operadores (+ , - , * , /), dentro de las variables hemos colocado nuestros parámetros (parámetros que no tiene  valor hasta ese momento), luego utilizamos la keyword return*, nombrando al costado de ella la variable que queremos que nos retorne ese resultado. Fuera de la función (en el scope global) hemos definido una variable resultado*, la cual almacenará la función operaciones, donde recién al momento de guardar la función en la variable, colocaremos los valores que queremos que tengan nuestros parámetros. Por último, mandaremos un alert(), con nuestra variable resultado (la cual almacena nuestra función) para que se nos imprima en pantalla nuestra variable resultado*.
    //¿Que es lo que sucede a nuestro código con la coerción?
        //Lo que sucede con la coerción, es que como JavaScript es un lenguaje de tipado débil*, podemos hacer ciertas cosas extrañas, como sumar string con números, o restar booleanos con números (osea, hacer operaciones con tipos de valores distintos),entre otras cosas extrañas que a lo mejor en un lenguaje con tipado fuerte* (más estricto) no nos lo permitiría. La coerción* es como se llama cuando el lenguaje de programación cambia por nosotros un tipo de valor por otro tipo de valor. Ejemplos:
            //Suma y concatenación
                function operaciones(x,y) {
                        const sumar = x + y;
                        return sumar
                    };
                    const resultado = operaciones (1, "3") ;
                    alert(resultado);
                    //Al momento en que se ejecute esta función, nos saldrá en pantalla impreso 13*, pero... Porque sucede esto?
                        //JavaScript nos deja sumar/concatenar valores que no son del mismo tipo. En este ejemplo en particular, nosotros estamos "sumando" (concatenando) el número 1, con el string "3" (recordemos que los string son texto, así nosotros escribamos números dentro de este, JavaScript lo entenderá como texto). Incluso podemos "sumar" 1 + "hola como estas". En otro ejemplo, podríamos sumar incluso un valor de tipo número + un valor de tipo booleano.
                            function operaciones(x,y) {
                                const sumar = x + y;
                                return sumar
                            };
                            const resultado = operaciones (1, true) ;
                            alert(resultado);
                            //En pantalla nos saldría 2*. El porque?, se debe a que recordemos que los valores de tipo booleano, no son más que 1 y 0, 1 = true, 0 = false. Entonces bajo esta lógica, cuanto es 1 + 1, exacto... 3.
            //Resta
                function operaciones(x,y) {
                    const restar = x - y;
                    return restar
                };
                const resultado = operaciones (1, true) ;
                alert(resultado);
                //En este caso, nuestra función esta restando el valor de tipo número 1* - el valor de tipo booleano true (que equivale a 1), el resultado sería 0. Pero que pasaría si quisiéramos restar un valor de tipo número 1* - un valor de tipo string "2"*. Nos saldría algún tipo de error?, la respuesta es que no.
                    function operaciones(x,y) {
                        const restar = x - y;
                        return restar
                    };
                    const resultado = operaciones (1, "2") ;
                    alert(resultado);
                    //El resultado que nos saldría en pantalla sería -1*, pero, porque? Esto sucede gracias a la coerción*. JavaScript lo que esta haciendo es "interpretar"/"cambiar" por nosotros el valor de tipo string que contiene el "2", por un valor de tipo número que contenga 2*.
                    //OJO, no sería lo mismo poner el valor de tipo número 1* - el valor de tipo string "hola". 
                        //En ese caso nos saldrá en pantalla NaN, osea que NO se puede realizar*
            //Multiplicación
                function operaciones(x,y) {
                    const multiplicar = x * y;
                    return multiplicar
                };
                const resultado = operaciones (2, "5") ;
                alert(resultado);
                //En este caso, sucedería literalmente lo mismo que con la resta. JavaScript "interpretar"/"cambiar" por nosotros el valor de tipo string que contiene el "5", por un valor de tipo número que contenga 5*, haciendo que la multiplicación sea posible.
                //Caso similar a la resta, no podemos multiplicar un valor de tipo string que contenga alguna palabra o letra, esto daría como resultado que se imprima en pantalla NaN.
            //División
                //Lo mismo que con la multiplicación y resta :)
    //TIPOS DE COERCIÓN
        //IMPLÍCITA
            //La coerción implícita consiste en la transformación de tipos mediante la ayuda de JavaScript. Esto ocurre en operaciones de diferentes tipos, ya que es un lenguaje débil y dinámicamente tipado. En pocas palabras es cuando el lenguaje nos ayuda a cambiar el tipo de valor.
        //EXPLICITA
            //La coerción explícita, es la transformación de tipos de datos que controlamos el resultado. Para realizar estas transformaciones utiliza las funciones Number(), String() y Boolean(), para convertir a tipo número, string y lógico, respectivamente. En otras palabras, es cuando nosotros obligamos a que cambie el tipo de valor. Ejemplo:
                let a = "2"
                let b = 5
                let operacion = a + b 
                alert(operacion)
                //En este caso, operacion* nos arrojaría como resultado 25*, pero, como puedo obligar a que a* seá un valor de tipo número?; eso se hace de la siguiente manera:
                    let a = "2";
                    let b = 5;
                    let operacion = Number(a) + b;
                    alert(operacion);
                    //Lo que se nos imprimirá en pantalla será el número 7, y si es que revisamos en consola el resultado de la operación, ya no nos saldrá que es un valor de tipo string, si no de tipo number.