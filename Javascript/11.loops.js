//Loops/Ciclos/Bucles
    //son utilizados para realizar tareas repetitivas con base en una condición. Las condiciones típicamente devuelven true o false al ser evaluados. El bucle continuará ejecutándose hasta que la condición devuelva false*. Existen varios tipos de loops*, estos son algunos:

    //for (para)
        //El bucle FOR se utiliza para repetir una o más instrucciones un determinado número de veces. De entre todos los bucles, el FOR se suele utilizar cuando sabemos seguro el número de veces que queremos que se ejecute. Ejemplo:
            const estudiantesEnSala = ["Pepe", "Sebastian", "Antonio", "Joaquin", "Alexia"];
            function imprimirNombresEnPantalla(estudianteLlamar) {
                console.log("Hola " + estudianteLlamar)
            }
            for (let index = 0; index < estudiantesEnSala.length; index++) {
                imprimirNombresEnPantalla(estudiantesEnSala[index]);
            }
                //Lo que sucede en este código es lo siguiente:
                    //Tenemos una variable llamada estudiantesEnSala* donde guardamos una array* que contienen distintos nombres. 
                    //Hemos creado una función que la nombramos imprimirNombresEnPantalla* donde le hemos colocado un parámetro llamado estudianteLlamar* el cual nos servirá para guardar cierto dato que conseguiremos después
                    //Hacemos nuestro ciclo for*, su estructura es la siguiente:
                        for (let index = 0; index < array.length; index++) {
                            const element = array[index];
                            
                        };
                            //Antes de pasar a explicar nuestro propio for* que hemos creado, tenemos que explicar la sintaxis del for*
                                //Declarar el ciclo for* es similar a declarar una función, sin embargo, donde pondríamos nuestro "parámetro", es donde colocaremos nuestra condición, la cual hará que nuestro ciclo inicie y termine hasta donde nosotros le indiquemos.
                                    //La variable index* no necesariamente tiene que llamarse así (cabe recalcar), sin embargo es recomendable nombrarla de ese modo por sintaxis.
                                //index* es igual a 0 (primeramente), separado por un --> ; <-- escribimos que el index (que tiene como valor 0*) sea menor que nuestro array* y con un --> . <-- escribimos la propiedad .length para que nuestro array entregue el número de elementos que contiene (que en el caso de arriba de nuestro ejemplo, nos entregaría el número 4*)
                                //Nuevamente separado por un --> ; <-- escribimos al costado de nuestra variable index* el operador ++ para que vaya incrementándose.
                                //Todo eso anterior era únicamente nuestra "condition" o "instrucción" de nuestro ciclo for*, dentro de este escribimos el nombre de nuestra función o variable, y mandamos a llamar (función) o guardamos (variable) nuestro array con la variable index* que declaramos anteriormente*.
                    //En nuestro ciclo for* dentro de nuestro parámetro de control (que esta dentro de unos paréntesis) tenemos la variable index, la cual primeramente tiene como valor el número 0, separado a este hemos puesto que index ES MENOR A*  el número entregado de nuestra longitud de nuestro array y al final colocamos que el valor de index se vaya incrementando de a 1.
                    //Dentro de nuestro ciclo for* ya llamamos la función o variable a querer hacer que sea un bucle, así:
                        //Función
                            imprimirNombresEnPantalla(estudiantesEnSala[index])
                        //Variable
                            const imprimir = estudiantesEnSala[index]
        //for in (normalmente es utilizado para objects*)
            for (const index in estudiantesEnSala) {
                console.log(estudiantesEnSala[index]);
            };
            //El for-in, a comparación del bucle for*, iterará todos los elementos de nuestro array, independientemente de la cantidad que nosotros queramos que recorra (ya que en for* nosotros podemos indicarle que cierta cantidad de elementos queremos que itere nuestro array).
                //depende:
                    //Al igual que en for-of* y for*, el for-in* necesita un iterator* (que normalmente es declarado con index*) para poder recorrer el array. Entonces si es que nosotros queremos recorrer el array sin necesidad de el iterator*, lo veremos como algo una ventaja o desventaja.
                    //Podemos agregar elementos a nuestro array desde afuera. Es decir que no solamente iterará lo que este en nuestro array original, si no que el bucle for-in* también recorre los elementos fuera del array original (elementos de nuestro prototipo). Esto dependiendo de que si queremos que nos iteré cosas fuera de nuestro array original, será una ventaja o desventaja (si es que a lo mejor queremos una iteración limpia).
                    //Recorre las keys* de nuestro objeto/array, NO recorre los valores
                //Bueno:
                    //sintaxis legible.
                    //Podemos utilizar el continue* y break*
        //for of        
            for (const iterator of estudiantesEnSala) {
                console.log(estudiantesEnSala[iterator]);
            };
            //El bucle for-of*, a comparación del bucle for-in* y for*, no necesita un iterator*, si no que más bien utiliza la "singularidad" de nuestro array*, esto debido a que un array es algo en "plural" (porque contiene varios elementos).
                //depende:
                    //En el for-of ya NO se nos permitirá iterar elementos que no estén dentro del array original (no interara elementos prototipo)
                    //No necesitamos un iterator* index*, si no que en el for-of se utiliza un elemento "singular". Esto por que lo array son elementos "plurales" por decirlo de alguna manera. Entonces cuando nosotros declaramos una variable que sea singular a nuestro array, este es como si fuera nuestro iterator*. Esto no puede ayudar al momento de leer el código para que sea más comprensible.
                    //Recorre los valores, pero sin señalizar el índice (i o index). Si nosotros queremos utilizar o recorrer con un índice (i o index) sería mejor utilizar el for normal*.
                //Bueno
                    //Podemos utilizar el continue* y break*
        //for.each
            estudiantesEnSala.forEach(estudiante => console.log(estudiante));
            //bueno:
                //La sintaxis es mucho más legible que un for* común
            //Cosas negativas
                //No se puede detener el ciclo con un if break* o continue*
                    //En el for* común si se puede hacer un if break* o continue*, esto nos ayudaría si es que tal vez quisiéramos saltarnos un elemento y continuar, o detenernos cuanto encuentro cierto elemento.
    //While(mientras)
        //El bucle while, a diferencia de For y sus variantes, ejecutará las instrucciones siempre y cuando una condición se cumpla. En este bucle no se tienen en cuenta el número de veces que realizara el ciclo, únicamente se tiene en cuenta la condición, ya que este ciclo trabaja bajo la condición* puesta por nosotros, si esta se cumple una x cantidad de veces, pues esa x cantidad de veces será las veces que el bucle se ejecute.
            while (condition) {
                
            }
            //Esa es la sintaxis principal de como escribir un while. Funciona:
                //Si la condición se cumple, realiza x instrucción. (Se repite tantas veces mientras la condición se cumpla).
                //Si ya NO se cumple la condición, ya no realices el ciclo. Detenlo.
                    //Cabe recalcar que dentro de un ciclo while, siempre tenemos que declarar una instrucción donde la condición no se cumpla, debido a que si no colocamos "algo que tenga que realizar cuando la condición no se cumpla", simplemente tendremos como resultado un loop infinito.
            //Ejemplo:
                const nombres = [
                    "Antonio",
                    "Joaquin",
                    "Alexia"
                ];
                
                let usuario = prompt("Ingrese su nombre:");
                
                function imprimirEnPantalla(imprimir) {
                    alert(imprimir);
                };

                while (nombres.includes(usuario)) {
                    alert("Bienvenido!");
                    usuario = prompt("Ingrese otro nombre:");
                };
                
                imprimirEnPantalla("No eres bienvenido.");
                
                //Otra manera de hacerlo es poner nuestra función dentro del ciclo while. De esta manera, cada vez que la condición de nuestro while se cumpla, se ejecutará nuestra función. Tiene un poco más de sentido así.
                    const nombres = [
                        "Antonio",
                        "Joaquin",
                        "Alexia"
                    ];
                    
                    let usuario = prompt("Ingrese su nombre:");
                    
                    while (nombres.includes(usuario)) {
                        
                        function imprimirEnPantalla(imprimir) {
                            alert(imprimir);
                        }
                    
                        imprimirEnPantalla("Bienvenido!");
                        usuario = prompt("Ingrese otro nombre:");
                    }
                    
                    imprimirEnPantalla("No eres bienvenido.");
    //Do While
        //Do while, a diferencia de while*, donde si la condición puesta por nosotros llegase a ser false*, no se ejecutaría el bloque de código. En do-while funciona distinto, ya que primero se ejecuta el bloque de código *1 vez* y luego se evalúa la condición, si esta llegase a ser true*, ejecuta el bloque de código otra vez, si llegase a ser false, no ejecutará más veces el bloque de código.
            do {
                
            } while (condition);
            //Ejemplo:
                const nombres = [
                    "Antonio",
                    "Joaquin",
                    "Alexia"
                ];
                
                let usuario;
                
                do {
                    usuario = prompt("Ingrese su nombre:");
                
                    function imprimirEnPantalla(imprimir) {
                    alert(imprimir);
                    }
                
                    imprimirEnPantalla("Bienvenido!");
                    usuario = prompt("Ingrese otro nombre:");
                } while (nombres.includes(usuario));

                