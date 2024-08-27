export type addressBookFormValues = {
  id?: string;
  lname: string;
  fname: string;
  companyName?: string;
  countryRegion: string;
  street: string;
  townCity: string;
  province?: string;
  phone: string;
  zipCode: string;
  email: string;
  additionalInfo?: string;
};

export interface HorizontalStepperProps {
  status: string;
}

export * from "./product";
export * from "./auth";
export * from "./orders";
