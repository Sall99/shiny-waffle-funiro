export type addressBookFormValues = {
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

export * from "./product";
export * from "./auth";
