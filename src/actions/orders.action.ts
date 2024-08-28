import { instance } from "@/config";
import { createOrderValues } from "@/types";

export const createOrderAction = async (values: createOrderValues) => {
  const { data } = await instance.post(`/orders/create`, values);

  return data;
};

export const getOrders = async () => {
  const { data } = await instance.get(`/orders/get-orders`);

  return data;
};

export const cancelOrder = async (id: string) => {
  const { data } = await instance.get(`/orders/cancel/${id}`);

  return data;
};
