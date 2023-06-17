//Operadores
    //Los operadores, no son más que estos signos que ya conocemos de las matemáticas, como el + , - , * , / , = , etc. La única diferencia, es que en JavaScript la existe la posibilidad de combinar los operadores para que hagan algo totalmente distinto a cuando están solos, algunos ejemplos como, += , -= , == , etc.
    //Entre los operadores que conocemos se dividen en diferentes tipos:
        //Aritméticos y unary operator
            //Los operadores aritméticos son todos aquellos operadores que pueden hacer operaciones matemáticas entre 2 tipos de variables. En otras palabras, son los operadores matemáticos de toda la vida, ejemplo:
                5 + 5
                5 - 4
                5 * 2
                10 / 2
                10 % 3 //Este es un tipo de operador de residuo. Este lo que hace es darnos el residuo que queda de la operación división, y si es que es un decimal, la redondea al número más cercano a este)
                let a = 5;
                a++ // Este es un tipo de operador que incrementa nada más una unidad al valor de tipo number* que tenga este anterior. También se puede hacer con el --*, este hará lo opuesto, que sería restarle una unidad al valor de tipo number* que tenga este anterior.
                console.log(a)
                //En este caso, el resultado nos saldrá dependiendo del tipo de operador que hemos utilizado.
                //En el caso de --> + <--, también este se puede utilizar para concatenar distintos tipos de valores, ejm:
                    "Tengo " + 20 + " años"
                    //En esta concatenación, el resultado que nos saldría sería "tengo 20 años" y el tipo de valor que valdría sería un "string", ya que estamos concatenando 2 tipos de valores, string y number.
                //Vale recordar también que los operadores aritméticos pueden ser combinados con el tipo de operador de asignación, ejemplo:
                    let y = 10;
                    y += 5; // Equivalente a y = y + 5; // y es igual a 15
                    let w = 10;
                    w -= 4; // Equivalente a w = w - 4; // w es igual a 6
                    //así sucesivamente con los demás tipos de operadores aritméticos.
            //Los operadores unary operator son que pueden trabajar únicamente con 1 variable. En otras palabras, son operadores que no necesitan otro tipo de valor o variable para poder ejecutarse. Ejemplo:
                ! //Este operador unitario lo que hace es negar el tipo de valor que sea escrito después de él. En otras palabras, lo que hace es devolvernos lo opuesto a lo que el valor representa (en true o false), ejemplos:
                    !true
                        //En este caso, lo que nos devolverá el valor de tipo true (que vale true) es un false, esto gracias al operador unitario --> ! <--
                    !1
                        //Lo mismo con este otro caso. Recordemos que en los valores de tipo booleano, estos son representados con 1 y 0, 1 = true, 0 = false, entonces, en este caso, lo que nos devolverá será un false.
                    !""
                        //Como sabemos de antemano (gracias a la clase de truthy y falsy), cuando nosotros colocamos un valor de tipo string, pero sin ningún tipo de caracter dentro de este, nos devolverá un false, pero, en este caso nos devolverá un true*
        //Asignación
            //Los operadores de asignación son utilizados para asignar un tipo de valor a algo, ejemplo:
                let nombre = "Antonio"
                //En este caso, nuestro operador de asignación = esta ordenando que el valor de tipo string sea asignado a la variable que tiene por nombre nombre*. Esto se puede hacer con todos los tipos de datos que conocemos, strings, numbers, booleans, objects, arrays, etc.
            //Los operadores de asignación también pueden ser combinados con otros operadores, ejemplo:
                let x = 10;
                x += 5; // Equivalente a x = x + 5; // x es igual a 15
                //Esto es equivalente a escribir el código así:
                    let x = 10
                    x = x + 5 //El resultado es 15*
                //Estos operadores de asignación combinados te servirán al momento en que necesites reasignarle un valor a una misma variable. (aunque no es recomendable)
        //Comparación
            //Los operadores de comparación, como su mismo nombre indica, compara dos o más valores entre si, y devuelven como respuesta un valor de tipo lógico (true o false).
                3 == "3"
                    //El operador de comparación == lo que hace es es comparar si el valor es el mismo, pero literalmente el mismo. Como el ejemplo que vimos arriba. Un ejemplo para entenderlo mejor sería:
                        4 == 5
                        //Aquí nosotros supondríamos que nos saldría un true, dado a que son los mismos tipo de valor, no?... Pues no, ya que el operador == , únicamente compara lo el valor "literal" (por decirlo de alguna manera) si es igual a su anterior. Para que nos saliese true*, tendríamos que escribirlo así:
                            4 == 4
                            "hola" == "hola" //true
                            "hola" == "Antonio" //false
                            true == 1 //true
                            true == "1" //true
                            true == "hola" //false
                            false == "" //true
                            false == "0" //true
                            false == 0 //true
                3 === "3"
                    //El operador de comparación === , es algo parecido a su antecesor nombrado, este compara el tipo* de valor y también si el valor que contiene es el mismo. En ejemplo de arriba, nos saldría false*, ya que no es lo mismo valor de tipo number, que un valor de tipo string, pero también nos saldrá false incluso si llegásemos a poner otro valor de tipo número que no sea el mismo valor que hemos escrito anteriormente. Ejemplo
                        3 === 5
                        //Si nosotros ponemos esto en consola, el resultado saldrá false*, ya que nuestro tipo de valor es el mismo, pero el contenido no. Caso similar sería: 
                            3 === "3"
                            //Aquí nos saldría false* de igual manera que arriba, por que si bien el contenido es el mismo, el tipo de valor no. Para que nos salga true* tendríamos que hacer algo así:
                                3 === 3 //true
                                true === true //true
                                false === false //true
                                false === "" //false
                                false === 0 //false
                != , !==
                    //Estos son los operadores de desigualdad. Los operadores = con un signo de ! adelante atrás de ellos, en vez de validar si es que son iguales los valores o tipos y valor, buscará si es que estos son distintos.
                        //Desigualdad
                            "3" != 3 // false
                            3 != 3 // false

                        // Desigualdad estricta
                            "3" !== 3 // true
                            3 !== 3 // false
                //Cabe recalcar que los operadores de comparación también pueden ser combinados, ejemplos:
                    5 < 3
                    //En este caso estamos "preguntando" si *5 es menor que 3*, pero también podemos ponerle un igual, para "preguntar" si es *5 es igual o menor que 3*, así:
                        5 <= 3
                        //Aquí estamos "preguntando" si es que 5 es menor o igual que 3.
                    //Podemos hacer esto con los demás operadores
                        5 > 3
                        5 >= 3
                        5 <= 3
                        5 < 3
        //Lógicos 
            //Los operadores lógicos, son aquellos que únicamente comparan dos o más expresiones y devuelve un valor lógico (verdadero o falso). Las expresiones son comparaciones entre valores, se utiliza en conjunto con los operadores de comparación. En otras palabras, este nos ayuda a validar variables/valores entre si. Para entenderlo mejor tenemos que entender que existen 3 tipos de operadores lógicos.
                //Operador disyunción lógico
                    a && b
                        //El operador --> && (AND) <-- lo que hace es: Si a es true y b es true, la condición se cumplirá, de caso contrario, no se cumplirá. Ejemplo:
                            var a = 15
                            var b = 5
                            
                            (a >= 10) && (a <= 20) // true
                            (b >= 10) && (b <= 20) // false
                                //Con el operador && solamente se podrá ejecutar/cumplir nuestra condición si ambas expresiones/valores/variables son true*, si es que hay un *false y true* (viceversa) nos arrojará que no es posible ejecutar la condición.
                    a || b
                        //El operador --> || <-- lo que hace es: Es algo distinta a su hermana (&&), en este operador (OR) la condición se cumple únicamente con valores/variables/expresiones sea true*. Bajo ese punto, el condicional ||* solamente necesita que un valor sea true* para poder ejecutar la instrucción. Ejemplo:
                            var a = 15
                            var b = 5
                            
                            (a <= 10) || (a >= 20) // false ya que aquí, ninguna de las 2 condiciones se cumplía
                            (b <= 10) || (b >= 20) // true, ya que aquí, si se cumplía la condición de b <= 10
                    !
                        //El operador de negación o NOT (!) devuelve el valor lógico contrario a la expresión. Se lee de la siguiente manera: “La expresión es verdadero, entonces es falso”.
                            var a = 5

                            !(a < 0) // true
                                //También se puede escribir únicamente a > 0, sin embargo, es únicamente para entender el propósito del operador de negación.
                    condition ? true : false;
                        //Esta condicional es como un if else, solo que en una sola línea de código.
                            //condition = Es igual a nuestra condición* o variable*
                            //? = Es igual a cerrar la sentencia de nuestra condición
                            //true = Es igual a si* la condición se cumple* pasa esto
                            //false = Es igual a si no* se cumple la condición* pasa esto otro
                        //Ejemplos para entenderlo mejor.
                            function validación() {
                                let promptEdad = prompt("Para darte tu licencia de conducir, necesito saber: cuantos años tienes?");
                                let edad = parseInt(promptEdad, 10);
                                let confirmar = edad >= 18 && edad <= 49 ? "Puedes conducir" : "No puedes conducir" //Esta es nuestra condicional if else* escrito en una sola línea de código
                                alert(confirmar)
                            };
                            validación();
                                //En este función validación ocurren estas cosas:
                                    //Tenemos una variable llamada promptEdad*, la cual esta almacenando* los datos que escriba el usuario* en nuestro prompt*.
                                    //Seguido a este, tenemos otra variable llamada edad*, la cual transforma nuestros valores escritos en el prompt (recordando que son strings) a valores de tipo number, esto con la keyword parseInt* y como segundo parámetro le ponemos el número 10*, el cual lo utilizara como base para que nuestros números solamente sean transformados a este (o sea, a números redondos).
                                    //Por ultimo ponemos nuestra condicional que esta guardada dentro de una variable llamada confirmar*, hemos puesto que:
                                        //Si la variable edad* es >mayor o =igual a 18 "Puede conducir", y como un "límite" hemos puesto (anidando con el operador && AND) que si la variable edad* es <menor o =igual a 49 "No podrá conducir".
                                    //Llamamos a nuestra condicional confirmar* con un alert* dentro de nuestra función validación*
                                    //Finalizamos "invocando" a nuestra función validación*
