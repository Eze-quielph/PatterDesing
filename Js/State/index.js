class DocumentContext {
  constructor() {
    this.content = "";
    this.state = new BlackState();
  }

  setState(state) {
    this.state = state;
  }

  write(text) {
    this.state.write(this, text);
  }
}

class BlackState {
  write(documentContext, text) {
    documentContext.content = text.toLowerCase();
    documentContext.setState(new WithContentState());
  }
}

class WithContentState {
  write(documentContext, text) {
    documentContext.content += " " + text.toUpperCase();
    documentContext.setState(new WithContentState());
  }
}

class ApprovedState{
    write(documentContext, text){
        console.log("Documento aprovado");
    }
}
