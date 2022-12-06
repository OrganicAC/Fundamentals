const Candy = require("./Candy");

class ShoppingBasket {
  constructor() {
    this.basket = [];
  }

  addItem(candy) {
    this.basket.push(candy);
    return this.basket;
  }

  totalPrice() {
    let totalPrice = 0;
    this.basket.forEach((candy) => {
      totalPrice += candy.getPrice();
    });
    return totalPrice;
  }
}

module.exports = ShoppingBasket;
