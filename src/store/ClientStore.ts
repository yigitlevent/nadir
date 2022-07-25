import produce from "immer";
import create from "zustand";

export const ClientStore = create<nadir.stores.ClientStore>(set => ({
	activeMenu: "",

	setActiveMenu: (menuName) => set(produce((state: nadir.stores.ClientStore) => {
		state.activeMenu = menuName;
	})),
}));
