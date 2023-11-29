class Form {
  constructor(controls, action) {
    this.controls = controls;
    this.action = action;
  }

  getContent() {
    return `
      <form action="${this.action}" method="post">
       ${this.controls.reduce((acc, control) => {
         return (
           acc +
           `<div>
              ${(this, getLabel(control))}
              ${this.getInput(control)}
          </div>`
         );
       }, "")}
      </form>
      `;
  }

  getInput(control) {
    return `<input type="${control.type}" name="${control.name}" id="${control.name}"/>`;
  }

  getLabel(control) {
    return `<label>${control.text}</label>`;
  }
}

class FormBuilder {
  constructor() {
    this.controls = [];
    this.action = "";
  }

  reset() {
    this.action = "";
    this.controls = [];
  }

  setAction(action) {
    this.action = action;
    return this;
  }

  setText(name, text) {
    this.controls.push({ type: "text", name, text });
    return this;
  }

  build() {
    const frm = new Form(this.controls, this.action);
    this.reset();
    return frm;
  }
}

class FormDirector{
    constructor(builder){
        this.setBuilder(builder);
    }

    setBuilder(builder){
        this.builder = builder;
    }

    createPeopleForm(){
        this.builder.reset();
        this.builder.setText("nombre", "Nombre")
            .setText("apellido", "Apellido");

    }
}

const frmBuilder = new FormBuilder();
const frm = frmBuilder
  .setAction("https://www.google.com")
  .setText("nombre", "Nombre")
  .setText("apellido", "Apellido")
  .build();

const form1 = document.getElementById("form1");
const form2 = document.getElementById("form2");

form1.innerHTML = frm.getContent();
const director = new FormDirector(frmBuilder);
director.createPeopleForm();
form2.innerHTML = frmBuilder.build().getContent();