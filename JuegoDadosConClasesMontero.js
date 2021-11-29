//Código JavaScript
//clase jugador
class jugador {
    #_caraDado1 = 0;
    #_caraDado2 = 0;

    constructor(nombre){
        this.nombre = nombre;
    }
    //get y set
    get caraDado1(){
        return this.#_caraDado1;
    } 
    set caraDado1(valorDado1){
        this.#_caraDado1 = valorDado1;
    }
    get caraDado2(){
        return this.#_caraDado2;
    } 
    set caraDado2(valorDado2){
        this.#_caraDado2 = valorDado2;
    }
}
// clase torneo dados
class torneoDados{
    constructor(){
        this.juegos = new Array();
    }
    //variables privadas
    #_juegosGanadosJugador1 = 0;
    #_juegosGanadosJugador2 = 0;

    // get y set
    get juegosGanadosJugador1(){return this.#_juegosGanadosJugador1}
    set juegosGanadosJugador1(GanadosJugador1){this.#_juegosGanadosJugador1=GanadosJugador1}
    //--------------------------------------------------
    get juegosGanadosJugador2(){return this.#_juegosGanadosJugador2}
    set juegosGanadosJugador2(GanadosJugador2){this.#_juegosGanadosJugador2=GanadosJugador2}
    // Crear
    crear(jugador1, jugador2){
        this.jugador1 = new jugador(jugador1);
        this.jugador2 = new jugador(jugador2);
    }
    //jugar
    jugar(){
        let salir = true;
        
        do{
            this.juegos.push(new JuegoDados(this.juegos.length,this.jugador1,this.jugador2));
            this.juegos[this.juegos.length-1].tirarDados();

            if(this.juegos[this.juegos.length-1].determinarGanador()==this.jugador1.nombre){
                this.juegosGanadosJugador1++;
            }else if(this.juegos[this.juegos.length-1].determinarGanador()==this.jugador2.nombre){
                this.juegosGanadosJugador2++;
            }

            if(this.juegosGanadosJugador1==3 || this.juegosGanadosJugador2==3){
                salir=false;
            }
        } while(salir)
       
            
                
    }  
    //resultado
    #_resultado(){
        if(this.#_juegosGanadosJugador1 == 3){
            return this.jugador1.nombre;
        }else{
            return this.jugador2.nombre;
        }
    }
    //get de resultado
    get resultado(){
        return this.#_resultado();
    }
    //set de resultado
    set resultado(ganador){
        if(ganador==this.jugador1.nombre){
            if(this.juegosGanadosJugador1!=3){
                this.juegosGanadosJugador2=this.#_juegosGanadosJugador1;
                this.juegosGanadosJugador1=3;
            }            
        }else if(ganador==this.jugador1.nombre){
            if(this.juegosGanadosJugador2!=3){
                this.juegosGanadosJugador1=this.juegosGanadosJugador2;
                this.juegosGanadosJugador2=3;
            }
        }else{
            console.log("El Jugador que ingreso No existe");
        }
    }
}
//Clase juego dados
class JuegoDados{
    //constructor
    constructor(numJuego,jug1,jug2){
        this.numeroJuego=numJuego;
        this.jugador1 = new jugador(jug1.nombre);
        this.jugador2 = new jugador(jug2.nombre);
    }
    // tirar dados
    tirarDados(){
        this.jugador1.caraDado1 = Math.round((Math.random() * 5) + 1);
        this.jugador1.caraDado2 = Math.round((Math.random() * 5) + 1);
        this.jugador2.caraDado1 = Math.round((Math.random() * 5) + 1);
        this.jugador2.caraDado2 = Math.round((Math.random() * 5) + 1);
    }
    //Metodo ganador
    determinarGanador(){
        if ( (this.jugador1.caraDado1 + this.jugador1.caraDado2 == 7)
            && (this.jugador2.caraDado1 + this.jugador2.caraDado2 != 7) )
            return this.jugador1.nombre;
        else if ( (this.jugador2.caraDado1 + this.jugador2.caraDado2 == 7)
            && (this.jugador1.caraDado1 + this.jugador2.caraDado1 != 7) )
            return this.jugador2.nombre;
        else return "Empate";
    }
}

//Simular el juego
const primerjuego = new torneoDados();
primerjuego.crear("Carlos","Johan");
primerjuego.jugar();
console.log("(primer juego) Carlos VS Johan");
console.log("El ganador es: "+primerjuego.resultado);
console.log("Juegos Totales Jugados: "+primerjuego.juegos.length);
console.log("Partidas Ganadas por "+primerjuego.jugador1.nombre+": "+primerjuego.juegosGanadosJugador1);
console.log("Partidas Ganadas por "+primerjuego.jugador2.nombre+": "+primerjuego.juegosGanadosJugador2);

console.log("");


//Función constructora Jugador
/*
function Jugador(nombre){
    this.nombre = nombre;
    this.caraDado1 = 0;  //Hacer privado y sus métodos getter y setter
    this.caraDado2 = 0;  //Hacer privado y sus métodos getter y setter
}

function JuegoDados(numeroJuego, j1, j2){
    this.numeroJuego = numeroJuego;
    this.jugador1 = j1;
    this.jugador2 = j2;

    this.tirarDados = function() {
        this.jugador1.caraDado1 = Math.round((Math.random() * 5) + 1);
        this.jugador1.caraDado2 = Math.round((Math.random() * 5) + 1);
        this.jugador2.caraDado1 = Math.round((Math.random() * 5) + 1);
        this.jugador2.caraDado2 = Math.round((Math.random() * 5) + 1);
    }

    this.determinaGanador = function() {
        if ( ((this.jugador1.caraDado1 + this.jugador1.caraDado2) == 7)
            && ((this.jugador2.caraDado1 + this.jugador2.caraDado2) != 7) )
            return this.jugador1
        else if ( ((this.jugador2.caraDado1 + this.jugador2.caraDado2) == 7)
            && ((this.jugador1.caraDado1 + this.jugador2.caraDado1) != 7) )
            return this.jugador2
        else return null;
    }
}
*/

/* Programar la clase que represente al torneo
clase torneoDados
    jugadas //Arreglo de objetos de clase JuegoDados

    juegosGanadosJugador1   //Hacer privado y métodos getter y setter
    juegosGanadosjugador2   //Hacer privado y métodos getter y setter

    función crear
    función jugar
    función resultado     //hacer privado y métodos getter y setter
*/



//Usar clases para demostrar su funcionamiento
/*
    Simular un torneo de dados.
    El torneo se juega hasta que un jugador gana 3 juegos.
    Un jugador gana un juego cuando la suma de los 2 dados es 7 y el otro no obtiene un 7.
    En caso de que en un juego ninguno de los jugadores obtenga 7, se declara empate
*/