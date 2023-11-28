interface Strategy {
  login(user: string, password: string): boolean;
}

class LoginContext {
  private strategy: Strategy;

  constructor(strategy: Strategy) {
    this.setStrategy(strategy);
  }

  setStrategy(strategy: Strategy) {
    this.strategy = strategy;
  }

  login(User: string, password: string): boolean {
    return this.strategy.login(User, password);
  }
}

class LoginDbStrategy implements Strategy {
  login(user: string, password: string) {
    console.log("Nos dirigimos a la base de datos");
    if (user === "admin" && password === "entra") true;
    return false;
  }
}

class LoginServiceStrategy implements Strategy {
    login(user: string, password: string) {
      console.log("Nos dirigimos a la base de datos");
      if (user === "admin" && password === "entra") true;
      return false;
    }
}

const auth = new LoginContext(new LoginDbStrategy());
auth.login("admin", "entra");
auth.setStrategy(new LoginServiceStrategy());
auth.login("","");