// Uso de Let y Const
let nombre:string = "Ricardo Tapia"; 
let edad:number = 23;
const PERSONAJE = {
  nombre: nombre,
  edad: edad
};


// Cree una interfaz que sirva para validar el siguiente objeto
interface SuperHero{
  nombre?:string;
  artesMarciales?:string[]
}

let batman:SuperHero = {
  nombre: "Bruno Díaz",
  artesMarciales: ["Karate","Aikido","Wing Chun","Jiu-Jitsu"]
}


// Convertir esta funcion a una funcion de flecha
function resultadoDoble( a, b ){
  return (a + b) * 2
}

let resultadoDoble1 = (a, b)=>{
  return (a*b)*2;
}


// Función con parametros obligatorios, opcionales y por defecto
// donde NOMBRE = obligatorio
//       PODER  = opcional
//       ARMA   = por defecto = "arco"
function getAvenger( nombre:string, poder?:string, arma:string = "arco" ){
  let mensaje:string;
  if( poder ){
     mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
     mensaje = `${nombre} tiene el poder de: ${poder} y un arma: ${arma}`;
  }else{
     mensaje = nombre + " tiene un " + arma;
     mensaje = `${nombre} tinen un ${arma}`;
  }
};


// Cree una clase que permita manejar la siguiente estructura
// La clase se debe de llamar rectangulo,
// debe de tener dos propiedades:
//   * base
//   * altura
// También un método que calcule el área  =  base * altura,
// ese método debe de retornar un numero.

class rectangulo{
  base: number;
  altura: number;

  areaF(): any{
    let area: number = this.base * this.altura;
    let prueba: string = "Hola mundo";
    return prueba;
  }
}

let figura:rectangulo = new rectangulo();
figura.base = 10;
figura.altura = 5;

function factorial(x:number){
  if(x===0){
    return 1;
  }else{
    return x*factorial(x-1);
  }
}

