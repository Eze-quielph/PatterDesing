class Subject{
    constructor(){
        this.observers = [];
    }

    suscribe(observer){
        this.observers.push(observer);
    }

    unsuncribe(observer){
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notify(data){
        this.observers.forEach(e=> e.refresh(data));
    };
}

class ItemSubject extends Subject{
    constructor(){
        super();
        
        this.data = [];
    }

    add(item){
        this.data.push(item);
        this.notify(this.data);
    }
}

class HtmlElementObserver{
    constructor(element){
        this.element = element;
    }

    refresh(data){
        this.element.innerHTML = data.reduce((ac, e)=> {
            return ac + `<p>
                ${e}
            </p>`
        }, "")
    }
}

const div1 = document.getElementById('div1');
const div2 = document.getElementById('div2');
const div3 = document.getElementById('div3');
const txtName = document.getElementById('txtName');

const item = new ItemSubject();
const o1 = new HtmlElementObserver(div3);

item.suscribe(o1);

function add(){
    const name = txtName.value;
    item.add(name);
}