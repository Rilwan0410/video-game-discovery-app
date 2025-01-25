import { create } from "zustand";

const store = create((set) => ({
  search: "",
  setSearch: (input) =>
    set(() => ({
      search: input,
    })),
}));

export default store;
