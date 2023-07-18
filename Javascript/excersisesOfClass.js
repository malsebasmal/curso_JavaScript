//Sin prototipos
    class auto {
    constructor(marca, modelo, annio) {
        this.marca = marca;
        this.modelo = modelo;
        this.annio = annio;
    }
    informationPrint() {
        if (this.annio === undefined) {
        console.log(`Marca: ${this.marca} // Modelo: ${this.modelo}`);
        } else {
        console.log(`Marca: ${this.marca} // Modelo: ${this.modelo} // Año: ${this.annio}`);
        }
    }
    }
    const auto1 = new auto("Toyota", "carola" );

    class auto {
        constructor(marca, modelo, annio) {
            this.marca = marca;
            this.modelo = modelo;
            this.annio = annio;
            if (this.annio === undefined) {
            console.log(`Marca: ${this.marca} // Modelo: ${this.modelo}`);
            } else {
            console.log(`Marca: ${this.marca} // Modelo: ${this.modelo} // Año: ${this.annio}`);
            }
        }
    }
    const auto2 = new auto("Toyota", "carola" );

//Con prototipos
    class carro {
        constructor(marca, modelo, annio){
            this.marca = marca;
            this.modelo = modelo;
            this.annio = annio;
        }
        
        printInformation(){
            if (this.annio === undefined) {
            console.log(`Marca: ${this.marca} // Modelo: ${this.modelo}`);
            } else {
            console.log(`Marca: ${this.marca} // Modelo: ${this.modelo} // Año: ${this.annio}`);
            }
        }
    }

    const carro1 = new carro("Chevrolet", "Yushi")
    console.log(carro1.printInformation())

    //Prototipo
    class deportivo extends carro {
        constructor(marca, modelo, annio, velocidadMaxima){
            super(marca, modelo, annio);
            this.velocidadMaxima = velocidadMaxima; 
        }

        printInformation(){
            if (this.velocidadMaxima === undefined) {
            console.log(`Marca: ${this.marca} // Modelo: ${this.modelo} // Año: ${this.annio}`);
            } else {
            console.log(`Marca: ${this.marca} // Modelo: ${this.modelo} // Año: ${this.annio} // Velocidad Maxima: ${this.velocidadMaxima}`);
            }
        }
    }

    const carroDeportivo = new deportivo("Susuki", "boa", 1943, 204)
    console.log(carroDeportivo.printInformation())

//Sin que este un argumento
    class persona {
        constructor(nombre, sexo, altura){
            this.nombre = nombre;
            this.sexo = sexo;
            this.altura = altura + " cm";
            
            this.preferencias = [];
        };
        
        agregarPreferencias(preferencias){
            this.preferencias.push(preferencias)
        }
        
        eliminarPreferencias(preferencias){
            this.preferencias.pop(preferencias)
        }
        
        print() {
        if (this.preferencias.length === 0) {
        console.log(`Nombre: ${this.nombre} // Sexo: ${this.sexo} // Altura: ${this.altura}`);
        } else {
        console.log(`Nombre: ${this.nombre} // Sexo: ${this.sexo} // Altura: ${this.altura} // Preferencias: ${this.preferencias}`);
        }
        }
        
    }
    const Joaquin = new persona("Joaquin", "Masculino", 180);
    const Alexia = new persona("Alexia", "Femenino", 151);

    Alexia.agregarPreferencias("Lindos")
    console.log(Joaquin.print());
    console.log(Alexia.print());