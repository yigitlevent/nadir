import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';


export const useStore = create<MainStore>()(
	devtools(
		persist((set) => ({
			bears: 0,
			increase: (by) => set((state) => ({ bears: state.bears + by })),
		}))
	)
);