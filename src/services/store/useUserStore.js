import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

let userStore = (set) => ({
  isFirstTime: true,
  setIsFirstTime: (val) => set({ isFirstTime: val }),

  isFirstTimeLoggedIn: true,
  setIsFirstTimeLoggedIn: (val) => set({ isFirstTimeLoggedIn: val }),

  isLoadingLayover: false,
  setIsLoadingLayover: (val) => set({ isLoadingLayover: val }),

  isSideBarOpen: true,
  setIsSideBarOpen: (val) => set({ isSideBarOpen: val }),

  userInfo: {
    companyName: "",
    code: "",
  },
  setUserInfo: (val) => set({ userInfo: val }),

  currentUserInfo: {},
  setCurrentUserInfo: (val) => set({ currentUserInfo: val }),

  userId: null,
  setUserId: (val) => set({ userId: val }),

  bookingData: {},
  setBookingData: (val) => set({ bookingData: val }),

  ticketData: {},
  setTicketData: (val) => set({ ticketData: val }),

  utId: {},
  setUtId: (val) => set({ utId: val }),

  agentData: {},
  setAgentData: (val) => set({ agentData: val }),

  isMailSentFromIssueTicket: false,
  setIsMailSentFromIssueTicket: (val) =>
    set({ isMailSentFromIssueTicket: val }),

  isMailSentFromIssueBooking: false,
  setIsMailSentFromIssueBooking: (val) =>
    set({ isMailSentFromIssueBooking: val }),

  partialPayment: false,
  setPartialPayment: (val) => set({ partialPayment: val }),

  twoFA: false,
  setTwoFA: (val) => set({ twoFA: val }),
});

userStore = persist(userStore, {
  name: "ft-b2b-user",
  storage: createJSONStorage(() => sessionStorage),
});

const useUserStore = create(userStore);

export default useUserStore;
