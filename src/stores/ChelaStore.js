import { observable, computed, action } from 'mobx';
import ChelaItem from '../models/chelaItem';
import chelas from '../data/chelas';

class ChelaStore {
  @observable filter = '';
  @observable list = [];

  constructor(rootStore) {
    this.rootStore = rootStore
    Object.keys(chelas).forEach((chelaKey) => {
      const { name, likes, image, price } = chelas[chelaKey];
      this.list.push(new ChelaItem(chelaKey, name, likes, image, price))
    });
  }

  @action updateFilter(value) {
    this.filter = value;
  }

  @computed get filteredList() {
    var matchedFilter = new RegExp(this.filter, 'i')
    return this.list.filter(chela => !this.filter || matchedFilter.test(chela.name))
  }

  getChela(id) {
    return this.list.find(chela => chela.id === id);
  }
}

export default ChelaStore