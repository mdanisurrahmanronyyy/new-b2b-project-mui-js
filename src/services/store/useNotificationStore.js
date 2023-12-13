import { create } from "zustand";
import { devtools } from "zustand/middleware";

const notificationStore = (set) => ({
  count:0,
  setCount: (val) => set({ count: val}),
});

const useNotificationStore = create(devtools(notificationStore));

export default useNotificationStore;