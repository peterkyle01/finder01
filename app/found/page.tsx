import { Button } from "@nextui-org/button";
import AddLost from "./AddFound";
import EditFound from "./edit_found/page";
import FoundTable from "./FoundTable";
import { Link } from "@nextui-org/link";
import { currentUser } from "@clerk/nextjs";
import { siteConfig } from "@/config/site";

export default async function FoundPage() {
	const user = await currentUser();

	return (
		<div className="w-full h-full overflow-hidden overflow-y-scroll">
			<div className="w-full h-20 flex justify-start items-center gap-2">
				<AddLost />
				{user?.emailAddresses[0].emailAddress === siteConfig.adminEmail && (
					<Button
						as={Link}
						href="/found/edit_found">
						Edit Found ID
					</Button>
				)}
			</div>
			<div className="w-full h-full">
				<FoundTable />
			</div>
		</div>
	);
}
