import { instance } from "@/config";

export const getAllProducts = async () => {
  const { data } = await instance.get("/get-all-products");

  return data;
};
