import ChelaStore from './ChelaStore'
import OrderStore from './OrderStore'

class RootStore {
  constructor() {
    this.ChelaStore = new ChelaStore(this)
    this.OrderStore = new OrderStore(this)
  }
}

export default RootStore
