//Este patron lo usamos para sistemas de ventas o comportamientos de formularios en el front frecuentemente

//Contexto
class SaleContex {
  constructor(strategy) {
    this.strategy = strategy;
  }

  setStrategy(Strategy) {
    this.strategy = Strategy;
  }

  calculate(amount) {
    return this.strategy.calculate(amount);
  }
}

//Estrategia
class RegularSaleStrategy {
  constructor(tax) {
    this.tax = tax;
  }

  calculate(amount) {
    return amount + amount * this.tax;
  }
}

//Estrategia
class DiscountSaleStrategy {
  constructor(tax, discount) {
    this.tax = tax;
    this.discount = discount;
  }

  calculate(amount) {
    return amount + amount * this.tax - this.discount;
  }
}

//Estrategia
class ForeignSaleStrategy {
  calculate(amount) {
    return amount * this.getDollarPrice();
  }

  getDollarPrice() {
    return 1050;
  }
}

const regularSale = new RegularSaleStrategy(0.21);
const saleContext = new SaleContex(regularSale);

console.log(saleContext.calculate(10));

// Ejemplo practico

const data = [{

    name: "Erdinger Pikantus",

    country: "Alemania",

    info: "Erdinger Pikantus es una cerveza de estilo weizenbock elaborada en la localidad bávara de Erding.",

    img: "dxjcdxuv6chk2.cloudfront.net/assets/biere/flascheglas/pikantus-2020-v2.png"

},

{

    name: "Corona",

    country: "México",

    info: "La cerveza Corona es una marca mundialmente conocida, distribuida a lo largo de más de 159 países en los cinco continentes.",

    img: "upload.wikimedia.org/wikipedia/commons/0/0c/Corona-6Pack.JPG"

},

{

    name: "Delirium Tremens",

    country: "Bélgica",

    info: "Esta pale ale tiene una efervescencia fina con un toque un tanto picante. Al tomarse, calienta el paladar y deja un sabor fuerte y de un amargor seco.",

    img: "www.delirium.be/themes/custom/delirium/assets/img/beers/beer_delirium_tremens_bottle.png"

}];

class infoContex {
    constructor(strategy, data, element) {
      this.setStrategy(strategy);
      this.data = data;
      this.element = element;
    }
  
    setStrategy(Strategy) {
      this.strategy = Strategy;
    }
  
    show() {
      this.strategy.show(this.data, this.element);
    }
  }
  

class ListStrategy {
  show(data, element) {
   element.innerHTML = data.reduce((ac, beer)=>{
    return ac + `<div>
            <h2>${beer.name}</h2>
            <p>${beer.country}</p>
         </div>
    <hr>`
   })
  }
}

class DetailStrategy{
    show(data, element) {
        element.innerHTML = data.reduce((ac, beer)=>{
         return ac + `<div>
                 <h2>${beer.name}</h2>
                 <p>${beer.country}</p>
                 <P>${beer.info}</p>
              </div>
         <hr>`
        })
       }
}

const strategies = [
    new ListStrategy(),
    new DetailStrategy()
];

const options = document.getElementById("slcOptions")

const info = new infoContex(new DetailStrategy(), data, content);
info.show();

options.addEventListener("change", (event)=>{
    const op = event.target.value;
    info.setStrategy(strategies[op]);
    info.show();
});
