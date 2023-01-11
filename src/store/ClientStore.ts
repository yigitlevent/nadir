import produce from "immer";
import create from "zustand";

export const ClientStore = create<nadir.data.ClientStore>(set => ({
	name: "",
	age: 0,

	race: undefined,
	culture: undefined,
	religion: undefined,

	setName: (name) => set(produce((state: nadir.data.ClientStore) => {
		state.name = name;
	})),
	setAge: (age) => set(produce((state: nadir.data.ClientStore) => {
		state.age = age;
	})),

	setRace: (race) => set(produce((state: nadir.data.ClientStore) => {
		state.race = race;
	})),
	setCulture: (culture) => set(produce((state: nadir.data.ClientStore) => {
		state.culture = culture;
	})),
	setReligion: (religion) => set(produce((state: nadir.data.ClientStore) => {
		state.religion = religion;
	})),
}));
