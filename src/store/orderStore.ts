import { makeAutoObservable } from "mobx";
import { getOrder } from "../api/order";
import { Order } from "../types/order";
import RootStore from "./rootStore";

export default class OrderStore {
  rootStore: RootStore;
  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }
  order: Order | null = null;

  async getOrder(orderId: string, token: string): Promise<void> {
    const storedOrder = await getOrder(orderId, token);
    this.order = storedOrder;
  }

  setOrder(order: Order | null): void {
    this.order = order;
  }
}
