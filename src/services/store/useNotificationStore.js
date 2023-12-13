import { create } from "zustand";
import { devtools } from "zustand/middleware";

// const initialState = {
//   count:0,
// };

// const notificationStore = (set) => ({
//   setCount: (val) => set({ count: val}),
// });

const notificationStore = (set) => ({
  count:0,
  setCount: (val) => set({ count: val}),
});



// create the store
const useNotificationStore = create(devtools(notificationStore));

export default useNotificationStore;