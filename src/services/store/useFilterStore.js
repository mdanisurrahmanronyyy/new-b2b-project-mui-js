import { create } from "zustand";

let FilterStore = (set) => ({
  price: [],
  setPrice: (val) => set({ price: val }),

  priceLimit: [],
  setPriceLimit: (val) => set({ priceLimit: val }),

  departingTime: [0, 24],
  setDepartingtime: (val) => set({ departingTime: val }),

  returningTime: [0, 24],
  setRetrungingTime: (val) => set({ returningTime: val }),

  layovertime: [0, 30],
  setLayovertime: (val) => set({ layovertime: val }),

  stops: "all",
  setStops: (val) => set({ stops: val }),

  baggage: "all",
  setBaggage: (val) => set({ baggage: val }),

  airlines: [],
  setAirlines: (val) => set({ airlines: val }),

  airlinesChecked: [],
  setAirlinesChecked: (val) => set({ airlinesChecked: val }),
});

// create the store
const useFilterStore = create(FilterStore);

export default useFilterStore;
