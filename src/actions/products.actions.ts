import { instance } from "@/config";

export const getAllProducts = async (count: number) => {
  const { data } = await instance.get(`/get-all-products?count=${count}`);

  return data;
};

export const getSearch = async (category: string) => {
  const { data } = await instance.get(`/search?category=${category}`);

  return data;
};
