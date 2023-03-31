import { create } from "zustand";

type IFields = {
  value: number;
};

type State = {
  fields: IFields[];
};

type Action = {
  setFields: () => void;
  setRemove: () => void;
  changeField: (newValue: string | undefined, index: number) => void;
  acomulate: () => number;
};

export const useFields = create<State & Action>((set, get) => ({
  fields: [
    {
      value: 0,
    },
  ],
  setFields: () =>
    set((state) => ({
      fields: [...state.fields, { value: 0 }],
    })),
  setRemove: () =>
    set((state) => {
      let fields = [...state.fields]

      fields.pop()

      return {fields}
    }),
  changeField: (newValue, i) =>
    set((state) => {
      let fields = [...state.fields];

      fields[i].value = newValue ? parseInt(newValue) : 0;

      return { fields };
    }),
  acomulate: () => {
    return get().fields.reduce((acc, f) => acc + f.value, 0);
  },
}));
