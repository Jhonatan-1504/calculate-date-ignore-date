import { create } from "zustand";

export type IHolidays = {
  name: string;
  date: string;
  type: string;
};

type State = {
  holidays: IHolidays[];
  search: string;
};

type Actions = {
  filters: () => IHolidays[];
  setSearch: (val: string) => void;
};

export const useIgnoreList = create<State & Actions>((set, get) => ({
  holidays: [
    {
      date: "2023-01-01",
      name: "Año Nuevo",
      type: "Feriado nacional",
    },
    {
      date: "2023-04-06",
      name: "Jueves Santo",
      type: "Feriado religioso",
    },
    {
      date: "2023-04-07",
      name: "Viernes Santo",
      type: "Feriado religioso",
    },
    {
      date: "2023-05-01",
      name: "Día del Trabajo",
      type: "Feriado nacional",
    },
    {
      date: "2023-06-29",
      name: "Día de San Pedro y San Pablo",
      type: "Feriado nacional",
    },
    {
      date: "2023-07-28",
      name: "Fiestas Patrias",
      type: "Feriado nacional",
    },
    {
      date: "2023-07-29",
      name: "Fiestas Patrias",
      type: "Feriado nacional",
    },
    {
      date: "2023-08-30",
      name: "Santa Rosa de Lima",
      type: "Feriado religioso",
    },
    {
      date: "2023-10-08",
      name: "Combate de Angamos",
      type: "Feriado nacional",
    },
    {
      date: "2023-11-01",
      name: "Día de Todos los Santos",
      type: "Feriado religioso",
    },
    {
      date: "2023-12-08",
      name: "Día de la Inmaculada Concepción",
      type: "Feriado religioso",
    },
    {
      date: "2023-12-24",
      name: "Nochebuena",
      type: "Feriado religioso",
    },
    {
      date: "2023-12-25",
      name: "Navidad",
      type: "Feriado religioso",
    },
    {
      date: "2023-12-31",
      name: "Nochevieja",
      type: "Feriado nacional",
    },
  ],
  search: "",
  filters: () => {
    let text = get().search;

    let list = text
      ? get().holidays.filter((i) => i.name.toLowerCase().indexOf(text) > -1)
      : get().holidays;

    return list;
  },
  setSearch: (search) => set((state) => ({ search })),
}));
