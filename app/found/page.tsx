import { Button } from "@nextui-org/button";
import AddLost from "./AddFound";
import EditFound from "./edit_found/page";
import FoundTable from "./FoundTable";
import { Link } from "@nextui-org/link";

async function getFoundIDs() {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/found`, {
		next: { revalidate: 0 },
	});

	if (!res.ok) {
		throw new Error("Failed to fetch found IDs!");
	}

	return res.json();
}

export default async function FoundPage() {
	const foundIDs = await getFoundIDs();
	return (
		<div className="w-full h-full overflow-hidden overflow-y-scroll">
			<div className="w-full h-20 flex justify-start items-center gap-2">
				<AddLost />
				<Button as={Link} href="/found/edit_found">Edit Found ID</Button>
			</div>
			<div className="w-full h-full">
				<FoundTable foundIDs={foundIDs} />
			</div>
		</div>
	);
}
