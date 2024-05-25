interface User {
  id?: string;
  name: string;
  email: string;
  phone?: string;
  password: string | null;
  investmetyType?: string;
  balance?: string;
  [key: string]: any;
}


// Define the types for the user and the store state
interface Deposit {
    id?: string;
    amount: Number;
    paymentMethod?: string;
    userId?: string;
    receipt?: File|null;
    date?: string;
    type?: string;
}

export type { User, Deposit } 