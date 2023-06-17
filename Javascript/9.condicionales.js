//Condicionales
    //Las condicionales en JavaScript son estructuras o puntos de control que nos permiten evaluar diferentes expresiones y realizar determinadas acciones. En otras palabras, las condicionales evalúan si algo es true o false, y dependiendo de eso mismo nos llevará a una nueva instrucción o nos dejará en la misma. Existen varios tipos de condicionales:
        if (condition) {
            
        }
            //El condicional If* es como nosotros de primera* indicamos a JavaScript que cuando algo es true (ojo que en If*, obligatoriamente la condición* tiene que ser true* para que esta se cumpla) ejecute cierta instrucción. Ejemplo
                if (edad >= 18) {
                    console.log("puedes conducir")
                }
                    //En este if, estamos poniendo que si edad es mayor o igual a 18, la persona puede conducir.
        else {
            
        }
            //El condicional Else* sucede cuando la primera condición tiene como resultado false*. Es decir, cuando la primera condición (con If) no se ha cumplido; este pasa a un nuevo "camino", donde tendremos las instrucciones para cuando la primera condicional que no fue un true*. Ejemplo
                if (edad >= 18) {
                    console.log("puedes conducir")
                } else {
                    console.log("NO* puedes conducir")
                }
                    //En este else*, hemos puesto que si la primera condición no se cumple (es decir, si no es mayor o igual a 18) este individuo no podrá conducir.
                    //En otras palabras, si (if) una acción (expresión) es verdadera (true) hago una acción (bloques de código). En el caso contrario (else) efectúo otra acción.
        else if() {

        };
            //El condicional else if*, es para cuando nosotros tenemos que validar más cosas, y no únicamente 2. Hay ocasiones en las que nosotros tenemos que validar más de 2 cosas, entonces es ahí donde entre el else if*. Ejemplo:
            function votar() {
                let edadpromt = prompt("Cual es tu edad?");
                let edad = parseInt(edadpromt, 10); //Esta keyword parseIn*, sirve para que nosotros podamos transformar los datos recibidos en el promt (que son strings), a datos de tipo number*
                if (edad === 18) {
                    alert("¡Felicitaciones por tu primera votación!");
                } else if (edad >= 19 && edad === 50) {
                    alert("Gracias por votar nuevamente.");
                } else if (edad < 18) {
                    alert("No puedes votar, eres menor de edad.");
                } else if (edad >= 51 && edad < 100) {
                    alert("Ya no es necesario que votes.");
                } else if (edad >= 100) {
                    alert("¡Como sigues vivo, el diablo!");
                } else {
                    alert("Ingresa un valor válido.");
                }
            };