import {create} from "zustand";
import {createJSONStorage, devtools, persist} from "zustand/middleware";

let passengerStore = (set) => ({
  passengerInfoes: [],
  setPassengerInfoes: (val) => set({passengerInfoes: val}),

  setPassegerDefault: (val, index) =>
    set((state) => {
      let copyArray = [...state.passengerInfoes];
      copyArray[index] = val;
      return {passengerInfoes: copyArray};
    }),

  setSinglePassengerInfo: (value, index) =>
    set((state) => {
      let copyArray = [...state.passengerInfoes];
      copyArray[index] = value;
      console.log(copyArray,"_____________")
      return {passengerInfoes: copyArray};
    }),

  setNameElement: (key, value, index) =>
    set((state) => {
      let copyArray = [...state.passengerInfoes];
      copyArray[index] = {
        ...copyArray[index],
        nameElement: {
          ...copyArray[index]?.nameElement,
          [key]: value,
        },
      };
      return {passengerInfoes: copyArray};
    }),

  setACMExtraServices: (value, pIndex, dIndex) =>
    set((state) => {
      let copyArray = [...state.passengerInfoes];
      // console.log(value, "value+++++++++++++++++")
      // console.log(dIndex, "pIndex+++++++++++++++++")
      // console.log(copyArray[pIndex], "copyArray+++++++++++++++++")
      if (value.length === 0) {
        copyArray[pIndex] = {
          ...copyArray[pIndex],
          aCMExtraServices: [
            ...copyArray[pIndex]?.aCMExtraServices ?? [], value
          ]
        };
        return {passengerInfoes: copyArray};
      } else if (value === "select") {
        copyArray[pIndex].aCMExtraServices[dIndex] = []
        return {passengerInfoes: copyArray};
      } else if (value.length > 0) {
        copyArray[pIndex].aCMExtraServices[dIndex] = value
        return {passengerInfoes: copyArray};
      }
    }),

  setDocumentCopy: (key, value, index) =>
    set((state) => {
      let copyArray = [...state.passengerInfoes];
      copyArray[index] = {
        ...copyArray[index],
        [key]: value,
      };
      return {passengerInfoes: copyArray};
    }),

  setPassengerInfoesObj: (key, value, index) =>
    set((state) => {
      let copyArray = [...state.passengerInfoes];
      copyArray[index] = {
        ...copyArray[index],
        [key]: value,
      };
      return {passengerInfoes: copyArray};
    }),

  setDocumentInfo: (key, value, index) =>
    set((state) => {
      let copyArray = [...state.passengerInfoes];
      copyArray[index] = {
        ...copyArray[index],
        documentInfo: {
          ...copyArray[index]?.documentInfo,
          [key]: value,
        },
      };
      return {passengerInfoes: copyArray};
    }),

  setContactInfo: (key, value, index) =>
    set((state) => {
      let copyArray = [...state.passengerInfoes];
      copyArray[index] = {
        ...copyArray[index],
        contactInfo: {
          ...copyArray[index]?.contactInfo,
          [key]: value,
        },
      };
      return {passengerInfoes: copyArray};
    }),

  setIsQuickPassenger: (key, value, index) =>
    set((state) => {
      let copyArray = [...state.passengerInfoes];
      copyArray[index] = {
        ...copyArray[index],
        [key]: value,
      };
      return {passengerInfoes: copyArray};
    }),

  passengerDetailsCheck: false,
  setPassengerDetailsCheck: (val) => set({passengerDetailsCheck: val}),

  passengerDetailsVaild: [],
  setPassengerDetailsVaild: (val) => set({passengerDetailsVaild: val}),

  passengerConfirmationGlobal: {},
  setPassengerConfirmationGlobal: (val) =>
    set({passengerConfirmationGlobal: val}),
});

// persist the created state
//passengerStore = persist(passengerStore, { name: "b2b-passenger-details" });

// persist the created state
passengerStore = persist(passengerStore, {
  name: "ft-b2b-passengerStore",
  storage: createJSONStorage(() => localStorage),
});

// create the store
const usePassengerStore = create(devtools(passengerStore));

export default usePassengerStore;
