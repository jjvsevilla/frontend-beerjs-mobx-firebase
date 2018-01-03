import { observable, computed, action, autorun, toJS } from 'mobx';
import Chela from '../models/chela';
import ChelasStore from './chela';

class OrderStore {
  @observable order = {};

  // constructor() {
  //   autorun(() => {
  //     console.log(toJS(this.order))
  //   })
  // }

  @action addToOrder({ id }) {
    const order = {...this.order}
    order[id] = order[id] + 1 || 1;
    this.order = order;
  }

  @computed get total() {
    const total = Object.keys(this.order).reduce((acc, cur) => {
      const chela = ChelasStore.getChela(cur);
      const count = this.order[cur];
      return acc + (count * chela.price || 0)
    }, 0);
    return total;
  }
}

export default new OrderStore();