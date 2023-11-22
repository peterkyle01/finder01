import { foundIDType, lostIDType } from "@/types";
import LostAndFoundTable from "./LostAndFoundTable";

async function getLostIDs() {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/lost`, {
		next: { revalidate: 0 },
	});

	if (!res.ok) {
		throw new Error("Failed to fetch lost IDs!");
	}

	return res.json();
}

async function getFoundIDs() {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/found`, {
		next: { revalidate: 0 },
	});

	if (!res.ok) {
		throw new Error("Failed to fetch found IDs!");
	}

	return res.json();
}

async function getLostAndFoundIDs() {
	const lostIDs: lostIDType[] = await getLostIDs();
	const foundIDs: foundIDType[] = await getFoundIDs();

	const _lostAndFoundIDs = lostIDs.filter((lostID) => {
		return foundIDs.some((foundID) => {
			return lostID.student_adm === foundID.student_adm;
		});
	});

	return _lostAndFoundIDs;
}

export default async function LostAndFound() {
	const lostAndFoundIDs = await getLostAndFoundIDs();
	return (
		<div className="w-full h-[100dvh]">
			<LostAndFoundTable lostIDs={lostAndFoundIDs} />
		</div>
	);
}
