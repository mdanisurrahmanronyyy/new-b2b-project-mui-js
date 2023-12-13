import {create} from "zustand";
import {createJSONStorage, devtools, persist} from "zustand/middleware";

const initialState = {
  matchingCards: [],
};

let UsbPayStore = (set) => ({
  ...initialState,
  setMatchingCards: cards => set({matchingCards: cards}),

});

// persist the created state
UsbPayStore = persist(UsbPayStore, {
  name: "ft-b2b-usb-pay",
  storage: createJSONStorage(() => sessionStorage),
});

// create the store
const useUsbPayStore = create(devtools(UsbPayStore));

export default useUsbPayStore;
