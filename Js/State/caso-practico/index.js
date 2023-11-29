class Ball {
  constructor(ctx, canvas, ballSize) {
    this.ctx = ctx;
    this.width = canvas.width;
    this.height = canvas.height;
    this.ballSize = ballSize;
    this.x = 0;
    this.y = 0;

    this.state = new State1();
  }

  setState(state) {
    this.state = state;
  }

  print() {
    this.state.print(this);
  }
}

class State1 {
  print(ball) {
    ball.ctx.clearRect(0, 0, ball.width, ball.height);
    ball.ctx.fillRect(ball.x, ball.y, ball.ballSize, ball.ballSize);
    if (ball.x < ball.width - ball.ballSize) {
      ball.x += 10;
    } else {
      ball.setState(new State2());
    }
  }
}

class State2 {
  print(ball) {
    ball.ctx.clearRect(0, 0, ball.width, ball.height);

    ball.ctx.fillRect(ball.x, ball.y, ball.ballSize, ball.ballSize);
    if (ball.y < ball.height - ball.ballSize) {
      ball.y += 10;
    }
  }
}

class State3 {
  print(ball) {
    ball.ctx.clearRect(0, 0, ball.width, ball.height);

    ball.ctx.fillRect(ball.x, ball.y, ball.ballSize, ball.ballSize);
    if (ball.x > 0) {
      ball.x -= 10;
    } else {
      ball.setState(new State4());
    }
  }
}

class State4 {
  print(ball) {
    ball.ctx.clearRect(0, 0, ball.width, ball.height);

    ball.ctx.fillRect(ball.x, ball.y, ball.ballSize, ball.ballSize);
    if (ball.y < ball.height - ball.ballSize) {
      ball.y -= 10;
    } else {
      ball.setState(new State1());
    }
  }
}

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "black";

const ball = new Ball(ctx, canvas, 10);
setInterval(() => ball.print(), 1000);
