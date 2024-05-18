// Create a file for your Zustand store, e.g., store.js
import { create } from "zustand";

const useFormStore = create((set) => ({
  name: "",
  email: "",
  phone: "",
  investmentType: "Stocks",
  password: "",
  inputReferralCode: "",
  setFormData: (field, value) => set({ [field]: value }),
  resetFormData: () =>
    set({
      name: "",
      email: "",
      phone: "",
      investmentType: "Stocks",
      password: "",
      inputReferralCode: "",
    }),
}));

export default useFormStore;
