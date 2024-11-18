export interface User {
  id: string;
  role: 'customer' | 'admin';
  profile_data: {
    full_name?: string;
    phone?: string;
    addresses?: Address[];
  };
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  category_id: string;
  images: string[];
  variants: {
    size?: string[];
    color?: string[];
    [key: string]: string[] | undefined;
  };
}

export interface Order {
  id: string;
  user_id: string;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  payment_intent: string;
  shipping_address: Address;
  total_amount: number;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  postal_code: string;
  country: string;
}

export interface CartItem {
  id: string;
  user_id: string;
  product_id: string;
  quantity: number;
  product?: Product;
}

export interface Review {
  id: string;
  product_id: string;
  user_id: string;
  rating: number;
  comment: string;
  created_at: string;
}