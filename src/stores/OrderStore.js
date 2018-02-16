import { observable, computed, action } from 'mobx';
import ChelaOrder from '../models/chelaOrder';

class OrderStore {
  @observable order = [];

  constructor(rootStore) {
    this.rootStore = rootStore
  }

  @action addToOrder({ id }) {
    const chelaOrder = this.order.find(chelaOrder => chelaOrder.id === id);
    if (chelaOrder) {
      chelaOrder.increase();
    } else {
      const chela = this.rootStore.ChelaStore.getChela(id);
      this.order.push(new ChelaOrder(id, chela.name, 1, chela.price));
    }
  }

  @computed get total() {
    const total = this.order.reduce((acc, cur) => {
      return acc + (cur.amount * cur.price)
    }, 0);
    return total;
  }
}

export default OrderStore