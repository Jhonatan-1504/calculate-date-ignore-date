import { create } from "zustand";
import { useIgnoreList } from "../ignore/list";
import { useFields } from "./fields";
import { addBusinessDays } from "@/helper/addBusinessDays";

type State = {
  date: string | Date;
  result: string;
};

type Action = {
  setDate: (date: string | Date) => void;
  handleSubmit: () => void;
};

export const useRegister = create<State & Action>((set,get) => ({
  date: "",
  result: "",
  setDate: (date) => set(() => ({ date })),
  handleSubmit: () => {
    let { holidays } = useIgnoreList.getState();
    let { acomulate } = useFields.getState();

    let result = addBusinessDays(get().date, acomulate() - 1, holidays).format(
      "DD/MM/YYYY"
    );

    set(() => ({ result }));
  },
}));
