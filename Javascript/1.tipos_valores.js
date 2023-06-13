//Tipos de datos / data / valores

    //Valores primitivos: Estos son valores básicos
        //Number (números)
            //Para declarar este tipo de valor es tan sencillo como tan solo colocar un número, así:
                40
                30
                20, 10, 5
                5.2

        //String (texto)
            //Para declarar este tipo de valor hay que utilizar las "" '', así:
                "Soy un texto"
                'Soy un texto'

        //Booleano
            //Este tipo de valor tan solo tiene 2 formas de ser declarado, las cuales son false y true. Este valor fue creado con el fin de validar* si es que tomaremos una decision o no. Este valor se declara así:
                true
                false

        //Empty Values
            //Los valores vacíos* o valores placeholder*. Estos valores son reservados para algún otro tipo de valor; ya que cuando nosotros tenemos un valor que todavía no sabemos cual podría ser, de igual forma tenemos que guardar el valor en memoria, y como no sabemos cual es, para eso utilizamos null o undefined, así: 
                null
                undefined


    //Valores tipo objetos:
        //Arrays
            //Los valores arrays no son más que un conjunto de valores primitivos (en su mayoría) dentro de un par de []. Se declara así:
                ["hola mundo", "qlq"]
                [1, 2, 3.4]
                [true]
                [undefined]

        //Objeto
            //Este valor es de tipo objeto* (así es su nombre). Este valor indica un representación de un objeto, Se declara así:
                {nombre: "Antonio"}
                {numeros: 1, 2, 3, 4.5}
                {faltante: null}
                {verdadero: true}

//Para nosotros poder verificar lo que es cada tipo de valor, podemos ir a la consola de chrome (o nuestro navegador preferido) y utilizar la palabra reservada (keywords) typeof* escribimos el tipo de valor.