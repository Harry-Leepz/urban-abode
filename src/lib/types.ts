export type TProperty = {
  _id: string;
  owner: string;
  name: string;
  type: string;
  description: string;
  location: TLocation;
  beds: number;
  baths: number;
  square_feet: number;
  amenities: string[];
  rates: TRates;
  seller_info: TSellerInfo;
  images: string[];
  is_featured: boolean;
  createdAt: string;
  updatedAt: string;
};

export type TLocation = {
  street: string;
  city: string;
  state: string;
  zipcode: string;
};

export type TRates = {
  weekly?: number;
  monthly?: number;
  nightly?: number;
};

export type TSellerInfo = {
  name: string;
  email: string;
  phone: string;
};
