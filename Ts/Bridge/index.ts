//Abstraction
interface DataAbstraction {
  implementor: ListImplementor;
  add(element: number): void;
  get(): number[];
  operation(fn: (n: number) => number): number[];
}

class DataRefinedAbstraction implements DataAbstraction {
  implementor: ListImplementor;

  constructor(implementor: ListImplementor) {
    this.implementor = implementor;
  }

  add(element: number): void {
    this.implementor.add(element);
  }

  get(): number[] {
    return this.implementor.getElements();
  }

  operation(fn: (n: number) => number): number[] {
    return this.implementor.getElements().map(fn);
  }
}

//Implementor
interface ListImplementor {
  elements: number[];

  add(element: number): void;
  getElements(): number[];
}

//Implementador
class OrderedList implements ListImplementor {
  elements: number[] = [];

  add(element: number): void {
    this.elements.push(element);
    this.elements.sort();
  }

  getElements(): number[] {
    return this.elements;
  }
}

//Implementador
class UniqueList implements ListImplementor {
  elements: number[] = [];

  add(element: number): void {
    if (!this.elements.includes(element)) {
      this.elements.push(element);
    }
  }

  getElements(): number[] {
    return this.elements;
  }
}
