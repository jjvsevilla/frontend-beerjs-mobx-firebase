import { observable, action } from 'mobx';

class ChelaOrder {
  id;
  name;
  @observable amount;
  price;

  constructor(id, name, amount, price) {
    this.id = id;
    this.name = name;
    this.amount = amount;
    this.price = price;
  }

  @action setAmount (amount) {
    this.amount = amount;
  }

  @action increase() {
    this.setAmount(this.amount + 1)
  }
}

export default ChelaOrder