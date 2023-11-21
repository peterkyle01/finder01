import { create } from "zustand";
import { foundIDType, useFoundIDDataType } from "@/types/index";

export const useFoundIDsData = create<useFoundIDDataType>((set) => ({
	stateFoundIDs: [],
	filteredFoundIDs: [],
	setStateFoundIDs: (newStateFoundIDs: foundIDType[]) =>
		set({ stateFoundIDs: newStateFoundIDs }),
	setFilteredFoundIDs: (newFilteredFoundIDs: foundIDType[]) =>
		set({ filteredFoundIDs: newFilteredFoundIDs }),
}));
