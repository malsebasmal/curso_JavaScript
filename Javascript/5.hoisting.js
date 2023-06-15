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

    //COSAS IMPORTANTES DEL HOISTING:
        // https://www.youtube.com/watch?v=uI6o97A4IrI&t=1s
        // https://www.youtube.com/watch?v=ojrvxYcKeYg
        //Estas son las "cosas" más importantes que sufren del efecto hoisting
            // var -->SOLO LA DECLARACIÓN <--
                //En las declaraciones de las variables con var*, únicamente se eleva la declaración, más NO la inicialización

            // function -->COMPLETO<--
            // import estáticos -->COMPLETO<--
                //En las funciones y imports estáticos, absolutamente todo se eleva, todo el bloque de código función.

            // let y const
                //El efecto hoisting también ocurre con let y const, solo que a comparación de su hermana var*, cuando nosotros llamamos a una variable de tipo const o let, en vez de botarnos como resultado undefined*, nos votará como resultado que nuestra variable declarada con let o const se encuentra en algo llamado DEAD ZONE.
                //DEAD ZONE
                    //https://www.youtube.com/watch?v=cTfGyVFrLxQ
                    //La DEAD ZONE ocurre cuando utilizamos las variables let o const.
                    //Recordemos que con var, el hoisting le agrega un valor a nuestra variable que no hemos inicializado, pero si ejecutado, el cual es undefined*.
                    //Cuando utilizamos let o const y ejecutamos una variable, sin que esta antes haya sido declarada, nos saldrá un error* en vez de undefined*; ya que JavaScript al momento de que el hoisting* eleva nuestras variables (let y const), estas mismas no podrán ejecutarse por que unicamente han sido declaradas, más no INICIALIZADAS.
                    //En pocas palabras, var* si nos deja ejecutar variables sin antes haberlas declarado o inicializado. Por su otra parte, let y const NO nos permiten ejecutar una variable sin antes haberla declarado e inicializado.
                //Estas son una de las ventajas que tiene al utilizar let y const como nuestra declaración de variables. NO PODREMOS EJECUTARLAS SIN ANTES HABERLAS INICIALIZADO, POR QUE EL HOISTING UNICAMENTE LAS DECLARA, MÁS NO LAS INICIALIZA.