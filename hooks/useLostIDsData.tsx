import { create } from "zustand";
import { lostIDType, useLostIDDataType } from "@/types/index";

export const useLostIDsData = create<useLostIDDataType>((set) => ({
	stateLostIDs: [],
	filteredLostIDs: [],
	setStateLostIDs: (newStateLostIDs: lostIDType[]) =>
		set({ stateLostIDs: newStateLostIDs }),
	setFilteredLostIDs: (newFilteredLostIDs: lostIDType[]) =>
		set({ filteredLostIDs: newFilteredLostIDs }),
}));
