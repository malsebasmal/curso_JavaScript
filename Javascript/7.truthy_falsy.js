//Truthy y Falsy
    //Los valores truthy y falsy son valores verdaderos y falsos cuando se realiza una coerción de cualquier tipo a booleano, respectivamente. Esto es importante para manejar condicionales, ya que una estructura condicional evalúa si un valor es verdadero o falso en un contexto booleano. En otras palabras, los valores de tipo truthy* y falsy* no son más que valores falsos* y verdaderos*. A continuación los valores falsos (falsy)* y verdaderos (truthy).
        //Falsy (falso)
            //Los valores falsy (falsos) son aquellos que son falsos bajo el contexto de un booleano (recordemos que los valores de tipo booleanos unicamente son false y true). Estos son los valores falsy:
                Boolean(0) // false
                Boolean("") // false
                Boolean(null) // false
                Boolean(undefined) // false
                Boolean(NaN) // false
                Boolean(false) // false
        //Truthy (verdadero)
            //Los valores truthy (verdaderos) son aquellos que son verdaderos bajo el contexto de un booleano (recordemos que los valores de tipo booleanos unicamente son false y true). Estos son los valores truthy:
                Boolean(12) // true (cualquier número mayor o menos a 0*)
                Boolean("hola") // true (para cualquier caracter que contenga nuestro string, incluido el " ")
                Boolean(true) // true
                Boolean([1, 2, 3]) // true (array aunque este vacío)
                Boolean(function hola() {}) // true (function aunque este vacía)
                Boolean({ a: 1, b: 2 }) // true (objeto aunque este vacío)