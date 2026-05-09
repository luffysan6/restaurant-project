import { create } from "zustand";
import { axiosInstance } from "../utils/axios";

const foodStore = create((set, get) => ({
  foodItems: [],
  cartItems: [],

  getFoodList: async () => {
    const res = await axiosInstance.get("/food");
    set({ foodItems: res.data.data });
  },
  addToCart: async (item) => {
    console.log(item);
    const CurrentValue = get().cartItems; //current Data in Cart

    const existing = CurrentValue.find((items) => items._id == item._id);

    if (existing) {
      set({
        cartItems: CurrentValue.map((a) =>
          a._id == item._id ? { ...a, quantity: a.quantity + 1 } : a,
        ),
      });
      console.log(get().cartItems);

      return;
    }

    set({ cartItems: [...get().cartItems, item] });
    console.log(get().cartItems);
  },
  onDecrease: (item_id) => {
    console.log(item_id);
    const CurrentValue = get().cartItems; //current Data in Cart

    const existing = CurrentValue.find((items) => items._id == item_id);

    if (existing) {
      if (existing.quantity > 1) {
        set({
          cartItems: CurrentValue.map((a) =>
            a._id == item_id ? { ...a, quantity: a.quantity - 1 } : a,
          ),
        });
        console.log(get().cartItems);

        return;
      } else {
        set({
          cartItems: CurrentValue.map((a) => a._id != item_id),
        });
        console.log(get().cartItems);
      }
    }

    // set({ cartItems: [...get().cartItems, item] });
    // console.log(get().cartItems);
  },
  onIncrease: (item_id) => {
    console.log(item_id);
    const CurrentValue = get().cartItems; //current Data in Cart

    const existing = CurrentValue.find((items) => items._id == item_id);
    console.log(existing);
    if (existing) {
      if (existing.quantity > 1) {
        set({
          cartItems: CurrentValue.map((a) =>
            a._id == item_id ? { ...a, quantity: a.quantity + 1 } : a,
          ),
        });
        console.log(get().cartItems);

        return;
      }
    }

    // set({ cartItems: [...get().cartItems, item] });
    // console.log(get().cartItems);
  },
}));

export default foodStore;
