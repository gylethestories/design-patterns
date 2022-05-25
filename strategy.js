// 对于vip客户
class vipPrice {
  constructor() {
    this.discount = 0.3;
  }

  getPrice(price) {
    return price * this.discount;
  }
}

//对于老客户
class oldPrice {
  constructor() {
    this.discount = 0.5;
  }

  getPrice(price) {
    return price * this.discount;
  }
}

//对于普通客户
class Price {
  constructor() {
    this.discount = 1;
  }

  getPrice(price) {
    return price;
  }
}

// 上下文,对于客户端的使用
class Context {
  constructor() {
    this.name = "";
    this.strategy = null;
    this.price = 0;
  }

  set(name, strategy, price) {
    this.name = name;
    this.strategy = strategy;
    this.price = price;
  }

  getResult() {
    console.log(this.name + "的结账价为:" + this.strategy.getPrice(this.price));
  }
}

export { vipPrice, oldPrice, Price, Context };
