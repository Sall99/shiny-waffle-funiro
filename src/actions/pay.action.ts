import { instance } from "@/config";

export const createPaymentIntent = async (amount: number, orderId: string) => {
  const { data } = await instance.post(`/payment/create-intent`, {
    amount,
    orderId,
  });

  return data;
};
