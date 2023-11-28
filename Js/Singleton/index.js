class Singleton {
  constructor() {
    this.random = Math.random();
    console.log("Creando objeto");
    //Si existe una instancia de la clase, retornamos esta (Instance puede llamarse pepito, es un nombre que ponemos nosotrosde referencia, esto se guarda referencia en la memoria)
    if (Singleton.instance) {
      console.log("Analizando si existe instancia");
      return Singleton.instance;
    }

    console.log("Creando Instancia");
    //Si no existe la creamos asignando el valor de esta
    Singleton.instance = this;
  }
}

const singleton = new Singleton();
//Existe la instancia en memoria
const singleton2 = new Singleton();

console.log(singleton.random);
console.log(singleton2.random);
console.log(singleton === singleton2);

//Caso Practico

//Pattern creational Singleton (Persistence utilizable)
class WeeDays {
  daysEs = [
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabados",
    "Domingo",
  ];

  daysEn = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  constructor(lang) {
    this.lang = lang;

    if (WeeDays.instance) {
      return WeeDays.instance;
    }

    WeeDays.instance = this;
  }

  getDays() {
    return this.lang === "es" ? this.daysEs : this.daysEn;
  }
}

const weekDays = new WeeDays("en");
const weekDays2 = new WeeDays("es");

console.log(weekDays.getDays());
console.log(weekDays2.getDays());
