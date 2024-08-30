import { instance } from "@/config";

export const getAllProducts = async (count: number) => {
  const { data } = await instance.get(`/products/all-products?count=${count}`);

  return data;
};

export const getProduct = async (id: string) => {
  const { data } = await instance.get(`/products/product?id=${id}`);

  return data;
};

export const getSearch = async (category: string) => {
  const { data } = await instance.get(`/products/search?category=${category}`);

  return data;
};

export const getRelatedProducts = async (count: number, category: string) => {
  const { data } = await instance.get(
    `/products/related?count=${count}&category=${category}`,
  );

  return data;
};
