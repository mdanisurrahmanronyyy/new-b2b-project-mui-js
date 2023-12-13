import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

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

  // balance: 0,
  // setBalance: (val) => set({ balance: val }),

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

//Partial Payment
  partialPayment: false,
  setPartialPayment: (val) => set({ partialPayment: val }),

// 2FA
  twoFA: false,
  setTwoFA: (val) => set({ twoFA: val }),


});

// persist the created state
userStore = persist(userStore, {
  name: "ft-b2b-user",
  storage: createJSONStorage(() => sessionStorage),
});

// create the store
const useUserStore = create(userStore);

export default useUserStore;
