//Hoisting
    //El hoisting quiere decir que nosotros podemos ejecutar una variable o función, sin que esta antes haya sido declarada o inicializada. Aquí un ejemplo.
        console.log(nombre)
        var nombre = "Antonio"
        //Nosotros vemos esto y suponemos que nos saldrá un error*, no?... Pues no es así, te explico el por que:
             //Nosotros hemos llamado a que se nos imprima en consola un var*, sin embargo, al momento de mandar el console.log* con nuestra var* dentro, a esta anterior mencionada no la habíamos declarado (creado), no fue hasta después del console.log, donde recién declaramos (creamos) la var = nombre "Antonio". Entonces a que se debe que en consola me sale la var* nombre como undefined (indefinida) en vez de "no exist" o "is not defined"... Esto sucede gracias al hoisting*
                //Lo que sucede al momento de ejecutarse esta tarea (en el momento donde JavaScript hace uso de su interprete al momento de compilar) es lo siguiente:
                    --> /var nombre/ <--
                    consola.log(nombre)
                    var nombre = "Antonio"
                    //Cuando nosotros usamos el console.log y llamamos a nuestra variable (la cual había sido declara después de la primera instrucción). JavaScript lo que hizo fue "crear" la var nombre* (es decir declararla por nosotros) pero, SIN NINGÚN TIPO DE VALOR.
                    //Entonces la instrucción se esta ejecutando, a nosotros nos sale que nuestra variable nombre* esta undefined* por que JavaScript la declaró por nosotros, sin embargo no le añadió ningún tipo de dato.
    //En JavaScript las variables, funciones, etc, siempre son declaradas desde antes de la ejecución. Esto también se puede entender como si nuestras variables, funciones, etc, tuviesen helio y suben arriba de nuestra instrucción que ejecuta.
        alert(saluda)
        var saluda = "Buenos días"
        //Lo que hace JavaScript en realidad es
            var saluda //inicializa la variable, PERO, sin ningún valor dentro de ella, osea undefined*
            alert(saluda) //Ejecuta la instrucción
            saluda = "Buenos días" //Como le pusimos el valor a nuestra variable después de que la instrucción se ejecutara, nos saldrá undefined*

    // https://www.youtube.com/watch?v=uI6o97A4IrI&t=1s