import { create } from "zustand";

const store = create((set) => ({
  search: "",
  slug: null,
  genre: null,
  setGenre: (input) => set((store) => ({ ...store, genre: input, search: "" })),
  setSlug: (input) =>
    set((store) => ({ ...store, genre: "", search: "", slug: input })),
  setSearch: (input) =>
    set((store) => ({
      ...store,
      search: input,
      genre: null,
    })),
}));

export default store;
