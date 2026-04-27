import { create } from "zustand";

const authStore = create((set, get) => ({
  count: 0,
  setcount: () => set((state) => ({ count: state.count + 1 })),
  getcount: () => {
    let { count } = get();
    console.log(count);
  },
}));

export default authStore;
