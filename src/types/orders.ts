import { Order, OrderItem } from "@prisma/client";
import { IProduct } from "./product";

export type createOrderValues = {
  total: number;
  addressBookId: string;
  items: IProduct[];
};

export type OrderItemWithProduct = OrderItem & {
  product: IProduct;
};

export interface OrderWithItems extends Order {
  items: OrderItemWithProduct[];
}
