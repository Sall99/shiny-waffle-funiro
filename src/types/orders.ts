import { IProduct } from "./product";

export type createOrderValues = {
  total: number;
  addressBookId: string;
  items: IProduct[];
};
