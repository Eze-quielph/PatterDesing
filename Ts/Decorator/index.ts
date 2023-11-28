interface Component {
  getDetail(): string;
}

class ProductComponent implements Component {
  protected name: string;
  constructor(name: string) {
    this.name = name;
  }

  public getDetail(): string {
    return `${this.name}`;
  }
}

//Con abstract evito que se creen objetos de esta clase
abstract class ProductDecorator implements Component {
  protected component: Component;

  constructor(component: Component) {
    this.component = component;
  }

  public getDetail(): string {
    return this.component.getDetail();
  }
}

//Decorator 1
class CommercialInfoProductDecorator extends ProductDecorator {
  private tradename: string;
  private brand: string;

  constructor(component: Component, tradename: string, brand: string) {
    super(component);

    this.tradename = tradename;
    this.brand = brand;
  }

  public getDetail(): string {
    return `${this.tradename} ${this.brand} ` + super.getDetail();
  }
}

//Decorator 2
class StoreProductDecorator extends ProductDecorator {
  private price: number;

  constructor(component: Component, price: number) {
    super(component);

    this.price = price;
  }

  public getDetail(): string {
    return super.getDetail() + `${this.price}`;
  }
}

//Ejecucion
const productComponent = new ProductComponent("cerveza");
console.log(productComponent.getDetail());

//Decorador 1 con Component
const comercialInfoProduct = new CommercialInfoProductDecorator(
  productComponent,
  "London",
  "Fuller'S"
);

console.log(comercialInfoProduct.getDetail());

//Decorador 2 con Component
const storeProduct = new StoreProductDecorator(productComponent, 15.5);
console.log(storeProduct.getDetail());
