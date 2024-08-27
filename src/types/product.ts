
export interface IProduct {
  id: string;
  name: string;
  title: string;
  category: string;
  description: string;
  price: number;
  promoPrice?: number;
  defaultImage: string;
  imageUrl: string[];
  additionalInformation: string[];
  reviews: IReview[];
  amount?: number;
}

export interface IReview {
  author: string;
  rating: number;
  comment: string;
}

export type TabName = "accountInformation" | "addressBook" | "myOrders";
