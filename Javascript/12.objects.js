//Objects
    //https://www.youtube.com/watch?v=a2tp64Vtzxs&t=1188s
    //https://www.youtube.com/watch?v=R1LmvJ1_4QM
    //Javascript utiliza el paradigma de "programación orientada a objetos", sin embargo, no es que sea 100% "orientado a objetos". Es decir, que la programación orientada a objetos de javascript, es un poco distinta a los lenguajes "tradicionales" (como por ejemplo java). Mientras que en Java tenemos una sintaxis más orientada a objetos con la definición explícita de clases*, en JavaScript emulamos* la orientación a objetos utilizando funciones constructoras* y asignando propiedades* y métodos* al objeto resultante. Aunque JavaScript puede simular la programación orientada a objetos, la forma en que se logra, difiere del enfoque tradicional basado en clases.
    //En javascript, los objetos tienen distintas características y elementos, a continuación la explicación de cada uno de ellos.
        //Objetos:
            //Métodos:
                //Un método es una función que está asociada a un objeto y se puede invocar en ese objeto. Los métodos se definen como propiedades que contienen una función. Cuando se invoca un método en un objeto, la función asociada se ejecuta con el contexto del objeto, lo que significa que puede acceder a las propiedades* y otras funciones del objeto.
            //Propiedades:
                //Una propiedad es una asociación entre un nombre (también llamado clave) y un valor. Las propiedades pueden contener cualquier tipo de valor*, como cadenas de texto, números, booleanos, otros objetos, funciones, etc. Las propiedades de un objeto se definen utilizando la sintaxis de notación de punto (objeto.propiedad) o la sintaxis de corchetes (objeto['propiedad']).
            //Valores:
                //En JavaScript, un valor en el contexto de un objeto se refiere al contenido o dato asociado a una propiedad específica dentro del objeto. Los valores en JavaScript pueden ser de diferentes tipos.
        //Más sobre objetos, clases, instancias y prototipos en Javascript
            //Clases:
                //Como sabemos, podemos crear clases, que serán nuestra platina de objetos, donde estos tendrán acceso a las propiedades iniciales de nuestra clase y también a los de sus prototipos.
                //Cabe recalcar que las clases y los prototipos no se guardan en memoria. Únicamente se guardan en memoria las instancias.
            //Prototipos
                //Los prototipos podemos verlos como si fueran un objeto que ha sido delegado por nuestra clase (nuestro objeto principal/la "plantilla"). Estos prototipos serán "objetos/variantes de nuestra clase/objeto principal" por decirlo de alguna manera. Estos prototipos podrán acceder a las propiedades y valores de nuestra clase, como también podrán tener sus propias propiedades y valores.
                //Cabe recalcar que las clases y los prototipos no se guardan en memoria. Únicamente se guardan en memoria las instancias.
            //Instancias:
                //Una instancia es un objeto NUEVO creado a partir de nuestro objeto o prototipo.
                //No confundir prototipos con instancias, NO ES LO MISMO.
                //Diferencias entre prototipo y instancia:
                        //El prototipo* es un objeto que guarda relación con la clase principal, es como una platilla pero para cosas más específicas (podría decirse).
                        //Una instancia si es un objeto completamente nuevo que se basa en los prototipos y clases que nosotros tengamos.
            //Diferentes formas de crear clases en Javascript
                //Function constructora:
                    function Coche(marca, modelo, año) {
                        this.marca = marca;
                        this.modelo = modelo;
                        this.año = año;
                    }
                    
                    Coche.prototype.info = function() {
                        console.log(`Coche: ${this.marca} ${this.modelo}, Año: ${this.año}`);
                    };
                    
                    const coche1 = new Coche('Toyota', 'Corolla', 2021);
                    console.log(coche1.marca); // Toyota
                    console.log(coche1.modelo); // Corolla
                    console.log(coche1.año); // 2021
                    coche1.info(); // Coche: Toyota Corolla, Año: 2021
                //Declaración de clase normal:
                    class Coche {
                        constructor(marca, modelo, año) {
                        this.marca = marca;
                        this.modelo = modelo;
                        this.año = año;
                        }
                    
                        info() {
                        console.log(`Coche: ${this.marca} ${this.modelo}, Año: ${this.año}`);
                        }
                    }
                    
                    const coche1 = new Coche('Toyota', 'Corolla', 2021);
                    console.log(coche1.marca); // Toyota
                    console.log(coche1.modelo); // Corolla
                    console.log(coche1.año); // 2021
                    coche1.info(); // Coche: Toyota Corolla, Año: 2021-
                //Declaración de clase mediante expresiones de clase:
                    const Coche = class {
                        constructor(marca, modelo, año) {
                        this.marca = marca;
                        this.modelo = modelo;
                        this.año = año;
                        }
                    
                        info() {
                        console.log(`Coche: ${this.marca} ${this.modelo}, Año: ${this.año}`);
                        }
                    };
                    
                    const coche1 = new Coche('Toyota', 'Corolla', 2021);
                    console.log(coche1.marca); // Toyota
                    console.log(coche1.modelo); // Corolla
                    console.log(coche1.año); // 2021
                    coche1.info(); // Coche: Toyota Corolla, Año: 2021                  
    //Crear un objetos en Javascript. Se hace de la siguiente manera:
        var persona = {
            nombre: "Antonio",
            edad: 18
        };
            //Cuando nosotros creamos un objetos con la variable var*, este se guardara en el objeto global* o window*. Cuando es con la variable const* o let*, nuestro objeto no se guardara en nuestro objeto global* o window*, si no que únicamente pertenecerá al contexto de donde lo estamos declarando. También tenemos que tener en cuenta ciertas cosas cuando declaramos un objetos con const* o let*:
                //Con const:
                    //Cuando nuestro objeto con la variable const*, no podremos agregar un nuevo objeto a la misma variable después, ya que como sabemos, con const* no es posible modificar la variable después de que se haya inicializado. Si bien no se puede agregar más objetos a nuestra variable, si podemos modificar ya los valores objetos ya establecidos.
                        //Objeto creado con la variable const*:
                            const personaConst = {
                                nombre: 'Juan',
                                edad: 25
                            };
                            
                            console.log(personaConst.nombre); // Salida: "Juan"
                            console.log(personaConst.edad); // Salida: 25
                            
                            // Modificar una propiedad del objeto
                            personaConst.edad = 30;
                            
                            console.log(personaConst.edad); // Salida: 30
                            
                            // Intentar asignar un nuevo objeto a la variable const
                            personaConst = {}; // Error, no se puede asignar un nuevo objeto a la misma variable const
                //Con let:
                    //Cuando nuestro objeto sea creado con la variable let*, es totalmente lo contrario a con const*. En este caso, si podemos modificar nuestros objetos ya establecidos y agregar más objetos a nuestra variable.
                        //Objeto creado con la variable let*:
                            let personaLet = {
                                nombre: 'María',
                                edad: 28
                            };
                            
                            console.log(personaLet.nombre); // Salida: "María"
                            console.log(personaLet.edad); // Salida: 28
                            
                            // Modificar una propiedad del objeto
                            personaLet.edad = 30;
                            
                            console.log(personaLet.edad); // Salida: 30
                            
                            // Asignar un nuevo objeto a la variable let
                            personaLet = {
                                nombre: 'Ana',
                                edad: 32
                            };
                            
                            console.log(personaLet.nombre); // Salida: "Ana"
                            console.log(personaLet.edad); // Salida: 32
    //Cosas que podemos hacer con los objetos en Javascript:
        //Llamar a nuestro objeto:
            //Dentro de la consola:
                personaLet
            //Imprimir nuestro objeto en consola:
                console.log(persona)
        //Traer algo específico de nuestro objeto:
            console.log(persona.nombre)
            //O para traer una función dentro de un objeto:
                console.log(persona.nombre())
