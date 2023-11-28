//Este es un patron del tipo estructura

//Component
class ProductComponent {
  constructor(name) {
    this.name = name;
  }

  getDetail() {
    return `${this.name}`;
  }
}

//Los decoradores envuelven  las clases
//Decorator
class ProductDecorator {
  constructor(productComponent) {
    this.productComponent = productComponent;
  }

  getDetail() {
    return this.productComponent.getDetail();
  }
}

//Decorator que hereda de la general (Esa no se suele usar, si no que las clases hijas)
class CommercialInfoProductDecorator extends ProductDecorator {
  constructor(productComponent, tradename, brand) {
    super(productComponent);

    this.tradename = tradename;
    this.brand = brand;
  }

  getDetail() {
    return `${this.tradename} ${this.brand} ` + super.getDetail();
  }
}

//Decorator 2
class StoreProductDecorator extends ProductDecorator{

    constructor(productComponent, price){
        super(productComponent);

        this.price = price
    }

    getDetail() {
        return `${this.price}  ` + super.getDetail();
      }
}

const myDiv = document.getElementById('myDiv');

//Decorator 3
class HTMLProductDecorator extends ProductDecorator{

    getDetail(){
        return `<h1>Informacion de producto</h1>
            <p>
                ${super.getDetail()}
            </p>
        `
    }
}

//Ejecution

//Component
const productComponent = new ProductComponent("Cerveza");
console.log(productComponent.getDetail());

//Decorator 1 con component
const commercialInfoProductDecorator = 
    new CommercialInfoProductDecorator(productComponent, "London Porter", "Fuller's");

console.log(commercialInfoProductDecorator.getDetail());

//Decorator 2 con component
const storeProduct =
    new StoreProductDecorator(productComponent, 15.5);

console.log(storeProduct.getDetail());

//Decorador 2 con decorator 1
const product = new StoreProductDecorator(commercialInfoProductDecorator, 10.5);
console.log(product.getDetail());

//Decorator 3 con decorator 2 con decorator 1
const htmlProductDecorator = new HTMLProductDecorator(product);
myDiv.innerHTML = htmlProductDecorator.getDetail();