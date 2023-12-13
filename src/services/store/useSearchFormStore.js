import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

const date = new Date();

const initialState = {
  fligtTypeData: "round-trip",
  flightListData: [
    {
      id: 1,
      origin: "",
      destination: "",
      date: {
        departureDate: date,
        returnDate: new Date(date.getTime() + 86400000),
        key: "selection",
      },
    },
  ],
  passengerData: {
    adult: 1,
    children: 0,
    childrenAges: [],
    infant: 0,
    childrenSmall: 0,
    childrenLarge: 0,
  },
  ticketClassData: "Economy",
  preferredCarriers: [],
};

let SearchFormStore = (set) => ({
  ...initialState,

  setFlightTypeData: (val) => set({ fligtTypeData: val }),

  setFlightListData: (val) => set({ flightListData: val }),

  setPassengerData: (val) => set({ passengerData: val }),

  setTicketClassData: (val) => set({ ticketClassData: val }),

  setPreferredCarriers: (val) => set({ preferredCarriers: val }),

  resetSearchFormStore: () => set(initialState),
});

// persist the created state
SearchFormStore = persist(SearchFormStore, {
  name: "ft-b2b-flight-search",
  storage: createJSONStorage(() => sessionStorage),
});

// create the store
const useSearchFormStore = create(devtools(SearchFormStore));

export default useSearchFormStore;
