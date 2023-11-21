import {
	Fira_Code as FontMono,
	Inter as FontSans,
	Agbalumo,
	Permanent_Marker,
	Luckiest_Guy,
	Homemade_Apple,
} from "next/font/google";

export const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-sans",
});

export const fontMono = FontMono({
	subsets: ["latin"],
	variable: "--font-mono",
});

export const agbalumo = Agbalumo({
	subsets: ["latin"],
	weight: ["400"],
	variable: "--font-agbalumo",
});

export const permanent_marker = Permanent_Marker({
	subsets: ["latin"],
	weight: ["400"],
	variable: "--font-permanent-marker",
});
