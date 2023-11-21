import {SVGProps} from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type lostIDType = {
	id?: number;
	student_name: string;
	student_adm: number;
	time_lost: string;
	location_lost: string;
	date_lost: string;
};

export type foundIDType = {
	id?: number;
	student_name: string;
	student_adm: number;
	time_found: string;
	location_found: string;
	date_found: string;
};


export type useSearchType = {
	value: string;
	setValue: (newValue: string) => void;
};

export type useLostIDDataType = {
	stateLostIDs: lostIDType[];
	filteredLostIDs: lostIDType[];
	setStateLostIDs: (newStateLostIDs: lostIDType[]) => void;
	setFilteredLostIDs: (newFilteredLostIDs: lostIDType[]) => void;
};

export type useFoundIDDataType = {
	stateFoundIDs: foundIDType[];
	filteredFoundIDs: foundIDType[];
	setStateFoundIDs: (newStateFoundIDs: foundIDType[]) => void;
	setFilteredFoundIDs: (newFilteredFoundIDs: foundIDType[]) => void;
};