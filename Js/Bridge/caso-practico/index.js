const canvas = document.getElementById("canvas");
const editorColor = document.getElementById("editorColor");
const range = document.getElementById("range");
const content = document.getElementById("content");

//Abstraction
class Editor {
  constructor(implementor) {
    this.implementor = implementor;
  }

  print(width, height, color) {
    this.implementor.setWidth(width);
    this.implementor.setHeight(height);
    this.implementor.setColor(color);
    this.implementor.print();
  }
}

//Implementor
class HtmlPainter {
  constructor(container) {
    this.container = container;
    this.width = "1px";
    this.height = "1px";
    this.color = "#000000";
  }

  setWidth(width) {
    this.width = width + "px";
  }

  setHeight(height) {
    this.height = height + "px";
  }

  setColor(color) {
    this.color = color;
  }

  print() {
    this.container.innerHTML = `<div style="width:${this.width};height:${this.height};background-color:${this.color};"></div>`;
  }
}

class CanvasPainter {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");

    this.width = 1;
    this.height = 1;
    this.color = "#000000";
  }

  setWidth(width) {
    this.width = width;
  }

  setHeight(height) {
    this.height = height;
  }

  setColor(color) {
    this.color = color;
  }

  print() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(0, 0, this.width, this.height);
  }
}

class EditorWithClear extends Editor {
  constructor(implementor) {
    super(implementor);
  }

  clear() {
    this.implementor.setWidth(0);
    this.implementor.setHeight(0);
    this.implementor.print();
  }
}

const editor1 = new Editor(new HtmlPainter(content));

range.addEventListener("input", (e) => {
  editor1.print(e.target.value, e.target.value, editorColor.value);
});

editorColor.addEventListener("input", (e) => {
  editor1.print(range.value, range.value, e.target.value);
});
