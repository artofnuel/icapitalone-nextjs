interface User {
  id?: string;
  name: string;
  email: string;
  phone?: string;
  password: string | null;
  investmetyType?: string;
  [key: string]: any;
}


interface Wallet {
  id?: string;
  walletId?: string;
  balance?: string;
}
// Define the types for the user and the store state
interface Deposit {
    id?: string;
    amount: Number;
    paymentMethod?: string;
    userId?: string;
    receipt?: File|string|null;
    date?: string;
    type?: string;
    status?: string;
    paymentDate?: string;
}

export type { User, Deposit,Wallet } 