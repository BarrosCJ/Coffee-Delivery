import { create } from 'zustand';

interface ICoffee {
    id: number;
    name: string;
    description: string;
    tags: string[];
    price: number;
    image: string;
}

interface ICartItem {
  coffee: ICoffee;
  quantity: number;
}

export interface Address {
	zipCode: string
	street: string
	streetNumber: string
	complement?: string
	neighborhood: string
	city: string
	state: string
}

export type PaymentMethod = 'credit' | 'debit' | 'cash'

interface ICartStore {
  items: { [key: number]: ICartItem };
  addItem: (item: ICoffee, quantity: number) => void;
  removeItem: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
  deliveryFee: number;
  address: Address;
  paymentMethod: PaymentMethod | null;
  setAddress: (address: Address) => void;
  setPaymentMethod: (method: PaymentMethod) => void;
}

const initialAddress: Address = {
	zipCode: '',
	street: '',
	streetNumber: '',
	complement: '',
	neighborhood: '',
	city: '',
	state: ''
};

const useCartStore = create<ICartStore>((set, get) => ({
  items: {},
  deliveryFee: 3.50,
  address: initialAddress,
  paymentMethod: null,

  addItem: (item: ICoffee, quantity: number) => set((state) => {
    const existingItem = state.items[item.id];
    return {
      items: {
        ...state.items,
        [item.id]: existingItem 
          ? { coffee: item, quantity: existingItem.quantity + quantity }
          : { coffee: item, quantity }
      }
    };
  }),
  
  removeItem: (id: number) => set((state) => {
    const newItems = { ...state.items };
    delete newItems[id];
    return { items: newItems };
  }),
  
  updateQuantity: (id: number, quantity: number) => set((state) => {
    if (quantity <= 0) {
      const newItems = { ...state.items };
      delete newItems[id];
      return { items: newItems };
    }
    
    return {
      items: {
        ...state.items,
        [id]: { ...state.items[id], quantity }
      }
    };
  }),
  
  getTotalItems: () => {
    const state = get();
    return Object.values(state.items).reduce((total, item) => total + item.quantity, 0);
  },
  
  getTotalPrice: () => {
    const state = get();
    return Object.values(state.items).reduce((total, item) => total + (item.coffee.price * item.quantity), 0);
  },


  // Address actions
  setAddress: (address: Address) => set({ address }),

  updateAddressField: (field: keyof Address, value: string) => set((state) => ({
    address: {
      ...state.address,
      [field]: value
    }
  })),

  // Payment actions
  setPaymentMethod: (method: PaymentMethod) => set({ paymentMethod: method }),


}));

export default useCartStore;

