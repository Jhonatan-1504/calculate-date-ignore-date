import { create } from "zustand";

type State = {
  isOpen: boolean;
  list:any[];
};

type Actions = {
  setOpen: () => void;
  setClose: () => void;
};

export const useIgnorePanel = create<State & Actions>((set) => ({
  isOpen: false,
  list:[],
  setOpen: () => set((_) => ({ isOpen: true })),
  setClose: () => set((_) => ({ isOpen: false })),
}));
