import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

let proposalStore = (set) => ({
  proposalFlightList: [],
  setProposalFlightList: (val) => set({ proposalFlightList: val }),

  setProposalFlightListUpdate: (val, id) =>
    set((state) => {
      let copyArray = [...state.proposalFlightList];
      copyArray = copyArray.filter((item) => item.id !== id);
      return { proposalFlightList: [...copyArray, val] };
    }),

  setProposalFlightListRemove: (id) =>
    set((state) => {
      let copyArray = [...state.proposalFlightList];
      copyArray = copyArray.filter((item) => item.id !== id);
      return { proposalFlightList: copyArray };
    }),
});

// persist the created state
proposalStore = persist(proposalStore, {
  name: "ft-b2b-proposal",
  storage: createJSONStorage(() => sessionStorage),
});

// create the store
const useProposalStore = create(proposalStore);

export default useProposalStore;
