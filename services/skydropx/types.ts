export interface Address {
  country_code: string;
  postal_code: string;
  area_level1: string;
  area_level2: string;
  tax_id_number?: string;
  address_template_id?: string;
}

export interface Parcel {
  length: number;
  width: number;
  height: number;
  weight: number;
  declared_amount: number;
}

export interface QuotationRequest {
  quotation: {
    address_from: Address;
    address_to: Address;
    parcels: Parcel[];
    cash_on_delivery?: boolean;
    recipient_pays_shipping?: boolean;
    requested_carriers?: string[];
  };
}

export interface CarrierRate {
  id: string;
  carrier: string;
  service: string;
  amount: number;
  currency: string;
  delivery_days: number;
}

export interface QuotationResponse {
  id: string;
}