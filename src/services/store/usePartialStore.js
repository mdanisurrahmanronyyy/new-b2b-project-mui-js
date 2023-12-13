import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const initialState = {};

let partialPaymentStore = (set) => ({
  partialObj:{},
  setPartialObj: (val) => set({partialObj: val}),
  resetPartialObj: () => set(initialState),
});

// persist the created state
partialPaymentStore= persist(partialPaymentStore, {
  name: "ft-b2b-partialPayment",
  storage: createJSONStorage(() => localStorage),
});

// create the store
const usePartialStore = create(partialPaymentStore);

export default usePartialStore;
