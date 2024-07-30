import api from "..";
import { Order, OrderCreateReq, OrderCreateRes } from "../../types/order";
import { ORDER_BASE_URL } from "./constants";

export async function createOrder(
  payload: OrderCreateReq
): Promise<OrderCreateRes> {
  try {
    const url = `${ORDER_BASE_URL}`;
    const response = await api.post(url, payload);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getOrder(orderId: string, token: string): Promise<Order> {
  try {
    const url = `${ORDER_BASE_URL}/${orderId}`;
    api.interceptors.request.use((config) => {
      config.headers["token"] = token;
      return config;
    });
    const response = await api.get(url);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function cancelOrder(
  orderId: string,
  cancellationReason: string
): Promise<void> {
  try {
    const url = `${ORDER_BASE_URL}/${orderId}/${cancellationReason}`;
    await api.delete(url);
  } catch (error) {
    throw error;
  }
}

export async function downloadOrder(
  orderId: string,
  token: string
): Promise<string> {
  try {
    const url = `${ORDER_BASE_URL}/${orderId}/download`;
    api.interceptors.request.use((config) => {
      config.headers["token"] = token;
      return config;
    });
    const response = await api.get(url);
    return response.data;
  } catch (error) {
    throw error;
  }
}
