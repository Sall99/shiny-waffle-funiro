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
  reviews: Review[];
}

interface Review {
  author: string;
  rating: number;
  comment: string;
}
