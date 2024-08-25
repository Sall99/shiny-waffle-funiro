import { instance } from "@/config";
import { createOrderValues } from "@/types";

export const createOrderAction = async (values: createOrderValues) => {
  const { data } = await instance.post(`/orders/create`, values);

  return data;
};

export const getOrders = async (id: string) => {
  const { data } = await instance.get(`/orders/get-orders`);

  return data;
};
