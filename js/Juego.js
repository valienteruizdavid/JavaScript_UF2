

//Clase juego es abstracta
 class Juego {

  constructor(intentos,min,max,e,m,h) {
    this.intentos = 0;
    this.min = 1;
    this.max = max;
    this.e = 10;
    this.m = 50;
    this.h = 100;
  }

}


///////////////////////CLASE DONDE ADIVINO EL NÚMERO DE LA MÁQUINA///////////////////////


class AdivinarNumeroMaquina extends Juego {

  constructor(dificultad) {
    super();
    this.dificultad = dificultad;
  }

  numNegativo(){
    document.getElementById("txt").innerHTML="¡Vaya! No puedes introducir ese número.";
  }

  numMasGrande(){
    document.getElementById("txt").innerHTML="Es un número demasiado grande.";
  }

  inicio(){
    document.getElementById("aceptar").style.display = "inline-block";
    document.getElementById("num").style.display = "inline-block";
    document.getElementById("txt3").innerHTML="";
    document.getElementById("txt4").innerHTML="";
    document.getElementById("txt5").innerHTML="";
    document.getElementById("txt6").innerHTML="";
    document.getElementById("empezar").style.visibility = "hidden";
    document.getElementById("dificultades").style.visibility = "hidden";


    if(document.getElementById("easy").checked){
      this.max = 10;
      this.dificultad = Math.floor(Math.random() * this.max) + this.min;

    }else if(document.getElementById("medium").checked){
      this.max = 50;
      this.dificultad = Math.floor(Math.random() * this.max) + this.min;

    }else if(document.getElementById("hard").checked){
      this.max = 100;
      this.dificultad = Math.floor(Math.random() * this.max) + this.min;

    } else document.getElementById("txt").innerHTML="Por favor, selecciona una dificultad.";
  }

  jugar(){

    let num = document.getElementById("num").value;
    if(num<this.min){
      this.numNegativo();
    }
    else if(num > this.max){
      this.numMasGrande();
    }
      else if(num<this.dificultad){
        document.getElementById("txt").innerHTML="Más grande.";
        this.intentos++;
      }
      else if(num>this.dificultad){
        document.getElementById("txt").innerHTML="Más pequeño.";
        this.intentos++;
      }
      else if(num == this.dificultad){
        this.intentos++
        document.getElementById("txt").innerHTML="¡Has acertado! Intentos: "+this.intentos;
      }

    if(this.dificultad <= this.max){
      if(this.max == 10){
        document.getElementById("pista").innerHTML="Tu número está entre el "+parseInt(this.dificultad-1)+" y el "+parseInt(this.dificultad+3);
        if(parseInt(this.dificultad-1) <= 0){
          document.getElementById("pista").innerHTML="Tu número está entre el "+this.min+" y el "+parseInt(this.dificultad+4);
        }else if(parseInt(this.dificultad+3) > this.max){
          document.getElementById("pista").innerHTML="Tu número está entre el "+parseInt(this.dificultad-3)+" y el "+this.dificultad;
        }

      }else if(this.max == 50){
        document.getElementById("pista").innerHTML="Tu número está entre el "+parseInt(this.dificultad-6)+" y el "+parseInt(this.dificultad+9);
        if(parseInt(this.dificultad-6) <= 0){
          document.getElementById("pista").innerHTML="Tu número está entre el "+this.min+" y el "+parseInt(this.dificultad+9);
        }else if(parseInt(this.dificultad+9) > this.max){
          document.getElementById("pista").innerHTML="Tu número está entre el "+parseInt(this.dificultad-6)+" y el "+this.dificultad;
        }

      }else if(this.max == 100){
        document.getElementById("pista").innerHTML="Tu número está entre el "+parseInt(this.dificultad-13)+" y el "+parseInt(this.dificultad+14);
        if(parseInt(this.dificultad-13) <= 0){
          document.getElementById("pista").innerHTML="Tu número está entre el "+this.min+" y el "+parseInt(this.dificultad+14);
        }else if(parseInt(this.dificultad+14) > this.max){
          document.getElementById("pista").innerHTML="Tu número está entre el "+parseInt(this.dificultad-13)+" y el "+this.dificultad;
        }

      }
    }

      console.log(this.dificultad);
      console.log(this.max);
  }

}

const nummaquina = new AdivinarNumeroMaquina();

///////////////////////CLASE DONDE ADIVINO EL NÚMERO DE LA MÁQUINA///////////////////////


class MaquinaAdivinaMiNumero extends Juego {
    constructor() {
    super();

    }

    mensajeError(){
      if(this.min == this.max){
        return document.getElementById("txt").innerHTML="¡No intentes confundirme! No has hecho caso a mis indicaciones :(";
      }

    }

    empezar(){
      document.getElementById("txt3").innerHTML="";
      document.getElementById("txt4").innerHTML="";
      document.getElementById("txt5").innerHTML="";
      document.getElementById("txt6").innerHTML="";
      document.getElementById("menor").style.display = "inline-block";
      document.getElementById("mayor").style.display = "inline-block";
      document.getElementById("correcto").style.display = "inline-block";
      document.getElementById("empezar").style.visibility = "hidden";
      document.getElementById("dificultades").style.visibility = "hidden";

      if(document.getElementById("easy").checked){
        this.max = 11;
        Utils.numberAux = 5;
        document.getElementById("txt").innerHTML="Tu número es... "+Utils.numberAux+"?";

      }else if(document.getElementById("medium").checked){
        this.max = 51;
        Utils.numberAux = 25;
        document.getElementById("txt").innerHTML="Tu número es... "+Utils.numberAux+"?";

      }else if(document.getElementById("hard").checked){
        this.max = 101;
        Utils.numberAux = 50;
        document.getElementById("txt").innerHTML="Tu número es... "+Utils.numberAux+"?";
      } else document.getElementById("txt").innerHTML="Por favor, selecciona una dificultad.";
    }

  esmayor(){
    this.min = Utils.numberAux;
    Utils.numberAux = Math.floor((this.max+this.min)/2);
    document.getElementById("txt").innerHTML="Tu número es... "+Utils.numberAux+"?";
    document.getElementById("txt2").innerHTML="";
    this.mensajeError();
    this.intentos++;
    console.log(this.max);
  }

  esmenor(){
    this.max = Utils.numberAux;
    Utils.numberAux = Math.floor((this.max+this.min)/2)
    document.getElementById("txt").innerHTML="Tu número es... "+Utils.numberAux+"?";
    document.getElementById("txt2").innerHTML="";
    this.mensajeError();
    this.intentos++;
    console.log(this.max);
  }

 escorrecto(){
    document.getElementById("txt").innerHTML="¡¡He acertado!! Intentos: "+this.intentos;
    document.getElementById("txt2").innerHTML="";
  }

}

  const mynumber = new MaquinaAdivinaMiNumero(0,1,100);

///////////////////////UTILS (Utilizada para variables constantes)///////////////////////

class Utils {
  constructor() {

  }

  static set numberAux(n){
    this.n = n;
  }

  static get numberAux(){
    return this.n;
  }




}
