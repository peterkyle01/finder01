"use client";
import { foundIDType } from "@/types";
import { Button } from "@nextui-org/button";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import {
	X,
	Pen,
	User,
	ArrowDown01,
	Timer,
	MapPin,
	Calendar,
	Phone,
} from "lucide-react";
import { toast } from "sonner";
import EditFound from "./EditFound";

export default function EditFoundPage() {
	const queryClient = useQueryClient();

	const { data: foundIDs } = useQuery({
		queryKey: ["getEditFoundID"],
		queryFn: async (): Promise<foundIDType[]> => {
			const { data } = await axios.get(
				`${process.env.NEXT_PUBLIC_API_URL}/found`
			);

			return data;
		},
	});

	const { mutate } = useMutation({
		mutationKey: ["deleteFoundID"],
		mutationFn: async (id: number) => {
			await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/found?id=${id}`);
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["getEditFoundID"] });
			toast.success("Deleted successfully!");
		},
		onError: () => {
			toast.error("An error occures while deleting!");
		},
	});

	return (
		<div className="w-full h-full grid grid-cols-2 gap-2 sm:grid-cols-8">
			{foundIDs &&
				foundIDs.map((foundID) => (
					<div
						className="bg-primary w-full h-44 rounded-md p-2 font-serif font-bold"
						key={foundID.id}>
						<h1 className="flex justify-start items-center gap-2">
							<User
								color="white"
								size={15}
							/>
							<p className="">{foundID.student_name}</p>
						</h1>
						<h2 className="flex justify-start items-center gap-2">
							<ArrowDown01
								color="white"
								size={15}
							/>
							{foundID.student_adm}
						</h2>
						<p className="flex justify-start items-center gap-2">
							<Timer
								color="white"
								size={15}
							/>
							{foundID.time_found}
						</p>
						<p className="flex justify-start items-center gap-2">
							<MapPin
								color="white"
								size={15}
							/>
							{foundID.location_found}
						</p>
						<p className="flex justify-start items-center gap-2">
							<Calendar
								color="white"
								size={15}
							/>
							{foundID.date_found}
						</p>
						<p className="flex justify-start items-center gap-2">
							<Phone
								color="white"
								size={15}
							/>
							{foundID.phone_number}
						</p>
						<div className="flex gap-2">
							<EditFound id={foundID.id!} />
							<Button
								size="sm"
								color="danger"
								onClick={() => mutate(foundID.id!)}>
								<X size={15} />
							</Button>
						</div>
					</div>
				))}
		</div>
	);
}
