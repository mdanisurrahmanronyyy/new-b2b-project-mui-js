import {create} from "zustand";
import {createJSONStorage, persist} from "zustand/middleware";

const initialState = {
  resPassengerCounts: {
    adt: 1,
    chd: 0,
    cnn: 0,
    inf: 0,
    ins: 0,
  },
  isBookable: true,
  hasExtraService: false,
  extraBaggageAllowedPTC: [],
  cartFlightList: [
    {
      fareDetails: {},
      flights: [],
      totalPrice: 0,
    },
  ],
  cartPrice: {
    uniqueTransID: "",
    itemCodeRef: "",
    taxRedemptions: [],
    segmentCodeRefs: [""],
    isRefundable: false,
  },
};

let CartStore = (set) => ({
  ...initialState,
  setIsBookable: (val) => set({isBookable: val}),
  setHasExtraService: (val) => set({hasExtraService: val}),
  setExtraBaggageAllowedPTC: (val) => set({extraBaggageAllowedPTC: val}),
  setResPassengerCounts: (val) => set({resPassengerCounts: val}),

  setcartFlightList: (val) => set({cartFlightList: val}),

  setCartPrice: (val) => set({cartPrice: val}),

  resetCartStore: () => set(initialState),
});

// persist the created state
CartStore = persist(CartStore, {
  name: "ft-b2b-cart",
  storage: createJSONStorage(() => localStorage),
});

// create the store
const useCartStore = create(CartStore);

export default useCartStore;
