//Patron estructural

class EncoderTextAbstraction {
  constructor(encoder) {
    this.encoder = encoder;
  }

  encode(str) {
    return this.encoder.encode(str);
  }

  decode(str) {
    return this.encoder.decode(str);
  }
}

//Implement Case
class Base64EncoderImplementor {
  encode(str) {
    return window.btoa(unescape(encodeURIComponent(str)));
  }

  decode(str) {
    return decodeURIComponent(escape(window.atob(str)));
  }
}

class HTMLEncoderImplementor {
  encode(str) {
    return str.split(/\./g).reduce((acc, word) => {
      return e !== "" ? acc + `<p>${word.trim()}</p>` : acc + "";
    }, "");
  }

  decode(str) {
    return str.split("</p>").reduce((acc, word) => {
      return acc + word.replace("<p>", "") + ". ";
    }, "");
  }
}

const encoder1 = new EncoderTextAbstraction(new Base64EncoderImplementor());
const encoder2 = new EncoderTextAbstraction(new HTMLEncoderImplementor());
