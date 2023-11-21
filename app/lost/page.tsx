import { Button } from "@nextui-org/button";
import AddLost from "./AddLost";
import EditLost from "./edit_lost/page";
import LostTable from "./LostTable";
import { Link } from "@nextui-org/link";
import { currentUser } from "@clerk/nextjs";
import { siteConfig } from "@/config/site";

export default async function LostPage() {
	const user = await currentUser();

	return (
		<div className="w-full h-full overflow-hidden overflow-y-scroll">
			<div className="w-full h-20 flex justify-start items-center gap-2">
				<AddLost />
				{user?.emailAddresses[0].emailAddress === siteConfig.adminEmail && (
					<Button
						as={Link}
						href="/lost/edit_lost">
						Edit Lost ID
					</Button>
				)}
				
			</div>
			<div className="w-full h-full">
				<LostTable />
			</div>
		</div>
	);
}
