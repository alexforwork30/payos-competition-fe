import OrderStore from "./orderStore";

export default class RootStore {
  orderStore: OrderStore;

  constructor() {
    this.orderStore = new OrderStore(this);
  }
}

export const rootStore = new RootStore();
