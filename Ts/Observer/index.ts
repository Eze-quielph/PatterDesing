interface IObserver<T> {
    refresh(value : T) : void;
}

interface ISubjext<T>{
    observers: IObserver<T>[];

    subcribe(observer: IObserver<T>) : void;
    onsubcribe(observer: IObserver<T>) : void;
    notify(value: T): void;
}

class Subject<T> implements ISubjext<T>{

    observers: IObserver<T>[];
    constructor(){
        this.observers = [];
    }

    subcribe(observer: IObserver<T>): void {
        this.observers.push(observer);
    }

    onsubcribe(observer: IObserver<T>): void {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notify(value: T): void {
        this.observers.forEach(e=>{
            e.refresh(value);
        })
    }
}

class Observer<T> implements IObserver<T>{
    private fn: (value: T) => void;

    constructor(fn: (value: T)=> void){
        this.fn = fn;
    }

    refresh(value: T): void {
        this.fn(value);
    }
}