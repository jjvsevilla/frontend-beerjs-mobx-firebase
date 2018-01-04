import { observable, computed, action, autorun, toJS } from 'mobx';
import ChelaOrder from '../models/chelaOrder';
import ChelasStore from './chela';

class OrderStore {
  @observable order = [];


  @action addToOrder({ id }) {
    const chelaOrder = this.order.find(chelaOrder => chelaOrder.id === id);
    if (chelaOrder) {
      chelaOrder.increase();
    } else {
      const chela = ChelasStore.getChela(id);
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

export default new OrderStore();