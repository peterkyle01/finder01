import { create } from "zustand";
import { useSearchType } from "@/types/index";

export const useSearchValue = create<useSearchType>((set) => ({
	value: "",
	setValue: (newValue: string) => set({ value: newValue }),
}));
