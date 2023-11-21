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