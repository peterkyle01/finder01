import { Button } from "@nextui-org/button";
import AddLost from "./AddLost";
import EditLost from "./edit_lost/page";
import LostTable from "./LostTable";
import { Link } from "@nextui-org/link";

async function getLostIDs() {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/lost`, {
		next: { revalidate: 0 },
	});

	if (!res.ok) {
		throw new Error("Failed to fetch lost IDs!");
	}

	return res.json();
}

export default async function LostPage() {
	const lostIDs = await getLostIDs();
	return (
		<div className="w-full h-full overflow-hidden overflow-y-scroll">
			<div className="w-full h-20 flex justify-start items-center gap-2">
				<AddLost />
				<Button as={Link} href="/lost/edit_lost">Edit Lost ID</Button>
			</div>
			<div className="w-full h-full">
				<LostTable lostIDs={lostIDs} />
			</div>
		</div>
	);
}
